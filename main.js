// Task 1:

mailsArr = ['1', '2', '3', '4', '5'];
blackEmails = ['3', '4'];

function filterEmails(emailsStartList, blacklistedEmails) {
    let goodEmails = [];
    for (email of emailsStartList) {
        if (blacklistedEmails.includes(email) === false) {
            goodEmails.push(email);
        }
    }
    return goodEmails;
}

console.log(filterEmails(mailsArr, blackEmails));

// cd JS-4nd-Lesson    node main.js

// Task 2:


let amount = 30;
let sum = 52300;
let promo = 'MINUS_300';

function calculateSum(sumTotal, amountOfGoods, promocod = null) {
    if (sumTotal > 300) {
        if (promocod === "MINUS_300") {
            sumTotal -= 300;
        } if (amountOfGoods >= 10) {
            sumTotal *= 0.95;
        } if (sumTotal > 50000) {
            sumTotal -= ((sumTotal - 50000) * 0.8);
        } if (promocod === 'DISCOUNT15' && sumTotal > 20000) {
            sumTotal *= 0.85;
        }
    }
    return sumTotal;
}

console.log(calculateSum(sum, amount, promo));