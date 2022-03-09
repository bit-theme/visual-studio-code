import { colors as defaultThemeColors } from '../themes/default/colors'
import { tokenColors as defaultThemeTokenColors } from '../themes/default/tokenColors'
import { colors as softThemeColors } from '../themes/soft/colors'
import { tokenColors as softThemeTokenColors } from '../themes/soft/tokenColors'
import { colors as intenseThemeColors } from '../themes/intense/colors'
import { tokenColors as intenseThemeTokenColors } from '../themes/intense/tokenColors'

type Colors = {
  [key: string]: string;
}

type TokenColor = {
  name?: string;
  scope: string[];
  settings: {
    [key: symbol]: string;
  }
}

function generate(themeName: string, colors: Colors, tokenColors: TokenColor[]) {
  const base = {
    name: themeName,
    type: 'dark',
    colors,
    tokenColors,
  }

  const payload = JSON.stringify(base, null, 2)

  return payload
}

const defaultThemeContent = generate('Bit', defaultThemeColors, defaultThemeTokenColors)
const softThemeContent = generate('Bit Soft', softThemeColors, softThemeTokenColors)
const intenseThemeContent = generate('Bit Intense', intenseThemeColors, intenseThemeTokenColors)

export {
  defaultThemeContent,
  softThemeContent,
  intenseThemeContent
}
