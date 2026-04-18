let mainCategory = "";
let selectedItem = "";

// Select main category
function selectMain(cat) {
  mainCategory = cat;
  document.getElementById("offers").innerHTML = "";
  showItems();
}

// Show items
function showItems() {
  const itemsDiv = document.getElementById("items");
  itemsDiv.innerHTML = "<h2>Select Item</h2>";

  let items = [];

  if (mainCategory === "clothing") {
    items = ["Shirt", "Pant", "T-Shirt", "Punjabi"];
  }

  else if (mainCategory === "restaurant") {
    items = ["Kacchi", "Teheri", "Fried Rice", "Burger"];
  }

  else if (mainCategory === "skincare") {
    items = ["Serum", "Moisturizer", "Sunscreen", "Toner", "Face Wash"];
  }

  items.forEach(i => {
    itemsDiv.innerHTML += `<button onclick="selectItem('${i}')">${i}</button>`;
  });
}

// Select item
function selectItem(item) {
  selectedItem = item;
  showOffers();
}

// Generate data
function generateOffers() {
  let data = [];
  let names = [];

  if (mainCategory === "restaurant") {
    names = [
      "Sultan's Dine","Kacchi Bhai","Teheri Ghar","Pizza Hut","KFC",
      "Burger King","Takeout","Madchef","Chillox","BFC",
      "Cafe Rio","Food Court 1","Food Court 2","Food Plaza",
      "Spicy House","Deshi Kitchen","Grill House","Urban Food",
      "Hot & Spicy","Food Hub","Tasty Bite","Royal Kitchen",
      "Dhaka Dine","Foodies","Hungry Point","Fast Food Zone",
      "Street Eat","BBQ Express","Rice Bowl","Burger Lab"
    ];
  }

  else if (mainCategory === "skincare") {
    names = [
      "The Body Shop","Skin Cafe","Aarong Beauty","Shajgoj",
      "Beauty Booth","Cosmetics World","Glow Shop","Care Zone",
      "Beauty Mart","Skin House","Derma Shop","Glow Care",
      "Fresh Skin","Beauty Hub","Skin Solution","Pure Care",
      "Natural Glow","Cosmo Shop","Skin Lab","Beauty Store",
      "Glow Point","Skin Center","Beauty Corner","Skin Plus",
      "Derma Care","Beauty Choice","Glow World","Skin Studio",
      "Care Beauty","Skin Mart"
    ];
  }

  else {
    for (let i = 1; i <= 30; i++) {
      names.push("Clothing Shop " + i);
    }
  }

  for (let i = 0; i < 30; i++) {
    data.push({
      name: names[i],
      discount: Math.floor(Math.random() * 50) + 10
    });
  }

  return data;
}

// Show offers
function showOffers() {
  let offers = generateOffers();
  let min = document.getElementById("discountFilter").value;

  offers = offers.filter(o => o.discount >= min);
  offers.sort((a, b) => b.discount - a.discount);

  const container = document.getElementById("offers");
  container.innerHTML = `<h2>Offers for ${selectedItem}</h2>`;

  offers.forEach(o => {
    container.innerHTML += `
      <div class="card">
        <h3>${o.name}</h3>
        <p>Discount: ${o.discount}%</p>
      </div>
    `;
  });
}git add .