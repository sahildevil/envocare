// console.log("Script is running!");
let shopItemsData = [
  {
      "id":1,
      "name" : "Gentle Cleanser" ,
      "price" : 312 , 
      "desc" : " Deep Hyderation | Softens & Suples Skin | Anti-wrinkle | Toning | Brightening",
      "img" : "images/skincare1.jpeg"
      
  },
  {
      "id":2,
      "name" : "Brighten Skin Toner" ,
      "price" : 590 , 
      "desc" : " Fade Age Spots | Reduce Fine Line | Smoothen Complexion",
      "img" : "images/skincare3.jpeg"
      
  },

  {
      "id":3,
      "name" : "Hair Cleanser" ,
      "price" :  699, 
      "desc" : "#ecosorbet #peachcosmetics #natural Faster Hair Growth | Fights Hairfall | Prevents Breakage & Split Ends",
      "img" : "images/skincare4.jpeg"
      
  },

  {
      "id":4,
      "name" : "Organic BodyWash" ,
      "price" : 699 , 
      "desc" : "Elevate your bath time with our bath products rich in Vitamins and organic ingredients for softer skin",
      "img" : "images/skincare5.jpeg"
      
  },

  {
      "id":5,
      "name" : "Natural Hair Oil" ,
      "price" :999 , 
      "desc" : "Stimulates New Hair Growth | Controls Hair Fall | Reduces Hair Breakage",
      "img" : "images/skincare7.jpeg"
      
  },

  {
      "id":6,
      "name" : "Happy Bath" ,
      "price" :599 , 
      "desc" : "Gentle Cleansing | Deep Hyderation | Softens & Suples Skin | Anti-wrinkle | Toning | Brightening",
      "img" : "images/skincare8.jpeg"
      
  },

  {
    "id":7,
    "name" : "Plant Based MultiVitamin" ,
    "price" :499 , 
    "desc" : "21 Ayurvedic herbs|Putranjivak|Shatavari|Yashtimadhu|Natural Iron",
    "img" : "images/medicine2.png"
    
  },

  {
    "id":8,
    "name" : "Organic India Immunity - 60 Capsules Bottle" ,
    "price" :399 , 
    "desc" : "Katuki Rhizome 165 mg|Krishna Tulsi Leaf 55 mg|Vana Tulsi Leaf 55 mg",
    "img" : "images/medicine3.png"
    
  },

  {
    "id":9,
    "name" : "Ayurvedic Beautiful Skin Care Capsule -60caps" ,
    "price" :699 , 
    "desc" : "Organics Plant Based Multivitamin 60+ Ingredients With Vitamin B1, B2, B3, B5, B6, B7, B9, B12, A, C, D, E, K, Calcium.",
    "img" : "images/Medicine4.webp.png"
    
  },

  {
    "id":10,
    "name" : "True Basics LungDetox" ,
    "price" :499 , 
    "desc" : "BioPerine & Gingever and potent herbal extracts, it provides complete lung care.",
    "img" : "images/Medicine5.webp.png"
    
  },

  {
    "id":11,
    "name" : "EarthFul-Women Multi Vitamin 40+" ,
    "price" :899 , 
    "desc" : "Vegetarian Capsule shell|60 Capsules (30 day pack)|100% Plant. No side effects|Researched by doctors, nutritionists|FSSAI & GMP approved",
    "img" : "images/medicine8.png"
    
  },

  {
    "id":12,
    "name" : "Organic Herbs Neem Capsules" ,
    "price" :599 , 
    "desc" : "Neem Leaves 600 mg|Neem Soft Twigs 30 mg|Neem Flowers 20 mg",
    "img" : "images/Medicine7.webp.png"
    
  },
  
  {
    "id":13,
    "name" : "Recycled Paper Roll" ,
    "price" :299 , 
    "desc" : "- Made from 100% recycled paper, The Good Karma toilet rolls are 100% recycled , including the packaging.Invest in a sustainable future now!",
    "img" : "images/home2.webp"
    
  },

  {
    "id":14,
    "name" : "Orange Metal Chair" ,
    "price" :3999 , 
    "desc" : "Steel furniture- no wood, happy environment",
    "img" : "images/home3.webp"
    
  },

  {
    "id":15,
    "name" : "Recycled GlassWare" ,
    "price" :999 , 
    "desc" : "Glassware- made from recycled glass, wine bottles, free from polluting plastics",
    "img" : "images/home5.jpeg"
    
  },

  {
    "id":16,
    "name" : "Set of Colorful chairs" ,
    "price" :3999 , 
    "desc" : "Recycled plastic furniture made from 100% recycled plastic",
    "img" : "images/home1.jpg"
    
  },

  {
    "id":17,
    "name" : "Marble Table" ,
    "price" :10000 , 
    "desc" : "The base in wood features two sets of feet with a lavish gold leaf that strikingly complements the top in Calacatta marble framed in brass.",
    "img" : "images/home6.webp"
    
  },

  {
    "id":18,
    "name" : "Metal Chair" ,
    "price" :999 , 
    "desc" : "No wood, happy environment | Made from 100% recycled plastic",
    "img" : "images/home4.webp"
    
  },

  {
    "id":19,
    "name" : "White Kurti" ,
    "price" :999 , 
    "desc" : "100% pure cotton, natural dyes",
    "img" : "images/cloth1.webp"
    
  },

  {
    "id":20,
    "name" : "Yellow Co-ord Set" ,
    "price" :1999 , 
    "desc" : "100% pure cotton, natural dyesc",
    "img" : "images/cloth2.webp"
    
  },

  {
    "id":21,
    "name" : "Black Shirt" ,
    "price" :999 , 
    "desc" : "100% pure linen, natural dyes",
    "img" : "images/cloth3.webp"
    
  },

  {
    "id":22,
    "name" : "Brown Shirt" ,
    "price" :999 , 
    "desc" : "100% pure linen, natural dyes",
    "img" : "images/cloth4.webp"
    
  },

  {
    "id":23,
    "name" : "White Embroided Kurti" ,
    "price" :999 , 
    "desc" : "100% pure cotton, natural dyes",
    "img" : "images/cloth5.png"
    
  },

  {
    "id":24,
    "name" : "White Embroided Kurti" ,
    "price" :999 , 
    "desc" : "100% pure linen, natural dyes",
    "img" : "images/cloth6.png"
    
  },

  {
    "id":25,
    "name" : "Pure and natural jaggery" ,
    "price" :599 , 
    "desc" : "Great alternative to white sugar. Chemical free. High in nutrition (1kg)",
    "img" : "images/Eat1.jpg"
    
  },

  {
    "id":26,
    "name" : "Raw Himalyan Honey" ,
    "price" :499 , 
    "desc" : "- Sourced from the jungle areas of Reasi, Jammu, Doda and Udhampur, Raw Himalayan Honey is unprocessed honey in its purest form.",
    "img" : "images/eat5.avif"
    
  },

  {
    "id":27,
    "name" : "Ashwaghanda - ORGANIC INDIA Ashwagandha Ayurvedic Capsulesy" ,
    "price" :799 , 
    "desc" : "Relieves Stress & Builds Vitality|A natural dietary supplement to treat low energy states and exhaustion|Protects against infections, cold and flu .",
    "img" : "images/Eat2.webp"
    
  },

  {
    "id":28,
    "name" : "Desi cow Ghee" ,
    "price" :599 , 
    "desc" : "- Made by an ancient Indian Bilona method, this Ghee is Healthier, Tastier & Aromatic, as all the nutrients of the milk are retained in the curd from which the Ghee is made",
    "img" : "images/Eat3.webp"
    
  },

  {
    "id":29,
    "name" : "Raw Himalayan Honey" ,
    "price" :599 , 
    "desc" : "- Sourced from the jungle areas of Reasi, Jammu, Doda and Udhampur, Raw Himalayan Honey is unprocessed honey in its purest form.",
    "img" : "images/Eat4.jpg"
    
  },

  {
    "id":30,
    "name" : "Sanjeevini Multigrain Health" ,
    "price" :999 , 
    "desc" : "Millets and multigrains from across India come together to make Sanjeevini, a wholesome health drink which takes an instant to prepare.",
    "img" : "images/eat6.webp"
    
  },
  {
    "id":31,
    "name" : "She'sCup" ,
    "price" :399 , 
    "desc" : "Allergen-free and non-irritating|Maintaining vaginal pH and flora|Freedom of movement",
    "img" : "images/Women1.jpeg"
    
  },

  {
    "id":32,
    "name" : "100% Organic Tampons" ,
    "price" :399 , 
    "desc" : "100% Organic Tampons|Leak-free|Odour-Free|Comfortable",
    "img" : "images/Women3.jpeg"
    
  },

  {
    "id":33,
    "name" : "Plush Intimate Wash" ,
    "price" :299 , 
    "desc" : "100% Water based|pH Balanced|Infused with Aloe Vera||Discreet delivery.",
    "img" : "images/Women4.jpeg.png"
    
  },

  {
    "id":34,
    "name" : "Daily Use Products" ,
    "price" :299 , 
    "desc" : "Maintain The pH Balance Of Your Genitals | Dermatologically Tested",
    "img" : "images/women5.png"
    
  },

  {
    "id":35,
    "name" : "Hassle-free Menses" ,
    "price" :399 , 
    "desc" : "Stay ahead of your period with our complete Menstrual Care Kit.",
    "img" : "images/Women6.jpeg.png"
    
  },

  {
    "id":36,
    "name" : "Juicy Chemistry Intimate Powder" ,
    "price" :399 , 
    "desc" : "This organic dusting powder is a blend of pure floral powders of Damask Rose (Gulab) and Jasmine (Chameli), gentle clays, and root powders, that work together to keep skin dry and cool.",
    "img" : "images/Women8.jpeg.png"
    
  },


]
/*

//wishlist js
let wishlist = [];

function addToWishlist(item) {
  wishlist.push(item);
}

// Example of adding an item to the wishlist
const sampleItem = [{
  id: 1,
  name: "Gentle Cleanser",
  price: 312,
  desc: " Deep Hyderation | Softens & Suples Skin | Anti-wrinkle | Toning | Brightening",
  img : "images/skincare1.jpeg"
  
},
{
  id: 2,
  name:  "Brighten Skin Toner",
  price: 590,
  desc:  " Fade Age Spots | Reduce Fine Line | Smoothen Complexion",
  img : "images/skincare3.jpeg"
  
}
];

addToWishlist(sampleItem);

console.log(wishlist);

// Define a function to add items to the wishlist
function addToWishlist(itemId) {
  // Assuming you have a data structure to store wishlist items
  let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the item is already in the wishlist
  if (!wishlistItems.includes(itemId)) {
      wishlistItems.push(itemId);

      // Save the updated wishlist to local storage
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));

      // Show a popup or perform any other action to indicate successful addition to the wishlist
      alert('Item added to wishlist!');
  } else {
      // Show a message or perform any other action to indicate that the item is already in the wishlist
      alert('Item is already in the wishlist!');
  }
}

// Modify the addToCart function to pass the item ID to addToWishlist
function addToCart(itemId) {
  // Your existing code...

  // Add the following line to also add the item to the wishlist
  addToWishlist(itemId);
}

// Function to display wishlist items on the wishlist.html page
function displayWishlistItems() {
  let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
  // Use wishlistItems array to display items on the wishlist.html page
  // You can dynamically generate HTML elements or update the DOM as needed
}

// Call the displayWishlistItems function when the wishlist.html page loads
document.addEventListener('DOMContentLoaded', function () {
  displayWishlistItems();
});


*/







// cart js
let cartItems = [];

document.addEventListener('DOMContentLoaded', function () {
  // Load cart items from localStorage on page load
  loadCartItems();
  // Display cart items
  displayCartItems();
  // Update cart quantity in the icon
  updateCartQuantity();
  updateTotalPrice();
});

function loadCartItems() {
  const storedItems = localStorage.getItem('cartItems');
  cartItems = storedItems ? JSON.parse(storedItems) : [];
}

function saveCartItems() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}






function updateTotalPrice() {
  const totalPriceContainer = document.getElementById("totalPriceContainer");
  const totalPriceElement = document.getElementById("totalPrice");

  if (totalPriceContainer && totalPriceElement) {
    // Calculate total price
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    // Update the displayed total price
    totalPriceElement.textContent = totalPrice.toFixed(2); // You can customize the formatting as needed
  } else {
    console.error("totalPriceContainer or totalPriceElement not found in the document.");
  }
}


function addToCart(itemId) {
  const itemToAdd = shopItemsData.find(item => item.id === itemId);

  if (itemToAdd) {
    cartItems.push(itemToAdd);
    console.log("Cart items:", cartItems);

    // Save cart items to localStorage
    saveCartItems();

    // Display alert
    alert(`Product "${itemToAdd.name}" added to the cart`);

    // Refresh the page
    location.reload();
  }
  updateTotalPrice();
}

function removeFromCart(itemId) {
  const removedItem = cartItems.find(item => item.id === itemId);

  if (removedItem) {
    cartItems = cartItems.filter(item => item.id !== itemId);

    // Update the cart display after removal
    displayCartItems();

    // Save updated cart items to localStorage
    saveCartItems();

    // Display alert
    alert(`Product "${removedItem.name}" removed from the cart`);

    // Refresh the page
    location.reload();
  }
  updateTotalPrice();
}

function displayCartItems() {
  const cartTable = document.getElementById("cartTable");
  const cartQuantitySpan = document.getElementById("cart_quantity");

  // Check if the container element is found
  if (cartTable) {
    const tbody = cartTable.querySelector("tbody");

    // Check if tbody is found
    if (tbody) {
      // Clear previous content
      tbody.innerHTML = '';

      // Loop through the items in the cart and display them
      cartItems.forEach(item => {
        let row = tbody.insertRow();
        let cellName = row.insertCell(0);
        let cellPrice = row.insertCell(1);
        let cellDesc = row.insertCell(2);
        let cellImage = row.insertCell(3);
        let cellRemove = row.insertCell(4);

        cellName.textContent = item.name;
        cellPrice.textContent = item.price;
        cellDesc.textContent = item.desc;

        // You can also create an image element for each item
        let itemImage = document.createElement('img');
        itemImage.src = item.img;
        itemImage.alt = item.name;
        // Add the 'cart-image' class to the image element
        itemImage.classList.add('cart-image');

        cellImage.appendChild(itemImage);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
          removeFromCart(item.id);
        });
        cellRemove.appendChild(removeButton);
      });
    } else {
      console.error("Tbody not found in the document.");
    }

    // Update cart quantity
    updateCartQuantity();
  } else {
    console.error("Cart table not found in the document.");
  }
}

function updateCartQuantity() {
  const cartQuantitySpan = document.getElementById("cart_quantity");

  if (cartQuantitySpan) {
    // Update the cart quantity in the icon
    cartQuantitySpan.textContent = cartItems.length;
  } else {
    console.error("Cart quantity span not found in the document.");
  }
}