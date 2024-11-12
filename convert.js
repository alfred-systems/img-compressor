const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = './OUTPUT'
const INPUT_DIR = './INPUT'

if (fs.existsSync(OUTPUT_DIR)){
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true })
}
fs.mkdirSync(OUTPUT_DIR)


let imgs = []
const convertToWebp = (img, locale) => {
    const imgName = path.parse(img).name;
    sharp(`${INPUT_DIR}/${img}`)
        .webp({ quality: 85 })
        .toFile(`${OUTPUT_DIR}/${imgName.replace('-en-', `-${locale}-`)}.webp`);
}

const convertToJpeg = (img, locale) => {
    const imgName = path.parse(img).name;
    
    sharp(`${INPUT_DIR}/${img}`)
        .jpeg({ quality: 85 })
        .toFile(`${OUTPUT_DIR}/${imgName.replace('-en-', `-${locale}-`)}.jpeg`);
}

const locales = ['en', 'de', 'ko', 'ja', 'es', 'it', 'pt', 'zh-tw'];

fs.readdir(INPUT_DIR, (err, files) => {
    imgs = files.filter(file => {
        const ext = path.extname(file).toLowerCase()
        return (ext === '.png') || (ext === '.jpg') || (ext === '.jpeg')
    })
    locales.forEach(locale => imgs.forEach ((img, i) => {
        convertToWebp(img, locale);
        convertToJpeg(img, locale);
    }));
    
})




