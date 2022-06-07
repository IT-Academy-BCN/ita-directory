const fs = require('fs')
const prisma = require('../../prisma/indexPrisma')

exports.uploadMedia = async (req, res) => {
  if (!req.file || !req.body.userId) {
    res.status(400).json({ msg: 'File/userId error' })
  } else {
    await prisma.media.create({
      data: {
        path: req.file.path,
        mimeType: req.file.mimetype,
        fileSize: req.file.size.toString(),
        user: {
          connect: {
            id: parseInt(req.body.userId, 10),
          },
        },
      },
    })
    res.status(200).json({
      path: req.file.path,
      message: 'File uploaded successfully.',
    })
  }
}

exports.deleteMedia = async (req, res) => {
  try {
    await fs.unlink(req.file)
    res.json({ message: 'File was deleted successfully.' })
  } catch (error) {
    res.json({ message: `There was an error deleting file. ${error}` })
  }
}
