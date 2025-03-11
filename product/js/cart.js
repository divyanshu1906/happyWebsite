document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    loadCartItems();
});

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = cart.length === 0 ? "<p>Your cart is empty.</p>" : "";
    }
}

function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = ""; // Clear previous content

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <strong>${item.name}</strong> - ${item.dimensions}
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

function goToCartPage() {
    window.location.href = 'cart.html';
}
