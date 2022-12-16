export const Data = {
  addressList: [
    {
      id: 1,
      street: "507 W Burlington Ave",
      zip: 52557,
      city: "FairField",
    },
    {
      id: 2,
      street: "117 N Court St",
      zip: 52556,
      city: "FairField",
    },
    {
      id: 3,
      street: "1000 N 4th St",
      zip: 52557,
      city: "FairField",
    },
    {
      id: 3,
      street: "104 W Adams Ave",
      zip: 52556,
      city: "FairField",
    },
  ],
  categoryList: [
    {
      id: 1,
      name: "Laptop",
    },
    {
      id: 2,
      name: "Mobile",
    },
    {
      id: 2,
      name: "Tablet",
    },
  ],
  productList: [
    {
      id: 1,
      name: "Macbook Pro 14'",
      price: 1999,
      rating: 9,
      category: {
        id: 1,
        name: "Laptop",
      },
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max",
      price: 1199,
      rating: 8.75,
      category: {
        id: 2,
        name: "Mobile",
      },
    },
    {
      id: 3,
      name: "Samsung Galaxy S21",
      price: 899,
      rating: 7.5,
      category: {
        id: 2,
        name: "Mobile",
      },
    },
    {
      id: 4,
      name: "Acer Inspire F15",
      price: 799,
      rating: 6.5,
      category: {
        id: 1,
        name: "Laptop",
      },
    },
  ],
};

export default Data;
