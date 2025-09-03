import React, { useMemo, useRef, useState, useEffect} from "react";
import { Pizza, BadgePercent, Cake, CupSoda, Soup, Leaf } from "lucide-react";
import "./MenuSection.css";

import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from 'react-hot-toast';
import { FaCheckCircle } from "react-icons/fa";
import {Cart} from "../Cart/Cart.jsx"
import { useCart } from "../CartContext";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const { handleAddToCart } = useCart();
  
 

  const categories = useMemo(() => ([
    { id: "promocje", label: "PROMOCJE", icon: BadgePercent },
    { id: "pizza", label: "PIZZA", icon: Pizza },
    { id: "salatki", label: "SALATKI", icon: Soup },
    { id: "kebaby", label: "KEBABY", icon: Pizza },
    { id: "SamoMięso", label: "Samo Mięso", icon: Soup },
    { id: "dodatki", label: "DODATKI", icon: Cake },
    { id: "napoje", label: "NAPOJE", icon: CupSoda },
    { id: "sosy", label: "SOSY", icon: Soup },
    // { id: "vegan", label: "VEGAN", icon: Leaf },
  ]), []);

  const items = {
    pizza: [
      { id: 1, name: "Margharita", desc: "Sos pomidorowy, ser, bazylia, parmezan", price: 29.00, image: "./Margharita_bez_tla.png" },
      { id: 2, name: "Capriciosa", desc: "Sos pomidorowy, ser, szynka, pieczarki, cebula", price: 29.00, image: "./Capri.PNG" },
      { id: 3, name: "PearfectBlue", desc: "Sos pomidorowy, ser, gruszka, gorgonzola, pestki dyni, sos balsamiczny", price: 35.00, image: "./Gruszka.PNG" },
      { id: 4, name: "Cheese'n'Blue", desc: "Sos pomidorowy, serowe ranty, ser, gorgonzola, ser pleśniowy, ser feta", price: 35.00, image: "./Serowa.png" },
      { id: 5, name: "VegePizza", desc: "Sos pomidorowy, ser, oliwki, ser feta, szpinak, suszone pomidory", price: 35.00, image: "./Vege.PNG" },
      { id: 6, name: "Ostra", desc: "Sos pomidorowy, ser, salami picante, jalapeno, cebula", price: 35.00, image: "./Ostra.PNG" },
      { id: 7, name: "Parmeńska", desc: "Sos pomidorowy, ser, szynka parmeńska, rucola, pomidorki koktajlowe", price: 35.00, image: "./Parmenska_bez_tla.png" },
      // { id: 8, name: "Bite4You", desc: "Sos pomidorowy, ser, szynka, salami napoli, pieczarki", price: 35.00, image: "./Bite4You.png" },
      { id: 9, name: "Kurczak w Błękicie", desc: "Sos pomidorowy, ser, mięso kurczak, cebula, sos bbq", price: 29.00, image: "./Kurczak.PNG" },
      { id: 10, name: "Kompozycja własna", desc: "Sos pomidorowy, ser i składnik mięsny, II składnik mięsny, I składnik warzywny, II składnik warzywny", price: 39.00, image: "./k.png" },
    ],
    
    dodatki: [
      { id: 3, name: "Tiramisu", desc: "Klasyczny włoski deser", price: 14.99, image: "./Ostra.PNG" },
      { id: 12, name: "Panna Cotta", desc: "Włoski deser śmietankowy", price: 12.99, image: "./Ostra.PNG" },
      { id: 13, name: "Brownie", desc: "Czekoladowe brownie z orzechami", price: 13.99, image: "./Ostra.PNG" },
      { id: 14, name: "Lody", desc: "Gałka lodów waniliowych", price: 9.99, image: "./Ostra.PNG" },
      { id: 15, name: "Sernik", desc: "Tradycyjny polski sernik", price: 15.99, image: "./Ostra.PNG" },
      { id: 16, name: "Ciasto czekoladowe", desc: "Wilgotne ciasto czekoladowe", price: 14.50, image: "./Ostra.PNG" },
      { id: 17, name: "Muffin", desc: "Słodki muffin z owocami", price: 8.99, image: "./Ostra.PNG" },
    ],
    napoje: [
      { id: 4, name: "Coca-Cola", desc: "Napój gazowany 0.5L", price: 7.99, image: "./Ostra.PNG" },
      { id: 18, name: "Fanta", desc: "Napój gazowany 0.5L", price: 7.99, image: "./Ostra.PNG" },
      { id: 19, name: "Sprite", desc: "Napój gazowany 0.5L", price: 7.99, image: "./Ostra.PNG" },
      { id: 20, name: "Woda mineralna", desc: "Woda gazowana lub niegazowana 0.5L", price: 5.99, image: "./Ostra.PNG" },
      { id: 21, name: "Sok pomarańczowy", desc: "Świeży sok 0.5L", price: 8.99, image: "./Ostra.PNG" },
      { id: 22, name: "Herbata", desc: "Czarna lub zielona herbata", price: 6.50, image: "./Ostra.PNG" },
      { id: 23, name: "Kawa", desc: "Espresso lub cappuccino", price: 9.99, image: "./Ostra.PNG" },
    ],
    zupy: [
      { id: 5, name: "Pomidorowa", desc: "Z makaronem i bazylią", price: 12.99, image: "./Ostra.PNG" },
      { id: 24, name: "Rosół", desc: "Klasyczny rosół z makaronem", price: 11.99, image: "./Ostra.PNG" },
      { id: 25, name: "Barszcz czerwony", desc: "Z uszkami", price: 13.99, image: "./Ostra.PNG" },
      { id: 26, name: "Krem z brokułów", desc: "Z prażonymi migdałami", price: 14.50, image: "./Ostra.PNG" },
      { id: 27, name: "Zupa grzybowa", desc: "Leśne grzyby z makaronem", price: 15.99, image: "./Ostra.PNG" },
      { id: 28, name: "Krem z dyni", desc: "Z pestkami dyni", price: 14.99, image: "./Ostra.PNG" },
      { id: 29, name: "Zupa ogórkowa", desc: "Z ziemniakami i koperkiem", price: 12.50, image: "./Ostra.PNG" },
    ],
    vegan: [
      { id: 6, name: "Veggie", desc: "Pizza z pieczarkami i papryką", price: 28.99, image: "./Ostra.PNG" },
      { id: 30, name: "Vegan Burger", desc: "Burger z kotletem roślinnym", price: 25.99, image: "./Ostra.PNG" },
      { id: 31, name: "Sałatka Quinoa", desc: "Quinoa z warzywami", price: 22.99, image: "./Ostra.PNG" },
      { id: 32, name: "Falafel", desc: "Kuleczki з ciecierzycy", price: 19.99, image: "./Ostra.PNG" },
      { id: 33, name: "Hummus z warzywami", desc: "Hummus podawany z warzywami", price: 18.99, image: "./Ostra.PNG" },
      { id: 34, name: "Tofu Stir-fry", desc: "Tofu smażone z warzywami", price: 26.99, image: "./Ostra.PNG" },
      { id: 35, name: "Wrap Veggie", desc: "Wrap з warzywami i sosem", price: 21.99, image: "./Ostra.PNG" },
    ],
    promocje: [
      { 
        id: 36, 
        name: "BlueBox", 
        desc: "mięso 150g, ser, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, frytki/ryż, opakowanie box", 
        price: 19.99, 
        oldPrice: 25.99, // старa ціна
        image: "./BlueBOX.PNG" 
      },
      { 
        id: 37, 
        name: "Bite w Bułę", 
        desc: "mięso 150g, bułka, pekińska, cebula z pietruszką i sumakiem, sosy do wyboru, pomidory, ogórek świeży", 
        price: 24.99, 
        oldPrice: 29.99, 
        image: "./Bułka.PNG" 
      },
      { 
        id: 38, 
        name: "Talerz", 
        desc: "mięso 150g, sałata lodowa, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, frytki/ryż", 
        price: 25, 
        oldPrice: 30, 
        image: "./plate.png" 
      },
    ],
    salatki: [
      { id: 39, name: "Papadia z kurczakiem", desc: "Papadia z sosem czosnkowym i kurczakiem", price: 22.99, image: "./Ostra.PNG" },
      { id: 40, name: "Papadia vege", desc: "Papadia z warzywami i serem", price: 21.99, image: "./Ostra.PNG" },
      { id: 41, name: "Papadia BBQ", desc: "Papadia z sosem BBQ i bekonem", price: 23.99, image: "./Ostra.PNG" },
    ],
    kebaby: [
      { id: 1, name: "Bite w Bułę", desc: "mięso 150g, bułka, pekinka, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru", price: 25, image: "./Ostra.PNG" },
      { id: 2, name: "Mega Bułka", desc: "mięso 250g, bułka, pekinka, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru", price: 29, image: "./Ostra.PNG" },
      { id: 3, name: "BlueNEO", desc: "mięso 250g, bułka neoprofitka, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, frytki", price: 29, image: "./Ostra.PNG" },
      { id: 4, name: "Lawasz", desc: "mięso 150g, sałata lodowa, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, lawasz", price: 25, image: "./Ostra.PNG" },
      { id: 5, name: "Mega lawasz", desc: "mięso 250g, sałata lodowa, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, lawasz", price: 29, image: "./Ostra.PNG" },
      { id: 6, name: "Pita", desc: "mięso 150g, pekinka, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, pita", price: 25, image: "./Ostra.PNG" },
      { id: 7, name: "Mega pita", desc: "mięso 250g, pekinka, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, pita", price: 29, image: "./Ostra.PNG" },
      { id: 8, name: "Talerz", desc: "mięso 150g, sałata lodowa, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, frytki/ryż", price: 25, image: "./Ostra.PNG" },
      { id: 9, name: "Mega talerz", desc: "mięso 250g, sałata lodowa, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, frytki/ryż", price: 29, image: "./Ostra.PNG" },
      { id: 10, name: "BlueBox", desc: "mięso 150g, ser, cebula z pietruszką i sumakiem, pomidory, ogórek świeży, sosy do wyboru, frytki/ryż, opakowanie box", price: 25, image: "./Ostra.PNG" },
    ],
    SamoMięso: [
      { id: 11, name: "Bułka sam kurczak", desc: "mięso kurczak, sosy do wyboru, bułka", price: 28, image: "./Ostra.PNG" },
      { id: 12, name: "Lawasz sam kurczak", desc: "mięso kurczak, sos, lawasz", price: 28, image: "./Ostra.PNG" },
      { id: 13, name: "Pita sam kurczak", desc: "mięso kurczak, sos, pita", price: 28, image: "./Ostra.PNG" },
      { id: 14, name: "Bułka sama wołowina", desc: "mięso wołowina, sos, bułka", price: 34, image: "./Ostra.PNG" },
      { id: 15, name: "Lawasz sama wołowina", desc: "mięso wołowina, sos, lawasz", price: 34, image: "./Ostra.PNG" },
      { id: 16, name: "Pita sama wołowina", desc: "mięso wołowina, sos, pita", price: 34, image: "./Ostra.PNG" },
    ],
    sosy: [
      { id: 48, name: "Sos czosnkowy", desc: "Delikatny sos czosnkowy", price: 3.99, image: "./Ostra.PNG" },
      { id: 49, name: "Sos BBQ", desc: "Słodko-pikantny sos BBQ", price: 4.50, image: "./Ostra.PNG" },
      { id: 50, name: "Sos pomidorowy", desc: "Klasyczny sos pomidorowy", price: 3.99, image: "./Ostra.PNG" },
    ],
  };
  

  const refs = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat.id] = React.createRef();
      return acc;
    }, {});
  }, [categories]);

  const scrollToCategory = (id) => {
    refs[id].current.scrollIntoView({ behavior: "smooth" });
    setActiveCategory(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // 40% of section visible
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs]);


  const bannerRef = useRef(null);
  const containerRef = useRef(null);
  const [top, setTop] = useState(140);


   useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const bannerHeight = bannerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // distance from top of viewport
      let newTop = 140;

      if (containerRect.top < 140) {
        newTop = Math.min(140, containerRect.bottom - bannerHeight);
      }

      setTop(newTop);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  


  return (
    <section className="menu" id="menu">
      <Toaster
  position="bottom-center"
  toastOptions={{
    success: {
      icon: <FaCheckCircle color="#1E3A8A" />, // синя галочка
    },
  }}
/>
      
      <div className="container">
      
        <div className="menu__categories">
          {categories.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => scrollToCategory(id)} className={`menu__category ${activeCategory === id ? 'is-active' : ''}`}>
              <Icon className="menu__category-icon" />
              {label}
            </button>
          ))}
        </div>
        
        

        
        <div className="menu__sections">
          {categories.map(({ id, label }) => (
        <section key={id} id={id} ref={refs[id]}>
              <h2 className="menu__title">{label}</h2>
              <div className="menu__grid">
                {items[id]?.map((item) => (
                  <div key={item.id} className="card">
                    <img src={item.image} alt={item.name} className="card__image" />
                    <div className="card__body">
                      <h3 className="card__title">{item.name}</h3>
                      <p className="card__desc">{item.desc}</p>
                      <div className="card__footer">
  <div className={`card__prices ${item.oldPrice ? "has-old-price" : ""}`}>
    {item.oldPrice && (
      <span className="card__old-price">{`${item.oldPrice.toFixed(2)} zł`}</span>
    )}
    <span className="card__price">{`${item.price.toFixed(2)} zł`}</span>
  </div>
  <button className="button button--primary" onClick={() => handleAddToCart(item)}>
    Dodaj do koszyka
  </button>
</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <Cart  />
  {/* <div className={`bot-img-wraper ${inCartPosition.length > 0 ? "upimg" : " "}`}>
  <img className={`bot-img ${inCartPosition.length > 0 ? "upimg" : " "}`} src='./12345.png' alt=''/>
  </div> */}
  
        </div>
        
   
     
      
      </div>
    </section>
  );
}



