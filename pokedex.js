var pokedex = new XMLHttpRequest();

pokedex.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        var respuesta = JSON.parse(pokedex.responseText);
        var habilidades =[];
        console.log(respuesta);
        //document.body.innerHTML = respuesta.abilities[0].ability.name;
        document.getElementById("titulo").innerHTML = respuesta.name;
        document.getElementById("foto_titulo").innerHTML = respuesta.name;
        document.getElementById("imagen_frente").src = respuesta.sprites.front_default;
        document.getElementById("imagen_frente").alt = respuesta.name;
        document.getElementById("imagen_frente").title = respuesta.name;
        document.getElementById("imagen_dorso").src = respuesta.sprites.back_default;
        document.getElementById("imagen_dorso").alt = respuesta.name;
        document.getElementById("imagen_dorso").title = respuesta.name;
        document.getElementById("is_default").innerHTML = "Default Character: " + respuesta.is_default;
        document.getElementById("base_experience").innerHTML = "Base Experience: " + respuesta.base_experience;
        document.getElementById("height").innerHTML = "Height: " + respuesta.height;
        document.getElementById("weight").innerHTML = "Weigth: " + respuesta.weight;
        for(var i=0; i < respuesta.abilities.length; i++){
            habilidades.push(respuesta.abilities[i].ability.name);
        }
              
        document.getElementById("abilities").innerHTML = "Abilities: " + habilidades; 
    }
};

pokedex.open("GET" , "https://pokeapi.co/api/v2/pokemon/pikachu/");
pokedex.send();
