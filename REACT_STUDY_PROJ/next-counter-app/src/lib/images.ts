import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
console.log(dataDir);

export function getAllImageId() {
  const fileNames = fs.readdirSync(dataDir)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.png$/, '')
      }
    }
  })
}

export async function getImageUrl(id: string) {
  const fullPath = path.join(dataDir, `${id}.png`)

  return {
    id, fullPath
  }
}