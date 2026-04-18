console.log("JS Loaded ✅");

let mainCategory = "";
let selectedItem = "";

// Select category
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

// Generate offers
function generateOffers() {
  let data = [];

  for (let i = 1; i <= 30; i++) {
    data.push({
      name: mainCategory + " Shop " + i,
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
}