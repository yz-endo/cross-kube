// eslint-disable-next-line
const micromatch = require('micromatch')

module.exports = {
  'src/**/*.ts': (files) => {
    const match = micromatch.not(files, ['**/*.config.ts'])
    return match.map(file => `prettier --write ${file} && tslint ${file} && git add --patch ${file}`)
  }
}
