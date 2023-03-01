/* eslint-disable @typescript-eslint/naming-convention */
// TODO: Refactor code to pass eslint checks!!!

/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

const prisma = require('./indexPrisma')
const ads = require('./seedFiles/ads')
const ad_types = require('./seedFiles/ad_types')
const ad_status = require('./seedFiles/ad_status')
const levels = require('./seedFiles/levels')
const level_types = require('./seedFiles/level_types')
const invoices = require('./seedFiles/invoices')

const user_roles = [
  {
    name: 'Admin',
    admin: true,
  },
  {
    name: 'Manager',
    manager: true,
  },
  {
    name: 'Registered',
    registered: true,
  },
  {
    name: 'Developer',
    developer: true,
  },
]

const user_status = [
  {
    name: 'Active',
    active: true,
  },
  {
    name: 'Pending',
    pending: true,
  },
  {
    name: 'Suspended',
    suspended: true,
  },
  {
    name: 'Deleted',
    deleted: true,
  },
]

const users = [
  {
    name: 'test',
    lastnames: 'test test',
    email: 'test@test.test',
    userStatusId: 1,
    userRoleId: 1,
    password: 'Test-test99',
  },
  {
    name: 'test2',
    lastnames: 'test test',
    email: 'test2@test.test',
    userStatusId: 1,
    userRoleId: 3,
    password: 'Test2@test',
  },
  {
    name: 'test3',
    lastnames: 'test test',
    email: 'test3@test.test',
    userStatusId: 1,
    userRoleId: 3,
    password: 'Test3@test',
  },
  {
    name: 'test4',
    lastnames: 'test test',
    email: 'test4@test.test',
    userStatusId: 1,
    userRoleId: 3,
    password: 'Test4@test',
  },
  {
    name: 'Mariano5',
    lastnames: 'test test',
    email: 'yenab48812@snece.com',
    userStatusId: 1,
    userRoleId: 3,
    password: 'Test5@test',
  },
  {
    name: 'testDeveloper',
    lastnames: 'test test',
    email: 'testdev@test.test',
    userStatusId: 1,
    userRoleId: 4,
    password: 'Testdev@99',
    developerData: {
      github: 'https://test.github.io',
      linkedin: 'linkedin.com/in/test',
      website: 'www.test.com',
      tags: ['test', 'test'],
      description: 'test test test',
      mediaId: '', // ?
      version: 1,
      layoutType: '', // ?
    },
  },
]

const medias = [
  {
    path: '/public/2021/10/image1.jpg',
    mimeType: 'jpeg',
    fileSize: '200',
    userId: 1,
  },
  {
    path: '/public/2021/10/image2.jpg',
    mimeType: 'jpeg',
    fileSize: '200',
    userId: 2,
  },
  {
    path: '/public/2021/10/image3.png',
    mimeType: 'png',
    fileSize: '200',
    userId: 3,
  },
  {
    path: '/public/2021/10/image4.png',
    mimeType: 'png',
    fileSize: '200',
    userId: 4,
  },
  {
    path: '/public/2021/10/image5.jpg',
    mimeType: 'jpeg',
    fileSize: '200',
    userId: 5,
  },
]

const medias_types = [
  {
    name: 'thumnail',
    thumnail: true,
    medium: false,
    large: false,
    original: false,
  },
  {
    name: 'medium',
    thumnail: false,
    medium: true,
    large: false,
    original: false,
  },
  {
    name: 'large',
    thumnail: false,
    medium: false,
    large: true,
    original: false,
  },
  {
    name: 'original',
    thumnail: false,
    medium: false,
    large: false,
    original: true,
  },
]

const medias_metas = [
  {
    path: '/public/2021/10/image1.jpg',
    mimeType: 'jpeg',
    fileSize: '200',
    mediaId: 1,
    mediaTypeId: 1,
  },
  {
    path: '/public/2021/10/image2.jpg',
    mimeType: 'jpeg',
    fileSize: '200',
    mediaId: 2,
    mediaTypeId: 2,
  },
  {
    path: '/public/2021/10/image3.png',
    mimeType: 'png',
    fileSize: '200',
    mediaId: 3,
    mediaTypeId: 3,
  },
  {
    path: '/public/2021/10/image4.png',
    mimeType: 'png',
    fileSize: '200',
    mediaId: 4,
    mediaTypeId: 4,
  },
  {
    path: '/public/2021/10/image5.jpg',
    mimeType: 'jpeg',
    fileSize: '200',
    mediaId: 5,
    mediaTypeId: 4,
  },
]

async function main() {
  console.log('Seeding database ...')

  for (let i = 0; i < user_roles.length; i++) {
    const ur = user_roles[i]
    await prisma.userRole.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...ur,
      },
    })
  }

  for (let i = 0; i < user_status.length; i++) {
    const us = user_status[i]
    await prisma.userStatus.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...us,
      },
    })
  }

  // @todo: fix by students
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    await prisma.user.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...user,
      },
    })
  }

  for (let i = 0; i < ad_types.length; i++) {
    const ad_type = ad_types[i]
    await prisma.adType.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...ad_type,
      },
    })
  }

  for (let i = 0; i < medias.length; i++) {
    const media = medias[i]
    await prisma.media.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...media,
      },
    })
  }

  for (let i = 0; i < medias_types.length; i++) {
    const media_type = medias_types[i]
    await prisma.mediaType.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...media_type,
      },
    })
  }
  for (let i = 0; i < medias_metas.length; i++) {
    const media_meta = medias_metas[i]
    await prisma.mediaMeta.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...media_meta,
      },
    })
  }
  for (let i = 0; i < level_types.length; i++) {
    const level_type = level_types[i]
    await prisma.levelType.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...level_type,
      },
    })
  }
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i]
    await prisma.level.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...level,
      },
    })
  }

  for (let i = 0; i < ad_status.length; i++) {
    const adStatus = ad_status[i]
    await prisma.adStatus.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...adStatus,
      },
    })
  }

  for (let i = 0; i < ads.length; i++) {
    const ad = ads[i]
    await prisma.ads.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...ad,
      },
    })
  }

  // Add some invoices
  for (let i = 0; i < invoices.length; i++) {
    const invoice = invoices[i]
    await prisma.invoice.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...invoice,
      },
    })
  }

  // Add some avatarId to users
  for (let i = 0; i < users.length; i++) {
    if (medias[i]) {
      await prisma.user.update({
        where: { id: i + 1 },
        data: { avatarId: i + 1 },
      })
    }
  }
}
main()
  .catch((e) => {
    console.log('here')
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log('disconnect Prisma')
    await prisma.$disconnect()
  })
