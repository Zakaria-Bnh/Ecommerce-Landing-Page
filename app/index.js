// Selecting elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const primaryNavbar = document.querySelector(".primary-navbar");
const closeIcon = document.querySelector(".close-menu");
const openIcon = document.querySelector(".open-menu");
const overlay = document.querySelector(".overlay");
const cartIcon = document.querySelector(".open-cart");
const cartCard = document.querySelector(".cart-card");
const mainProductImage = document.querySelector(".main-product-image");
const galleryImages = [...document.querySelectorAll(".gallery-container li img")];

// Counter for purchases
const cartPurchases = document.querySelector(".cart-purchases");
const quantityCounter = document.querySelectorAll(".quantity");
const quantityCounterContainer = document.querySelector('.quantity-btn-container');
const increaseAmount = document.querySelector(".plus-btn");
const decreaseAmount = document.querySelector(".minus-btn");
const addToCart = document.querySelector(".add-to-cart");
let quantity = parseInt(quantityCounter.textContent) || 0;

// Functions for quantity counter
function increaseQuantityBtn() {
  ++quantity;
  // cartPurchases.textContent = quantity;
  quantityCounter.forEach((element) => (element.textContent = quantity));
}

function decreaseQuantityBtn() {
  if (quantity > 0) {
    --quantity;
    cartPurchases.textContent = quantity;
    quantityCounter.forEach((element) => (element.textContent = quantity));
  }
}

// Event listeners for quantity counter
increaseAmount.addEventListener("click", increaseQuantityBtn);
decreaseAmount.addEventListener("click", decreaseQuantityBtn);

let itemAddedToCart = true;
addToCart.addEventListener("click", () => {
  if (itemAddedToCart && quantity > 0) {
    // Update UI for item added to cart
    addToCart.textContent = "Item added to cart!";  
  } else if (itemAddedToCart ) {
    increaseQuantityBtn();
  }
  [addToCart, quantityCounterContainer].forEach((element) => {
    element.classList.add("item-added");
  });
  cartPurchases.textContent = quantity;
  // itemAddedToCart = true;
});

// Image sourceset array
const imagesSourceset = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

// Event listeners for gallery images
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    mainProductImage.src = image.src;
  });
});

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
