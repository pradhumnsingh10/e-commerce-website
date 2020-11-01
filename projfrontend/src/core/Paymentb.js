import React, { useState, useEffect } from "react";
import { loadCart, cartEmpty } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getmeToken, processPayment } from "./helper/paymentbhelper";
import { createOrder } from "./helper/orderHelper";
import { isAutheticated } from "../auth/helper";

import DropIn from "braintree-web-drop-in-react";

const Paymentb = ({ products, setReload = f => f, reload = undefined }) => {
    const getAmount = () => {
        let amount = 0;
        products.map(p => {
            amount = amount + p.price;
        });
        return amount;
    };
    return ( <
        div >
        <
        h3 > Your bill is { getAmount() }
        $ < /h3>< /
        div >
    );
};

export default Paymentb;