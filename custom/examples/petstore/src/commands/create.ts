import fs from 'fs'
import { Command, flags } from '@oclif/command'
import yaml from 'yaml'
import { createNamespacedPet } from '../apis/PetstoreV1beta1Api'

export default class Create extends Command {
  static description = 'Create a Pet'

  static examples = [
    '$ petstore create pet.yaml',
    '$ petstore create --namespace default pet.yaml',
    '$ petstore create --base http://proxy.example.com:8080 pet.yaml'
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    base: flags.string({
      char: 'b',
      description: 'API base URL',
      default: 'http://localhost:4000'
    }),
    namespace: flags.string({
      char: 'n',
      description: 'Namespace',
      default: 'default'
    })
  }

  static args = [{ name: 'file', description: 'YAML file', required: true }]

  async run() {
    const {
      args: { file },
      flags: { base, namespace }
    } = this.parse(Create)

    const body = yaml.parse(fs.readFileSync(file).toString())

    try {
      const pet = await createNamespacedPet({ namespace, body }, { basePath: base })
      console.dir(pet, { depth: null })
    } catch (err) {
      this.debug(err)
      this.error(err.statusText || err)
    }
  }
}
