# TraceIt by Sig

A lightweight desktop overlay tool that lets you pin a transparent image on top of your screen for tracing. Built for artists who paint in video games or any application where you need a reference image overlay.

---

## How to run TraceIt

### Option 1: Installer (recommended)

1. Download **TraceIt-Setup.exe** from [Releases](https://github.com/SigNeedsGit/TraceIt/releases).
2. Run the installer (one-click install).
3. Launch **TraceIt** from the Start menu or desktop shortcut.
4. A splash screen appears as the app loads; then the main window opens. Click **Upload Image** to load a reference and start.

The app starts immediately when you run it—no unpack delay. Best experience.

### Option 2: Portable (no install)

1. Download **TraceIt-Portable.exe** from [Releases](https://github.com/SigNeedsGit/TraceIt/releases).
2. Double-click to run. The first launch may take several seconds while the exe unpacks; then the splash and main window appear.
3. Click **Upload Image** to load a reference and start.

Single file, no installation. Good for trying the app or running from a USB drive.

### Run from source

```bash
npm install
npm start
```

Requires [Node.js](https://nodejs.org/). Windows 10/11 only.

---

## Features

- **Transparent overlay** — Load any image and display it on top of all windows.
- **Click-through** — Interact with apps underneath the overlay while tracing (e.g. paint in a game).
- **Always on top** — Stays above fullscreen games and other applications.
- **Trace mode** — One-click toggle to lock the overlay and enable click-through so you can trace without moving the image.
- **Adjustable opacity** — Slider on the top bar to control overlay transparency.
- **Adjustable scale** — Slider to resize the overlay; top bar and image resize together.
- **Splash screen** — Loading screen on launch (installer: appears as soon as you run the app; portable: after unpack).
- **Dark UI** — Sleek dark theme; top bar stays visible and draggable.
- **System tray** — App runs in the tray; load image, opacity, click-through, and exit from the tray menu.

---

## Usage

1. **Launch** TraceIt (installer shortcut, portable exe, or `npm start`).
2. **Upload** — Click **Upload Image** to load a reference image (PNG, JPG, BMP, GIF, WebP).
3. **Position** — Drag the top bar to move the overlay; it opens centered on screen.
4. **Adjust** — Use the top bar: **Opacity** and **Scale** sliders, and **Trace** to lock and enable click-through.
5. **Minimize / Exit** — Use the top bar buttons or the system tray icon.

The overlay and top bar stay on top of other windows. When **Trace** is on, clicks pass through the image so you can trace in your painting app or game.

---

## Building from source

```bash
npm install
npm run build
```

Build output in `dist/`:

| File / folder | Description |
|---------------|-------------|
| **TraceIt-Setup.exe** | Installer. Run once to install; launch from Start menu for instant start + splash. |
| **TraceIt-Portable.exe** | Single portable exe; no install. First run unpacks, then app starts. |
| **win-unpacked/** | Unpacked app. Run `TraceIt.exe` inside for instant launch (e.g. development). |

---

## Requirements

- **Windows 10 or 11**
- **Node.js** — Only if running or building from source; not needed for the release exe or installer.

---

## License

MIT
