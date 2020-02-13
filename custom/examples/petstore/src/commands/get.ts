import { Command, flags } from '@oclif/command'
import { listNamespacedPet, listPetsForAllNamespaces } from '../apis/PetstoreV1beta1Api'

export default class Get extends Command {
  static description = 'Get Pets'

  static examples = [
    '$ petstore get',
    '$ petstore get --base http://proxy.example.com:8080',
    '$ petstore get --namespace default'
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
      description: 'Namespace (e.g. default)'
    })
  }

  async run() {
    const {
      flags: { base, namespace }
    } = this.parse(Get)

    try {
      const pets = await (namespace
        ? listNamespacedPet({ namespace }, { basePath: base })
        : listPetsForAllNamespaces({}, { basePath: base }))
      console.dir(pets, { depth: null })
    } catch (err) {
      this.debug(err)
      this.error(err.statusText || err)
    }
  }
}
