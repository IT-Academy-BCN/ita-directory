const multer = require('multer')
const fs = require('fs')

const allowMimeType = ['image/jpeg', 'image/png']

// const extToMime = (type) => (type.indexOf('/') === -1 ? type.split('/')[0] : type)

const fileFilter = (req, file, cb) => {
  if (allowMimeType.indexOf(file.mimetype) !== -1) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const checkDupliates = (fileName, ext, destination, dup) => {
  let newName
  let newFileName = fileName
  let newDup = dup

  if (fs.existsSync(`${destination}/${fileName}.${ext}`)) {
    // let lastChar = fileName.slice(-1);
    if (dup > 0) {
      const remNum = dup.toString().length
      newFileName = fileName.slice(0, -remNum)
      newDup += 1
      newName = fileName + dup
    } else {
      newDup += 1
      newName = `${newFileName}-${newDup}`
    }
    return checkDupliates(newName, ext, destination, newDup)
  }
  newName = `${fileName}.${ext}`

  return newName
}

// Function from https://www.kindacode.com/article/how-to-generate-slugs-from-titles-in-node-js/
const titleToSlug = (fileName, ext, destination) => {
  let slug

  slug = fileName.toLowerCase()

  slug = slug.replace(/`|~|!|@|#|\||\$|%|\^|&|\*|\(|\)|\+|=|,|\.|\/|\?|>|<|'|"|:|;|_/gi, '')

  slug = slug.replace(/ /gi, '-')

  slug = slug.replace(/-----/gi, '-')
  slug = slug.replace(/----/gi, '-')
  slug = slug.replace(/---/gi, '-')
  slug = slug.replace(/--/gi, '-')

  slug = `@${slug}@`
  slug = slug.replace(/@-|-@|@/gi, '')

  return checkDupliates(slug, ext, destination, 0)
}

const date = new Date()
const dest = `public/${date.getFullYear()}/${date.getMonth() + 1}`
const storage = multer.diskStorage({
  destination: dest,
  filename: (req, file, cb) => {
    const fileName = file.originalname.split('.').slice(0, -1).join('.')
    const extArray = file.mimetype.split('/')
    const extension = extArray[extArray.length - 1]
    const finalName = titleToSlug(fileName, extension, dest)
    cb(null, finalName)
  },
})

module.exports = multer({ storage, fileFilter }).single('image')
