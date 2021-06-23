import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  const category1 = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Earphones',
      image: './assets/shared/desktop/image-earphones.png'
    }
  })
  const category2 = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Headphones',
      image: './assets/shared/desktop/image-headphones.png'
    }
  })
  const category3 = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Speakers',
      image: './assets/shared/desktop/image-speakers.png'
    }
  })


  const item1 = await prisma.product.upsert({
    where: { slug: 'yx1-earphones' },
    update: {},
    create: {
      name: 'YX1 Wireless Earphones',
      cartName: 'YX1',
      description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      features: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
      cartImage: './assets/cart/image-yx1-earphones.jpg',
      galleryImageDesktop1: './assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
      galleryImageDesktop2: './assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
      galleryImageDesktop3: './assets/product-yx1-earphones/desktop/image-gallery-3.jpg',
      galleryImageMobile1: './assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
      galleryImageMobile2: './assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
      galleryImageMobile3: './assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
      galleryImageTablet1: './assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
      galleryImageTablet2: './assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
      galleryImageTablet3: './assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
      mainImageDesktop: './assets/product-yx1-earphones/desktop/image-product.jpg',
      mainImageMobile: './assets/product-yx1-earphones/mobile/image-product.jpg',
      mainImageTablet: './assets/product-yx1-earphones/tablet/image-product.jpg',
      price: 599,
      slug: 'yx1-earphones',
      categoryId: 1 ,
      recommendations: {
        create: [
        {
          name: 'XX99 Mark I',
          imageMobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
          imageTablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
          imageDesktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
          slug: 'xx99-mark-one-headphones',
        },
        {
          name: 'XX59',
          imageMobile: './assets/shared/mobile/image-xx59-headphones.jpg',
          imageTablet: '/assets/shared/tablet/image-xx59-headphones.jpg',
          imageDesktop: './assets/shared/desktop/image-xx59-headphones.jpg',
          slug: 'xx59-headphones',
        },
        {
          name: 'ZX9 Speaker',
          imageMobile: './assets/shared/mobile/image-zx9-speaker.jpg',
          imageTablet: './assets/shared/tablet/image-zx9-speaker.jpg',
          imageDesktop: './assets/shared/desktop/image-zx9-speaker.jpg',
          slug: 'zx9-speaker',
        },
        ],
      },
      includedItems: {
        create: [
        {
          name: 'Earphone unit',
          quantity: 2
        },
        {
          name: 'Multi-size earplugs',
          quantity: 6
        },
        {
          name: 'User manual',
          quantity: 1
        },
        {
          name: 'USB-C charging cable',
          quantity: 1
        },
        {
          name: 'Travel pouch',
          quantity: 1
        },
        ],
      },
    },
  })

  
  console.log({ item1, category1, category2, category3 })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })