import { app } from "./firebase.js";

import {

getFirestore,

collection,

query,

where,

getDocs

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const db = getFirestore(app);

const mobile = localStorage.getItem("userMobile");

async function loadOrders(){

const q = query(

collection(db,"bookings"),

where("mobile","==",mobile)

);

const snapshot = await getDocs(q);

let html="";

snapshot.forEach(doc=>{

const d = doc.data();

html += `

<tr>

<td>${d.bookingId}</td>

<td>${d.service}</td>

<td>${d.pickup}</td>

<td>${d.drop}</td>

<td>${d.date}</td>

<td>${d.status}</td>

<td>${d.price}</td>

<td>

<a href="tracking.html?id=${d.bookingId}">

Track

</a>

</td>

</tr>

`;

});

document.getElementById("ordersTable").innerHTML=html;

}

loadOrders();
