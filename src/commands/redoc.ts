import * as path from 'path'
import { flags } from '@oclif/command'
import BaseCommand from '../command-utils/base'

export default class ReDoc extends BaseCommand {
  static description = 'Launch ReDoc server'

  static examples = [
    '$ cross-kube redoc',
    '$ cross-kube redoc swagger.yaml',
    '$ cross-kube redoc --image my-image --proxy http://proxy.example.com:8080'
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    port: flags.integer({
      char: 'p',
      description: 'TCP port',
      default: 9000
    }),
    image: flags.string({
      char: 'i',
      description: 'Docker image name',
      default: 'redocly/redoc:v2.0.0-rc.8-1'
    }),
    proxy: flags.string({
      char: 'P',
      description: 'HTTP proxy server (e.g. http://proxy.example.com:8080)'
    })
  }

  static args = [{ name: 'yaml', description: 'Swagger YAML file', default: './swagger.yaml' }]

  async run() {
    const {
      args: { yaml },
      flags: { image, port, proxy }
    } = this.parse(ReDoc)

    this.debug('port: %d', port)
    this.debug('image: %s', image)
    this.debug('proxy: %s', proxy)
    this.debug('swagger yaml: %s', yaml)

    this.log(`URL: http://localhost:${port}`)

    await this.exec('sed', [
      's|k8s-swagger.json|https://raw.githubusercontent.com/kubernetes/kubernetes/release-1.14/api/openapi-spec/swagger.json|; w swagger-redoc.yaml',
      'swagger.yaml'
    ])

    await this.dockerRun(image, proxy, [
      '-e',
      'PORT=8080',
      '-e',
      'SPEC_URL=swagger.yaml',
      '-p',
      `${port}:8080`,
      '-v',
      `${path.resolve('swagger-redoc.yaml')}:/usr/share/nginx/html/swagger.yaml`
    ])
  }
}
