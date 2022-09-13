/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('node:fs/promises')

const createFnTemplate = fnName => {
  return `export const ${fnName} = () => {}`
}

const createBarrelTemplate = fnName => {
  return `export * from './${fnName}'`
}

const createTestTemplate = fnName => {
  return `import { ${fnName} } from './${fnName}'

describe(${fnName}, () => {})`
}

;(async () => {
  console.log('create-function')

  const SRC_DIR = path.resolve(__dirname, '../', 'src')

  const [, , moduleName, fnName] = process.argv

  if (!moduleName) {
    console.error('No module name provided')
    process.exit(1)
  }

  if (!fnName) {
    console.error('No function name provided')
    process.exit(1)
  }

  try {
    const moduleDirPath = path.join(SRC_DIR, moduleName)

    const fnDirPath = path.join(moduleDirPath, fnName)
    await fs.mkdir(fnDirPath)

    const fnFilePath = path.join(fnDirPath, `${fnName}.ts`)
    await fs.writeFile(fnFilePath, createFnTemplate(fnName))

    const fnBarrelPath = path.join(fnDirPath, 'index.ts')
    await fs.writeFile(fnBarrelPath, createBarrelTemplate(fnName))

    const fnTestPath = path.join(fnDirPath, `${fnName}.test.ts`)
    await fs.writeFile(fnTestPath, createTestTemplate(fnName))
  } catch (err) {
    console.error(`Error!: ${err}`)
  }
})()
