import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {
  Palette,
  PaletteColor,
  TypeBackground,
} from '@material-ui/core/styles/createPalette';
import { User } from './api/users';

export interface CustomBackgroundPalette extends TypeBackground {
  contrast: string;
}
export interface CustomPalette extends Palette {
  tertiary: PaletteColor;
  background: CustomBackgroundPalette;
}

export interface CustomTheme extends Theme {
  palette: CustomPalette;
}

export interface Session {
  token: string | null;
  user: User | null;
}
