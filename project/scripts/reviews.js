const form = document.getElementById("reviewForm");
const container = document.getElementById("reviewsContainer");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function displayReviews() {
    container.innerHTML = "";

    reviews.forEach(review => {

        const div = document.createElement("div");
        div.classList.add("review");

        div.innerHTML = `
            <h3>${review.name}</h3>
            <p>Rating: ${"⭐".repeat(review.rating)}</p>
            <p>${review.comment}</p>
        `;

        container.appendChild(div);
    });
}

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    const newReview = {
        name: name,
        rating: rating,
        comment: comment
    };

    reviews.push(newReview);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    form.reset();
    displayReviews();
});

displayReviews();