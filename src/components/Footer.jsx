const Footer = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let amOrpm = hours >= 12 ? "PM" : "AM";

  const isOpen = hours >= 12 && hours < 22;
  // const isOpen = false;

  hours = hours % 12 || 12; // converts 0 to 12 for midnight

  minutes = minutes.toString().padStart(2, "0");

  return (
    <footer className="footer">
      <div className="order">
        {`${hours}:${minutes} ${amOrpm}`}{" "}
        {isOpen
          ? "We're currently open! Come visit us or order online."
          : "Sorry, we're closed! Ordering online is unavailable."}
        {isOpen ? <button className="btn">Order</button> : ""}
      </div>
    </footer>
  );
};

export default Footer;
