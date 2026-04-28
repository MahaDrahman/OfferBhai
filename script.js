let category = "";
let selectedItem = "";

function selectCategory(cat) {
  category = cat;
  document.getElementById("offers").innerHTML = "";
  showItems();
}

function showItems() {
  const div = document.getElementById("items");
  div.innerHTML = "<h4>Select Item</h4>";

  let items = [];

  if (category === "clothing") {
    items = ["Shirt", "Pant", "T-Shirt", "Punjabi"];
  } 
  else if (category === "food") {
    items = ["Kacchi", "Teheri", "Fried Rice", "Burger"];
  } 
  else {
    items = ["Serum", "Moisturizer", "Sunscreen", "Toner", "Face Wash"];
  }

  items.forEach(i => {
    div.innerHTML += `<button class="btn btn-outline-dark m-2" onclick="selectItem('${i}')">${i}</button>`;
  });
}

function selectItem(item) {
  selectedItem = item;
  showOffers();
}

function generateOffers() {
  let arr = [];
  for (let i = 1; i <= 12; i++) {
    arr.push({
      name: category + " Shop " + i,
      discount: Math.floor(Math.random() * 50) + 10
    });
  }
  return arr;
}

function showOffers() {
  let data = generateOffers();
  let min = document.getElementById("filter").value;

  data = data.filter(o => o.discount >= min);
  data.sort((a,b) => b.discount - a.discount);

  const container = document.getElementById("offers");
  container.innerHTML = "";

  data.forEach(o => {
    container.innerHTML += `
      <div class="col-md-3 mb-3">
        <div class="card p-3 text-center">
          <h5>${o.name}</h5>
          <p class="text-success">${o.discount}% OFF</p>
          <button class="btn btn-sm btn-primary">View Deal</button>
        </div>
      </div>
    `;
  });
}