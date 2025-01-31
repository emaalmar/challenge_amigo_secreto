let friends =[];

function addFriend(){
    let nameInput = document.getElementById("amigo");

    if (name === ""){
        alert ("Por favor, ingresa un nombre valido.");
        return
    }

    if (friends.includes(name)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    friends.push(name);
    update_list();
    nameInput.value="";
}

function updateList() {
    let list = document.getElementById("listaAmigos");
    list.innerHTML="";

    friends.forEach((friend) => {
        let li = document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    });

}

function selectFriend(){
    if (friends.length ===0){
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let randomIndex = Math.floor(Math.random()*friends.length);
    let friendSelect = friends[randomIndex];

    let result = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}



































// function enter_data() {
//     let name = document.getElementById("amigo").value;

//     if (name === ""){
//         alert("Por favor, ingresa un nombre válido.");
//         return;
//     }


//     if (friends.includes(name)) {
//         alert("Este nombre ya está en la lista.");
//         return;
//     }

//     friends.push(name); // Agrega el nombre al array
//     document.getElementById("listaAmigos").innerHTML = friends.join(", "); // Muestra la lista
//     document.getElementById("amigo").value = ""; // Limpia el campo de entrada
// }