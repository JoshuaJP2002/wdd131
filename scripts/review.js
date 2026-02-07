if (!sessionStorage.getItem("submitted")) {

let count = localStorage.getItem("reviewCount") || 0;
count++;

localStorage.setItem("reviewCount", count);
sessionStorage.setItem("submitted", "true");

}

document.getElementById("counter").textContent =
localStorage.getItem("reviewCount");