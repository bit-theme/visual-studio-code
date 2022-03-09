import { mkdirSync, existsSync } from 'fs'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import {
  defaultThemeContent,
  softThemeContent,
  intenseThemeContent
} from './generate'

const THEME_DIR = join(__dirname, '..', '..', 'themes')

if (!existsSync(THEME_DIR)) {
  mkdirSync(THEME_DIR)
}

Promise.all([
  writeFile(
    join(THEME_DIR, 'bit.json'),
    defaultThemeContent
  ),
  writeFile(
    join(THEME_DIR, 'bit-soft.json'),
    softThemeContent
  ),
  writeFile(
    join(THEME_DIR, 'bit-intense.json'),
    intenseThemeContent
  ),
])
  .then(() => console.log('All files created. Build completed.'))
  .catch((error) => {
    console.log(`
      ERROR:

      ${error}

      Files creation fail. Aborting.
    `)
  })
