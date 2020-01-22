export default class Formatter {
  static toHour(seconds: number): number {
    if (seconds <= 0) return 0;
    return seconds / 3600;
  }
}
