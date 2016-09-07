window.addEventListener("load", function(){
    var boton = document.getElementById("operar");
    boton.addEventListener("click", function(){
        var seg = parseInt(document.getElementById("segundos").value);
        var num = parseInt(document.getElementById("numeroInicio").value);
        
        var respueta = document.getElementById("respuesta");
        setInterval(function(){ document.getElementById("respuesta").innerHTML = num++ ; }, seg*1000);
    })
})
