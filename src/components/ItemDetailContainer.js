import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./itemDetail";
const {products} = require("../utils/data");

const ItemDetailContainer = () => {
    const [dato, setDato] =useState({});

    useEffect(() =>{
        customFetch(2000, data[8])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }
    );
    return (
        <ItemDetail item={dato}/>
    );
}