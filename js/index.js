//  Booking Seat
let allSeats = [];
let seatAreas = document.getElementsByClassName("bus-Seats ");
for (let seatArea of seatAreas) {
  let seatBtn = seatArea.childNodes[1];
  seatArea.addEventListener("click", function (e) {
    let currentBtn = e.target;

    //  Add To Seat List
    let addedSeat = elementGetByIdAndInnerTextReturnToNumber("addedSeat");

    if (addedSeat == 4) {
      return alert("Sorry You Cannot Added More Seat");
    } else if (allSeats.includes(e.target.innerText)) {
      return alert("Already Selected");
    }
    // Push an Array
    allSeats.push(e.target.innerText);
    elementGetByIdAndSetValue("addedSeat", addedSeat + 1);

    //  Availabel Total Seat
    let availabeSeat = elementGetById("availabeSeat");
    let availabeSeatCount = availabeSeat.innerText;
    let total = availabeSeatCount.split(" ")[0];
    let totalSeat = parseInt(total);
    elementGetByIdAndSetValue("availabeSeat", totalSeat - 1);

    // Style Selected Seat
    currentBtn.style.backgroundColor = "#1DD100";
    currentBtn.style.color = "#fff";

    //  Create Seat List
    let seatListContainer = elementGetById("seat-list-container");
    let li = document.createElement("li");
    seatListContainer.appendChild(li);
    let p1 = document.createElement("p");
    p1.innerText = e.target.innerText;
    li.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerText = "Economoy";
    li.appendChild(p2);
    let p3 = document.createElement("p");
    p3.innerText = 550;
    li.appendChild(p3);

    //  Set Total Price
    let price = elementGetByIdAndInnerTextReturnToNumber("total-price");
    elementGetByIdAndSetValue("total-price", price + 550);
    // Set Grand Total
    let grandTotal = elementGetByIdAndInnerTextReturnToNumber("total-grand");
    elementGetByIdAndSetValue("total-grand", grandTotal + 550);

    // Validate Cupon Filed
    let totaSeats = elementGetByIdAndInnerTextReturnToNumber("addedSeat");
    let cpnFiled = document.getElementById("cuponFiled");
    console.log(totaSeats);
    if (totaSeats == 4) {
      let cuponBtn = elementGetById("cuponBtn");
      cuponBtn.removeAttribute("disabled");
      cuponBtn.classList.remove("bg-[#1cd10056]");
      cuponBtn.style.backgroundColor = "#1DD100";
      cpnFiled.removeAttribute("disabled");
    }
  });
}

//  Discount
let cuponBtn = elementGetById("cuponBtn");
cuponBtn.addEventListener("click", function () {
  //  Get Cupon Value
  let cpnFiled = document.getElementById("cuponFiled");
  let cuponFiled = cpnFiled.value;

  //    Check Cupon
  if (cuponFiled == "Couple 20") {
    // Calculate Discount
    let totalGrand = elementGetByIdAndInnerTextReturnToNumber("total-grand");
    let discount = (totalGrand * 20) / 100;
    let discountTotal = totalGrand - discount;
    //  Show Discount Price
    let discountContainer = elementGetById("discountContainer");
    let h2 = document.createElement("h2");
    h2.innerText = "Discount Price";
    discountContainer.appendChild(h2);
    let h3 = document.createElement("h2");
    h3.innerText = discount + " " + "BDT";
    discountContainer.appendChild(h3);
    elementGetByIdAndSetValue("total-grand", discountTotal);

    // Disabled Apply Button
    let cuponBtn = elementGetById("cuponBtn");
    cuponBtn.classList.add("hidden");
    // Disabled Input Cupon Filed
    cpnFiled.classList.add("hidden");
  } else if (cuponFiled == "NEW15") {
    // Calculate Discount
    let totalGrand = elementGetByIdAndInnerTextReturnToNumber("total-grand");
    let discount = (totalGrand * 15) / 100;
    let discountTotal = totalGrand - discount;
    //  Show Discount Price
    let discountContainer = elementGetById("discountContainer");
    let h2 = document.createElement("h2");
    h2.innerText = "Discount Price";
    discountContainer.appendChild(h2);
    let h3 = document.createElement("h2");
    h3.innerText = discount + " " + "BDT";
    discountContainer.appendChild(h3);
    elementGetByIdAndSetValue("total-grand", discountTotal);
    // Disabled Apply Button
    let cuponBtn = elementGetById("cuponBtn");
    cuponBtn.classList.add("hidden");
    // Disabled Input Cupon Filed
    cpnFiled.classList.add("hidden");
  } else {
    return alert("Invalid Cupon");
  }
});

//  Click the buy Ticket button and go to the ticket buy section
let ticketBuy = elementGetById("ticketBuy");
ticketBuy.addEventListener("click", function () {
  ticketBuy.setAttribute("href", "#ph-paribahan");
});

//  User info Filed Validate
document.getElementById("user-number").addEventListener("input", function (e) {
  let nextBtn = elementGetById("nextBtn");
  let totalBookinSeat = elementGetByIdAndInnerTextReturnToNumber("addedSeat");
  let number = e.target.value;
  if (number.length > 4 && totalBookinSeat > 0) {
    nextBtn.classList.remove("bg-[#1cd10056]");
    nextBtn.classList.add("bg-[#1DD100]");
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.classList.remove("bg-[#1DD100]");
    nextBtn.classList.add("bg-[#1cd10056]");
  }
});

//  Next Step

document.getElementById("nextBtn").addEventListener("click", function (e) {
  e.preventDefault();
  my_modal_2.showModal();
});

// Reload Page
document.getElementById("modalContinue").addEventListener("click", function () {
  window.location.reload();
});
