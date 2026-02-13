# TraceIt by Sig

A lightweight desktop overlay tool that lets you pin a transparent image on top of your screen for tracing. Built for artists who paint in video games or any application where you need a reference image overlay.

## Features

- **Transparent overlay** -- load any image and display it on top of all windows
- **Click-through** -- interact with apps underneath the overlay while tracing
- **Always on top** -- stays above fullscreen games and other applications
- **Adjustable opacity** -- control how see-through the overlay is
- **Adjustable scale** -- resize the overlay to fit your needs
- **Trace mode** -- lock the overlay in place and enable click-through with one button
- **Dark UI** -- sleek dark theme that stays out of your way
- **System tray** -- runs quietly in the background
<img width="363" height="406" alt="Screenshot 2026-02-12 232028" src="https://github.com/user-attachments/assets/4c14e09f-fb77-4557-88aa-7047a3959d80" />
<img width="1200" height="1245" alt="Screenshot 2026-02-12 223433" src="https://github.com/user-attachments/assets/eaac8d64-3d2e-4eb7-bf8b-5c0cde08ae78" />
<img width="1153" height="1188" alt="Screenshot 2026-02-12 223518" src="https://github.com/user-attachments/assets/b2e82d1f-98c7-40c7-a7d9-0949ded21d53" />
<img width="1449" height="1199" alt="Screenshot 2026-02-12 223608" src="https://github.com/user-attachments/assets/4f6dfe68-d728-4d96-b4bd-d86ebfcb5607" />

## Quick Start


### From source


```bash
npm install
npm start
```

### Build portable exe

```bash
npm install
npm run build
```

The built exe will be in `dist/`. You can use `dist/win-unpacked/TraceIt.exe` for instant launch, or `dist/TraceIt.exe` as a single portable file.

## Usage

1. Launch TraceIt
2. Click **Upload Image** to load a reference image
3. Use the top bar controls:
   - **Upload** -- load a new image
   - **Opacity** -- adjust overlay transparency
   - **Scale** -- resize the overlay
   - **Trace** -- toggle trace mode (locks position, enables click-through)
   - **Drag area** -- drag the bar to reposition the overlay
   - **Minimize / Exit** -- window controls

## Requirements

- Windows 10/11
- [Node.js](https://nodejs.org/) (for building from source)

## License

MIT
