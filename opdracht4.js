var tafels = prompt("hoeveel tafels wilt u naar het scherm geprint hebben?");

function aantal(tafels){
    for(var i = 1; i <= tafels; i++){
        document.write("1x" + i + "=" + 1*i + " " + "<br>");
        document.write("2x" + i + "=" + 2*i + " " + "<br>");
        document.write("3x" + i + "=" + 3*i + " " + "<br>");
        document.write("4x" + i + "=" + 4*i + " " + "<br>");
        document.write("5x" + i + "=" + 5*i + " " + "<br>");
        document.write("6x" + i + "=" + 6*i + " " + "<br>");
        document.write("7x" + i + "=" + 7*i + " " + "<br>");
        document.write("8x" + i + "=" + 8*i + " " + "<br>");
        document.write("9x" + i + "=" + 9*i + " " + "<br>");
        document.write("10x" + i + "=" + 10*i + " " + "<br>");
        document.write("<br>");


    }
}




aantal(tafels);