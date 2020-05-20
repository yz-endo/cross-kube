import fs from 'fs'
import fetch from 'node-fetch'
import ProxyAgent from 'https-proxy-agent'
import { spawn, SpawnOptions } from 'child_process'
import * as path from 'path'
import { Command } from '@oclif/command'

export default abstract class BaseCommand extends Command {
  protected async dockerBuild(
    image: string,
    dockerDir: string,
    proxy?: string,
    options?: string[]
  ): Promise<void> {
    const proxyOpts = proxy
      ? [
          '--build-arg',
          `HTTP_PROXY=${proxy}`,
          '--build-arg',
          `HTTPS_PROXY=${proxy}`,
          '--build-arg',
          `http_proxy=${proxy}`,
          '--build-arg',
          `https_proxy=${proxy}`
        ]
      : []

    await this.exec('docker', ['build', '.', '-t', image, ...proxyOpts, ...(options || [])], {
      cwd: path.resolve(dockerDir)
    })
  }

  protected async dockerRun(
    image: string,
    proxy?: string,
    options?: string[],
    ...argv: string[]
  ): Promise<void> {
    const proxyOpts = proxy
      ? [
          '-e',
          `HTTP_PROXY=${proxy}`,
          '-e',
          `HTTPS_PROXY=${proxy}`,
          '-e',
          `http_proxy=${proxy}`,
          '-e',
          `https_proxy=${proxy}`
        ]
      : []

    await this.exec('docker', ['run', ...proxyOpts, ...(options || []), image, ...argv])
  }

  protected exec(command: string, args: string[], options: SpawnOptions = {}): Promise<void> {
    this.debug('exec: %s %o %o', command, args, options)
    return new Promise((resolve, reject) => {
      const proc = spawn(command, args, options)

      proc.stdout!.on('data', (data) => {
        process.stdout.write(data.toString())
      })
      proc.stderr!.on('data', (data) => {
        process.stderr.write(data.toString())
      })
      proc.on('close', (code) => {
        if (code === 0) {
          resolve()
        } else {
          reject() // error message has already been redirected to `process.stderr`
        }
      })
    })
  }

  protected async downloadK8sSwaggerFile(
    branch: string,
    outputPath: string,
    proxy?: string
  ): Promise<void> {
    const k8sSwaggerUrl = `https://raw.githubusercontent.com/kubernetes/kubernetes/${branch}/api/openapi-spec/swagger.json`
    this.log('Downloading k8s swagger.json: %s', k8sSwaggerUrl)
    const res = await fetch(k8sSwaggerUrl, { agent: proxy ? ProxyAgent(proxy) : undefined })
    await new Promise((resolve, reject) => {
      const stream = fs.createWriteStream(outputPath)
      res.body.pipe(stream)
      res.body.on('error', (err: any) => {
        reject(err)
      })
      stream.on('finish', () => resolve())
    })
  }
}
