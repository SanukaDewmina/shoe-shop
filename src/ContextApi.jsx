import { createContext, useState } from "react";
import { heros, icons, shoes } from "./assets/data";

export const shopContext = createContext()

const ShopContextProvider = (props) => {



let total = 0;
let shipping = 0;
const currency= "$";
const [size, setSize] = useState("");
const [cart , setCart] = useState([]);
const [wishlist,setWishlist] = useState([])

// payment and delivery options
const [optns1, setOptns1] = useState(""); 
const [optns2, setOptns2] = useState(""); 

// payment options
const [payment , setPayment] = useState("Cashondelivery")

// Delivery options
const [delivery , setDelivery] = useState("Cashondelivery")

// logingand signup
const [name, setName] = useState('');
const [email, setEmail] = useState('');



cart.forEach(item => {

  total = item.newPrice*item.quantity
  
})

// shipping total set

if(optns1 === "atShop"){
   shipping = 0;
}
if(optns1 === "standard"){
  shipping = 100;
}
if(optns1 === "sameday"){
  shipping = 400;
}

  // ---------All the Contex ----------
const value = {
  total,
  currency,
  size,
  setSize,
  cart,
  setCart,
  shoes,
  icons,
  heros,
  wishlist,
  setWishlist,
  payment,
  setPayment,
  delivery,
  setDelivery,
  optns1,
  setOptns1,
  optns2,
  setOptns2,
  shipping,
  name,
  setName,
  email,
  setEmail,


}


return(
  <shopContext.Provider value={value}>
    {props.children}
  </shopContext.Provider>

)
}

export default ShopContextProvider