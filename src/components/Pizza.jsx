const Pizza = ({ name, ingredients, srcImg }) => {
  console.log(name, ingredients, srcImg);
  return (
    <div>
      <img src={srcImg} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
    </div>
  );
};

export default Pizza;
