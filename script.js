const offers = [
  {category: "clothing", title: "Zara Sale", discount: "30%", location: "Jamuna Future Park"},
  {category: "restaurant", title: "KFC Combo", discount: "20%", location: "Jamuna Future Park"},
  {category: "skincare", title: "SkinCare Bundle", discount: "25%", location: "Jamuna Future Park"},
];

function showOffers(category) {
  const container = document.getElementById("offersContainer");
  container.innerHTML = "";

  const filtered = offers.filter(o => o.category === category);

  filtered.forEach(o => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${o.title}</h3>
      <p>Discount: ${o.discount}</p>
      <p>Location: ${o.location}</p>
    `;

    container.appendChild(div);
  });
}