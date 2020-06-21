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
  for (i = 0; i < products.length; i++) {
    let newProduct = document.createElement('li');
    let name = products[i].name;
    let price = products[i].price;
    let imgUrl = products[i].img;
    let img = document.createElement('img');

    img.src = imgUrl;
    img.style.height = '200px';

    newProduct.innerHTML = `${name} Price: ${price}$ `;
    newProduct.appendChild(img);

    let addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add To Cart';
    addBtn.setAttribute('class', 'addBtn');
    addBtn.setAttribute('id', i);
    newProduct.appendChild(addBtn);
    productsSection.appendChild(newProduct);
    addBtn.onclick = addToCart;
  }
};

const renderCart = function () {
  let cartSection = document.createElement('ul');
  if (cart.length === 0) {
    let emptyMessage = document.createElement('p');
    emptyMessage.innerHTML = `Cart is Empty`;
    cartSection.appendChild(emptyMessage);
  }
  if (!content.hasChildNodes()) {
    content.appendChild(cartSection);
  } else {
    content.removeChild(content.firstChild);
    content.appendChild(cartSection);
  }
  for (i = 0; i < cart.length; i++) {
    let newProduct = document.createElement('li');
    let name = cart[i].name;
    let price = cart[i].price;
    let imgUrl = cart[i].img;
    let img = document.createElement('img');
    img.src = imgUrl;
    img.style.height = '200px';
    newProduct.innerHTML = `Product: ${name} Price: ${price}$ `;
    newProduct.appendChild(img);

    let rmvBtn = document.createElement('button');
    rmvBtn.innerHTML = 'Remove From Cart';
    rmvBtn.setAttribute('class', 'rmvBtn');
    rmvBtn.setAttribute('id', i);
    newProduct.appendChild(rmvBtn);

    cartSection.appendChild(newProduct);
    rmvBtn.onclick = removeFromCart;
  }
};

const addToCart = function () {
  let productID = document.getElementById(this.id).id;
  let item = products[productID];
  cart.push(item);
};

const removeFromCart = function () {
  let productID = document.getElementById(this.id).id;
  let item = products[productID];
  cart.splice(productID, 1);
  renderCart();
};

aboutBtn.onclick = renderAbout;
productsBtn.onclick = renderProducts;
cartBtn.onclick = renderCart;
