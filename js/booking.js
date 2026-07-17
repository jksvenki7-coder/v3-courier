// ===============================
// booking.js
// V3 Group of Business
// ===============================

// Base prices
const priceList = {
    "Parcel Delivery": 80,
    "Document Delivery": 50,
    "House Shifting": 1500,
    "Product Delivery": 120,
    "Car Booking": 300,
    "Bike Booking": 100,
    "Auto Booking": 150
};

// Calculate Price
function calculatePrice() {

    const service = document.getElementById("service").value;

    if (service === "") {
        alert("Please select a service.");
        return;
    }

    const amount = priceList[service] || 0;

    document.getElementById("price").innerHTML =
        "Estimated Price : ₹" + amount;
}

// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const bookingId = "V3" + Date.now();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const vehicle = document.getElementById("vehicle").value;
    const notes = document.getElementById("notes").value;

    const price = document
        .getElementById("price")
        .innerText
        .replace("Estimated Price : ", "");

    const message =
`🚚 V3 Group of Business

New Booking

Booking ID : ${bookingId}

Name : ${name}

Mobile : ${mobile}

Service : ${service}

Vehicle : ${vehicle}

Pickup : ${pickup}

Drop : ${drop}

Date : ${date}

Time : ${time}

Price : ${price}

Notes : ${notes}`;

    // WhatsApp
    const whatsapp =
    "https://wa.me/919030868681?text=" +
    encodeURIComponent(message);

    window.open(whatsapp, "_blank");

    alert("Booking Created Successfully");

    this.reset();

    document.getElementById("price").innerHTML =
    "Estimated Price : ₹0";

});

// Google Maps Placeholder
function initMap(){

console.log("Google Maps Loaded");

}

// Future Firebase Function
function saveBooking(){

console.log("Booking Saved");

}
