// Selecting elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const primaryNavbar = document.querySelector(".primary-navbar");
const closeIcon = document.querySelector(".close-menu");
const openIcon = document.querySelector(".open-menu");
const overlay = document.querySelector(".overlay");
const cartIcon = document.querySelector(".open-cart");
const cartCard = document.querySelector(".cart-card");
const mainProductImage = document.querySelector(".main-product-image");
const galleryImages = [
  ...document.querySelectorAll(".gallery-container li img"),
];
const cartItem = document.querySelector(".cart-item");
const previousImage = document.querySelector(".previous-image");
const nextImage = document.querySelector(".next-image");

// Counter for purchases
const cartPurchases = document.querySelector(".cart-purchases");
const quantityCounter = document.querySelectorAll(".quantity");
const quantityCounterContainer = document.querySelector(
  ".quantity-btn-container"
);
const increaseAmount = document.querySelector(".plus-btn");
const decreaseAmount = document.querySelector(".minus-btn");
const addToCart = document.querySelector(".add-to-cart");
const deleteFromCart = document.querySelector(".cart-item-delete");
console.log(deleteFromCart);
let quantity = 0;

// Functions for quantity counter
function increaseQuantity() {
  ++quantity;
  quantityCounter.forEach((element) => (element.textContent = quantity));
}

function decreaseQuantity() {
  if (quantity > 0) {
    --quantity;
    cartPurchases.textContent = quantity;
    quantityCounter.forEach((element) => (element.textContent = quantity));
  }
}

let itemAddedToCart = true;
function handleAddToCartClick() {
  if (quantity < 1) {
    increaseQuantity();
  }
  [addToCart, quantityCounterContainer].forEach((element) => {
    element.classList.add("item-added");
  });
  cartItem.classList.remove("hidden");
  cartItem.classList.add("flex-container");
  addToCart.textContent = "Item added to cart!";
  cartPurchases.textContent = quantity;
}

function handleDeleteFromCart() {
  addToCart.textContent = "Add to cart";
  cartItem.classList.add("hidden");
  cartItem.classList.remove("flex-container");

  [addToCart, quantityCounterContainer].forEach((element) => {
    element.classList.remove("item-added");
  });
  [cartPurchases, ...quantityCounter].forEach((e) => {
    e.textContent = 0;
    quantity = 0;
  });
}

// Event listeners for quantity counter
increaseAmount.addEventListener("click", increaseQuantity);
decreaseAmount.addEventListener("click", decreaseQuantity);
addToCart.addEventListener("click", handleAddToCartClick);
deleteFromCart.addEventListener("click", handleDeleteFromCart);
// Image sourceset array
const imagesSourceset = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

// Event listeners for gallery images
let imageIndex;

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    mainProductImage.src = image.src;
  });
});
console.log(mainProductImage.src);
nextImage.addEventListener("click", () => {});

// Event listener for mobile/desktop menu
hamburgerMenu.addEventListener("click", () => {
  primaryNavbar.classList.toggle("sidebar-active");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

// Event listener for cart functionality
cartIcon.addEventListener("click", () => {
  cartCard.classList.toggle("show");
});
