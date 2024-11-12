# img-compressor

A simple tool to compress and convert JPEG and PNG images using [sharp](https://sharp.pixelplumbing.com/).

## Features
- Compress JPEG and PNG images with customizable quality.
- Convert images to `.webp` format.

## Requirements
- Node.js
- NPM

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/renderlai/img-compressor.git
    cd img-compressor
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. **Create directories:**

   Manually create the following directories inside the project root:
   
   - `INPUT`: Place the images you want to compress in this folder.
   - `OUTPUT`: The coverted images will be saved in this directory (created automatically if it doesn't exist).

2. **Run the script:**

    ```bash
    node compress.js
    ```

   The script will compress all `.jpg`, `.jpeg`, and `.png` files from the `INPUT` folder and save the compressed versions in the `INPUT/alreadyCompress` folder with 85% quality by default.

   ```bash
    node convert.js
    ```

   The script will covert all `.jpg`, `.jpeg`, and `.png` files from the `INPUT/alreadyCompress` folder and save the coverted versions in the `OUTPUT/webp` folder.

## Directory Structure

```bash
img-compressor/
│
├── INPUT/            # Place your images here
│   ├── image1.jpeg
│   ├── image2.jpeg
│
├── OUTPUT/           # Compressed images will be saved here (created automatically)
├── compress.js
├── convert.js          # Main script
├── package.json      # Project config
└── README.md         # This file
```
