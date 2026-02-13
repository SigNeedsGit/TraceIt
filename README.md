# TraceIt by Sig

A lightweight desktop overlay tool that lets you pin a transparent image on top of your screen for tracing. Built for artists who paint in video games or any application where you need a reference image overlay.

---

## How to run TraceIt

**If you downloaded a release (recommended):**

1. Download **TraceIt.exe** from the [Releases](https://github.com/SigNeedsGit/TraceIt/releases) page.
2. Double-click **TraceIt.exe** to run it.
3. A loading screen appears briefly; then the TraceIt window opens. Click **Upload Image** to load a reference image and start.

No installation or Node.js required. Windows 10/11 only.

**If you have the source code and want to run from source:**

```bash
npm install
npm start
```

You need [Node.js](https://nodejs.org/) installed for this.

---

## Features

- **Transparent overlay** — Load any image and display it on top of all windows.
- **Click-through** — Interact with apps underneath the overlay while tracing.
- **Always on top** — Stays above fullscreen games and other applications.
- **Adjustable opacity** — Control how see-through the overlay is.
- **Adjustable scale** — Resize the overlay to fit your needs.
- **Trace mode** — Lock the overlay in place and enable click-through with one button.
- **Loading screen** — Splash screen on launch so you know the app is starting.
- **Dark UI** — Sleek dark theme that stays out of your way.
- **System tray** — Runs quietly in the background.

## Usage

1. Launch TraceIt (double-click the exe or run `npm start`).
2. Click **Upload Image** to load a reference image.
3. Use the top bar controls:
   - **Upload** — Load a new image.
   - **Opacity** — Adjust overlay transparency.
   - **Scale** — Resize the overlay.
   - **Trace** — Toggle trace mode (locks position, enables click-through).
   - **Drag area** — Drag the bar to reposition the overlay.
   - **Minimize / Exit** — Window controls.

## Building from source

To build a portable exe yourself:

```bash
npm install
npm run build
```

The built files appear in `dist/`:

- **dist/TraceIt.exe** — Single portable exe (~66 MB). Use this for sharing; double-click to run. A splash screen shows while it starts.
- **dist/win-unpacked/** — Unpacked app folder. Run `TraceIt.exe` inside it for faster launch (no extraction step).

## Requirements

- **Windows 10 or 11**
- **Node.js** (only if running or building from source; not needed for the release exe)

## License

MIT
