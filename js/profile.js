// ===============================
// profile.js
// V3 Group of Business
// ===============================

import { app } from "./firebase.js";

import {
getFirestore,
doc,
setDoc,
getDoc

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const db = getFirestore(app);

// Check Login
const mobile = localStorage.getItem("userMobile");

if (!mobile) {
    alert("Please Login First");
    window.location.href = "login.html";
}

// Load Mobile
document.getElementById("mobile").value = mobile;

// Load Profile
async function loadProfile() {

    const ref = doc(db, "users", mobile);

    const snap = await getDoc(ref);

    if (snap.exists()) {

        const data = snap.data();

        document.getElementById("name").value = data.name || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("address").value = data.address || "";
        document.getElementById("city").value = data.city || "";
        document.getElementById("state").value = data.state || "";
        document.getElementById("pincode").value = data.pincode || "";

    }

}

loadProfile();

// Save Profile
document.getElementById("saveProfile")
.addEventListener("click", async () => {

    const profile = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: mobile,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pincode: document.getElementById("pincode").value,
        updatedAt: new Date().toISOString()

    };

    await setDoc(doc(db, "users", mobile), profile);

    alert("Profile Saved Successfully");

});

// Preview Profile Image
document.getElementById("imageUpload")
.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        document.getElementById("profileImage").src =
        e.target.result;

    };

    reader.readAsDataURL(file);

});

// Logout
document.getElementById("logout")
.addEventListener("click", () => {

    localStorage.clear();

    alert("Logged Out Successfully");

    window.location.href = "login.html";

});
