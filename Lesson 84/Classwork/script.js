const products = [
    {
      name: "Wireless Headphones",
      price: 120.99,
      description: "High-quality wireless headphones with noise cancellation.",
      imageURL: "./images/headphones.jpg"
    },
    {
      name: "Smart Watch",
      price: 89.49,
      description: "Track your fitness goals with this sleek smart watch.",
      imageURL: "./images/smartwatch.jpg"
    },
    {
      name: "Gaming Mouse",
      price: 45.29,
      description: "Ergonomic gaming mouse with customizable RGB lighting.",
      imageURL: "./images/mouse.jpg"
    },
    {
      name: "Laptop",
      price: 999.99,
      description: "Powerful laptop with a high-resolution screen and long battery life.",
      imageURL: "./images/laptop.jpg"
    },
    {
      name: "Bluetooth Speaker",
      price: 59.99,
      description: "Portable Bluetooth speaker with deep bass and clear sound.",
      imageURL: "./images/speaker.jpg"
    },
    {
      name: "4K Monitor",
      price: 299.99,
      description: "Ultra HD monitor with wide viewing angles and vibrant colors.",
      imageURL: "./images/monitor.jpg"
    },
    {
      name: "Smartphone",
      price: 799.99,
      description: "Latest model smartphone with a stunning display and powerful processor.",
      imageURL: "./images/smartphone.jpg"
    },
    {
      name: "Gaming Chair",
      price: 199.99,
      description: "Ergonomically designed gaming chair with adjustable features for comfort.",
      imageURL: "./images/gaming-chair.jpg"
    },
    {
      name: "Action Camera",
      price: 149.99,
      description: "Waterproof action camera with 4K recording and wide-angle lens.",
      imageURL: "./images/action-camera.jpg"
    },
    {
      name: "Wireless Keyboard",
      price: 79.99,
      description: "Sleek, ergonomic wireless keyboard with responsive keys.",
      imageURL: "./images/keyboard.jpg"
    },
    {
      name: "Bluetooth Earbuds",
      price: 69.99,
      description: "Compact Bluetooth earbuds with clear sound and a long battery life.",
      imageURL: "./images/earbuds.jpg"
    },
    {
      name: "Digital Camera",
      price: 499.99,
      description: "Compact digital camera with 20MP sensor and 4K video recording.",
      imageURL: "./images/digital-camera.jpg"
    }
  ];
  
  
  
  // Function to render products dynamically
  function renderProducts(products) {
    const productContainer = document.getElementById("product-container");
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${product.imageURL}" alt="${product.name}">
        <div class="card-content">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">$${product.price.toFixed(2)}</p>
        </div>
      `;
  
      productContainer.appendChild(card);
    });
  }
  
  // Initialize product rendering
  renderProducts(products);
  