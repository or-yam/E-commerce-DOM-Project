const aboutBtn = document.getElementById('aboutBtn');
const productsBtn = document.getElementById('productsBtn');
const cartBtn = document.getElementById('cartBtn');
const content = document.getElementById('main-container');

let cart = [
  {
    name: 'CYCLOPS MASK',
    price: 78,
    img:
      'https://cdn.shopify.com/s/files/1/0784/0801/products/DSC04153_2000x.jpg?v=1569273194',
  },
];
let products = [
  {
    name: 'GRASSHOPPER MASK',
    price: 80,
    img:
      'https://cdn.shopify.com/s/files/1/0784/0801/products/Grasshopperturndesat_2000x.jpg?v=1588162733',
  },
  {
    name: 'BIRD PENDANT - BRONZE',
    price: 50,
    img:
      'https://cdn.shopify.com/s/files/1/0784/0801/products/Wintercroft_Bronze_bird.jpg?v=1568745250',
  },
  {
    name: 'CYCLOPS MASK',
    price: 78,
    img:
      'https://cdn.shopify.com/s/files/1/0784/0801/products/DSC04153_2000x.jpg?v=1569273194',
  },
  {
    name: 'FOX MASK FOR LEGO',
    price: 140,
    img:
      'https://cdn.shopify.com/s/files/1/0784/0801/products/DSC06056_s_cleaned_2000x.jpg?v=1576152626',
  },
];

const renderAbout = function () {
  let text =
    'We supply digital templates that help you to turn the ordinary into the extraordinary. Use them to turn a pile of card into a fantastical Low Polygon Mask. With a little guidance, anyone can create something beautiful and anyone can join our global creative community. Download, print, build it, wear it and share your creation with the World.If you are ready to take the first step on a creative journey, let us be your guide.';
  let aboutSection = document.createElement('p');
  aboutSection.innerHTML = text;
  if (!content.hasChildNodes()) {
    content.appendChild(aboutSection);
  } else {
    content.removeChild(content.firstChild);
    content.appendChild(aboutSection);
  }
};

const renderProducts = function () {
  let productsSection = document.createElement('ul');
  if (!content.hasChildNodes()) {
    content.appendChild(productsSection);
  } else {
    content.removeChild(content.firstChild);
    content.appendChild(productsSection);
  }
  for (product of products) {
    let newProduct = document.createElement('li');
    let name = product.name;
    let price = product.price;
    let imgUrl = product.img;
    let img = document.createElement('img');
    img.src = imgUrl;
    img.style.height = '200px';
    newProduct.innerHTML = `Product: ${name} Price: ${price}$ `;
    newProduct.appendChild(img);
    let addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add To Cart';
    addBtn.setAttribute('id', 'addBtn');
    newProduct.appendChild(addBtn);
    productsSection.appendChild(newProduct);
  }
  const addToCartBtn = document.getElementById('addBtn');
  addToCartBtn.onclick = addToCart;
};

const renderCart = function () {
  let cartSection = document.createElement('ul');
  if (!content.hasChildNodes()) {
    content.appendChild(cartSection);
  } else {
    content.removeChild(content.firstChild);
    content.appendChild(cartSection);
  }
  for (product of cart) {
    let newProduct = document.createElement('li');
    let name = product.name;
    let price = product.price;
    let imgUrl = product.img;
    let img = document.createElement('img');
    img.src = imgUrl;
    img.style.height = '200px';
    newProduct.innerHTML = `Product: ${name} Price: ${price}$ `;
    newProduct.appendChild(img);
    cartSection.appendChild(newProduct);
  }
};

const addToCart = function (productID) {
  let item = products[productID];
  cart.push(item);
};

aboutBtn.onclick = renderAbout;
productsBtn.onclick = renderProducts;
cartBtn.onclick = renderCart;
