import React, { useMemo, useRef, useState, useEffect} from "react";
import { Pizza, BadgePercent, Cake, CupSoda, Soup, Leaf } from "lucide-react";
import "./MenuSection.css";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("pizza");

  const categories = useMemo(() => ([
    { id: "promocje", label: "PROMOCJE", icon: BadgePercent },
    { id: "pizza", label: "PIZZA", icon: Pizza },
    { id: "papadias", label: "PAPADIAS", icon: Soup },
    { id: "zapiekanki", label: "ZAPIEKANKI", icon: Pizza },
    { id: "przystawki", label: "PRZYSTAWKI", icon: Soup },
    { id: "desery", label: "DESERY", icon: Cake },
    { id: "napoje", label: "NAPOJE", icon: CupSoda },
    { id: "sosy", label: "SOSY", icon: Soup },
    { id: "vegan", label: "VEGAN", icon: Leaf },
  ]), []);

  const items = {
    pizza: [
      { id: 1, name: "Kurczak BBQ & Bekon", desc: "Pizza z sosem BBQ i bekonem", price: "28.99 zł", image: "./kebab12.png" },
      { id: 2, name: "Włoskie Kiełbaski & Pepperoni", desc: "Pizza z pepperoni i mozzarellą", price: "28.99 zł", image: "./kebab12.png" },
      { id: 7, name: "Margherita", desc: "Klasyczna pizza z mozzarellą i bazylią", price: "24.99 zł", image: "./kebab12.png" },
      { id: 8, name: "Hawajska", desc: "Pizza z szynką i ananasem", price: "27.99 zł", image: "./kebab12.png" },
      { id: 9, name: "Wegetariańska", desc: "Pizza z warzywami i serem", price: "26.99 zł", image: "./kebab12.png" },
      { id: 10, name: "Pepperoni", desc: "Pizza z pikantnym pepperoni", price: "28.50 zł", image: "./kebab12.png" },
      { id: 11, name: "Quattro Formaggi", desc: "Pizza z czterema rodzajami sera", price: "30.99 zł", image: "./kebab12.png" },
    ],
    desery: [
      { id: 3, name: "Tiramisu", desc: "Klasyczny włoski deser", price: "14.99 zł", image: "./kebab12.png" },
      { id: 12, name: "Panna Cotta", desc: "Włoski deser śmietankowy", price: "12.99 zł", image: "./kebab12.png" },
      { id: 13, name: "Brownie", desc: "Czekoladowe brownie z orzechami", price: "13.99 zł", image: "./kebab12.png" },
      { id: 14, name: "Lody", desc: "Gałka lodów waniliowych", price: "9.99 zł", image: "./kebab12.png" },
      { id: 15, name: "Sernik", desc: "Tradycyjny polski sernik", price: "15.99 zł", image: "./kebab12.png" },
      { id: 16, name: "Ciasto czekoladowe", desc: "Wilgotne ciasto czekoladowe", price: "14.50 zł", image: "./kebab12.png" },
      { id: 17, name: "Muffin", desc: "Słodki muffin z owocami", price: "8.99 zł", image: "./kebab12.png" },
    ],
    napoje: [
      { id: 4, name: "Coca-Cola", desc: "Napój gazowany 0.5L", price: "7.99 zł", image: "./kebab12.png" },
      { id: 18, name: "Fanta", desc: "Napój gazowany 0.5L", price: "7.99 zł", image: "./kebab12.png" },
      { id: 19, name: "Sprite", desc: "Napój gazowany 0.5L", price: "7.99 zł", image: "./kebab12.png" },
      { id: 20, name: "Woda mineralna", desc: "Woda gazowana lub niegazowana 0.5L", price: "5.99 zł", image: "./kebab12.png" },
      { id: 21, name: "Sok pomarańczowy", desc: "Świeży sok 0.5L", price: "8.99 zł", image: "./kebab12.png" },
      { id: 22, name: "Herbata", desc: "Czarna lub zielona herbata", price: "6.50 zł", image: "./kebab12.png" },
      { id: 23, name: "Kawa", desc: "Espresso lub cappuccino", price: "9.99 zł", image: "./kebab12.png" },
    ],
    zupy: [
      { id: 5, name: "Pomidorowa", desc: "Z makaronem i bazylią", price: "12.99 zł", image: "./kebab12.png" },
      { id: 24, name: "Rosół", desc: "Klasyczny rosół z makaronem", price: "11.99 zł", image: "./kebab12.png" },
      { id: 25, name: "Barszcz czerwony", desc: "Z uszkami", price: "13.99 zł", image: "./kebab12.png" },
      { id: 26, name: "Krem z brokułów", desc: "Z prażonymi migdałami", price: "14.50 zł", image: "./kebab12.png" },
      { id: 27, name: "Zupa grzybowa", desc: "Leśne grzyby z makaronem", price: "15.99 zł", image: "./kebab12.png" },
      { id: 28, name: "Krem z dyni", desc: "Z pestkami dyni", price: "14.99 zł", image: "./kebab12.png" },
      { id: 29, name: "Zupa ogórkowa", desc: "Z ziemniakami i koperkiem", price: "12.50 zł", image: "./kebab12.png" },
    ],
    vegan: [
      { id: 6, name: "Veggie", desc: "Pizza z pieczarkami i papryką", price: "28.99 zł", image: "./kebab12.png" },
      { id: 30, name: "Vegan Burger", desc: "Burger z kotletem roślinnym", price: "25.99 zł", image: "./kebab12.png" },
      { id: 31, name: "Sałatka Quinoa", desc: "Quinoa z warzywami", price: "22.99 zł", image: "./kebab12.png" },
      { id: 32, name: "Falafel", desc: "Kuleczki з ciecierzycy", price: "19.99 zł", image: "./kebab12.png" },
      { id: 33, name: "Hummus z warzywami", desc: "Hummus podawany z warzywami", price: "18.99 zł", image: "./kebab12.png" },
      { id: 34, name: "Tofu Stir-fry", desc: "Tofu smażone z warzywami", price: "26.99 zł", image: "./kebab12.png" },
      { id: 35, name: "Wrap Veggie", desc: "Wrap з warzywami i sosem", price: "21.99 zł", image: "./kebab12.png" },
    ],
    promocje: [
      { id: 36, name: "Pizza Margherita Promo", desc: "Klasyczna pizza w promocyjnej cenie", price: "19.99 zł", image: "./kebab12.png" },
      { id: 37, name: "Burger Combo", desc: "Burger z frytkami i napojem", price: "24.99 zł", image: "./kebab12.png" },
      { id: 38, name: "Deser dnia", desc: "Dowolny deser w promocyjnej cenie", price: "9.99 zł", image: "./kebab12.png" },
    ],
    papadias: [
      { id: 39, name: "Papadia z kurczakiem", desc: "Papadia z sosem czosnkowym i kurczakiem", price: "22.99 zł", image: "./kebab12.png" },
      { id: 40, name: "Papadia vege", desc: "Papadia z warzywami i serem", price: "21.99 zł", image: "./kebab12.png" },
      { id: 41, name: "Papadia BBQ", desc: "Papadia z sosem BBQ i bekonem", price: "23.99 zł", image: "./kebab12.png" },
    ],
    zapiekanki: [
      { id: 42, name: "Zapiekanka klasyczna", desc: "Zapiekanka z pieczarkami i serem", price: "14.99 zł", image: "./kebab12.png" },
      { id: 43, name: "Zapiekanka z kurczakiem", desc: "Zapiekanka z kurczakiem i warzywami", price: "16.99 zł", image: "./kebab12.png" },
      { id: 44, name: "Zapiekanka wege", desc: "Zapiekanka z warzywami i sosem czosnkowym", price: "15.99 zł", image: "./kebab12.png" },
    ],
    przystawki: [
      { id: 45, name: "Frytki", desc: "Frytki z ketchupem", price: "9.99 zł", image: "./kebab12.png" },
      { id: 46, name: "Nuggetsy", desc: "Kurczak w panierce", price: "12.99 zł", image: "./kebab12.png" },
      { id: 47, name: "Koreczki", desc: "Mini koreczki z warzywami i serem", price: "13.50 zł", image: "./kebab12.png" },
    ],
    sosy: [
      { id: 48, name: "Sos czosnkowy", desc: "Delikatny sos czosnkowy", price: "3.99 zł", image: "./kebab12.png" },
      { id: 49, name: "Sos BBQ", desc: "Słodko-pikantny sos BBQ", price: "4.50 zł", image: "./kebab12.png" },
      { id: 50, name: "Sos pomidorowy", desc: "Klasyczny sos pomidorowy", price: "3.99 zł", image: "./kebab12.png" },
    ],
  };

  // const refs = categories.reduce((acc, cat) => {
  //   acc[cat.id] = useRef(null);
  //   return acc;
  // }, {});

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
      <div className="container">
        <div className="menu__categories">
          {categories.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => scrollToCategory(id)} className={`menu__category ${activeCategory === id ? 'is-active' : ''}`}>
              <Icon className="menu__category-icon" />
              {label}
            </button>
          ))}
        <div className="menu__category_banner">
          <h3 style={{color: "white", fontSize: "3rem", marginBottom: "10px", paddingLeft: "6px" }}>We Wtorki dwa duze kebaby</h3>
          <p style={{color: "white", fontSize: "4rem", color: 'yellow', fontWeight: "bold", margin: 0, paddingLeft: '6px'}}>50%-</p>
          <p style={{color: "white", fontSize: "1.5rem", fontWeight: "bold", padding: '4px 4px 4px 4px', background: "#003eb7", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}><span style={{color: 'white', fontSize: '0.95rem'}}>KOD:</span>BLUEBITE12</p>
     
        </div>
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
                        <span className="card__price">{item.price}</span>
                        <button className="button button--primary">Zamow</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
