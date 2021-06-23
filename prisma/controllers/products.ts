import  prisma  from '../prisma';
import asyncHandler from 'express-async-handler';

export const getProductsById = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await prisma.product.findUnique({
    where: {
      id: id
    }
  })
  if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
})