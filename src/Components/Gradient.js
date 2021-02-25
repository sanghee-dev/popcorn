const Gradient = (element, color = "rgba(0, 255, 84, 1)") => {
  const addGradient = (e) => {
    const mouseX = Math.round(
      (e.offsetX < 0 ? 0 : e.offsetX / element.current.clientWidth) * 100
    );
    const mouseY = Math.round(
      (e.offsetY < 0 ? 0 : e.offsetY / element.current.clientHeight) * 100
    );
    element.current.style.background = `radial-gradient(
      at ${mouseX}% ${mouseY}%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
  };
  const cleanGradient = () => {
    element.current.style.background = `transparent`;
  };
  element.current.addEventListener("mousemove", addGradient);
  element.current.addEventListener("mouseout", cleanGradient);
};

export default Gradient;

// import Gradient from "Components/Gradient";
// Gradient(Object, color);
