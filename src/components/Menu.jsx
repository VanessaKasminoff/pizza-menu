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
        <Pizza key={index} {...pizza} />;
      })}

      {/* <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        srcImg={pizzaData[0].srcImg}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        srcImg={pizzaData[1].srcImg}
      />
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        srcImg={pizzaData[2].srcImg}
      />
      <Pizza
        name={pizzaData[3].name}
        ingredients={pizzaData[3].ingredients}
        srcImg={pizzaData[3].srcImg}
      />
      <Pizza
        name={pizzaData[4].name}
        ingredients={pizzaData[4].ingredients}
        srcImg={pizzaData[4].srcImg}
      />
      <Pizza
        name={pizzaData[5].name}
        ingredients={pizzaData[5].ingredients}
        srcImg={pizzaData[5].srcImg}
      /> */}
    </div>
  );
};

export default Menu;
