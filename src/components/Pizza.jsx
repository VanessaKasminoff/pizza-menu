const Pizza = ({ name, ingredients, srcImg, price, soldOut }) => {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={srcImg} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD-OUT" : "$" + price}</span>
      </div>
    </li>
  );
};

export default Pizza;
