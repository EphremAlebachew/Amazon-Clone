import React, { useEffect } from "react";
import "./App.css";

import Header from "./Componets/Header/Header";
import Home from "./Componets/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Componets/Checkout/Checkout";
import Login from "./Componets/Login/Login";
import { useStateValue } from "./Componets/StateProvider/StateProvider";
// import { Link, useHistory } from "react-router-dom";
// number 10 and nnumber 12 active but
// import {getBasketTotal} from "./reducer"
import { auth } from "./firebase";

import Payment from "./Componets/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Orders from "./Componets/Orders/Orders";



const promise = loadStripe(
  " pk_test_51N2zYXLvEApA3RUIdHoZ2orywkaUmCnTxLnymgUoyl4BUmtldMH6xMDVPG5SPhdGgYZmtS8KklU3tp68uJLlGzGO00bTRpYn26"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />{" "}
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />{" "}
                <Elements stripe={promise}>
                   <Payment/> 
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />{" "}
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />{" "}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
