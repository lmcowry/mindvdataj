class GuessObj {
    constructor(s0, s1, s2, s3){
        this.s0 = s0;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;

        this.colors0;
        this.colors1;
        this.colors2;
        this.colors3;

        this.cs0;
        this.cs1;
        this.cs2;
        this.cs3;

        this.cf2 = 0;
        this.cf3 = 0;

        this.win = false;


        if (this.s0 === 'r'){
            this.colors0 = "background:red";
        }
        else if (this.s0 === "g"){
            this.colors0 = "background:green";
        }
        else if (this.s0 === "b"){
            this.colors0 = "background:blue";
        }
        else if (this.s0 === "c"){
            this.colors0 = "background:cyan";
        }
        else if (this.s0 === "y"){
            this.colors0 = "background:yellow";
        }
        else if (this.s0 === "m"){
            this.colors0 = "background:magenta";
        }


        if (this.s1 === "r"){
            this.colors1 = "background:red";
        }
        else if (this.s1 === "g"){
            this.colors1 = "background:green";
        }
        else if (this.s1 === "b"){
            this.colors1 = "background:blue";
        }
        else if (this.s1 === "c"){
            this.colors1 = "background:cyan";
        }
        else if (this.s1 === "y"){
            this.colors1 = "background:yellow";
        }
        else if (this.s1 === "m"){
            this.colors1 = "background:magenta";
        }


        if (this.s2 === "r"){
            this.colors2 = "background:red";
        }
        else if (this.s2 === "g"){
            this.colors2 = "background:green";
        }
        else if (this.s2 === "b"){
            this.colors2 = "background:blue";
        }
        else if (this.s2 === "c"){
            this.colors2 = "background:cyan";
        }
        else if (this.s2 === "y"){
            this.colors2 = "background:yellow";
        }
        else if (this.s2 === "m"){
            this.colors2 = "background:magenta";
        }

        if (this.s3 === "r"){
            this.colors3 = "background:red";
        }
        else if (this.s3 === "g"){
            this.colors3 = "background:green";
        }
        else if (this.s3 === "b"){
            this.colors3 = "background:blue";
        }
        else if (this.s3 === "c"){
            this.colors3 = "background:cyan";
        }
        else if (this.s3 === "y"){
            this.colors3 = "background:yellow";
        }
        else if (this.s3 === "m"){
            this.colors3 = "background:magenta";
        }
    }
}
var listOfOldGuesses = [];
var theAnswerList = [];


function loadOnce() {
    //check if this has been loaded before
    if (theAnswerList.length > 0){
        //might need to change this.  return - 1?
        return;
    }

    // need to have a check for repeat answers

    // var possibleAnswers = ["r", "g", "b", "c", "y", "m"];
    // var howManyAnswers = 5;
    // for (var counter=0;counter<howManyAnswers;counter++){
    //     console.log(counter);
    //     var rand0 = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    //     var rand1 = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    //     var rand2 = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    //     var rand3 = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    //
    //     var anAnswer = new GuessObj(rand0, rand1, rand2, rand3);
    //     theAnswerList.push(anAnswer);
    // }
    var rand0 = "r";
    var rand1 = "b";
    var rand2 = "b";
    var rand3 = "m";

    var anAnswer = new GuessObj(rand0, rand1, rand2, rand3);
    theAnswerList.push(anAnswer);

    var rand0 = "c";
    var rand1 = "y";
    var rand2 = "y";
    var rand3 = "m";

    var anotherAnswer = new GuessObj(rand0, rand1, rand2, rand3);
    theAnswerList.push(anotherAnswer);

    var rand0 = "b";
    var rand1 = "b";
    var rand2 = "b";
    var rand3 = "m";

    var oneMoreAnswer = new GuessObj(rand0, rand1, rand2, rand3);
    theAnswerList.push(oneMoreAnswer);

}

function loadData() {
    var g0 = $('#guessAt0Input').val();
    var g1 = $('#guessAt1Input').val();
    var g2 = $('#guessAt2Input').val();
    var g3 = $('#guessAt3Input').val();

    var thisGuess = new GuessObj(g0, g1, g2, g3);
    listOfOldGuesses.push(thisGuess);



    // need to figure out how many colors for the ?
    var rCount = 0;
    var gCount = 0;
    var bCount = 0;
    var cCount = 0;
    var yCount = 0;
    var mCount = 0;

    var howManyColors = function(){
        theAnswerList.forEach(function(eachAnswer){
            if (eachAnswer.s0 === "r"){
                rCount++;
            }
            else if (eachAnswer.s0 === "g"){
                gCount++;
            }
            else if (eachAnswer.s0 === "b"){
                bCount++;
            }
            else if (eachAnswer.s0 === "c"){
                cCount++;
            }
            else if (eachAnswer.s0 === "y"){
                yCount++;
            }
            else if (eachAnswer.s0 === "m"){
                mCount++;
            }


            if (eachAnswer.s1 === "r"){
                rCount++;
            }
            else if (eachAnswer.s1 === "g"){
                gCount++;
            }
            else if (eachAnswer.s1 === "b"){
                bCount++;
            }
            else if (eachAnswer.s1 === "c"){
                cCount++;
            }
            else if (eachAnswer.s1 === "y"){
                yCount++;
            }
            else if (eachAnswer.s1 === "m"){
                mCount++;
            }


            if (eachAnswer.s2 === "r"){
                rCount++;
            }
            else if (eachAnswer.s2 === "g"){
                gCount++;
            }
            else if (eachAnswer.s2 === "b"){
                bCount++;
            }
            else if (eachAnswer.s2 === "c"){
                cCount++;
            }
            else if (eachAnswer.s2 === "y"){
                yCount++;
            }
            else if (eachAnswer.s2 === "m"){
                mCount++;
            }


            if (eachAnswer.s3 === "r"){
                rCount++;
            }
            else if (eachAnswer.s3 === "g"){
                gCount++;
            }
            else if (eachAnswer.s3 === "b"){
                bCount++;
            }
            else if (eachAnswer.s3 === "c"){
                cCount++;
            }
            else if (eachAnswer.s3 === "y"){
                yCount++;
            }
            else if (eachAnswer.s3 === "m"){
                mCount++;
            }
        });
    }
    howManyColors();




    //does way too much.  refactor
    var spot0 = 0;
    var spot1 = 0;
    var spot2 = 0;
    var spot3 = 0;

    var isItAWinner = function(){
        theAnswerList.forEach(function(eachAnswer){
            if (thisGuess.s0 === eachAnswer.s0 && thisGuess.s1 === eachAnswer.s1 && thisGuess.s2 === eachAnswer.s2 && thisGuess.s3 === eachAnswer.s3){
                thisGuess.win = true;
            }
            else{
                var makeTheClues = function(){
                    //how many answers with the colors right where the user put them?
                    if (thisGuess.s0 === eachAnswer.s0){
                        spot0 += 1;
                    }
                    if (thisGuess.s1 === eachAnswer.s1){
                        spot1 += 1;
                    }
                    if (thisGuess.s2 === eachAnswer.s2){
                        spot2 += 1;
                    }
                    if (thisGuess.s3 === eachAnswer.s3){
                        spot3 += 1;
                    }


                    // how many not exactly where the user put them?  make the clues here
                    if (spot0 === 0){
                        // the user guessed r, there are no r's in the database
                        if (thisGuess.s0 === "r"){
                            thisGuess.cs0 = `${rCount}?`;
                        }
                        else if (thisGuess.s0 === "g"){
                            thisGuess.cs0 = `${gCount}?`;
                        }
                        else if (thisGuess.s0 === "b"){
                            thisGuess.cs0 = `${bCount}?`;
                        }
                        else if (thisGuess.s0 === "c"){
                            thisGuess.cs0 = `${cCount}?`;
                        }
                        else if (thisGuess.s0 === "y"){
                            thisGuess.cs0 = `${yCount}?`;
                        }
                        else if (thisGuess.s0 === "m"){
                            thisGuess.cs0 = `${mCount}?`;
                        }
                    }
                    // the user guessed r, there is an r at this spot in the database
                    else{
                        thisGuess.cs0 = `${spot0}!`;
                    }

                    if (spot1 === 0){
                        // the user guessed r, there are no r's in the database
                        if (thisGuess.s1 === "r"){
                            thisGuess.cs1 = `${rCount}?`;
                        }
                        else if (thisGuess.s1 === "g"){
                            thisGuess.cs1 = `${gCount}?`;
                        }
                        else if (thisGuess.s1 === "b"){
                            thisGuess.cs1 = `${bCount}?`;
                        }
                        else if (thisGuess.s1 === "c"){
                            thisGuess.cs1 = `${cCount}?`;
                        }
                        else if (thisGuess.s1 === "y"){
                            thisGuess.cs1 = `${yCount}?`;
                        }
                        else if (thisGuess.s1 === "m"){
                            thisGuess.cs1 = `${mCount}?`;
                        }
                    }
                    // the user guessed r, there is an r at this spot in the database
                    else{
                        thisGuess.cs1 = `${spot1}!`;
                    }

                    if (spot2 === 0){
                        // the user guessed r, there are no r's in the database
                        if (thisGuess.s2 === "r"){
                            thisGuess.cs2 = `${rCount}?`;
                        }
                        else if (thisGuess.s2 === "g"){
                            thisGuess.cs2 = `${gCount}?`;
                        }
                        else if (thisGuess.s2 === "b"){
                            thisGuess.cs2 = `${bCount}?`;
                        }
                        else if (thisGuess.s2 === "c"){
                            thisGuess.cs2 = `${cCount}?`;
                        }
                        else if (thisGuess.s2 === "y"){
                            thisGuess.cs2 = `${yCount}?`;
                        }
                        else if (thisGuess.s2 === "m"){
                            thisGuess.cs2 = `${mCount}?`;
                        }
                    }
                    // the user guessed r, there is an r at this spot in the database
                    else{
                        thisGuess.cs2 = `${spot2}!`;
                    }

                    if (spot3 === 0){
                        // the user guessed r, there are no r's in the database
                        if (thisGuess.s3 === "r"){
                            thisGuess.cs3 = `${rCount}?`;
                        }
                        else if (thisGuess.s3 === "g"){
                            thisGuess.cs3 = `${gCount}?`;
                        }
                        else if (thisGuess.s3 === "b"){
                            thisGuess.cs3 = `${bCount}?`;
                        }
                        else if (thisGuess.s3 === "c"){
                            thisGuess.cs3 = `${cCount}?`;
                        }
                        else if (thisGuess.s3 === "y"){
                            thisGuess.cs3 = `${yCount}?`;
                        }
                        else if (thisGuess.s3 === "m"){
                            thisGuess.cs3 = `${mCount}?`;
                        }
                    }
                    // the user guessed r, there is an r at this spot in the database
                    else{
                        thisGuess.cs3 = `${spot3}!`;
                    }

                    // create the first two clue and first three clue
                    var firstTwo = 0;
                    var firstThree = 0;

                    theAnswerList.forEach(function(eachAnswer){
                        //checks for first two
                        if (thisGuess.s0 === eachAnswer.s0 && thisGuess.s1 === eachAnswer.s1){
                            //checks for first three
                            if (thisGuess.s2 === eachAnswer.s2){
                                firstThree++;
                            }
                            firstTwo++;

                        }
                    });

                    thisGuess.cf2 = firstTwo;
                    thisGuess.cf3 = firstThree;

                }

                makeTheClues();
            }
        })
    };

    isItAWinner();


    $('.eachOldGuess').text("");

    // this creates a row for each guess in the list of old guesses and adds the inline css style for the color
    for (var counter = 0; counter < listOfOldGuesses.length; counter++){
        $('.eachOldGuess').append("<tr " + "id= guess" + counter + ">");

        $('#guess' + counter).append("<td style=" + listOfOldGuesses[counter].colors0 + ">" + listOfOldGuesses[counter].s0 + "</td>");
        $('#guess' + counter).append("<td style=" + listOfOldGuesses[counter].colors1 + ">" + listOfOldGuesses[counter].s1 + "</td>");
        $('#guess' + counter).append("<td style=" + listOfOldGuesses[counter].colors2 + ">" + listOfOldGuesses[counter].s2 + "</td>");
        $('#guess' + counter).append("<td style=" + listOfOldGuesses[counter].colors3 + ">" + listOfOldGuesses[counter].s3 + "</td>");

        $('.eachOldGuess').append("</tr>");
    }


    var winCount = 1;
    // this adds the clue information to the row.  could easily be in the previous for loop, but tidied it up
    for (var counter = 0; counter < listOfOldGuesses.length; counter++){
        //check if it's a win guess or not.  if it is, print Win in place of the clues; if it isn't, print the regular clue
        if (listOfOldGuesses[counter].win === true){
            $('#guess' + counter).append(`Win ${winCount}`);
            winCount++;
        }
        else{
            $('#guess' + counter).append("|" + listOfOldGuesses[counter].cs0);
            $('#guess' + counter).append("|" + listOfOldGuesses[counter].cs1);
            $('#guess' + counter).append("|" + listOfOldGuesses[counter].cs2);
            $('#guess' + counter).append("|" + listOfOldGuesses[counter].cs3);
            $('#guess' + counter).append("| ");
            $('#guess' + counter).append(listOfOldGuesses[counter].cf2);
            $('#guess' + counter).append("<strong>&amp;</strong>");
            $('#guess' + counter).append(listOfOldGuesses[counter].cf3);
        }

    };
}

$('#guessSubmit').submit(function(e){
    e.preventDefault();
    loadOnce();
    loadData();
});
