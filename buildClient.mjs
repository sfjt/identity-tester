import * as esbuild from "esbuild"

const filenames = ["auth0spajs", "auth0js", "lockPrep"]

const buildTasks = filenames.map((name) => {
  return esbuild.build({
    entryPoints: [`./src/client/${name}.ts`],
    bundle: true,
    outfile: `./builds/client/${name}.bundle.js`,
    sourcemap: "linked",
    logLevel: "info",
  })
})

Promise.all(buildTasks).catch((reason) => {
  console.error("[esbuild] ERROR", reason)
})
