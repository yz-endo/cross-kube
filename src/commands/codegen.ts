import * as path from 'path'
import rimraf from 'rimraf'
import { flags } from '@oclif/command'
import mkdirp from 'mkdirp'
import BaseCommand from '../command-utils/base'

export default class Codegen extends BaseCommand {
  static description = 'Generate TypeScript code from Swagger API definitions'

  static examples = [
    '$ cross-kube codegen',
    '$ cross-kube codegen swagger.yaml src',
    '$ cross-kube codegen --image my-image --proxy http://proxy.example.com:8080'
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    image: flags.string({
      char: 'i',
      description: 'Docker image name',
      default: 'cross-kube-codegen'
    }),
    proxy: flags.string({
      char: 'P',
      description: 'HTTP proxy server (available format: `<protocol>://<host>:<port>`)'
    }),
    branch: flags.string({
      char: 'b',
      description: 'Kubernets Git branch to get swagger.json',
      default: 'release-1.14'
    })
  }

  static args = [
    { name: 'yaml', description: 'Swagger YAML file', default: './swagger.yaml' },
    { name: 'dest', description: 'Destination directory', default: './src' }
  ]

  async run() {
    const {
      args: { yaml, dest },
      flags: { image, proxy, branch }
    } = this.parse(Codegen)

    this.debug('image: %s', image)
    this.debug('proxy: %s', proxy)
    this.debug('swagger yaml: %s', yaml)
    this.debug('dest: %s', path.resolve(dest))

    await this.downloadK8sSwaggerFile(branch, './k8s-swagger.json', proxy)

    const dockerDir = path.resolve(__dirname, '..', '..', 'custom', 'docker', 'codegen')
    const swaggerDir = path.dirname(yaml)
    const swaggerFile = path.basename(yaml)
    this.debug('docker dir: %s', dockerDir)
    this.debug('swagger dir: %s', path.resolve(swaggerDir))
    this.debug('swagger fle: %s', swaggerFile)

    mkdirp.sync(path.resolve(dest))
    rimraf.sync(path.resolve(dest, 'models'))
    rimraf.sync(path.resolve(dest, 'apis'))

    this.log(`Creating Docker image: ${image}`)
    await this.dockerBuild(image, dockerDir, proxy)

    this.log('Running code generator')
    await this.dockerRun(
      image,
      proxy,
      [
        '-u',
        process.getuid().toString(),
        '-v',
        `${path.resolve(swaggerDir)}:/src:ro`,
        '-v',
        `${path.resolve(dest)}:/dest`
      ],
      `/src/${swaggerFile}`,
      '/dest'
    )
  }
}
