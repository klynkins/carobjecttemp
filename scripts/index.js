var car = {
    rental: [
        {
            name: "Economy",
            price: "$70.00",
            available: 175
        },
        {
            name: "Midsize",
            price: "$90.00",
            available: 85
        },
        {
            name: "Luxury",
            price: "$120.00",
            available: 60
        },
    ],
    name: "Enterprise Car Rental"
}

function displayDetails(vehicle) {
    console.log(vehicle);
    document.getElementById("price").innerHTML = car.rental[vehicle].price;
    document.getElementById("available").innerHTML = car.rental[vehicle].available;
}

for (var i = 0; i < car.rental.length; i++) {
    console.log("start");
    var radioBtn = document.createElement("INPUT");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "carType");
    radioBtn.setAttribute("value", i);
    radioBtn.setAttribute("id", "vehicle" + i);
   /* radioBtn.onclick = displayDetails(i); */
    radioBtn.setAttribute("onclick", "displayDetails(" + i + ")");
    var radioLbl = document.createElement("LABEL");
    radioLbl.innerHTML = car.rental[i].name;
    document.getElementById("radialSection").appendChild(radioBtn);
    document.getElementById("radialSection").appendChild(radioLbl);
    console.log("stop");
}

document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();
    if(!document.getElementById("confirmation").checked) {
        alert("Please agree to terms");
        return;
    }
    
    var radios = document.getElementsByName("carType");
    var carSelected = "";
    for (var i = 0; i < radios.length; i++) {
        if (!radios[i].checked) {
            carSelected = radios[i].value;
            break;
        }
    }
    
    if(carSelected == "") {
        alert("Pick a car please");
        return;
    }
    
    alert("You have reserved a car" + car.rental[parseInt(carSelected)].name + ".");
}