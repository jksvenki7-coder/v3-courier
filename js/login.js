// ===============================
// login.js
// V3 Group of Business
// ===============================

import {
getAuth,
RecaptchaVerifier,
signInWithPhoneNumber

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(auth, "sendOtp", {
    size: "invisible"
});

const sendOtpBtn = document.getElementById("sendOtp");
const verifyOtpBtn = document.getElementById("verifyOtp");

let confirmationResult;

// Send OTP
sendOtpBtn.addEventListener("click", () => {

    const mobile = document.getElementById("mobile").value;

    if (mobile.length !== 10) {
        alert("Enter a valid 10-digit mobile number");
        return;
    }

    const phoneNumber = "+91" + mobile;

    signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
    )

    .then((result) => {

        confirmationResult = result;

        alert("OTP Sent Successfully");

        document.getElementById("otpSection").style.display = "block";

    })

    .catch((error) => {

        console.log(error);

        alert("Failed to Send OTP");

    });

});

// Verify OTP
verifyOtpBtn.addEventListener("click", () => {

    const otp = document.getElementById("otp").value;

    confirmationResult.confirm(otp)

    .then((result) => {

        const user = result.user;

        localStorage.setItem("userMobile", user.phoneNumber);

        alert("Login Successful");

        window.location.href = "profile.html";

    })

    .catch(() => {

        alert("Invalid OTP");

    });

});
