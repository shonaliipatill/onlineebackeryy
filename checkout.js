document.addEventListener("DOMContentLoaded", () => {
    const cartItemsListReview = document.getElementById("cart-items-review");
    const totalElementReview = document.getElementById("total-review");
    const checkoutForm = document.getElementById("checkout-form");

    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Display cart items and calculate total on the checkout page
    function displayCartReview() {
        cartItemsListReview.innerHTML = "";
        let total = 0;
        document.addEventListener("DOMContentLoaded", () => {
    // ...

    // Function to display cart items on the checkout page
    function displayCartReview() {
        const cartItemsReview = document.getElementById("cart-items-review");
        cartItemsReview.innerHTML = "";
        let totalReview = 0;

        if (cart.length === 0) {
            cartItemsReview.innerHTML = "<li>Your cart is empty</li>";
            totalReview.textContent = "₹ 0.00";
        } else {
            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.name} - ₹ ${item.price.toFixed(2)}`;
                cartItemsReview.appendChild(listItem);
                totalReview += item.price;
            });

            totalReview.textContent = `₹ ${totalReview.toFixed(2)}`;
        }
    }

    // Call the displayCartReview function to display cart items on page load
    displayCartReview();

    // ...
});

        if (cart.length === 0) {
            cartItemsListReview.innerHTML = "<li>Your cart is empty</li>";
            totalElementReview.textContent = "₹ 0.00";
        } else {
            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    ${item.name} - ₹ ${item.price.toFixed(2)}
                `;

                cartItemsListReview.appendChild(listItem);
                total += item.price;
            });

            totalElementReview.textContent = `₹ ${total.toFixed(2)}`;
        }
    }

    // Display cart items and total on page load
    displayCartReview();

    // Handle the form submission
    checkoutForm.addEventListener("submit", event => {
        event.preventDefault();
        
        // Collect user information
        const formData = new FormData(checkoutForm);
        const userInfo = {
            name: formData.get("name"),
            address: formData.get("address"),
            email: formData.get("email")
        };

        // You can process the user information here (e.g., send it to a server)
        // For simplicity, we'll just display an alert with the collected data
        alert("Order Details:\n\n" +
            "Name: " + userInfo.name + "\n" +
            "Address: " + userInfo.address + "\n" +
            "Email: " + userInfo.email);

        // Clear the cart and local storage
        cart.length = 0;
        localStorage.removeItem("cartItems");

        // Redirect the user to a thank you page or wherever you like
        window.location.href = "thankyou.html";
    });
});
