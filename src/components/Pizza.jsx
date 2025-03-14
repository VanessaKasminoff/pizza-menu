const Pizza = ({ name, ingredients, srcImg, price }) => {
  return (
    <li className="pizza">
      <img src={srcImg} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Pizza;
