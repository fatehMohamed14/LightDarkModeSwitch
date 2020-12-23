# Easy Theme Switcher
Themes switcher using sass mixins and a BehaviorSubject Service for toggling.

The idea is to include the right mixin based on the current Theme (Dark/Light)

```
@mixin darkMode {
  --bg: #1d1d1d;
  --text-color: #fff;
  --card-bg: #292929;
  --container-bg: #212529;
  --shadow: #ffd800;
}

@mixin whiteMode {
  --bg: #fff;
  --text-color: #000;
  --card-bg: #e3e4e8;
  --container-bg: #fff;
  --shadow: #551a8b;
}


 .dark {
  @include darkMode;
}

.light {
  @include whiteMode;
}
```

## Used Techno
- Typescript.
- Parcel for bundling.
- SASS.
- Rxjs.

## Run
> - ``` npm install ```
> - ``` npm run dev ```
> - The app will available on http://localhost:1234




