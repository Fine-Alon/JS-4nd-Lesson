# JS-4th-Lesson  
### task 1:function which creates an array of email addresses not blacklisted.
### task 2: function applying disconts to product`s cart.
Task 1...  
Write a filter() function that creates an array of email addresses that are not blacklisted. The function should take as arguments: an array of strings with initial email addresses, an array of strings with blacklisted email addresses.  

Task 2...  
Write a calculate() function that calculates and returns the cost of a shopping cart after all discounts have been applied. The function takes 3   parameters as arguments:  

Cart total  
Number of items in the cart  
Promo code (default null)  

Rules and procedure (order is important!) for calculating discounts:  

If the promo code is 'MINUS_300', then $300 will be deducted from the amount. Moreover, if the amount is less than $300, then the total cost will be 0.  
When the number of items in the cart ≥10, a 5% discount is applied to the entire amount.    
If the amount exceeds 50,000, a 20% discount is applied to the amount in excess (that is, the difference between the cart amount and 50,000).  
If the promo code is 'DISCOUNT15', then a 15% discount is applied to the entire amount, but only if the amount is ≥20,000.  
Each next discount must be checked and applied to the amount after the previous discounts have been applied.   

my desidion:  

// Task 1:  

mailsArr = ['1', '2', '3', '4', '5'];  
blackEmails = ['3', '4'];  

function filterEmails(emailsStartList, blacklistedEmails) {  
__  let goodEmails = [];  
__  for (email of emailsStartList) {  
____  if (blacklistedEmails.includes(email) === false) {  
______  goodEmails.push(email);  
____  }  
__  }  
__  return goodEmails;  
}  

console.log(filterEmails(mailsArr, blackEmails));  


// Task 2:  

let amount = 30;  
let sum = 52300;  
let promo = 'MINUS_300';  

function calculateSum(sumTotal, amountOfGoods, promocod = null) {  
__  if (sumTotal > 300) {  
____  if (promocod === "MINUS_300") {  
______  sumTotal -= 300;  
____  } if (amountOfGoods >= 10) {  
______  sumTotal *= 0.95;  
____  } if (sumTotal > 50000) {  
______  sumTotal -= ((sumTotal - 50000) * 0.8);  
____  } if (promocod === 'DISCOUNT15' && sumTotal > 20000) {  
______  sumTotal *= 0.85;  
____  }  
__  }  
__  return sumTotal;  
}  

console.log(calculateSum(sum, amount, promo));  
