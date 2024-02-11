
document.addEventListener("DOMContentLoaded", function(){
  const Button2 = document.getElementById('Button2');
  function Cebolla (){
    console.log(Button2, Button2.offsetHeight,Button2.offsetWidth);
    const pageWidth = window.innerWidth - Button2.offsetWidth                                        ;
    const pageHeight = window.innerHeight - Button2.offsetHeight;
    const randomLeft = Math.floor(Math.random() * pageWidth);
    const randomTop = Math.floor(Math.random() * pageHeight);
    
    Button2.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
  };
  Button2.addEventListener('mouseover', Cebolla);
  
  Button2.addEventListener('click', Cebolla);
  
  
  document.getElementById('Button1').addEventListener('click', function() {
  alert('HEHE THANKSSS! I LOVE YOU <3');
  });
  
})

//Que quede en una soolo espacio y sin tapar imagen
//const {c,...rest}={a:true, b:5, c:function(){}}


