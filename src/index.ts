import { Theme, ThemeService } from "./services/theme.service";

export class Main {
  currentTheme: Theme;
  constructor(private _themeService: ThemeService) {
    this.currentTheme = Theme.light;
    _themeService.theme$.subscribe((theme: Theme) => {
      this.currentTheme = theme;
    });
  }

  toggle() {
    this._themeService.toggleTheme();
  }
}

const main = new Main(ThemeService.getInstance());

const toggleBtn = <HTMLElement>(
  document.getElementsByClassName("theme-toggle")[0]
);

const app = <HTMLElement>document.getElementsByClassName("app")[0];

toggleBtn!.onclick = (_) => {
  main.toggle();
  if (main.currentTheme === Theme.dark) {
    app!.classList.remove(Theme.light);
    app!.classList.add(Theme.dark);
  } else {
    app!.classList.remove(Theme.dark);
    app!.classList.add(Theme.light);
  }
};
