# TDD - Vending Machine System
javascript tdd vending machine system

call getChange(totalPayable, cashPaid) the function must return array of coins

Use Thai coins
1 Baht
2 Baht
5 Baht
10 Baht

## Test Case
* case #1 ราคา 1 บาท จ่ายเงิน 1 บาท เงินทอนต้องได้ []
* case #2 ราคา 3 บาท จ่ายเงิน 4 บาท ต้องได้เงินทอน [1]
* case #3 ราคา 3 บาท จ่ายเงิน 5 บาท ต้องได้เงินทอน [2]
* case #4 ราคา 3 บาท จ่ายเงิน 6 บาท ต้องได้เงินทอน [2,1]
* case #5 ราคา 2 บาท จ่ายเงิน 20 บาท ต้องได้เงินทอน [10, 5, 2 ,1]

## Install
npm install

## Run Test
node test.js

## View Code Coverage
.\node_modules\.bin\istanbul.cmd cover test.js