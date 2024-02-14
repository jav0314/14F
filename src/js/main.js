document.addEventListener("DOMContentLoaded", function () {
  const Button2 = document.getElementById("Button2");
  function handleUpdateButtonPosition() {
    Button2.style.transform = "";
    const seed = Math.random();
    const pageX = window.innerWidth - Button2.offsetWidth;
    const pageY = window.innerHeight - Button2.offsetHeight;
    const targetX = Math.min(pageX * seed, pageX);
    const targetY = Math.min(pageY * seed, pageY);
    const { x, y } = Button2.getBoundingClientRect();
    const translateX = targetX - x;
    const translateY = targetY - y;
    Button2.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
  Button2.addEventListener("mouseover", handleUpdateButtonPosition);
  Button2.addEventListener("click", handleUpdateButtonPosition);

  document.getElementById("Button1").addEventListener("click", function () {
    alert("Wow, I didn´t expected that jeje *kiss*");
  });
});
