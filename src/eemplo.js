function esperar (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function demo(){
console.log("Inicio");
await esperar(3000);
console.log("Fin");

}


demo();
console.log("Fin del programa");