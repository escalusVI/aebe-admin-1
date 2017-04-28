var repas;

function init(json) {
    repas = json;
}

function getElementByName(name) {
    return document.getElementsByName(name)[0];
}


function update(elem) {
    var split = elem.value.replace("W", "").split("-");
    var year = parseInt(split[0]);
    var week = parseInt(split[1]);
    
    var lundi = repas[getWeek(year, week, 1)];    
    getElementByName("entreeLundi").value = (lundi != undefined ? lundi["entree"] : "");
    getElementByName("legumesLundi").value = (lundi != undefined ? lundi["legumes"] : "");
    getElementByName("viandeLundi").value = (lundi != undefined ? lundi["viande"] : "");
    getElementByName("dessertLundi").value = (lundi != undefined ? lundi["dessert"] : "");
    
    var mardi = repas[getWeek(year, week, 2)];    
    getElementByName("entreeMardi").value = (mardi != undefined ? mardi["entree"] : "");
    getElementByName("legumesMardi").value = (mardi != undefined ? mardi["legumes"] : "");
    getElementByName("viandeMardi").value = (mardi != undefined ? mardi["viande"] : "");
    getElementByName("dessertMardi").value = (mardi != undefined ? mardi["dessert"] : "");

    var jeudi = repas[getWeek(year, week, 4)];    
    getElementByName("entreeJeudi").value = (jeudi != undefined ? jeudi["entree"] : "");
    getElementByName("legumesJeudi").value = (jeudi != undefined ? jeudi["legumes"] : "");
    getElementByName("viandeJeudi").value = (jeudi != undefined ? jeudi["viande"] : "");
    getElementByName("dessertJeudi").value = (jeudi != undefined ? jeudi["dessert"] : "");
    
    var vendredi = repas[getWeek(year, week, 5)];    
    getElementByName("entreeVendredi").value = (vendredi != undefined ? vendredi["entree"] : "");
    getElementByName("legumesVendredi").value = (vendredi != undefined ? vendredi["legumes"] : "");
    getElementByName("viandeVendredi").value = (vendredi != undefined ? vendredi["viande"] : "");
    getElementByName("dessertVendredi").value = (vendredi != undefined ? vendredi["dessert"] : "");
}

function getWeek(year, week, day){
    var date = new Date(year, 0, 1 + day +((week-1)*7));
    return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2); 
}