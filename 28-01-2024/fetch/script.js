let products = [];

const getProducts = async () => {
  const response = await fetch(
    "https://65b61e8eda3a3c16ab003bc1.mockapi.io/products"
  );
  products = await response.json();
  console.log(products);
};

getProducts();
