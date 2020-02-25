import { Command, flags } from '@oclif/command'
import { deleteNamespacedPet } from '../apis/PetstoreV1beta1Api'

export default class Delete extends Command {
  static description = 'Delete a Pet'

  static examples = [
    '$ petstore delete doggie',
    '$ petstore delete --namespace default doggie',
    '$ petstore delete --base http://proxy.example.com:8080 doggie'
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

  static args = [{ name: 'name', description: 'Name of the pet', required: true }]

  async run() {
    const {
      args: { name },
      flags: { base, namespace }
    } = this.parse(Delete)

    try {
      const pet = await deleteNamespacedPet({ namespace, name }, { basePath: base })
      console.dir(pet, { depth: null })
    } catch (err) {
      this.debug(err)
      this.error(err.statusText || err)
    }
  }
}
