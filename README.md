# YouTube Auto Skip Chrome Extension

## Overview
The YouTube Auto Skip Chrome Extension is a simple extension that automatically clicks the skip button on YouTube whenever it is visible during video playback.

## Installation
1. Download or clone the repository to your local machine.

2. Open Google Chrome.

3. Navigate to `chrome://extensions/`.

4. Enable "Developer mode" in the top right corner.

5. Click on "Load unpacked" and select the folder containing your extension files.

## Usage
- Once the extension is installed, visit any YouTube video page.

- The extension will automatically detect the skip button and click it if it is visible.

## How it Works
- The extension injects a content script (`content2.js`) into YouTube pages.

- The content script contains a function (`clickSkipButton`) that attempts to find and click the skip button.

- A `MutationObserver` is used to continuously monitor changes in the DOM, triggering the `clickSkipButton` function whenever changes occur.

- The skip button is also clicked initially when the content script is injected into the page.