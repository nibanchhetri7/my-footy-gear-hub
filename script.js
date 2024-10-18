let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));
        addToCart(productName, productPrice);
    });
});

// Function to add items to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} has been added to your cart.`);
}

// Function to update the cart count displayed
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsDiv.appendChild(itemElement);
        });
    }
}

// Call displayCartItems function when on cart page
if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
}

// Image Slideshow on Home Page
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    slides.forEach(slide => slide.classList.remove('show')); // Hide all slides
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('show'); // Show the current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement; // Get the parent element of the button (the product)
        product.remove(); // Remove the product from the cart
    });
});






let cartItems = [];

// Function to add item to the cart
function addToCart(name, price, image) {
    const item = { name, price, image };
    console.log('Item added:', item); // Log the item being added
    cartItems.push(item);
    
    alert(`${name} has been added to your cart.`);
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Update cart count in the header if needed
    document.getElementById('cart-count').innerText = cartItems.length;
}



// Function to load cart items in the cart page
function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Clear the container before populating
    cartItemsContainer.innerHTML = '';

    if (savedCart && savedCart.length > 0) {
        cartItems = savedCart;
        
        savedCart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartItemsContainer.appendChild(productDiv);
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}



function goToStep(step) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.style.display = 'none');

    // Show the selected step
    document.getElementById(`step-${step}`).style.display = 'block';
}

function completePurchase() {
    alert("Thank you for your purchase!");
    // Redirect or process purchase logic here
}


