const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51N2zYXLvEApA3RUIP0YRItpLi18zvkg8rVMo3eDw3GsDnkwDhLPhFrYzpKzqglT7RmC0b2kJvHJchRfn1JqPl1e2009YoX2cOx");
// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// route
app.get("/", (request, response) => response.status(200).send("hello world"));
// - API routes

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  listening
exports.api = functions.https.onRequest(app);
//http://127.0.0.1:5001/clone-2d27a/us-central1/api