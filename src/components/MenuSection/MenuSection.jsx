import React, { useMemo, useRef, useState, useEffect } from "react";
import { Pizza, BadgePercent, Cake, CupSoda, Soup, Leaf } from "lucide-react";
import "./MenuSection.css";
import items from "../../data/positions.js";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { Cart } from "../Cart/Cart.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function MenuSection() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState("pizza");

  const categories = useMemo(
    () => [
      { id: "promocje", label: "PROMOCJE", icon: BadgePercent },
      { id: "pizza", label: "PIZZA", icon: Pizza },
      { id: "salatki", label: "SALATKI", icon: Soup },
      { id: "kebaby", label: "KEBABY", icon: Pizza },
      { id: "SamoMięso", label: "Samo Mięso", icon: Soup },
      { id: "dodatki", label: "DODATKI", icon: Cake },
      { id: "napoje", label: "NAPOJE", icon: CupSoda },
      { id: "sosy", label: "SOSY", icon: Soup },
      // { id: "vegan", label: "VEGAN", icon: Leaf },
    ],
    []
  );

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
            <button
              key={id}
              onClick={() => scrollToCategory(id)}
              className={`menu__category ${
                activeCategory === id ? "is-active" : ""
              }`}
            >
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
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card__image"
                    />
                    <div className="card__body">
                      <h3 className="card__title">{item.name}</h3>
                      <p className="card__desc">{item.desc}</p>
                      <div className="card__footer">
                        <div
                          className={`card__prices ${
                            item.oldPrice ? "has-old-price" : ""
                          }`}
                        >
                          {item.oldPrice && (
                            <span className="card__old-price">{`${item.oldPrice.toFixed(
                              2
                            )} zł`}</span>
                          )}
                          <span className="card__price">{`${item.price.toFixed(
                            2
                          )} zł`}</span>
                        </div>
                        <button
                          className="button button--primary"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          Dodaj do koszyka
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <Cart />
        </div>
      </div>
    </section>
  );
}
