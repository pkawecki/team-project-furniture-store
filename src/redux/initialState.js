const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'src=../../images/bed/arb_1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'src=../../images/bed/arb_2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'src=../../images/bed/arb_3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'src=../../images/bed/arb_4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'src=../../images/bed/arb_5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'src=../../images/bed/arb_6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'src=../../images/bed/arb_7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'src=../../images/bed/arb_8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'src=../../images/bed/arb_9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'src=../../images/bed/arb_10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'src=../../images/bed/arb_11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'src=../../images/bed/arb_12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'src=../../images/bed/arb_13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'src=../../images/bed/arb_14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'src=../../images/bed/arb_15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'src=../../images/bed/arb_16.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'src=../../images/bed/arb_17.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'src=../../images/bed/arb_18.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'src=../../images/bed/arb_19.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'src=../../images/bed/arb_20.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'src=../../images/bed/arb_21.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'src=../../images/bed/arb_22.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'src=../../images/bed/arb_23.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'src=../../images/bed/arb_24.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
  brands: [
    {
      id: 'brand-1',
      name: 'brand 1',
      image:
        'https://www.pexels.com/pl-pl/zdjecie/bialo-niebieskie-logo-route-66-1162361/',
    },
    {
      id: 'brand-2',
      name: 'brand 2',
      image: 'https://www.pexels.com/pl-pl/zdjecie/neon-signage-2235130/',
    },
    {
      id: 'brand-3',
      name: 'brand 3',
      image:
        'https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?cs=srgb&dl=pexels-mike-170809.jpg&fm=jpg',
    },
    {
      id: 'brand-4',
      name: 'brand 4',
      image: 'https://www.pexels.com/pl-pl/zdjecie/pierwszy-znak-fitness-1769735/',
    },
    {
      id: 'brand-5',
      name: 'brand 5',
      image:
        'https://www.pexels.com/pl-pl/zdjecie/bialo-czerwone-oznakowanie-budweisera-1808665/',
    },
    {
      id: 'brand-6',
      name: 'brand 6',
      image:
        'https://www.pexels.com/pl-pl/zdjecie/staroswiecki-technologia-muzyka-projekt-4153709/',
    },
    {
      id: 'brand-7',
      name: 'brand 7',
      image: 'https://www.pexels.com/pl-pl/zdjecie/drink-marka-logo-cola-4113685/',
    },
    {
      id: 'brand-8',
      name: 'brand 8',
      image: 'https://www.pexels.com/pl-pl/zdjecie/drink-marka-logo-cola-4113685/',
    },
    {
      id: 'brand-9',
      name: 'brand 9',
      image: 'https://www.pexels.com/pl-pl/zdjecie/drink-marka-logo-cola-4113685/',
    },
    {
      id: 'brand-10',
      name: 'brand 10',
      image: 'https://www.pexels.com/pl-pl/zdjecie/drink-marka-logo-cola-4113685/',
    },
    {
      id: 'brand-11',
      name: 'brand 11',
      image: 'https://www.pexels.com/pl-pl/zdjecie/drink-marka-logo-cola-4113685/',
    },
    {
      id: 'brand-12',
      name: 'brand 12',
      image: 'https://www.pexels.com/pl-pl/zdjecie/drink-marka-logo-cola-4113685/',
    },
  ],
};

export default initialState;
