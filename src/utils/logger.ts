import { COLORS } from "./ansi.codes";
import { Color } from "./types/common";

export class Logger {
  static formatMessage(type: Color, message: string) {
    console.log(`${COLORS.ATTENTION}${type}: ${COLORS[type]}${message}`);
  }

  static confirm(message: string) {
    this.formatMessage('CONFIRM', message);
  }

  static error(message: string) {
    this.formatMessage('ERROR', message);
  }

  static warn(message: string) {
    this.formatMessage('WARNING', message);
  }

  static info(message: string) {
    this.formatMessage('INFO', message);
  }
}
