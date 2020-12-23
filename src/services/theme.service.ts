import { BehaviorSubject } from "rxjs";

export enum Theme {
  dark = "dark",
  light = "light",
}
export class ThemeService {
  private static instance: ThemeService;
  private theme: BehaviorSubject<Theme> = new BehaviorSubject(Theme.light);

  private constructor() {}

  get theme$() {
    return this.theme.asObservable();
  }

  toggleTheme = () => {
    if (this.theme.value === Theme.dark) {
      this.theme.next(Theme.light);
    } else {
      this.theme.next(Theme.dark);
    }
  };

  static getInstance() {
    if (!this.instance) {
      this.instance = new ThemeService();
    }
    return this.instance;
  }
}
