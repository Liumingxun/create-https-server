import { createServer } from "https"
import type { ServerOptions } from  "https"
import {readFileSync} from "fs"
import os from "os"
import {resolve} from 'path'

const tlsOption: ServerOptions = {
  key: readFileSync(resolve(os.homedir(), './luoming.space.key')),
  cert: readFileSync(resolve(os.homedir(), './luoming.space_bundle.pem'))
}

createServer(tlsOption, (req, res) => {
  res.end('hello')
}).listen(54440, 'luoming.space')
