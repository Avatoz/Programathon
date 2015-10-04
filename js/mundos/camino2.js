var tid = setInterval(mycode, 2000);
var img1, img2, img3 = "";
var aciertos = 0, fallos = 0;
var arrows = ['.img1','.img2', '.img3', '.img4'];
var arrArrows = ["../../media/images/Camino2/FLECHAS/camino_2_pic_1.png", "../../media/images/Camino2/FLECHAS/camino_2_pic_2.png", "../../media/images/Camino2/FLECHAS/camino_2_pic_3.png", "../../media/images/Camino2/FLECHAS/camino_2_pic_4.png"]

function assignOrientationFirst() {
    var randomArrow = Math.floor((Math.random() * 3) + 1);
    document.getElementById("img1").src=arrArrows[randomArrow];
}

function assignOrientationAll () {

    var randomArrow = Math.floor((Math.random() * 3) + 1);
    document.getElementById("img1").src=arrArrows[randomArrow];
    var randomArrow = Math.floor((Math.random() * 3) + 1);
    document.getElementById("img2").src=arrArrows[randomArrow];
    var randomArrow = Math.floor((Math.random() * 3) + 1);
    document.getElementById("img3").src=arrArrows[randomArrow];
    var randomArrow = Math.floor((Math.random() * 3) + 1);
    document.getElementById("img4").src=arrArrows[randomArrow];
}

function mycode() {
    //debugger;
    var img1 = document.getElementById("img1").src;

    var img2 = document.getElementById("img2").src;
    var img3 = document.getElementById("img3").src;

    document.getElementById("img2").src=img1;
    document.getElementById("img3").src=img2;
    document.getElementById("img4").src=img3;

    assignOrientationFirst();
}

function compareKeyDown(path) {
    console.log(document.getElementById("img4").src);
    src = document.getElementById("img4").src;  
    tarr = src.split('/');      
    file = tarr[tarr.length-1]; 
    pathSrc = path;
    pathTarr = pathSrc.split('/');
    pathFile = pathTarr[pathTarr.length-1];
    if (pathFile == file) {
        //aciertos++;
        document.getElementById("spnAciertos").innerHTML = ++aciertos;
    }else {
        //fallos;
        document.getElementById("spnFallos").innerHTML = ++fallos;
    }
}

$( document ).ready(function() {
    //debugger;
    assignOrientationAll();
});

$(document).keydown(function(e){
    
    //debugger;
    e = e || window.event;
    
    if (e.keyCode == '38') {
        compareKeyDown(arrArrows[0]);
    }
    else if (e.keyCode == '39') {
        compareKeyDown(arrArrows[1]);
    }
    else if (e.keyCode == '40') {
        compareKeyDown(arrArrows[2]);
    }
    else if (e.keyCode == '37') {
        compareKeyDown(arrArrows[3]);
    }
    mycode();
    
});

