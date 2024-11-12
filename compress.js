const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = './INPUT/alreadyCompress'
const INPUT_DIR = './INPUT'

if (fs.existsSync(OUTPUT_DIR)){
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true })
}
fs.mkdirSync(OUTPUT_DIR)


let jpgImgs = []
let pngImgs = []

const conpressJpg = (img, index) => {
    const imgName = path.parse(img).name;
    
    sharp(`${INPUT_DIR}/${img}`)
        .jpeg({ quality: 85 })
        .toFile(`${OUTPUT_DIR}/${imgName}.jpeg`);
}

const conpressPng = (img, index) => {
    const imgName = path.parse(img).name;
    
    sharp(`${INPUT_DIR}/${img}`)
        .png({ quality: 85 })
        .toFile(`${OUTPUT_DIR}/${imgName}.png`);
}

fs.readdir(INPUT_DIR, (err, files) => {
    jpgImgs = files.filter(file => {
        const ext = path.extname(file).toLowerCase()
        return (ext === '.jpg') || (ext === '.jpeg')
    })
    pngImgs = files.filter(file => {
        const ext = path.extname(file).toLowerCase()
        return (ext === '.png')
    })
    jpgImgs.forEach ((img, i) => conpressJpg(img, i))
    pngImgs.forEach ((img, i) => conpressPng(img, i))
})




