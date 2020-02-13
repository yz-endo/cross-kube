declare class StringDecoder {
  constructor(encoding: string)
  write(chunk: Uint8Array): string
}
