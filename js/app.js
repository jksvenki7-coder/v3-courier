// ===============================
// V3 Group of Business
// app.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("V3 Website Loaded Successfully");

    // Book Now Button
    const form = document.querySelector("form");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const name = form.querySelector("input[placeholder='Your Name']").value.trim();
            const mobile = form.querySelector("input[placeholder='Mobile Number']").value.trim();
            const pickup = form.querySelector("input[placeholder='Pickup Location']").value.trim();
            const drop = form.querySelector("input[placeholder='Drop Location']").value.trim();
            const service = form.querySelector("select").value;

            if(name==="" || mobile==="" || pickup==="" || drop===""){
                alert("Please fill all details.");
                return;
            }

            if(mobile.length!=10){
                alert("Enter valid mobile number.");
                return;
            }

            let message =
`Hello V3 Group of Business

New Booking

Name : ${name}

Mobile : ${mobile}

Service : ${service}

Pickup : ${pickup}

Drop : ${drop}

Please confirm my booking.`;

            let whatsapp =
"https://wa.me/919030868681?text=" + encodeURIComponent(message);

            window.open(whatsapp,"_blank");

        });

    }

});


// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Welcome Notification

setTimeout(function(){

console.log("Welcome to V3 Group of Business");

},1000);
