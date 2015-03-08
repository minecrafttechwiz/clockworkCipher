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
}

function stopNum() {
    var stoppingNum = confirm("Anything else?");
    if (stoppingNum === false) {
        num = null;
    } else {
        num = 0;
    }
}

function stopLetter() {
    var stoppingLetter = confirm("Anything else?");
    if (stoppingLetter === false) {
        letter = null;
    } else {
        letter = "null";
    }
}

function decode() {
    num = prompt("Please enter the numbers one by one.");
    num = parseInt(num, 0);
    switch (num) {
        case 1:
            document.write(decoding.one + "</br>");
            stopNum();
            break;
        case 2:
            document.write(decoding.two + "</br>");
            stopNum();
            break;
        case 3:
            document.write(decoding.three + "</br>");
            stopNum();
            break;
        case 4:
            document.write(decoding.four + "</br>");
            stopNum();
            break;
        case 5:
            document.write(decoding.five + "</br>");
            stopNum();
            break;
        case 6:
            document.write(decoding.six + "</br>");
            stopNum();
            break;
        case 7:
            document.write(decoding.seven + "</br>");
            stopNum();
            break;
        case 8:
            document.write(decoding.eight + "</br>");
            stopNum();
            break;
        case 9:
            document.write(decoding.nine + "</br>");
            stopNum();
            break;
        case 10:
            document.write(decoding.ten + "</br>");
            stopNum();
            break;
        case 11:
            document.write(decoding.eleven + "</br>");
            stopNum();
            break;
        case 12:
            document.write(decoding.twelve + "</br>");
            stopNum();
            break;
        default:
            alert("This will not work. Try again.");
            num = 0;
            stopNum();
            break;
    }
}

function encode() {
	var text = "";
    letter = prompt("Please enter your words.");
    letter.split("");
    for (var i = 0; i < letter.length; i++) {
    text = letter;
    switch (text) {
        case "a":
        case "A":
        case "m":
        case "M":
        case "y":
        case "Y":
        case "8":
            document.write("1 ");
            stopLetter();
            break;
        case "b":
        case "B":
        case "n":
        case "N":
        case "z":
        case "Z":
        case "9":
            document.write("2 ");
            stopLetter();
            break;
        case "c":
        case "C":
        case "o":
        case "O":
        case "0":
            document.write("3 ");
            stopLetter();
            break;
        case "d":
        case "D":
        case "p":
        case "P":
        case "!":
        case "?":
            document.write("4 ");
            stopLetter();
            break;
        case "e":
        case "E":
        case "q":
        case "Q":
        case ".":
        case ",":
            document.write("5 ");
            stopLetter();
            break;
        case "f":
        case "F":
        case "r":
        case "R":
        case "1":
            document.write("6 ");
            stopLetter();
            break;
        case "g":
        case "G":
        case "s":
        case "S":
        case "2":
            document.write("7 ");
            stopLetter();
            break;
        case "h":
        case "H":
        case "t":
        case "T":
        case "3":
            document.write("8 ");
            stopLetter();
            break;
        case "i":
        case "I":
        case "u":
        case "U":
        case "4":
            document.write("9 ");
            stopLetter();
            break;
        case "j":
        case "J":
        case "v":
        case "V":
        case "5":
            document.write("10 ");
            stopLetter();
            break;
        case "k":
        case "K":
        case "w":
        case "W":
        case "6":
            document.write("11 ");
            stopLetter();
            break;
        case "l":
        case "L":
        case "x":
        case "X":
        case "7":
            document.write("12 ");
            stopLetter();
            break;
        default:
            alert("This will not work. Try again.");
            letter = "null";
            stopLetter();
            break;
    }
    }
}

sessionType();
