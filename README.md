# PET VAULT

A responsive pet identification tool built with React 18, TypeScript, Vite, Tailwind CSS, and Lucide icons.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

On Windows PowerShell with restricted script execution, use `npm.cmd` in place of `npm`.

```sh
npm run build
npm run preview
```

The production output is `dist/`. Deploy that directory to a static host or copy its contents into your XAMPP served directory. Vite uses relative asset URLs to support subdirectory hosting. Opening the source HTML directly does not run the React app.

## Source structure

- `src/types.ts`: shared data contracts.
- `src/data.ts`: pet types, breed choices, and companion notes.
- `src/components/Header.tsx`: responsive navigation.
- `src/components/PetSelector.tsx`: species and custom breed controls.
- `src/components/PetDetailsForm.tsx`: controlled owner and pet fields.
- `src/components/TagPreview.tsx`: generated tag preview and PNG download.
- `src/components/ScannerPanel.tsx`: explicit camera start/stop and scan output.
- `src/components/Gallery.tsx`: tags created in the current session.
- `src/components/HelpPanel.tsx`: accessible expandable help topics.
- `src/App.tsx`: navigation, form state, validation, and QR generation.

## Data and camera behavior

Contact information is embedded directly in each QR code; anyone with the code can read it. QR codes contain fixed data and cannot be edited remotely. Tags stay in memory only: download the PNG before refreshing or closing the page. This app has no backend or account storage.

Camera scanning requires HTTPS or localhost and browser permission. Camera access starts only after selecting Start camera, and stops when leaving the scanner. Scanned content is rendered as plain text.

## Verification

`npm run build` runs strict TypeScript checking and the production Vite build. Test camera permission, rear-camera scanning, and printed QR readability on the target device before distributing tags.
