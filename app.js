// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo(){
    let nuevoamigo = document.getElementById("amigo").value;
    if (nuevoamigo === ""){
        alert("Debes ingresar un nombre");
        return;
    }

    amigos.push(nuevoamigo);
    document.getElementById("amigo").value = "";
    recorridoarray();
    // console.log(nuevoamigo);
    // console.log(amigos);
}

function recorridoarray(){
    let lista = document.getElementById("listaAmigos");
    // console.log(lista.innerHTML)

    //vaciado de contenido: los Li exixtentes se quitan para ser reiniciados
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length===0){
        alert("Debes agregar amigos para sortear");
    }
    else{
        let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        let lista = document.getElementById("listaAmigos");
        let resultado = document.getElementById("resultado");
        lista.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}