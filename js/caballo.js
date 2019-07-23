//DAFAVAC


function Caballo(nombre,raza) {
    //propiedades
    this.nombre=nombre;
    this.raza= raza;
    this.avance=[];
    //metodos
    this.avanzar=avanzar;
    this.totalRecorrido=totalRecorrido;
}
function avanzar(){
    
    //var recorrido = Math.floor(Math.random()*6)+1;
    //this.avance.push(recorrido);
    //console.log(this.nombre+ " corre " + this.avance[length-1]);
    //return recorrido;
    
    this.avance.push(Math.floor(Math.random()*6)+1);
    console.log(this.nombre+ " corre " + this.avance[this.avance.length-1]);
    return this.avance[this.avance.length-1];
    
}   

function totalRecorrido(){
    return this.avance.reduce(sumar);
}

function sumar(sumaTotal,avance) {
  return sumaTotal+avance; 
  }






  var final1=200;

  function myMove() {
      var elem = document.getElementById("animate"); 
      var pos = 0;
      var id = setInterval(frame,10);
      function frame(){
        if(pos === final1){ 
          clearInterval(id);
          return final1+=200;
        } else {
          pos+=final1;
          //elem.style.top = pos + "px"; 
          elem.style.left = pos + "px"; 
          
        } 
      }
      
    }
  
  
    var final=200;
  function myMove1(){
      var elem = document.getElementById("animate1"); 
      var pos = 0;
      var id = setInterval(frame,10);
      function frame(){
        if(pos === final){ 
          clearInterval(id);
          return final+=200;
        } else {
          pos+=final;
          //elem.style.top = pos + "px"; 
          elem.style.left = pos + "px"; 
          
        } 
      }
      
    }
  
  
  
  
  
  