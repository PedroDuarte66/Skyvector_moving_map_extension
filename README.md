# MSFS to SkyVector Connector ✈️

This extension connects **Microsoft Flight Simulator (MSFS)** with **SkyVector.com** to display your aircraft's real-time position directly on the map.

## 🚀 Features
*   Real-time aircraft tracking.
*   Seamless integration with SkyVector.
*   Easy to setup and lightweight.

## ☕ Support my work
I developed this tool to improve the flight sim experience for everyone. If you find it useful and would like to support my work, feel free to buy me a coffee!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/pedroedgar)

## 🛠️ Installation & Setup

### Part 1: Chrome/Edge Extension
1. Create a new folder in your root directory (e.g., `C:\Dev\SkyVectorMovingMap`).
2. Copy the project files into that folder.
3. Open Chrome and go to `chrome://extensions/` or `edge://extensions/`.
4. Enable **Developer mode** (top right toggle).
5. Click **Load unpacked** and select the `extension` folder inside your project directory.

### Part 2: The Server (MSFS Connector)
1. Ensure **Microsoft Flight Simulator** is already running.
2. Navigate to the `connector MSFS2020/server` folder.
3. Run `SkyVector_Server.bat`.
   *   **Note:** You may see an Antivirus/SmartScreen warning because the app is not digitally signed (developer certificates are expensive!). Click "Run anyway".
   *   **Firewall:** Allow access when prompted, or the server will be blocked.

If successful, you will see: ✅ *Conectado a Microsoft Flight Simulator*.

### Part 3: Activation
1. In Chrome/Edge, click the **Extensions icon** (puzzle piece).
2. Find the extension and click **"Activar Tracking"**.
3. Open [SkyVector.com](https://skyvector.com).
4. If you don't see your aircraft, press **F5** to refresh the page.

---
**Happy flying and happy landings!** ✈️

## ⚠️ Disclaimer
This software is provided "as is". The creator is not liable for any damage or misuse. Use at your own risk.



