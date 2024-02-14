document.addEventListener("DOMContentLoaded", function () {
  const Button2 = document.getElementById("Button2");
  const body = document.body;

  function Cebolla() {
    const pageWidth = window.innerWidth - Button2.offsetWidth;
    const pageHeight = window.innerHeight - Button2.offsetHeight;
    const randomLeft = Math.floor(Math.random() * pageWidth);
    const randomTop = Math.floor(Math.random() * pageHeight);
    const nuevaPosX = Math.min(Math.max(randomLeft, 0), pageWidth);
    const nuevaPosY = Math.min(Math.max(randomTop, 0), pageHeight);
    console.log(nuevaPosX, nuevaPosY);

    Button2.style.transform = `translate(${nuevaPosX}px, ${nuevaPosY}px)`;
  }

  Button2.addEventListener("mouseover", Cebolla);

  Button2.addEventListener("click", Cebolla);

  document.getElementById("Button1").addEventListener("click", function () {
    alert("Wow, I didn´t expected that jeje *kiss*");
  });
});

//Que quede en una soolo espacio y sin tapar imagen
//const {c,...rest}={a:true, b:5, c:function(){}}
