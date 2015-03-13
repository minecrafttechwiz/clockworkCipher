window.done = false;
var num = 0;
var letter = "null";
var decoding = {
    one: "A M Y 8",
    two: "B N Z 9",
    three: "C O 0",
    four: "D P ! ?",
    five: "E Q . ,",
    six: "F R 1",
    seven: "G S 2",
    eight: "H T 3",
    nine: "I U 4",
    ten: "J V 5",
    eleven: "K W 6",
    twelve: "L X 7"
};

function sessionType() {
if (window.done == true){
    var session = confirm("Do you want to encode or decode with the cypher? (Encode = OK, Decode = Cancel)");
    if (session === true) {
	document.write("Encoded Output: </br>");
        while (letter === "null") {
            encode();
        }
    } else {
	document.write("Decoded Output: </br>");
        while (num === 0) {
            decode();
        }
    }
}else{
alert("Please attach a document.");
}
}

function decode() {
    //num = prompt("Please enter the numbers one by one.");
	num = window.finalText;
    var textNum = "";
    var arrNum = num.split(" ");
for (var i = 0; i < arrNum.length; i++) {
    textNum = arrNum[i];
    textNum = parseInt(textNum, 0);
    switch (textNum) {
        case 1:
            document.write(decoding.one + "</br>");
            break;
        case 2:
            document.write(decoding.two + "</br>");
            break;
        case 3:
            document.write(decoding.three + "</br>");
            break;
        case 4:
            document.write(decoding.four + "</br>");
            break;
        case 5:
            document.write(decoding.five + "</br>");
            break;
        case 6:
            document.write(decoding.six + "</br>");
            break;
        case 7:
            document.write(decoding.seven + "</br>");
            break;
        case 8:
            document.write(decoding.eight + "</br>");
            break;
        case 9:
            document.write(decoding.nine + "</br>");
            break;
        case 10:
            document.write(decoding.ten + "</br>");
            break;
        case 11:
            document.write(decoding.eleven + "</br>");
            break;
        case 12:
            document.write(decoding.twelve + "</br>");
            break;
    }
    }
}

function encode() {
	var text = "";
    //letter = prompt("Please enter your words.");
	letter = window.finalText;
    var array = letter.split("");
    for (var i = 0; i < array.length; i++) {
    text = array[i];
    switch (text) {
        case "a":
        case "A":
        case "m":
        case "M":
        case "y":
        case "Y":
        case "8":
            document.write("1 ");
            console.log("1 ");
            break;
        case "b":
        case "B":
        case "n":
        case "N":
        case "z":
        case "Z":
        case "9":
            document.write("2 ");
            console.log("2 ");
            break;
        case "c":
        case "C":
        case "o":
        case "O":
        case "0":
            document.write("3 ");
            console.log("3 ");
            break;
        case "d":
        case "D":
        case "p":
        case "P":
        case "!":
        case "?":
            document.write("4 ");
            console.log("4 ");
            break;
        case "e":
        case "E":
        case "q":
        case "Q":
        case ".":
        case ",":
            document.write("5 ");
            console.log("5 ");
            break;
        case "f":
        case "F":
        case "r":
        case "R":
        case "1":
            document.write("6 ");
            console.log("6 ");
            break;
        case "g":
        case "G":
        case "s":
        case "S":
        case "2":
            document.write("7 ");
            console.log("7 ");
            break;
        case "h":
        case "H":
        case "t":
        case "T":
        case "3":
            document.write("8 ");
            console.log("8 ");
            break;
        case "i":
        case "I":
        case "u":
        case "U":
        case "4":
            document.write("9 ");
            console.log("9 ");
            break;
        case "j":
        case "J":
        case "v":
        case "V":
        case "5":
            document.write("10 ");
            console.log("10 ");
            break;
        case "k":
        case "K":
        case "w":
        case "W":
        case "6":
            document.write("11 ");
            console.log("11 ");
            break;
        case "l":
        case "L":
        case "x":
        case "X":
        case "7":
            document.write("12 ");
            console.log("12 ");
            break;
        case " ":
            break;
    }
    }
}
