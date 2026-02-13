// Array of car objects
const cars = [
    {
        make: "Toyota Camry",
        year: 2020,
        miles: 35000,
        price: 18900,
        image: "images/silver-camry.jpg"
    },
    {
        make: "Honda Civic",
        year: 2019,
        miles: 40200,
        price: 16500,
        image: "images/black-civic.jpg"
    },
    {
        make: "Ford Escape",
        year: 2018,
        miles: 51000,
        price: 15400,
        image: "images/blue-escape.jpg"
    },
    {
        make: "Nissan Altima",
        year: 2018,
        miles: 25000,
        price: 17400,
        image: "images/gray-altima.jpg"
    },
    {
        make: "Hyundai Elantra",
        year: 2018,
        miles: 45000,
        price: 14200,
        image: "images/darkblue-elantra.jpg"
    }
];

const container = document.getElementById("carContainer");
const filter = document.getElementById("priceFilter");


function displayCars(list) {
    container.innerHTML = "";

    list.forEach(car => {

        const card = document.createElement("article");
        card.classList.add("car-card");

        card.innerHTML = `
            <img src="${car.image}" alt="${car.year} ${car.make}">
            <h3>${car.year} ${car.make}</h3>
            <p>${car.miles.toLocaleString()} miles</p>
            <p class="price">$${car.price.toLocaleString()}</p>
        `;

        container.appendChild(card);
    });
}

filter.addEventListener("change", () => {

    const value = filter.value;

    if (value === "all") {
        displayCars(cars);
    } 
    else {
        const filtered = cars.filter(car => car.price <= value);
        displayCars(filtered);
    }
});

displayCars(cars);