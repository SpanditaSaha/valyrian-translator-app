var txtInput=document.querySelector("#text-input");
var btnTranslate=document.querySelector("#btn-translate")
var outputDiv=document.querySelector("#output")

var url="https://api.funtranslations.com/translate/valyrian.json";

function constructUrl(text)
{
    return url+"?text="+text;
}
function errorHandler(error)
{
     console.log("Error message",error);
     alert("Something wrong with the server! Try again later!");
}
function doFetch()
{
    fetch(constructUrl(txtInput.value)).then(response=>response.json()).then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;}).catch(errorHandler)
}

function clickHandler()
{
    doFetch();
}

btnTranslate.addEventListener('click',clickHandler);

