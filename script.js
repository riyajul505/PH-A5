function buttonClicked(id) {
  selected(id);
  // Seat left show
  const seatLeft = getById("seat-left");
  seatLeft.innerText = `${40 - totalClicked} Seats left`;
  // Total selected seat
  const selectedSeat = getById("selected-seat");
  selectedSeat.innerText = totalClicked;

  // append seat number and class and price

  // Updading total price
  const totalPrice = getById("total-price");
  totalPrice.innerText = `BDT ${totalClicked * 550}`;

  // Grand Total update
  const grandTotal = getById("grand-total");
  grandTotal.innerText = `BDT ${totalClicked * 550}`;
}

// Selected Function
let totalClicked = 0;
let seats = [];
function selected(id) {
  const selectedButton = getById(id);

  if (totalClicked < 4) {
    if (seats.includes(id)) {
      alert("select another seats");
      // selectedButton.style.background = "#F7F8F8";
      // totalClicked -= 1;
    } else {
      selectedButton.style.background = "#1DD100";
      totalClicked += 1;
      const parentDiv = getById("seat-number");
      const childdiv = document.createElement("div");
      childdiv.classList.add("flex");
      childdiv.classList.add("justify-between");

      const newChild = document.createElement("span");
      newChild.innerText = id;
      childdiv.appendChild(newChild);

      const newChild2 = document.createElement("span");
      newChild2.innerText = "Economy";
      childdiv.appendChild(newChild2);

      const newChild3 = document.createElement("p");
      newChild3.innerText = "550";
      childdiv.appendChild(newChild3);

      parentDiv.appendChild(childdiv);
    }
  } else {
    alert("you can select max four seats");
  }
  seats.push(id);

  console.log("file connected and total clicked", totalClicked);
}

function getById(id) {
  const a = document.getElementById(id);
  return a;
}

// coupon disable and enalbe
document
  .getElementById("coupon-code")
  .addEventListener("keyup", function (event) {
    const userTyped = event.target.value;
    if (userTyped == "NEW15" ) {
      document.getElementById("coupon-button").removeAttribute("disabled");
    } else if (userTyped == "Couple 20") {
      document.getElementById("coupon-button").removeAttribute("disabled");
    } else {
      document.getElementById("coupon-button").setAttribute("disabled", true);
    }
  });

// Coupon button clicked

function couponApply() {
  const button = document.getElementById("coupon-button");
  button.addEventListener("click", function () {
    if (document.getElementById("coupon-code").value == "NEW15") {
      const total = (totalClicked * 550 * 15) / 100;

      document.getElementById("grand-total").innerText = `BDT ${
        totalClicked * 550 - total
      }`;
      document.getElementById("coupon-div").classList.add("hidden");
    } else if (document.getElementById("coupon-code").value == "Couple 20") {
      const total = (totalClicked * 550 * 20) / 100;

      document.getElementById("grand-total").innerText = `BDT ${
        totalClicked * 550 - total
      }`;
      document.getElementById("coupon-div").classList.add("hidden");
    }
  });
}
