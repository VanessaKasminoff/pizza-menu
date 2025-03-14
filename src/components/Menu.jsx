import Pizza from "./Pizza";

const Menu = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      soldOut: false,
      srcImg: "/imgs/focaccia.jpg",
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      soldOut: false,
      srcImg: "/imgs/margherita.jpg",
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      soldOut: false,
      srcImg: "/imgs/spinaci.jpg",
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      soldOut: false,
      srcImg: "/imgs/funghi.jpg",
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      soldOut: true,
      srcImg: "/imgs/salamino.jpg",
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      soldOut: false,
      srcImg: "/imgs/prosciutto.jpg",
    },
  ];

  return (
    <div>
      <h2>Our Menu</h2>
      {pizzaData.map((pizza, index) => {
        return <Pizza key={index} {...pizza} />;
      })}
    </div>
  );
};

export default Menu;
