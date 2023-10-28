import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: [`./src/server/server.ts`],
  bundle: true,
  outfile: `./builds/server/server.bundle.js`,
  logLevel: "info",
  platform: "node",
})
