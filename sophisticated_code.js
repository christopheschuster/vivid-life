// filename: sophisticated_code.js

// This code is a simulation of an online shopping website.
// It includes user authentication, product listing, cart management, and order processing.

// Data Models

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = '';
    this.address = '';
  }
  
  setEmail(email) {
    this.email = email;
  }
  
  setAddress(address) {
    this.address = address;
  }
  
  placeOrder(cart) {
    // Process order and send confirmation email
    console.log('Order placed successfully!');
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// User Management

let users = [];

function registerUser(username, password) {
  const id = users.length + 1;
  const user = new User(id, username, password);
  users.push(user);
  console.log('User registered successfully!');
}

function loginUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    console.log('Login successful!');
    return user;
  } else {
    console.log('Invalid credentials!');
    return null;
  }
}

// Product Management

let products = [];

function addProduct(name, price) {
  const id = products.length + 1;
  const product = new Product(id, name, price);
  products.push(product);
  console.log('Product added successfully!');
}

function listProducts() {
  if (products.length === 0) {
    console.log('No products available.');
  } else {
    console.log('Available products:');
    products.forEach(product => {
      console.log(`${product.name} - $${product.price}`);
    });
  }
}

// Cart Management

class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }
  
  addItem(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (product) {
      const item = { product, quantity };
      this.items.push(item);
      console.log('Item added to cart!');
    } else {
      console.log('Invalid product!');
    }
  }
  
  removeItem(productId) {
    const index = this.items.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log('Item removed from cart!');
    } else {
      console.log('Item not found in cart!');
    }
  }
  
  checkout() {
    if (this.items.length === 0) {
      console.log('Cart is empty.');
    } else {
      this.user.placeOrder(this);
      this.items = [];
    }
  }
}

// Simulation

registerUser('john.doe', 'password');
loginUser('john.doe', 'password').setEmail('john.doe@example.com').setAddress('123 Main St');
addProduct('Smartphone', 999.99);
addProduct('Laptop', 1499.99);
listProducts();

const user = loginUser('john.doe', 'password');

if (user) {
  const cart = new Cart(user);
  cart.addItem(1, 2);
  cart.addItem(2, 1);
  cart.removeItem(1);
  cart.checkout();
}