/**
 * Returns a logger function creator.
 *
 * This function is required because debug package is useful for debug logging but it should not
 * be forced to install.
 *
 * @param logger - Logger name
 * @param useConsole - Whether to use `console.debug()` if debug is not available
 * @returns Logger function creator
 *
 * @example
 * ```ts
 * import logging from './logging'
 * const info = logging('my-app:info')
 * info('some message: %o', obj)
 * ```
 */
function logging(
  logger: string,
  useConsole: boolean = false
): (message?: any, ...optionalParams: any[]) => void {
  try {
    return require('debug')(logger)
  } catch (_) {
    return useConsole ? console.debug : () => undefined
  }
}

export default logging
