// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];
let sorteados = [];
console.log(sorteados)

function agregarAmigo() {
    //captura del nombre que indica el usuario
    let amigoDeUsuario = document.getElementById('amigo').value; 
    console.log(amigoDeUsuario);
    
    //validación
    if (amigoDeUsuario === ''){
        alert('Por favor, inserte un nombre.');
        //si un amigo se repite
        }else if (nombreAmigos.includes(amigoDeUsuario)){
            alert('Ese nombre ya fue ingresado, por favor indica otro nombre');
        }else{
        //si usuario indica un nombre
            nombreAmigos.push(amigoDeUsuario);
    }
    limpiarCaja();
    amigosAgregados();
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Crea una función que recorra el array
function amigosAgregados() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

//recorrer la lista
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li'); //crea elemento 'li' para cada nombre
        li.textContent = nombreAmigos[i];// asigna el nombre
        listaAmigos.appendChild(li);

    }
    return;
}

function sortearAmigo(){
    if(nombreAmigos.length === 0){
        alert('No hay amigos para sortear, por favor ingresa amigos');
     } else {
        let amigoSecreto = nombreAmigos[Math.floor(Math.random()*nombreAmigos.length)];
        if(sorteados.includes(amigoSecreto)){
            sortearAmigo()
        }else{
            sorteados.push(amigoSecreto)
            //eliminar amigo sorteado de la lista visible
            //indexOf busca un nombre de la lista en la otra y devuelve el indice, si no está devueleve -1.
            let eliminarDeListaNombreAmigos = nombreAmigos.indexOf(amigoSecreto);

            if (eliminarDeListaNombreAmigos !== -1){//si no hay amigos en la lista (diferente a -1)
                nombreAmigos.splice(eliminarDeListaNombreAmigos, 1);//elimina 1 indice identificado del parametro eliminarDeListaNombreAmigos
            }
            document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${amigoSecreto}</strong>`;
        }
    }
    //si se sortearon todos
    if (sorteados.length === nombreAmigos.length){
        alert('Todos los amigos han sido sorteados')
    }          
    amigosAgregados(); 
}


       



   



