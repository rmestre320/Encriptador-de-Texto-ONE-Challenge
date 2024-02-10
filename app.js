
function getText(){
    return document.getElementById("message").value;
}

function printText(texto){
    document.getElementById("output").innerHTML = 
    `
    <div class="resultado-output">
        <h3 id="texto-output">${texto}</h3>
        <div class="botones">
            <button id="copiar" class="boton solo claro" onclick="copia()">
            <p>Copiar</p></button>
        </div>
    </div>
    `
                ;
    
}

function copia(){
    let texto = document.getElementById("texto-output").innerHTML;
    navigator.clipboard.writeText(texto);
}

function validacion(texto){
    if (!/^[a-z]+$/.test(texto)) {
        alert("Ingresa el texto en minuscula y sin caracteres especiales");
        return false;
    }
    return true;
}
function encripta(){
    const texto = getText();
    if(!validacion(texto)){return ;}
    if(texto === ""){
        console.log("Ningun texto fue escrito");
        return;
    }
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto.charAt(i);
        switch (letra) {
            case 'e':
                textoEncriptado += "enter";
                break;
            case 'i':
                textoEncriptado += "imes";
                break;
            case 'a':
                textoEncriptado += "ai";
                break;
            case 'o':
                textoEncriptado += "ober";
                break;
            case 'u':
                textoEncriptado += "ufat";
                break;
            
            default:
                textoEncriptado += letra;
        }
        
    }
    printText(textoEncriptado);
}

function desencripta(){
    let texto = getText();
    if(!validacion(texto)){return ;}
    if(texto === ""){
        console.log("Ningun texto fue escrito");
        return;
    }
    texto = texto.replaceAll("enter", 'e');
    texto = texto.replaceAll("imes", 'i');
    texto = texto.replaceAll("ai", 'a');
    texto = texto.replaceAll("ober", 'o');
    texto = texto.replaceAll("ufat", 'u');

    printText(texto);
}

