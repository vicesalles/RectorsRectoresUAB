//@include ./lib/json2.jsx

var projectItems = app.project.items;
var arxiuJson = new File("/Users/equip05/Documents/50anys/app/taller/grafisme/titols/rector.json");

// Id de la carpeta on guardarem els titols de nova creacio
var carpetaTitols = 43;
// Id de la plantilla
var plantilla = 2;


// Actualitza les ids dels elements clau
// /!\ Només cal executar-lo el primer cop que correm l'script en un equip nou /!\
//SetupFoldersAndTemplates();

//1. Processar el JSON;
var dades = readJson();

 //2. Crear tots els titols
produceAllTitles(dades);  

function SetupFoldersAndTemplates(){
    
    $.writeln("----- Setup -----");

    for(i=1; i <= projectItems.length; i++){

        var currentItem = projectItems[i];    
         
       // 1. Detectar les plantilles dels titols
       if(currentItem.name == "plantilla"){
        alert(currentItem.id);  
        plantilla = currentItem.id;       
       }         
       // 2. Detectar la carpeta on es generen els títols
       if(currentItem.name == "titols"){
        alert(currentItem.id);  
        carpetaTitols = currentItem.id;       
       }      
        
    }

    $.writeln("----- Done Carpetes -----");   
    
}

/// Guarda un Item en una variable si l'Item té un nom concret;
function storeByName(item,name,target){
    
    if(item.name == name){
       
        this[target] = parseInt(item.id); 
        $.writeln("la id de " + name +" és: "+item.id);
        $.writeln( this[target] );
        }

    }

// Crea tots els titols en funció del json
function produceAllTitles(data){   

    // Borrar tots els continguts de la carpeta de titols
    var carpeta= app.project.itemByID(carpetaTitols); 
    
    for (var i = carpeta.items.length; i>0; i--) {       
             carpeta.item(i).remove(); 
    }
   
    // Crear els titols nous    
    for(i=0; i < data.length; i++){

        createTitle(data[i]);
        
        }    
    
    }

//Crea una nova composició en funció de l'objecte json que li passem
function createTitle(data){
   
         $.writeln("tipus: "+ data.id);
        // 1. Crea nou títol
        duplicateComp (plantilla, data.id, data.txt);

    }

// Crea una composició nova a partir d'una plantilla que li passes i la guarda a la carpeta "Titols";
function duplicateComp(template, newName,text){
     $.writeln("creating " + template);
    newComp = app.project.itemByID(template).duplicate();    
    newComp.name =newName;
    newComp.name =newName;
    newComp.parentFolder = app.project.itemByID(carpetaTitols);        
    setTitleText (newComp.id, text);
    
}

// Edita el text d'un titol
function setTitleText(compId,text){
 
    $.writeln("compid és: "+ compId); 
    app.project.itemByID(compId).layer(2).property("Source Text").setValue(text);    
 }


// Llegir json => https://stackoverflow.com/questions/63996131/trying-to-parse-nested-json-file-in-after-effects-scripting
function readJson() {
    var currentLine;
    var jsonStuff = [];
    
    arxiuJson.open("r");
        while(!arxiuJson.eof) {
                currentLine = arxiuJson.readln();
                jsonStuff.push(currentLine);
            }
    arxiuJson.close();
    
    jsonStuff = jsonStuff.join("");
    var parsedJson = JSON.parse(jsonStuff);
        
    return parsedJson;
    }