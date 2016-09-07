***

# EJERCICIO TRES-LECCIÓN 20

##### Nos piden desarrollar un script que lea la cantidad de segundos y el número inicial desde el HTML, luego, mostrar en el HTML un contador que incremente la cantidad de segundos desde el número inicial ingresado.

###### Este es un caso de prueba:

![Sin titulo](http://i64.tinypic.com/a3h2t4.jpg)

###### Empezamos a resolver:

+ completamos nuestro archivo html, con input para que sea el usuario quien indique los datos.

```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>ejercicio tres</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<h1>EJERCICIOS CON PUNTOS :)</h1>
    <form>
        <label for="segundos">
            SEGUNDOS:
        </label>
        <br>
        <input type="text" name="segundos" id="segundos">
        <br>
        <label for="numInicio">
            NUMERO DE INICIO:
        </label>
        <br>
        <input type="text" name="numeroInicio" id="numeroInicio">
        <br>
        <button type="button" id="operar">EMPEZEMOS</button>
    </form>
    <div id="respuesta"></div>

	<script type="text/javascript" src="main.js"></script>
</body>
</html>

```

+ Tienes que dar ID para llamarlos.

+ Ahora en javascript empezaremos llamando a un evento.
  y creamos una function anonima.
+ Creamos una variable llamando al ID del boton que esta en html.
+ Luego a esta vaiable se le da un evento, crando nuevamente una function anonima.
+ Luego se crea variables llamando a los input.
+ Después creamos otra variable donde se ejecutará las variables anterirores, en in ID llamdo. 

```javascript 

window.addEventListener("load", function(){
    var boton = document.getElementById("operar");
    boton.addEventListener("click", function(){
        var seg = parseInt(document.getElementById("segundos").value);
        var num = parseInt(document.getElementById("numeroInicio").value);
        
        var respueta = document.getElementById("respuesta");
        setInterval(function(){ document.getElementById("respuesta").innerHTML = num++ ; }, seg*1000);
    })
})

```

+ Realizado todo esto nos queda:

![Sin titulo](http://i67.tinypic.com/214quyh.jpg)

****








