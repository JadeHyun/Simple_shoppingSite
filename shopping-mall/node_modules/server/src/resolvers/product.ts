const mockProducts = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1 + "",
    imageUrl: `https://picsum.photos/id/${i + 10}/200/150`,
    price: 5000,
    title: `임시상품${i + 1}`,
    createAt: new Date(1651021465000 + i * 1000 * 60 * 60 * 10).toString(),
  })))();

const productResolver = {
  Query: {
    products: (parent, args, context, info) => {
      return mockProducts;
    },
    product: (parent, { id }, context, info) => {
      const found = mockProducts.find((item) => item.id === id);
      if (found) return found;
      return null;
    },
  },
};

export default productResolver;
