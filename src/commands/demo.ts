import { GluegunCommand } from 'gluegun'
import Logger from '../lib/logger'

const command: GluegunCommand = {
  name: 'demo',
  run: async toolbox => {
    const { print } = toolbox

    Logger.info('Hello, world!')
    print.info('Welcome to your CLI')
  }
}

module.exports = command
