document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const ringWrapper = event.target.closest(".ring-wrapper");
            if (!ringWrapper) return;

            const name = ringWrapper.querySelector(".ring-name").textContent;
            const priceText = ringWrapper.querySelector(".price-tag").textContent;
            // Remove the '$' and convert to a number
            const price = parseFloat(priceText.replace('$', ''));

            if (name && !isNaN(price)) {
                addToCart(name, price, button);
            }
        });
    });
});

function addToCart(name, price, button) {
    fetch("http://localhost:5500/add_to_cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        button.textContent = "Added!";
        setTimeout(() => button.innerHTML = '<span class="cart-icon">🛒</span> Add to Cart', 2000);
    })
    .catch(error => console.error("Error adding to cart:", error));
}