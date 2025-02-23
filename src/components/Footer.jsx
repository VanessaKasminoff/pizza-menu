const Footer = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let amOrpm = hours >= 12 ? "PM" : "AM";

  const isOpen = hours >= 12 && hours < 22;

  hours = hours % 12 || 12; // converts 0 to 12 for midnight

  minutes = minutes.toString().padStart(2, "0");

  return (
    <footer>
      {`${hours}:${minutes} ${amOrpm}`}{" "}
      {isOpen ? "We're currently open" : "We're closed"}
    </footer>
  );
};

export default Footer;
