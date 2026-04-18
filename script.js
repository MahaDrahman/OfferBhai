let selectedCategory = "";
let selectedItem = "";

// Step 2: Subcategories
function selectCategory(cat) {
  selectedCategory = cat;
  const sub = document.getElementById("subCategory");
  sub.innerHTML = "<h2>Select Item</h2>";

  let items = [];

  if (cat === "men" || cat === "kids") {
    items = ["Shirt", "Pant", "T-Shirt", "Punjabi", "Payjama", "Sandal"];
  } else {
    items = ["Three Piece", "Saree", "Shirt", "Pant"];
  }

  items.forEach(i => {
    sub.innerHTML += `<button onclick="selectItem('${i}')">${i}</button>`;
  });
}

// Step 3
function selectItem(item) {
  selectedItem = item;
  showOffers();
}

// Generate 30 showroom data
function generateOffers() {
  let data = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      name: "Showroom " + i,
      discount: Math.floor(Math.random() * 50) + 10
    });
  }
  return data;
}

// Step 5
function showOffers() {
  let offers = generateOffers();
  let min = document.getElementById("discountFilter").value;

  offers = offers.filter(o => o.discount >= min);

  // sort descending
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