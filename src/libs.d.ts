declare module 'fetch-readablestream' {
  export default function fetchStream(input: RequestInfo, init?: RequestInit): Promise<Response>
}

declare class StringDecoder {
  constructor(encoding: string)
  write(chunk: Uint8Array): string
}
