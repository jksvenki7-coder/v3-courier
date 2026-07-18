// ===============================
// tracking.js
// V3 Group of Business
// ===============================

import { app } from "./firebase.js";

import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const db = getFirestore(app);

let map;
let marker;

// Google Map Initialize
function initMap() {

    const center = {
        lat: 13.6288,
        lng: 79.4192
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: center
    });

    marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Driver Location"
    });

}

window.onload = initMap;

// Track Order
window.trackOrder = async function () {

    const bookingId = document
        .getElementById("bookingId")
        .value
        .trim();

    if (bookingId === "") {
        alert("Enter Booking ID");
        return;
    }

    const ref = doc(db, "bookings", bookingId);

    const snap = await getDoc(ref);

    if (!snap.exists()) {

        alert("Booking Not Found");

        return;

    }

    const data = snap.data();

    document.getElementById("status").innerHTML =
        "Status : " + data.status;

    document.getElementById("driver").innerHTML =
        "Driver : " + (data.driverName || "Not Assigned");

    document.getElementById("vehicle").innerHTML =
        "Vehicle : " + (data.vehicle || "-");

    document.getElementById("eta").innerHTML =
        "ETA : " + (data.eta || "-");

    // Driver Location
    if (data.driverLat && data.driverLng) {

        const location = {
            lat: data.driverLat,
            lng: data.driverLng
        };

        marker.setPosition(location);

        map.setCenter(location);

    }

    // Call Driver
    if (data.driverMobile) {

        document
            .getElementById("callDriver")
            .href =
            "tel:" + data.driverMobile;

        document
            .getElementById("chatDriver")
            .href =
            "https://wa.me/91" +
            data.driverMobile;

    }

};

// Auto Refresh Every 10 Seconds
setInterval(() => {

    const bookingId =
        document.getElementById("bookingId").value;

    if (bookingId !== "") {

        trackOrder();

    }

}, 10000);
