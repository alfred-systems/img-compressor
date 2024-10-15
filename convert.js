const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = './OUTPUT/webp'
const INPUT_DIR = './INPUT/alreadyCompress'

if (fs.existsSync(OUTPUT_DIR)){
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true })
}
fs.mkdirSync(OUTPUT_DIR)


let imgs = []
const convertToWebp = (img, index) => {
    const imgName = path.parse(img).name;
    sharp(`${INPUT_DIR}/${img}`)
        .webp({ quality: 85 })
        .toFile(`${OUTPUT_DIR}/${imgName}.webp`);
}

fs.readdir(INPUT_DIR, (err, files) => {
    imgs = files.filter(file => {
        const ext = path.extname(file).toLowerCase()
        return (ext === '.png') || (ext === '.jpg') || (ext === '.jpeg')
    })
    imgs.forEach ((img, i) => convertToWebp(img, i))
})




