// ==========================================
// Session 2: Variables, Data Types & Operators
// ==========================================

// Task 1
// var, let, const

var name = "Shreyansh";
let age = 24;
const favoriteApp = "YouTube";

console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite App:", favoriteApp);

// ==========================================
// Task 2
// Array and Object
// ==========================================

let foodItems = ["Pizza", "Paneer Tikka", "Burger", "Biryani"];

let userProfile = {
  username: "Shreyansh",
  isPremium: true,
  walletBalance: 250,
};

console.log("Food Items:", foodItems);
console.log("User Profile:", userProfile);

// ==========================================
// Task 3
// Flipkart-style Cart Total Calculator
// ==========================================

let itemPrice = 500;
let quantity = 3;
let GST = 18;

// Calculate subtotal
let subtotal = itemPrice * quantity;

// Calculate GST amount
let gstAmount = (subtotal * GST) / 100;

// Final bill
let finalBill = subtotal + gstAmount;

console.log("Item Price:", itemPrice);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("GST Amount:", gstAmount);
console.log("Final Bill:", finalBill);

// ==========================================
// Task 4
// Discount Eligibility
// ==========================================

function isEligibleForDiscount(walletBalance) {
  return walletBalance > 100 ? true : false;
}

console.log("Balance 50:", isEligibleForDiscount(50));

console.log("Balance 150:", isEligibleForDiscount(150));

// ==========================================
// Task 5
// Login + Wallet Check
// ==========================================

let isLoggedIn = true;

if (isLoggedIn && userProfile.walletBalance >= 200) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
