// ------- Shoes Images--------

import image1 from './shoe/img1.png';
import image2 from './shoe/img2.png';
import image3 from './shoe/img3.png';
import image4 from './shoe/img4.png';
import image5 from './shoe/img5.png';
import image6 from './shoe/img6.png';
import image7 from './shoe/img7.png';
import image8 from './shoe/img8.png';
import image9 from './shoe/img9.png';
import image10 from './shoe/img10.png';
import image11 from './shoe/img11.png';
import image12 from './shoe/img12.png';
import image13 from './shoe/img13.png';
import image14 from './shoe/img14.png';
import image15 from './shoe/img15.png';
import image16 from './shoe/img16.png';
import image17 from './shoe/img17.png';
import image18 from './shoe/img18.png';
import image19 from './shoe/img19.png';
import image20 from './shoe/img20.png';
import image21 from './shoe/img21.png';
import image22 from './shoe/img22.png';
import image23 from './shoe/img23.png';
import image24 from './shoe/img24.png';
import image25 from './shoe/img25.png';
import image26 from './shoe/img26.png';
import image27 from './shoe/img27.png';
import image28 from './shoe/img28.png';
import image29 from './shoe/img29.png';
import image30 from './shoe/img30.png';
import image31 from './shoe/img31.png';
import image32 from './shoe/img32.png';
import image33 from './shoe/img33.png';
import image34 from './shoe/img34.png';
import image35 from './shoe/img35.png';
import image36 from './shoe/img36.png';
import image37 from './shoe/img37.png';
import image38 from './shoe/img38.png';
import image39 from './shoe/img39.png';
import image40 from './shoe/img40.png';
import image41 from './shoe/img41.png';
import image42 from './shoe/img42.png';
import image43 from './shoe/img43.png';
import image44 from './shoe/img44.png';
import image45 from './shoe/img45.png';
import image46 from './shoe/img46.png';
import image47 from './shoe/img47.png';
import image48 from './shoe/img48.png';
import image49 from './shoe/img49.png';
import image50 from './shoe/img50.png';
import image51 from './shoe/img51.png';
import image52 from './shoe/img52.png';
import image53 from './shoe/img53.png';
import image54 from './shoe/img54.png';


// --------- All iconst import ----------

import cart from './icons/cart-black.svg';
import cart_white from './icons/cart-white.svg';
import heart from './icons/heart.svg';
import heart_white from './icons/heart-white.svg';
import search from './icons/search.svg';
import search_white from './icons/search-white.svg';
import cash from './icons/cash.svg';
import close from './icons/close.svg';
import delivery from './icons/delivery.svg';
import error from './icons/error.svg';
import menu from './icons/menu.svg';
import mscard from './icons/mscard.svg';
import paypal from './icons/paypal.svg';
import retun from './icons/return.svg';
import secure from './icons/secure.svg';
import success from './icons/success.svg';
import user from './icons/user.svg';
import visa from './icons/visa.svg';
import logo from './icons/logo.svg';


// --------------Category Images-----------------

import shoe1 from './catgo/nike-yellow.jpg';
import shoe2 from './catgo/office.jpg';
import shoe4 from './catgo/whit.jpg';
import shoe5 from './catgo/childrens.jpg';


// ------------hero -image -------

import hero1 from './hero1.png';
import hero2 from './hero2.png';
import hero3 from './hero3.png';




// -------------------------------------------------Arrays and objects list-------------------------------------------//



// ---------------Product list---------------------//
const shoes = [
  {
    id: 1,
    name: "Air Max Pro",
    newPrice: 4480,
    oldPrice: 5200,
    sale: true,
    type: "Running",
    brand: "Nike",
    color: "yellow & Black",
    instock: true,
    quantity: 1,
    offers: "",
    image:image1,
    productPageDetails: {
      description: "Perfect for long-distance running, the Air Max Pro offers superior cushioning and support.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10, 11, 12],
      reviews: 4.2,
    }
  },
  {
    id: 2,
    name: "Gel Kayano 25",
    newPrice: 3800,
    oldPrice: 5000,
    sale: true,
    type: "Running",
    brand: "Asics",
    color: "white",
    instock: true,
    quantity: 1,
    offers: "",
    image:image2,
    productPageDetails: {
      description: "Stability-focused running shoe with excellent support and cushioning.",
      materials: "Textile upper, rubber sole",
      sizesAvailable: [8, 9, 10, 11, 12],
      reviews: 4.4
    }
  },
  {
    id: 3,
    name: "Zoom Pegasus",
    newPrice: 3200,
    oldPrice: 4600,
    sale: false,
    type: "Running",
    brand: "Nike",
    color: "black&gray",
    instock: true,
    quantity: 1,
    offers: "",
    image:image3,
    productPageDetails: {
      description: "Lightweight running shoes with flexible sole for optimal movement.",
      materials: "Synthetic upper, foam midsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.5
    }
  },
  {
    id: 4,
    name: "Ultraboost 21",
    newPrice: 5500,
    oldPrice: 6200,
    sale: true,
    type: "Training",
    brand: "Adidas",
    color: "red",
    instock: true,
    quantity: 1,
    offers: "",
    image:image4,
    productPageDetails: {
      description: "High-performance shoes for training with responsive cushioning.",
      materials: "Primeknit upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11, 12],
      reviews: 4.8
    }
  },
  {
    id: 5,
    name: "Fresh Foam 1080v11",
    newPrice: 4500,
    oldPrice: 5000,
    sale: false,
    type: "Walking",
    brand: "New Balance",
    color: "whiteorange",
    instock: true,
    quantity: 1,
    offers: "",
    image:image5,
    productPageDetails: {
      description: "A premium shoe with fresh foam cushioning for comfort during walks.",
      materials: "Engineered mesh, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10, 11],
      reviews: 4.6
    }
  },
  {
    id: 6,
    name: "Classic Leather",
    newPrice: 3000,
    oldPrice: 4200,
    sale: true,
    type: "Casual",
    brand: "Reebok",
    color: "gray",
    instock: true,
    quantity: 1,
    offers: "10% Off",
    image:image6,
    productPageDetails: {
      description: "Timeless design with a comfortable fit, perfect for casual wear.",
      materials: "Leather upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.3
    }
  },
  {
    id: 7,
    name: "Metcon 6",
    newPrice: 3700,
    oldPrice: 4800,
    sale: false,
    type: "Training",
    brand: "Nike",
    color: "red",
    instock: true,
    quantity: 1,
    offers: "",
    image:image7,
    productPageDetails: {
      description: "Training shoes with durable build and traction support.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.5
    }
  },
  {
    id: 8,
    name: "Climacool Vento",
    newPrice: 4600,
    oldPrice: 5400,
    sale: true,
    type: "Running",
    brand: "Adidas",
    color: "yellow",
    instock: true,
    quantity: 1,
    offers: "",
    image:image8,
    productPageDetails: {
      description: "Ventilated shoes that keep feet cool during runs.",
      materials: "Textile upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.4
    }
  },
  {
    id: 9,
    name: "FuelCell Prism",
    newPrice: 3300,
    oldPrice: 4100,
    sale: false,
    type: "Running",
    brand: "New Balance",
    color: "red",
    instock: true,
    quantity: 1,
    offers: "",
    image:image9,
    productPageDetails: {
      description: "Responsive shoes designed for speed and performance.",
      materials: "Synthetic upper, rubber sole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.3
    }
  },
  {
    id: 10,
    name: "Club C 85",
    newPrice: 2900,
    oldPrice: 3700,
    sale: true,
    type: "Casual",
    brand: "Reebok",
    color: "White",
    instock: true,
    quantity: 1,
    offers: "20% Off",
    image: image10,
    productPageDetails: {
      description: "Classic casual shoes with minimal design for everyday wear.",
      materials: "Leather upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10, 11, 12],
      reviews: 4.6
    }
  },
  {
    id: 11,
    name: "React Infinity",
    newPrice: 5000,
    oldPrice: 6200,
    sale: true,
    type: "Training",
    brand: "Nike",
    color: "blue",
    instock: true,
    quantity: 1,
    offers: "",
    image: image11,
    productPageDetails: {
      description: "Highly cushioned shoe ideal for intense training sessions.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10, 11],
      reviews: 4.7
    }
  },
  {
    id: 12,
    name: "Pulseboost HD",
    newPrice: 3700,
    oldPrice: 4500,
    sale: false,
    type: "Running",
    brand: "Adidas",
    color: "brown",
    instock: true,
    quantity: 1,
    offers: "",
    image: image12,
    productPageDetails: {
      description: "A supportive running shoe designed for urban environments.",
      materials: "Knit upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.3
    }
  },
  {
    id: 13,
    name: "GEL-Contend 7",
    newPrice: 2800,
    oldPrice: 3500,
    sale: true,
    type: "Walking",
    brand: "Asics",
    color: "gray",
    instock: true,
    quantity: 1,
    offers: "",
    image: image13,
    productPageDetails: {
      description: "Reliable shoes with cushioned comfort for walking.",
      materials: "Synthetic upper, rubber sole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.2
    }
  },
  {
    id: 14,
    name: "Nitrel V4",
    newPrice: 3400,
    oldPrice: 4200,
    sale: true,
    type: "Running",
    brand: "New Balance",
    color: "black",
    instock: true,
    quantity: 1,
    offers: "",
    image: image14,
    productPageDetails: {
      description: "Trail running shoes designed for off-road comfort.",
      materials: "Mesh upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.5
    }
  },
  {
    id: 15,
    name: "Zig Kinetica II",
    newPrice: 4100,
    oldPrice: 4800,
    sale: false,
    type: "Casual",
    brand: "Reebok",
    color: "white",
    instock: true,
    quantity: 1,
    offers: "10% Off",
    image: image15,
    productPageDetails: {
      description: "Modern casual shoes with bold design for urban styling.",
      materials: "Textile upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.4
    }
  },
  {
    id: 16,
    name: "Air Zoom Tempo",
    newPrice: 5200,
    oldPrice: 6200,
    sale: true,
    type: "Running",
    brand: "Nike",
    color: "Pink",
    instock: true,
    quantity: 1,
    offers: "",
    image: image16,
    productPageDetails: {
      description: "Shoes with responsive cushioning for high-speed running.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.7
    }
  },
  {
    id: 17,
    name: "Duramo SL",
    newPrice: 2500,
    oldPrice: 3300,
    sale: false,
    type: "Training",
    brand: "Adidas",
    color: "graywhite",
    instock: true,
    quantity: 1,
    offers: "10% Off",
    image: image17,
    productPageDetails: {
      description: "Lightweight training shoes designed for daily workouts.",
      materials: "Textile upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.3
    }
  },
  {
    id: 18,
    name: "UltraBoost 21",
    newPrice: 6000,
    oldPrice: 7200,
    sale: true,
    type: "Running",
    brand: "Adidas",
    color: "purple",
    instock: true,
    quantity: 1,
    offers: "",
    image: image18,
    productPageDetails: {
      description: "Maximum comfort and energy return for long runs.",
      materials: "Primeknit upper, Boost midsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.8
    }
  },
  {
    id: 19,
    name: "Revolution 5",
    newPrice: 2400,
    oldPrice: 3000,
    sale: false,
    type: "Running",
    brand: "Nike",
    color: "green",
    instock: true,
    quantity: 1,
    offers: "",
    image: image19,
    productPageDetails: {
      description: "Lightweight shoes designed for daily comfort.",
      materials: "Synthetic upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.4
    }
  },
  {
    id: 20,
    name: "FuelCell Rebel",
    newPrice: 4300,
    oldPrice: 5100,
    sale: true,
    type: "Running",
    brand: "New Balance",
    color: "yellow",
    instock: true,
    quantity: 1,
    offers: "",
    image: image20,
    productPageDetails: {
      description: "Fast and responsive shoes for race day.",
      materials: "Synthetic upper, rubber sole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.6
    }
  },
  {
    id: 21,
    name: "Zig Elusion Energy",
    newPrice: 3700,
    oldPrice: 4600,
    sale: false,
    type: "Casual",
    brand: "Reebok",
    color: "gray",
    instock: true,
    quantity: 1,
    offers: "10% Off",
    image: image21,
    productPageDetails: {
      description: "Stylish shoes for casual comfort and bold design.",
      materials: "Textile upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.5
    }
  },
  {
    id: 22,
    name: "GEL-Nimbus 23",
    newPrice: 4900,
    oldPrice: 6000,
    sale: true,
    type: "Running",
    brand: "Nike",
    color: "white",
    instock: true,
    quantity: 1,
    offers: "",
    image: image22,
    productPageDetails: {
      description: "Cushioned running shoes designed for comfort over long distances.",
      materials: "Mesh upper, gel cushioning",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.7
    }
  },
  {
    id: 23,
    name: "SolarGlide ST 3",
    newPrice: 4100,
    oldPrice: 5000,
    sale: false,
    type: "Running",
    brand: "Adidas",
    color: "white",
    instock: true,
    quantity: 1,
    offers: "",
    image: image23,
    productPageDetails: {
      description: "Stable and supportive shoes for long-distance runs.",
      materials: "Textile upper, Boost midsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.6
    }
  },
  {
    id: 24,
    name: "Fresh Foam 1080",
    newPrice: 5200,
    oldPrice: 6200,
    sale: true,
    type: "Running",
    brand: "New Balance",
    color: "black",
    instock: false,
    quantity: 1,
    offers: "15% Off",
    image: image24,
    productPageDetails: {
      description: "Plush cushioning for everyday training.",
      materials: "Textile upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.8
    }
  },
  {
    id: 25,
    name: "Classic Leather",
    newPrice: 3200,
    oldPrice: 4000,
    sale: false,
    type: "Casual",
    brand: "Reebok",
    color: "orangered",
    instock: true,
    quantity: 1,
    offers: "",
    image: image25,
    productPageDetails: {
      description: "Classic leather shoes with timeless design.",
      materials: "Leather upper, rubber sole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.5
    }
  },
  {
    id: 26,
    name: "Pegasus Trail 3",
    newPrice: 4700,
    oldPrice: 5600,
    sale: true,
    type: "Trail",
    brand: "Nike",
    color: "gray",
    instock: true,
    quantity: 1,
    offers: "",
    image: image26,
    productPageDetails: {
      description: "All-terrain running shoes for rugged trails.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.7
    }
  },
  {
    id: 27,
    name: "GEL-Kayano 28",
    newPrice: 5300,
    oldPrice: 6400,
    sale: true,
    type: "Running",
    brand: "Asics",
    color: "brown",
    instock: true,
    quantity: 1,
    offers: "",
    image: image27,
    productPageDetails: {
      description: "Stability running shoes with enhanced cushioning.",
      materials: "Synthetic upper, gel cushioning",
      sizesAvailable: [8, 9, 10, 11],
      reviews: 4.8
    }
  },
  {
    id: 28,
    name: "Duramo 10",
    newPrice: 2500,
    oldPrice: 3300,
    sale: false,
    type: "Running",
    brand: "Adidas",
    color: "white",
    instock: true,
    quantity: 1,
    offers: "",
    image: image28,
    productPageDetails: {
      description: "Lightweight shoes designed for all-day comfort.",
      materials: "Synthetic upper, rubber sole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.3
    }
  },
  {
    id: 29,
    name: "Nitrel V5",
    newPrice: 3300,
    oldPrice: 4200,
    sale: true,
    type: "Trail",
    brand: "New Balance",
    color: "brown",
    instock: true,
    quantity: 1,
    offers: "",
    image: image29,
    productPageDetails: {
      description: "Trail running shoes with durable grip for off-road terrain.",
      materials: "Textile upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.6
    }
  },
  {
    id: 30,
    name: "Zig Wild Trail",
    newPrice: 3500,
    oldPrice: 4300,
    sale: true,
    type: "Trail",
    brand: "Reebok",
    color: "whiteblack",
    instock: true,
    quantity: 1,
    offers: "20% Off",
    image: image30,
    productPageDetails: {
      description: "Trail running shoes with rugged traction for off-road performance.",
      materials: "Mesh upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.4
    }
  },
  {
    id: 31,
    name: "ZoomX Invincible Run",
    newPrice: 5600,
    oldPrice: 6700,
    sale: true,
    type: "Running",
    brand: "Nike",
    color: "red",
    instock: false,
    quantity: 1,
    offers: "15% Off",
    image: image31,
    productPageDetails: {
      description: "Designed for long-distance runs with responsive cushioning.",
      materials: "Mesh upper, ZoomX foam",
      sizesAvailable: [6, 7, 8, 9, 10, 11],
      reviews: 4.9
    }
  },
  {
    id: 32,
    name: "Cloud X",
    newPrice: 5800,
    oldPrice: 6900,
    sale: true,
    type: "Running",
    brand: "New Balance",
    color: "Black",
    instock: true,
    quantity: 1,
    offers: "",
    image: image32,
    productPageDetails: {
      description: "Lightweight shoes offering superior cushioning and flexibility.",
      materials: "Mesh upper, CloudTec sole",
      sizesAvailable: [7, 8, 9, 10, 11, 12],
      reviews: 4.7
    }
  },
  {
    id: 33,
    name: "Forever Floatride",
    newPrice: 4500,
    oldPrice: 5500,
    sale: true,
    type: "Running",
    brand: "Reebok",
    color: "blue",
    instock: true,
    quantity: 1,
    offers: "",
    image: image33,
    productPageDetails: {
      description: "Responsive cushioning designed for smooth transitions.",
      materials: "Mesh upper, Floatride Foam",
      sizesAvailable: [6, 7, 8, 9, 10, 11],
      reviews: 4.6
    }
  },
  {
    id: 34,
    name: "Gel-Venture 8",
    newPrice: 3200,
    oldPrice: 4000,
    sale: true,
    type: "Trail",
    brand: "Asics",
    color: "black",
    instock: true,
    quantity: 1,
    offers: "",
    image: image34,
    productPageDetails: {
      description: "All-terrain trail running shoes with durable grip.",
      materials: "Synthetic upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.5
    }
  },
  {
    id: 35,
    name: "Solarboost 3",
    newPrice: 4700,
    oldPrice: 5600,
    sale: false,
    type: "Running",
    brand: "Adidas",
    color: "green",
    instock: true,
    quantity: 1,
    offers: "",
    image: image35,
    productPageDetails: {
      description: "Performance running shoes with targeted support.",
      materials: "Textile upper, Boost midsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.4
    }
  },
  {
    id: 36,
    name: "Nano X1",
    newPrice: 5300,
    oldPrice: 6200,
    sale: true,
    type: "Training",
    brand: "Reebok",
    color: "blue",
    instock: true,
    quantity: 1,
    offers: "15% Off",
    image: image36,
    productPageDetails: {
      description: "Versatile training shoes for performance and comfort.",
      materials: "Flexweave upper, EVA midsole",
      sizesAvailable: [7, 8, 9, 10, 11, 12],
      reviews: 4.8
    }
  },
  {
    id: 37,
    name: "Fresh Foam Hierro",
    newPrice: 5100,
    oldPrice: 6200,
    sale: true,
    type: "Trail",
    brand: "New Balance",
    color: "gold",
    instock: false,
    quantity: 1,
    offers: "",
    image: image37,
    productPageDetails: {
      description: "Trail running shoes with premium cushioning and grip.",
      materials: "Textile upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.9
    }
  },
  {
    id: 38,
    name: "Air Zoom Terra Kiger",
    newPrice: 4900,
    oldPrice: 5800,
    sale: false,
    type: "Trail",
    brand: "Nike",
    color: "black",
    instock: true,
    quantity: 1,
    offers: "15% Off",
    image: image38,
    productPageDetails: {
      description: "Lightweight trail running shoes for tough terrains.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.6
    }
  },
  {
    id: 39,
    name: "Supernova",
    newPrice: 3000,
    oldPrice: 3700,
    sale: true,
    type: "Running",
    brand: "Adidas",
    color: "orange",
    instock: true,
    quantity: 1,
    offers: "",
    image: image39,
    productPageDetails: {
      description: "Cushioned shoes for running and everyday comfort.",
      materials: "Textile upper, Boost midsole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.4
    }
  },
  {
    id: 40,
    name: "Gel-Excite 8",
    newPrice: 3700,
    oldPrice: 4600,
    sale: true,
    type: "Running",
    brand: "Asics",
    color: "blackred",
    instock: true,
    quantity: 1,
    offers: "",
    image: image40,
    productPageDetails: {
      description: "Breathable running shoes designed for daily runs.",
      materials: "Synthetic upper, gel cushioning",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.5
    }
  },
  {
    id: 41,
    name: "FuelCell Prism",
    newPrice: 4200,
    oldPrice: 5000,
    sale: true,
    type: "Running",
    brand: "New Balance",
    color: "blue",
    instock: true,
    quantity: 1,
    offers: "",
    image: image41,
    productPageDetails: {
      description: "Fast and responsive shoes for running with stability.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10],
      reviews: 4.7
    }
  },
  {
    id: 42,
    name: "Classic Nylon",
    newPrice: 2500,
    oldPrice: 3200,
    sale: true,
    type: "Casual",
    brand: "Reebok",
    color: "pink",
    instock: true,
    quantity: 1,
    offers: "",
    image: image42,
    productPageDetails: {
      description: "Classic shoes for everyday wear and style.",
      materials: "Nylon upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.4
    }
  },
  {
    id: 43,
    name: "SolarControl",
    newPrice: 4600,
    oldPrice: 5700,
    sale: true,
    type: "Running",
    brand: "Adidas",
    color: "redblack",
    instock: false,
    quantity: 1,
    offers: "",
    image: image43,
    productPageDetails: {
      description: "Stable running shoes designed for control and support.",
      materials: "Textile upper, Boost midsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.7
    }
  },
  {
    id: 44,
    name: "GT-1000 10",
    newPrice: 3900,
    oldPrice: 4700,
    sale: true,
    type: "Running",
    brand: "Asics",
    color: "purple",
    instock: true,
    quantity: 1,
    offers: "10% Off",
    image: image44,
    productPageDetails: {
      description: "Lightweight running shoes for balanced support and cushioning.",
      materials: "Mesh upper, gel cushioning",
      sizesAvailable: [6, 7, 8, 9, 10, 11],
      reviews: 4.8
    }
  },
  {
    id: 45,
    name: "Endorphin Shift 2",
    newPrice: 5200,
    oldPrice: 6000,
    sale: false,
    type: "Running",
    brand: "Saucony",
    color: "white",
    instock: true,
    quantity: 1,
    offers: "",
    image: image45,
    productPageDetails: {
      description: "Performance running shoes for speed and comfort.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.9
    }
  },
  {
    id: 46,
    name: "GlideRide 2",
    newPrice: 5400,
    oldPrice: 6300,
    sale: true,
    type: "Running",
    brand: "Asics",
    color: "green",
    instock: true,
    quantity: 1,
    offers: "",
    image: image46,
    productPageDetails: {
      description: "Responsive shoes for energy-efficient running.",
      materials: "Textile upper, FlyteFoam sole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.8
    }
  },
  {
    id: 47,
    name: "Charge RC 2",
    newPrice: 3000,
    oldPrice: 3600,
    sale: true,
    type: "Training",
    brand: "Under Armour",
    color: "blue",
    instock: false,
    quantity: 1,
    offers: "",
    image: image47,
    productPageDetails: {
      description: "Flexible and durable training shoes for versatile workouts.",
      materials: "Mesh upper, rubber outsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.6
    }
  },
  {
    id: 48,
    name: "Infinity Run Flyknit 3",
    newPrice: 5400,
    oldPrice: 6200,
    sale: true,
    type: "Running",
    brand: "Nike",
    color: "pink",
    instock: true,
    quantity: 1,
    offers: "",
    image: image48,
    productPageDetails: {
      description: "Soft and supportive running shoes for distance.",
      materials: "Flyknit upper, rubber sole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.7
    }
  },
  {
    id: 49,
    name: "Metcon 6",
    newPrice: 4900,
    oldPrice: 5800,
    sale: true,
    type: "Training",
    brand: "Nike",
    color: "red",
    instock: true,
    quantity: 1,
    offers: "20% Off",
    image: image49,
    productPageDetails: {
      description: "High-performance training shoes for heavy workouts.",
      materials: "Mesh upper, rubber sole",
      sizesAvailable: [7, 8, 9, 10, 11, 12],
      reviews: 4.9
    }
  },
  {
    id: 50,
    name: "TriBase Reign 3",
    newPrice: 4500,
    oldPrice: 5300,
    sale: false,
    type: "Training",
    brand: "Under Armour",
    color: "green",
    instock: true,
    quantity: 1,
    offers: "",
    image: image50,
    productPageDetails: {
      description: "Durable shoes for stability and control in training.",
      materials: "Textile upper, rubber outsole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.6
    }
  },
  {
    id: 51,
    name: "Revolution 6",
    newPrice: 2700,
    oldPrice: 3300,
    sale: true,
    type: "Running",
    brand: "Nike",
    color: "blue",
    instock: true,
    quantity: 1,
    offers: "15% Off",
    image: image51,
    productPageDetails: {
      description: "Lightweight running shoes for everyday comfort.",
      materials: "Mesh upper, foam midsole",
      sizesAvailable: [6, 7, 8, 9, 10],
      reviews: 4.4
    }
  },
  {
    id: 52,
    name: "Mach 4",
    newPrice: 5200,
    oldPrice: 6200,
    sale: true,
    type: "Running",
    brand: "Hoka",
    color: "blue",
    instock: true,
    quantity: 1,
    offers: "",
    image: image52,
    productPageDetails: {
      description: "Responsive shoes for fast running with extra cushioning.",
      materials: "Textile upper, EVA midsole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.8
    }
  },
  {
    id: 53,
    name: "Nano X2",
    newPrice: 5400,
    oldPrice: 6200,
    sale: true,
    type: "Training",
    brand: "Reebok",
    color: "gray",
    instock: true,
    quantity: 1,
    offers: "",
    image: image53,
    productPageDetails: {
      description: "Durable training shoes for varied workouts.",
      materials: "Textile upper, EVA midsole",
      sizesAvailable: [7, 8, 9, 10, 11],
      reviews: 4.7
    }
  },
  {
    id: 54,
    name: "Gel-Kayano 28",
    newPrice: 5700,
    oldPrice: 6700,
    sale: true,
    type: "Running",
    brand: "Asics",
    color: "green",
    instock: true,
    quantity: 1,
    offers: "20% Off",
    image: image54,
    productPageDetails: {
      description: "Stability running shoes for long-distance comfort.",
      materials: "Mesh upper, gel cushioning",
      sizesAvailable: [6, 7, 8, 9, 10, 11],
      reviews: 4.9
    }
  }

  
];


// ----------------Icons list ----------------------- //

const icons = {

  cart,
  cart_white,
  heart,
  heart_white,
  search,
  search_white,
  cash,
  close,
  delivery,
  error,
  menu,
  mscard,
  paypal,
  retun,
  secure,
  success,
  user,
  visa,
  logo,

}

// --------------------category list-----------------------//

const category = [
   {id:1 , image:shoe1 ,  type: "Running"},
   {id:2 , image:shoe2 ,  type: "Casual" },
   {id:3 , image:shoe4 ,  type: "Training" },
   {id:4 , image:shoe5 ,  type: "Walking" },

]

// hero images and text//

const heros =[

  {id: 1, image: hero1, subTitle: "Step Up Your Style", title: "Revitalize your sneakers now with Walkwise"},
  {id: 2, image: hero2, subTitle: "Revive Your Soles", title: "Freshen up your favorite shoes with Walkwise"},
  {id: 3, image: hero3, subTitle: "Kickstart Your Shoe Game", title: "Transform worn out sneakers"}

]
      
export {heros,category,icons,shoes}
