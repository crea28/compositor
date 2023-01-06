/*
	VARIABLES AND ARRAY
 */

var notes = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
var max = notes.length;

/* 
	CHORDS FUNCTIONS
 */

function myFunction() {
	/*majorChord();
	minorChord();
	majorSevenChord();
	minorSevenChord();
	majorNineChord();
	minorNineChord();
	sus2Chord();
	sus4Chord();*/
	majorIonianScale();
	minorDorianScale();
	minorPhrygianScale();
	majorLydianScale();
	majorMixolydianScale();
	minorAeolianScale();
	minorLocrianScale();
}


function majorChord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posThird = posRoot + 4 ;
	var posFifth = posRoot + 7;

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}
	
	document.getElementById("majorChordResult").innerHTML =
		"<h3>" + rootNote + " Major Chord (T - 3M - 5)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> third :" + third + "</li>" + 
		"<li> fifth : " + fifth + "</li></ul>";
}

function minorChord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posThird = posRoot + 3 ;
	var posFifth = posRoot + 7;

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}
	
	document.getElementById("minorChordResult").innerHTML =
		"<h3>" + rootNote + " Minor Chord (T - 3m - 5)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> third :" + third + "</li>" + 
		"<li> fifth : " + fifth + "</li></ul>";
}


function majorSevenChord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posThird = posRoot + 4 ;
	var posFifth = posRoot + 7;
	var posSeventh = posRoot + 9;

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("majorSevenResult").innerHTML =
		"<h3>" + rootNote + " Major Seven Chord (T - 3m - 5 - 7)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> third :" + third + "</li>" + 
		"<li> fifth : " + fifth + "</li>" +
		"<li> seven : " + seven + "</li></ul>";
}

function minorSevenChord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posThird = posRoot + 3 ;
	var posFifth = posRoot + 7;
	var posSeventh = posRoot + 9;

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("minorSevenResult").innerHTML =
		"<h3>" + rootNote + " Minor Seven Chord (T - 3m - 5 - 7)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> third :" + third + "</li>" + 
		"<li> fifth : " + fifth + "</li>" +
		"<li> seven : " + seven + "</li></ul>";
}

function majorNineChord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posThird = posRoot + 4 ;
	var posFifth = posRoot + 7;
	var posSeventh = posRoot + 9;
	var posNineth = posRoot + 11;

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	if (posNineth >= max) {
		var nine = notes[posNineth - max];
	} else {
		var nine = notes[posNineth];
	}
	
	document.getElementById("majorNineResult").innerHTML =
		"<h3>" + rootNote + " Major Nine Chord (T - 3M - 5 - 7 - 9)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> third :" + third + "</li>" + 
		"<li> fifth : " + fifth + "</li>" +
		"<li> seven : " + seven + "</li>" +
		"<li> nine : " + nine + "</li></ul>";
}

function minorNineChord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posThird = posRoot + 3 ;
	var posFifth = posRoot + 7;
	var posSeventh = posRoot + 9;
	var posNineth = posRoot + 11;

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	if (posNineth >= max) {
		var nine = notes[posNineth - max];
	} else {
		var nine = notes[posNineth];
	}
	
	document.getElementById("minorNineResult").innerHTML =
		"<h3>" + rootNote + " Minor Nine Chord (T - 3m - 5 - 7 - 9)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> third :" + third + "</li>" + 
		"<li> fifth : " + fifth + "</li>" +
		"<li> seven : " + seven + "</li>" +
		"<li> nine : " + nine + "</li></ul>";
}

function sus2Chord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 2 ;
	var posFifth = posRoot + 7;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}
	
	document.getElementById("sus2Result").innerHTML =
		"<h3>" + rootNote + " sus2 Chord (T - 2 - 5)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> second :" + second + "</li>" + 
		"<li> fifth : " + fifth + "</li></ul>";
}

function sus4Chord() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 7;

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}
	
	document.getElementById("sus4Result").innerHTML =
		"<h3>" + rootNote + " sus4 Chord (T - 4 - 5)</h3>" +  
		"<ul><li>Root Note : " + rootNote + "</li> " + 
		"<li> fourth :" + fourth + "</li>" + 
		"<li> fifth : " + fifth + "</li></ul>";
}

/*
 * SCALES FUNCTIONS
 */

function majorIonianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 2 ;
	var posThird = posRoot + 4 ;
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 7;
	var posSixth = posRoot + 9 ;
	var posSeventh = posRoot + 11;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("ionianScaleResult").innerHTML =
		"<h3>" + rootNote + " Major Ionian Scale (T - 2 - 3 - 4 - 5 - 6 - 7)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

function minorDorianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 2 ;
	var posThird = posRoot + 3 ;
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 7;
	var posSixth = posRoot + 9 ;
	var posSeventh = posRoot + 10;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("dorianScaleResult").innerHTML =
		"<h3>" + rootNote + " Minor Dorian Scale (T - 2 - 3b - 4 - 5 - 6 - 7b)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

function minorPhrygianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 1 ;
	var posThird = posRoot + 3 ;
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 7;
	var posSixth = posRoot + 8 ;
	var posSeventh = posRoot + 10;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("phrygianScaleResult").innerHTML =
		"<h3>" + rootNote + " Minor Phrygian Scale (T - 2b - 3b - 4 - 5 - 6b - 7b)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

function majorLydianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 2 ;
	var posThird = posRoot + 4 ;
	var posFourth = posRoot + 6 ;
	var posFifth = posRoot + 7;
	var posSixth = posRoot + 9 ;
	var posSeventh = posRoot + 11;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("lydianScaleResult").innerHTML =
		"<h3>" + rootNote + " Major Lydian Scale (T - 2 - 3 - 4# - 5 - 6 - 7)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

function majorMixolydianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 2 ;
	var posThird = posRoot + 4 ;
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 7;
	var posSixth = posRoot + 9 ;
	var posSeventh = posRoot + 10;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("mixolydianScaleResult").innerHTML =
		"<h3>" + rootNote + " Major Mixolydian Scale (T - 2 - 3 - 4 - 5 - 6 - 7b)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

function minorAeolianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 2 ;
	var posThird = posRoot + 3 ;
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 7;
	var posSixth = posRoot + 8 ;
	var posSeventh = posRoot + 10;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("aeolianScaleResult").innerHTML =
		"<h3>" + rootNote + " Minor Aeolian Scale (T - 2 - 3b - 4 - 5 - 6b - 7b)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

function minorLocrianScale() {
	var rootNote = document.getElementById("myNote").value; 
	var posRoot = notes.indexOf(rootNote);
	var posSecond = posRoot + 1 ;
	var posThird = posRoot + 3 ;
	var posFourth = posRoot + 5 ;
	var posFifth = posRoot + 6;
	var posSixth = posRoot + 8 ;
	var posSeventh = posRoot + 10;

	if ( posSecond >= max ) {
		var second = notes[posSecond - max] ;
	} else {
		var second = notes[posSecond];
	}

	if ( posThird >= max ) {
		var third = notes[posThird - max] ;
	} else {
		var third = notes[posThird];
	}

	if ( posFourth >= max ) {
		var fourth = notes[posFourth - max] ;
	} else {
		var fourth = notes[posFourth];
	}

	if ( posFifth >= max ) {
		var fifth = notes[posFifth - max] ;
	} else {
		var fifth = notes[posFifth];
	}

	if ( posSixth >= max ) {
		var sixth = notes[posSixth - max] ;
	} else {
		var sixth = notes[posSixth];
	}

	if ( posSeventh >= max ) {
		var seven = notes[posSeventh - max] ;
	} else {
		var seven = notes[posSeventh];
	}

	document.getElementById("locrianScaleResult").innerHTML =
		"<h3>" + rootNote + " Minor Locrian Scale (T - 2b - 3b - 4 - 5b - 6b - 7b)</h3>" +  
		"<ul><li>" + rootNote + "</li> " + 
		"<li>" + second + "</li>" +
		"<li>" + third + "</li>" +
		"<li>" + fourth + "</li>" +
		"<li>" + fifth + "</li>" +
		"<li>" + sixth + "</li>" +
		"<li>" + seven + "</li></ul>";
}

/*
 * FIND THE CHORD
 */

function myChordFunction() {
	/* add a check to empty var */
	var chordName = document.getElementById("myChord").value;
	var countChar = chordName.length;
	var rootNote = chordName.charAt(0);
	var secondChar = chordName.charAt(1);
	var thirdChar = chordName.charAt(2);

	console.log(chordName);

	switch (secondChar) {
  		case 'm':
    			var nature = "minor";
    			break;
  		case 'M':
		case '' :
    			var nature = "major";
    			break;
		case 's':
			var sus4 = chordName.search("sus4");
			if ( sus4 == "1" ) {
				var nature = "suspended 4";
			} else {
				var nature = "suspended 2";
			}
			break;
		case 'a':
			if ( thirdChar == "u" ) {
				var nature = "augmented";
			} else if ( thirdChar == "d" ) {
				var nature = "added";
			}
			break;
		case 'd':
			var nature = "dim";
			break;
		case '2':
			var nature = "add 9";
			break;
		case '5':
			var nature = "power chord";
			break;
		case '6':
			var nature = "sixth";
			break;
		case '7':
			var nature = "major dominant seven";
			break;
		case 'b':
			var nature = "bemol";
			break;
		case '#':
			var nature = "dieze";
			break;
  		default:
    			var nature = "I don't know this chord";
	}

	switch (thirdChar) {
		case 'd':
			var thirdCar = "dim";
			break;
		case 's':
			var toto = chordName.search("sus2");
			console.log(toto);
                        if ( toto == "2" ) {
                                var thirdCar = "suspended 2";
                        } else {
                                var thirdCar = "suspended 4";
			}
			break;
		case '5':
			var thirdCar = "power chord";
			break;
		case '7':
			var thirdCar = "dominant seven";
			break;
		default:
			var thirdCar = '';

	}

/*	if (chordName == null && chordName == '') {
		document.getElementById("myChordResult").innerHTML = "Please fill the blank";
	}
*/
	console.log(nature);
	console.log(thirdCar);
	document.getElementById("mychordResult").innerHTML = 
		"<h3> Chord Name (" + countChar + ") : " + chordName + "</h3>" +
		"<ul><li>" + rootNote + "" + nature + "" + thirdCar + "</li></ul>";
}
