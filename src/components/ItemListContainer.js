import  ItemCount from "./itemCount";
import ItemList from "./ItemList";
import { Wrapper} from "./styledComponents";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
const { products } = require("../utils/data");


const itemListContainer = ({greeting}) => {
   const [datos, setDatos] = useState([]);
   
   useEffect(() => {
       customFetch(2000, products)
       .then(result => setDatos(result))
       .catch(err => console.log(err))
   })
}

const onAdd = (qty) => {
    alert("you have selected" + qty + "items,");
}

return (
    <>
      <Wrapper>{greeting}</Wrapper>
      <ItemList items={datos} />
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
)