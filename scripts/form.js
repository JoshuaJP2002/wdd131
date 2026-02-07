const products = [
  { id: "p1", name: "Smart Refrigerator" },
  { id: "p2", name: "Robot Vacuum" },
  { id: "p3", name: "Air Fryer" },
  { id: "p4", name: "Smart TV" },
  { id: "p5", name: "Washing Machine" }
];

const select = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");

  option.value = product.id;
  option.textContent = product.name;

  select.appendChild(option);
});

