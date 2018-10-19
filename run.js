const fs = require('fs')
const cwd = require('process').cwd()
const path = require('path')
const exec = require('child_process').execSync

const appPath = path.normalize(cwd.slice(0, cwd.lastIndexOf('node_modules')))

const packageJsonPath = path.join(appPath, 'package.json')

if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath))

  if (packageJson.scripts && packageJson.scripts.postinstall) {
    exec('yarn run postinstall', {cwd: appPath})
  }
}
