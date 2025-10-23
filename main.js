import './style.css';

const cart = [];

const cuisines = {
  indian: {
    name: 'Indian Cuisine',
    theme: 'indian',
    dishes: [
      {
        id: 'indian-1',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces, rich spices, and aromatic herbs',
        price: 16.99,
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
        spice: 2
      },
      {
        id: 'indian-2',
        name: 'Biryani',
        description: 'Fragrant basmati rice layered with spiced meat, saffron, and caramelized onions',
        price: 18.99,
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
        spice: 2
      },
      {
        id: 'indian-3',
        name: 'Palak Paneer',
        description: 'Fresh spinach curry with soft paneer cubes in a creamy, aromatic sauce',
        price: 14.99,
        image: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/03/palak-paneer-scaled.jpeg?v=1619494870',
        spice: 1
      },
      {
        id: 'indian-4',
        name: 'Tandoori Chicken',
        description: 'Smoky grilled chicken marinated in yogurt and traditional spices',
        price: 15.99,
        image: 'https://signatureconcoctions.com/wp-content/uploads/2023/11/pasted-image-0-31.png',
        spice: 3
      },
      {
        id: 'indian-5',
        name: 'Masala Dosa',
        description: 'Crispy rice crepe filled with spiced potato masala, served with chutneys',
        price: 12.99,
        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
        spice: 2
      },
      {
        id: 'indian-6',
        name: 'Chole Bhature',
        description: 'Spicy chickpea curry served with fluffy deep-fried bread',
        price: 13.99,
        image: 'https://b.zmtcdn.com/data/pictures/4/20365734/8ffcbf5bd5111202aa8821f472bab983.jpg',
        spice: 2
      }
    ]
  },
  chinese: {
    name: 'Chinese Cuisine',
    theme: 'chinese',
    dishes: [
      {
        id: 'chinese-1',
        name: 'Kung Pao Chicken',
        description: 'Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce',
        price: 15.99,
        image: 'https://assets.epicurious.com/photos/62d550372ce044d81614427d/4:3/w_4786,h_3589,c_limit/KungPaoChicken_RECIPE_071422_37114.jpg',
        spice: 3
      },
      {
        id: 'chinese-2',
        name: 'Peking Duck',
        description: 'Crispy roasted duck with thin pancakes, spring onions, and hoisin sauce',
        price: 28.99,
        image: 'https://wallpapers.com/images/hd/roasted-peking-duck-with-side-dishes-6lq0bwtnxxcd1k21.jpg',
        spice: 0
      },
      {
        id: 'chinese-3',
        name: 'Dim Sum Platter',
        description: 'Assorted steamed dumplings with pork, shrimp, and vegetables',
        price: 19.99,
        image: 'https://plus.unsplash.com/premium_photo-1661600643912-dc6dbb1db475?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGltJTIwc3VtfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
        spice: 1
      },
      {
        id: 'chinese-4',
        name: 'Sweet and Sour Pork',
        description: 'Crispy pork pieces in tangy sweet and sour sauce with bell peppers',
        price: 16.99,
        image: 'https://i.pinimg.com/736x/9c/d4/a6/9cd4a6019a0e20169e28d22009ae176e.jpg',
        spice: 0
      },
      {
        id: 'chinese-5',
        name: 'Mapo Tofu',
        description: 'Silky tofu in spicy Sichuan sauce with ground pork and fermented beans',
        price: 14.99,
        image: 'https://media.istockphoto.com/id/1366185599/photo/mabo-tofu.jpg?s=612x612&w=0&k=20&c=J6BsWkYc7rXAmIxcXI8okhWuFD6mEa4U_wcH1_NlUm4=',
        spice: 3
      },
      {
        id: 'chinese-6',
        name: 'Fried Rice',
        description: 'Wok-tossed rice with eggs, vegetables, and choice of protein',
        price: 13.99,
        image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
        spice: 1
      }
    ]
  },
  japanese: {
    name: 'Japanese Cuisine',
    theme: 'japanese',
    dishes: [
      {
        id: 'japanese-1',
        name: 'Sushi Platter',
        description: 'Assorted nigiri and maki rolls with fresh fish, avocado, and cucumber',
        price: 24.99,
        image: 'https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg',
        spice: 0
      },
      {
        id: 'japanese-2',
        name: 'Ramen Bowl',
        description: 'Rich pork broth with noodles, chashu pork, soft egg, and green onions',
        price: 16.99,
        image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
        spice: 1
      },
      {
        id: 'japanese-3',
        name: 'Tempura',
        description: 'Lightly battered and fried shrimp and vegetables with dipping sauce',
        price: 18.99,
        image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg',
        spice: 0
      },
      {
        id: 'japanese-4',
        name: 'Teriyaki Salmon',
        description: 'Grilled salmon glazed with sweet teriyaki sauce, served with rice',
        price: 22.99,
        image: 'https://natashaskitchen.com/wp-content/uploads/2016/01/Teriyaki-Salmon-Recipe-4.jpg',
        spice: 0
      },
      {
        id: 'japanese-5',
        name: 'Tonkatsu',
        description: 'Breaded and fried pork cutlet with tangy sauce and shredded cabbage',
        price: 17.99,
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20240327/pngtree-tonkatsu-japanese-pork-cutlet-deep-fried-with-rice-set-image_15646474.jpg',
        spice: 0
      },
      {
        id: 'japanese-6',
        name: 'Gyoza',
        description: 'Pan-fried dumplings filled with pork and vegetables',
        price: 12.99,
        image: 'https://img.freepik.com/free-photo/high-angle-asian-dish-plate-with-herbs_23-2148694399.jpg?semt=ais_hybrid&w=740&q=80',
        spice: 1
      }
    ]
  },
  italian: {
    name: 'Italian Cuisine',
    theme: 'italian',
    dishes: [
      {
        id: 'italian-1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with San Marzano tomatoes, fresh mozzarella, and basil',
        price: 16.99,
        image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
        spice: 0
      },
      {
        id: 'italian-2',
        name: 'Carbonara',
        description: 'Creamy pasta with guanciale, egg, Pecorino Romano, and black pepper',
        price: 18.99,
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
        spice: 0
      },
      {
        id: 'italian-3',
        name: 'Lasagna',
        description: 'Layers of pasta, rich meat sauce, bechamel, and melted cheese',
        price: 19.99,
        image: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg',
        spice: 0
      },
      {
        id: 'italian-4',
        name: 'Risotto ai Funghi',
        description: 'Creamy Arborio rice with mixed mushrooms and Parmesan',
        price: 17.99,
        image: 'https://recipes.net/wp-content/uploads/2023/05/chanterelle-mushroom-risotto_f34effca58384b447accde25b8a6adc1.jpeg',
        spice: 0
      },
      {
        id: 'italian-5',
        name: 'Osso Buco',
        description: 'Braised veal shanks with vegetables in white wine sauce',
        price: 26.99,
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
        spice: 0
      },
      {
        id: 'italian-6',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone',
        price: 9.99,
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
        spice: 0
      }
    ]
  },
  mexican: {
    name: 'Mexican Cuisine',
    theme: 'mexican',
    dishes: [
      {
        id: 'mexican-1',
        name: 'Tacos al Pastor',
        description: 'Marinated pork tacos with pineapple, onions, cilantro, and lime',
        price: 14.99,
        image: 'https://www.orchidsandsweettea.com/wp-content/uploads/2024/08/Tacos-Al-Pastor-With-Ground-Turkey-7.jpg',
        spice: 2
      },
      {
        id: 'mexican-2',
        name: 'Enchiladas',
        description: 'Rolled tortillas filled with chicken, topped with red sauce and cheese',
        price: 16.99,
        image: 'https://assets.bonappetit.com/photos/6169b18b561c23002d3dfe0f/1:1/w_2560%2Cc_limit/Chicken-Mole-Enchiladas.jpeg',
        spice: 2
      },
      {
        id: 'mexican-3',
        name: 'Burrito Bowl',
        description: 'Rice bowl with beans, meat, guacamole, salsa, and sour cream',
        price: 13.99,
        image: 'https://thebusybaker.ca/wp-content/uploads/2024/10/burrito-bowls-fb-ig-1-scaled.jpg',
        spice: 1
      },
      {
        id: 'mexican-4',
        name: 'Quesadilla',
        description: 'Grilled flour tortilla filled with cheese, peppers, and your choice of filling',
        price: 12.99,
        image: 'https://andrewandeverett.com/wp-content/uploads/2018/02/Steak-and-Chipotle-Quesadilla-2.jpg',
        spice: 1
      },
      {
        id: 'mexican-5',
        name: 'Mole Poblano',
        description: 'Chicken in rich chocolate-chili sauce with sesame seeds',
        price: 18.99,
        image: 'https://images.squarespace-cdn.com/content/v1/59739d0ed2b857fb9af8f717/1574464214046-NXWOSGSGAW3ZQRH4FYLF/Photo%2BOct%2B01%252C%2B8%2B25%2B16%2BPM.jpg?format=1000w',
        spice: 2
      },
      {
        id: 'mexican-6',
        name: 'Guacamole & Chips',
        description: 'Fresh avocado dip with tomatoes, onions, cilantro, and lime',
        price: 9.99,
        image: 'https://www.dinner-mom.com/wp-content/uploads/2023/02/easy-low-carb-tortilla-chips-recipe.jpg',
        spice: 1
      }
    ]
  },
  thai: {
    name: 'Thai Cuisine',
    theme: 'thai',
    dishes: [
      {
        id: 'thai-1',
        name: 'Pad Thai',
        description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce',
        price: 15.99,
        image: 'https://plus.unsplash.com/premium_photo-1661610605309-77feabcc8772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFkJTIwdGhhaXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
        spice: 2
      },
      {
        id: 'thai-2',
        name: 'Green Curry',
        description: 'Spicy coconut curry with Thai basil, bamboo shoots, and chicken',
        price: 16.99,
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2025/08/Green-Curry-Recipe-3.jpg',
        spice: 3
      },
      {
        id: 'thai-3',
        name: 'Tom Yum Soup',
        description: 'Hot and sour soup with shrimp, lemongrass, galangal, and lime leaves',
        price: 12.99,
        image: 'https://previews.123rf.com/images/amphaiwan/amphaiwan1405/amphaiwan140500054/28549286-tom-yum-goong-thai-hot-and-spicy-soup-seafood-with-shrimp-thai-cuisine.jpg',
        spice: 3
      },
      {
        id: 'thai-4',
        name: 'Massaman Curry',
        description: 'Rich curry with beef, potatoes, peanuts, and warm spices',
        price: 17.99,
        image: 'https://www.feastingathome.com/wp-content/uploads/2024/10/massaman-curry-recipe-9.jpg',
        spice: 2
      },
      {
        id: 'thai-5',
        name: 'Som Tam',
        description: 'Spicy green papaya salad with tomatoes, peanuts, and lime dressing',
        price: 11.99,
        image: 'https://assets.bonappetit.com/photos/644819df047251c7e5ee250b/1:1/w_3665,h_3665,c_limit/042523-green-papaya-salad-lede.jpg',
        spice: 3
      },
      {
        id: 'thai-6',
        name: 'Mango Sticky Rice',
        description: 'Sweet glutinous rice with fresh mango and coconut cream',
        price: 8.99,
        image: 'https://takestwoeggs.com/wp-content/uploads/2021/07/Thai-Mango-Sticky-Rice-Takestwoeggs-Process-Final-sq.jpg',
        spice: 0
      }
    ]
  },
  american: {
    name: 'American Cuisine',
    theme: 'american',
    dishes: [
      {
        id: 'american-1',
        name: 'Classic Burger',
        description: 'Juicy beef patty with lettuce, tomato, onion, pickles, and special sauce',
        price: 14.99,
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
        spice: 0
      },
      {
        id: 'american-2',
        name: 'BBQ Ribs',
        description: 'Slow-cooked pork ribs with smoky BBQ sauce and coleslaw',
        price: 22.99,
        image: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg',
        spice: 1
      },
      {
        id: 'american-3',
        name: 'Buffalo Wings',
        description: 'Crispy chicken wings tossed in spicy buffalo sauce with ranch',
        price: 13.99,
        image: 'https://wallpaperbat.com/img/200962143-download-chicken-wings-palatable-wooden-table-wallpaper.jpg',
        spice: 3
      },
      {
        id: 'american-4',
        name: 'Mac and Cheese',
        description: 'Creamy macaroni pasta with three cheese blend and breadcrumb topping',
        price: 11.99,
        image: 'https://wallpapers.com/images/hd/mac-and-cheese-with-sping-onions-5evvvpgxo2k7g1le.jpg',
        spice: 0
      },
      {
        id: 'american-5',
        name: 'Fried Chicken',
        description: 'Southern-style crispy fried chicken with mashed potatoes and gravy',
        price: 16.99,
        image: 'https://static.vecteezy.com/system/resources/previews/055/621/535/large_2x/crispy-fried-chicken-with-creamy-mashed-potatoes-and-gravy-photo.jpg',
        spice: 1
      },
      {
        id: 'american-6',
        name: 'Apple Pie',
        description: 'Classic American dessert with cinnamon apples and flaky crust',
        price: 7.99,
        image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/11e2183efecf4b3b96918c9bf8da3d3d/6Min60Min6hour.jpg',
        spice: 0
      }
    ]
  },
  mediterranean: {
    name: 'Mediterranean Cuisine',
    theme: 'mediterranean',
    dishes: [
      {
        id: 'mediterranean-1',
        name: 'Greek Salad',
        description: 'Fresh vegetables with feta cheese, olives, and olive oil dressing',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
        spice: 0
      },
      {
        id: 'mediterranean-2',
        name: 'Falafel Wrap',
        description: 'Crispy chickpea fritters with hummus, tahini, and fresh vegetables',
        price: 11.99,
        image: 'https://simplyceecee.co/wp-content/uploads/2022/06/falafelfeature.jpg',
        spice: 1
      },
      {
        id: 'mediterranean-3',
        name: 'Moussaka',
        description: 'Layered eggplant, ground lamb, and creamy bechamel sauce',
        price: 18.99,
        image: 'https://www.francoislambert.one/cdn/shop/articles/moussaka_traditionnelle_a280d62e-6188-4e6b-9012-1e850918b0e1.webp?v=1756752826&width=1100',
        spice: 0
      },
      {
        id: 'mediterranean-4',
        name: 'Lamb Kebab',
        description: 'Grilled marinated lamb skewers with tzatziki and pita bread',
        price: 19.99,
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
        spice: 1
      },
      {
        id: 'mediterranean-5',
        name: 'Hummus Platter',
        description: 'Creamy chickpea dip with olive oil, served with warm pita',
        price: 9.99,
        image: 'https://static.vecteezy.com/system/resources/previews/055/988/850/non_2x/a-delicious-plate-of-hummus-with-pita-bread-falafel-cucumbers-and-olives-photo.jpg',
        spice: 0
      },
      {
        id: 'mediterranean-6',
        name: 'Baklava',
        description: 'Sweet pastry with layers of phyllo, nuts, and honey syrup',
        price: 8.99,
        image: 'https://tryaladdin.com/cdn/shop/collections/antep-baklava-740953.jpg?crop=center&height=1200&v=1683765420&width=1200',
        spice: 0
      }
    ]
  }
};

let currentCuisine = 'indian';

function addToCart(dish) {
  const existingItem = cart.find(item => item.id === dish.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }

  updateCartDisplay();
  updateCartButton(dish.id, true);
}

function removeFromCart(dishId) {
  const itemIndex = cart.findIndex(item => item.id === dishId);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity -= 1;

    if (cart[itemIndex].quantity === 0) {
      cart.splice(itemIndex, 1);
      updateCartButton(dishId, false);
    }
  }

  updateCartDisplay();
}

function updateCartButton(dishId, added) {
  const btn = document.querySelector(`[data-dish-id="${dishId}"]`);
  if (btn) {
    const item = cart.find(item => item.id === dishId);
    if (item && item.quantity > 0) {
      btn.textContent = `Added (${item.quantity})`;
      btn.classList.add('added');
    } else {
      btn.textContent = 'Add to Order';
      btn.classList.remove('added');
    }
  }
}

function updateCartDisplay() {
  const cartPanel = document.getElementById('cart-panel');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    cartTotal.textContent = '$0.00';
    cartCount.textContent = '0';
    return;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="cart-btn-decrease" data-id="${item.id}">-</button>
        <span class="cart-item-quantity">${item.quantity}</span>
        <button class="cart-btn-increase" data-id="${item.id}">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;

  document.querySelectorAll('.cart-btn-decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromCart(btn.dataset.id);
    });
  });

  document.querySelectorAll('.cart-btn-increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dish = Object.values(cuisines)
        .flatMap(c => c.dishes)
        .find(d => d.id === btn.dataset.id);
      if (dish) addToCart(dish);
    });
  });
}

function renderHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="header-content">
      <div class="logo">Global Flavors</div>
      <nav class="cuisine-nav">
        ${Object.keys(cuisines).map(key => `
          <button class="cuisine-btn ${key === currentCuisine ? 'active' : ''}" data-cuisine="${key}">
            ${cuisines[key].name.replace(' Cuisine', '')}
          </button>
        `).join('')}
      </nav>
      <button class="cart-toggle" id="cart-toggle">
        <span class="cart-icon">🛒</span>
        <span class="cart-count" id="cart-count">0</span>
      </button>
    </div>
  `;
  return header;
}

function renderHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <h1>Discover World Flavors</h1>
    <p>Embark on a culinary journey across continents</p>
  `;
  return hero;
}

function renderDishes(cuisine) {
  const section = document.createElement('section');
  section.className = 'fade-in';

  const title = document.createElement('h2');
  title.className = 'cuisine-title';
  title.textContent = cuisines[cuisine].name;

  const grid = document.createElement('div');
  grid.className = 'dishes-grid';

  cuisines[cuisine].dishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'dish-card';

    const spiceIndicator = dish.spice > 0 ? `
      <div class="spice-indicator">
        ${Array(dish.spice).fill('<div class="spice-dot"></div>').join('')}
      </div>
    ` : '';

    const cartItem = cart.find(item => item.id === dish.id);
    const buttonText = cartItem ? `Added (${cartItem.quantity})` : 'Add to Order';
    const buttonClass = cartItem ? 'added' : '';

    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" class="dish-image" loading="lazy" />
      <div class="dish-content">
        <h3 class="dish-name">${dish.name}</h3>
        <p class="dish-description">${dish.description}</p>
        <div class="dish-footer">
          <div class="dish-price">$${dish.price.toFixed(2)}</div>
          <button class="add-to-cart ${buttonClass}" data-dish-id="${dish.id}">${buttonText}</button>
        </div>
        ${spiceIndicator}
      </div>
    `;

    const addButton = card.querySelector('.add-to-cart');
    addButton.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(dish);
    });

    grid.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(grid);
  return section;
}

function renderCartPanel() {
  const cartPanel = document.createElement('div');
  cartPanel.className = 'cart-panel';
  cartPanel.id = 'cart-panel';
  cartPanel.innerHTML = `
    <div class="cart-header">
      <h3>Your Order</h3>
      <button class="cart-close" id="cart-close">✕</button>
    </div>
    <div class="cart-body" id="cart-items">
      <div class="empty-cart">Your cart is empty</div>
    </div>
    <div class="cart-footer">
      <div class="cart-total-label">Total:</div>
      <div class="cart-total-price" id="cart-total">$0.00</div>
    </div>
  `;
  return cartPanel;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; 2025 Global Flavors. Bringing world cuisine to your table.</p>
  `;
  return footer;
}

function updateCuisine(cuisine) {
  currentCuisine = cuisine;
  document.body.className = cuisines[cuisine].theme;

  const main = document.querySelector('main');
  const dishesSection = main.querySelector('section:not(.hero)');
  if (dishesSection) {
    dishesSection.remove();
  }

  main.appendChild(renderDishes(cuisine));

  document.querySelectorAll('.cuisine-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cuisine === cuisine);
  });
}

function init() {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const header = renderHeader();
  const main = document.createElement('main');
  main.appendChild(renderHero());
  main.appendChild(renderDishes(currentCuisine));
  const footer = renderFooter();
  const cartPanel = renderCartPanel();

  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
  app.appendChild(cartPanel);

  document.body.className = cuisines[currentCuisine].theme;

  document.querySelectorAll('.cuisine-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCuisine(btn.dataset.cuisine);
    });
  });

  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  const cartPanelElement = document.getElementById('cart-panel');

  cartToggle.addEventListener('click', () => {
    cartPanelElement.classList.toggle('open');
  });

  cartClose.addEventListener('click', () => {
    cartPanelElement.classList.remove('open');
  });

  cartPanelElement.addEventListener('click', (e) => {
    if (e.target === cartPanelElement) {
      cartPanelElement.classList.remove('open');
    }
  });
}

init();
