const products = [
    {
        id: 1,
        name: "Chocolate Truffle Pastry",
        price: 10.00,
        image: "https://www.thecococompany.com/cdn/shop/products/Chocolate-Truffle-Pastries_grande.jpg?v=1577958105"
    },
    {
        id: 2,
        name: "Red Velvet Pastry",
        price: 15.00,
        image: "https://theobroma.in/cdn/shop/products/EgglessRedVelvetPastry1.jpg?v=1632141595"
    },
    {
        id: 3,
        name: "Black Currant Pastry",
        price: 20.00,
        image: "https://bakerscake.in/wp-content/uploads/2022/04/black-currant.jpg"
    },
    {
        id: 4,
        name: "Blueberry Cupcake",
        price: 10.00,
        image: "https://sallysbakingaddiction.com/wp-content/uploads/2016/04/blueberry-lemon-cupcakes.jpg"
    },
    {
        id: 5,
        name: "Chocolate Cupcake",
        price: 15.00,
        image: "https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg"
    },
    {
        id: 6,
        name: "Strawberry Cupcake",
        price: 20.00,
        image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2023/04/strawberry-cupcakes-afarmgirlsdabbles-01s-540x720.jpg"
    },
    {
        id: 7,
        name: "Chocolate Croissant ",
        price: 10.00,
        image: "https://www.neuhauser.fr/uploads/product/200129121925.jpg"
    },
    {
        id: 8,
        name: "Blueberry Cheesecake",
        price: 15.00,
        image: "https://theloopywhisk.com/wp-content/uploads/2021/01/Blueberry-Cheesecake_730px-featured.jpg"
    },
    
{
    id: 9,
    name: "Classic New York Cheesecake",
    price: 20.00,
    image: "https://thefirstyearblog.com/wp-content/uploads/2020/02/classic-cheesecake-5.png"
},
    {
        id: 10,
        name: "Almond Croissant",
        price: 10.00,
        image: "https://images.squarespace-cdn.com/content/v1/604496775a65b02982fce29e/1644008829382-BNJOZXK3ZLJGH5JCRBX6/Almond+Croissant+Vegan+Le+Gourmand.jpg?format=1000w"
    },
    {
        id: 11,
        name: "Chocochip Cookie",
        price: 15.00,
        image: "https://thebigmansworld.com/wp-content/uploads/2020/10/chocolate-chip-cookie-for-one-5.jpg"
    },
    {
        id: 12,
        name: "Oatmeal Raisin Cookie",
        price: 20.00,
        image: "https://i2.wp.com/lmld.org/wp-content/uploads/2013/09/Oatmeal-Raisin-Cookies-for-two-6.jpg"
    },
    // Add more products here
];

const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector(".products");
    const cartItemsList = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const proceedBtn = document.getElementById("proceed-btn");

    // Create product cards
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });

    // Add event listener for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = parseInt(button.getAttribute("data-id"));
            const productToAdd = products.find(product => product.id === productId);

            if (productToAdd) {
                cart.push({ ...productToAdd });
                displayCart();
                checkCartAndToggleProceedButton();
            }
        });
    });

    // Display cart items and calculate total
    function displayCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<li>Your cart is empty</li>";
            totalElement.textContent = "₹ 0.00";
            proceedBtn.disabled = true; // Disable the button
        } else {
            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    ${item.name} - ₹ ${item.price.toFixed(2)}
                    <button class="delete-btn" data-id="${item.id}">Delete</button>
                `;

                listItem.querySelector(".delete-btn").addEventListener("click", () => {
                    removeFromCart(item.id);
                });

                cartItemsList.appendChild(listItem);
                total += item.price;
            });

            totalElement.textContent = `₹ ${total.toFixed(2)}`;
            proceedBtn.disabled = false; // Enable the button
        }
    }

    // Remove item from cart
    function removeFromCart(productId) {
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart.splice(index, 1);
            displayCart();
            checkCartAndToggleProceedButton();
        }
    }

   
});








