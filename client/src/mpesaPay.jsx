import MpesaPay from 'mpesapay';

const Consumer_Key = ' mKdD1HUFErc9Gcvs1kHuX9tZkkVN6F1e';
const Consumer_Secret = 'LjxjP7U0adCGpBjQ';
const Business_Short_Code = '174379';
const Passkey = 'MTc0Mzc5YmZiMjc5TliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3';
const Transaction_Description = 'CustomerPayBillOnline';
const Account_Reference = 'YOUR_ACCOUNT_REFERENCE';
const PartyA = "600426"
const B2C_Security_Credential = "XtTpAQtiNWkmfarRBUY7u7wo22HWepIVZ1cN5Kfy9opjSDi7FwyPcARVERTj+kgVRHF5uXaI30Z2wkoYFm6VanNcMRMk5jv9MlzK3NOOyYULmPF9y1l8eP/DzyxcgHQJkzia35U2Ul/innDlJ6z+1hlXCnvIDSham6a4sH8RYavPXmmnYWz2PYRgZaqWLMVFVu4M13oROZDfoQPcrQn/vuSX3F6WisYjvQg2E0HE1Y7LgBcr3f5cFahew331OCoZC8Fp3okdTjdetnnGWXZEmonKHJqp1RYzRN8HaEXaplWdY8Yrd5J+jnqQ/r3uHOpEDGtGLJNCFolsyt6RkXd2Nw=="
const Initiator_Name = "testapi"
const Environment = 'sandbox | live'
 
 
 
const mpesapay = new MpesaPay(
  Consumer_Key,
  Consumer_Secret,
  Business_Short_Code,
  Passkey,
  Account_Reference,
  Transaction_Description,
  PartyA,
  B2C_Security_Credential,
  Initiator_Name,
  Environment
);

async function initiatePayment(amount, phoneNumber, callbackUrl) {
  try {
    const response = await mpesapay.stkPush(amount, phoneNumber, callbackUrl);
    console.log(response);
    // Handle the response data
  } catch (error) {
    console.error(error);
    // Handle errors
  }
}
 
// Call the function to initiate a payment
const amount = '100';
const phoneNumber = '254706535423';
const callbackUrl = 'https://example.com/callback';
initiatePayment(amount, phoneNumber, callbackUrl);