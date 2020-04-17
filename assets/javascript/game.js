// My word-guess game
    var UScityNames = ["Kona",
                        "Santa Fe",
                        "Los Lunas",
                        "Flagstaff",
                        "Cambria",
                        "Boonton Twp",
                        "Paso Robles",
                        "Ocean View",
                        "Rockaway River",
                        "Yellowstone",
                        "Lower Falls",
                        "Silver Sands",
                        "Albuquerque",
                        "Rockaway Drive",
                        "Montoya Street",
                        "Portland Rose Garden",
                        "Jamaica",
                        "Montoya Street"];
    var UScityImages = ["Bev_Dylan_Zayden_Hawaii.JPG",
                        "Bev_Family_Christmas_SantaFe.jpg",
                        "Bev_All_Family_LosLunas.jpg",
                        "Bev_Flagstaff.jpeg",
                        "Bev_on_horse_BoontonTwp.jpg",
                        "Bev_all_children_Kyles_wedding_Cambria.jpg",
                        "Bev_PasoRobles.jpg",
                        "Bev_Hawaii_cliffs_2013.JPG",
                        "Bev_Peter_Nancy_swimming_RockawayRiver.jpg",
                        "Bev_Kyle_Yellowstone.jpeg",
                        "Bev_Yellowstone_LowerFalls.JPG",
                        "Bev_Kyle_Nancy_Kim_Brittany_Jamaica_2011.jpg",
                        "Bev_Zayden_Albuqeurque.JPG",
                        "Bev_Beach_Jamaica.jpeg",
                        "LoisBevJeanShep_RockawayDrive.jpeg",
                        "Bev_RoseGarden_Portland.JPG",
                        "Bev_Kyle_MontayaSt.JPG"];
    var UScityNameHints = ["Think Big",
                        "It's so enchanting",
                        "Don't moon anybody!",
                        "Launching point to the grand one",
                        "Home, sweet home",
                        "Highway 1 beauty",
                        "Under-the-radar landing spot for wine lovers",
                        "Big Island lookout point",
                        "Rock-a-bye baby",
                        "It doesn't get any more faithful",
                        "Not the upper",
                        "Think metal the Dutch hate",
                        "Up, up and away in my beautiful baloon...",
                        "Ya mon!",
                        "And across this street was a fable or two or more...",
                        "Overlooks a dangerous place for Trump to visit"];
    var imageData = [
        {
            location: "Kona",
            image: "Bev_Dylan_Zayden_Hawaii.JPG",
            hint: "Think Big"
        },
        {
            location: "Santa Fe",
            image: "Bev_Family_Christmas_SantaFe.jpg",
            hint: "It's so enchanting"    
        },
        {
            location: "Los Lunas",
            image: "Bev_All_Family_LosLunas.jpg",
            hint: "Don't moon anybody!"
        },
        {
            location: "Flagstaff",
            image: "Bev_Flagstaff.jpeg",
            hint: "Grand Canyon launching point"
        },
        {
            location: "Cambria",
            image: "Bev_all_children_Kyles_wedding_Cambria.jpg",    
            hint: "Highway 1 gem"
        },
        {
            location: "Boonton Township",
            image: "Bev_on_horse_BoontonTwp.jpg",
            hint: "Home, sweet home"
        },
        {
            location: "Paso Robles",
            image: "Bev_PasoRobles.jpg",
            hint: "Under-the-radar landing spot for wine lovers"
        },
        {
            location: "South Point",
            image: "Bev_Hawaii_cliffs_2013.JPG",
            hint: "Big Island vista point"
        },
        {
            location: "Rockaway River",
            image: "Bev_Peter_Nancy_swimming_RockawayRiver.jpg",
            hint: "Rock-a-bye baby"
        },
        {
            location: "Yellowstone",
            image: "Bev_Kyle_Yellowstone.jpeg",
            hint: "It doesn't get any more faithful"

        },
        {
            location: "Yellowstone Lower Falls",
            image: "Bev_Yellowstone_LowerFalls.JPG",
            hint: "Not the upper"

        },
        {
            location: "Silver Sands",
            image: "Bev_Kyle_Nancy_Kim_Brittany_Jamaica_2011.jpg",
            hint: "Think of the metal the Dutch hate"
        },
        {
            location: "Albuquerque",
            image: "Bev_Zayden_Albuqeurque.JPG",
            hint: "Up, up and away in my beautiful baloon..."

        },
        {
            location: "Rockaway Drive",
            image: "LoisBevJeanShep_RockawayDrive.jpeg",
            hint: "And across this street was a fable or two or more..."

        },
        {
            location: "Montoya Street",
            image: "Bev_Kyle_MontayaSt.JPG",
            hint: "Amont minus A plus toy plus A street"

        },
        {
            location: "Portland Rose Garden",
            image: "Bev_RoseGarden_Portland.JPG",
            hint: "Trump is not welcome in this northwest garden"
        },
        {
            location: "Jamaica",
            image: "Bev_Beach_Jamaica.jpeg",
            hint: "Ya, mon"
        }];

    var gameChoices = ["r", "p", "s"];
    var currentCity_array = [];
    var currentCity_visibleLetters = [];
    var currentCity_display = [];
    var currentCity_display2 = [];
    var guessedLetters = [];
    var currentCityWords = [];
    var selectedCities = [];
    //  web page element variables
    var currentCity = document.getElementById("current-city");
    var currentCity2 = document.getElementById("current-city2");
    var currentCity3 = document.getElementById("current-city3");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesRemaining = document.getElementById("guesses-remaining");
    var lettersGuessed = document.getElementById("letters-guessed");
    var varImage = document.getElementById("left-column-image");
    // var celebrationImage = document.getElementById("left-column-celebration-image");
    var celebrationImage = document.getElementById("celebration");
    var myUserAlertButton = document.getElementById("my-user-alert-button");
    var cityPictureHintText = document.getElementById("city-picture-hint-text");

    // var audioElement_wonGame = document.createElement("audio");
    var audioElement_wonGame = new Audio();
    audioElement_wonGame.src = "assets/sounds/Audience_Applause-Matthiew11-1206899159.mp3";
    audioElement_wonGame.preload = "auto";

    // var audioElement_lostGame = document.createElement("audio");
    var audioElement_lostGame = new Audio();
    audioElement_lostGame.src =  "assets/sounds/hahaha-Peter_De_Lang-1639076107.mp3";
    audioElement_lostGame.preload = "auto";

    var audioElement = document.createElement("audio");
    var cityIndex;
    var guessesRemainingCount;
    var winsCount;
    var lossesCount;
    var userButtonClicked;

    var cityIndex;

    var lostGameMessage = "Sorry. You lost this game. Click to continue playing";
    var wonGameMessage = "You are a WINNER!!! Click to continue playing";

    // perform one-time initialization
    initializeSessionVariables();
    //  Start the game
    resetGame();
    celebrationImage.style.visibility = "hidden";
    celebrationImage.style.display = "none";

    celebrationImage.addEventListener("mouseenter", function( event ) {
    });  
    document.onkeyup = function(event) {
        var userChoice, computerChoice;

        // check to see if we are waiting for user to play the next game
        if (myUserAlertButton.style.visibility == "visible") {
            return;
        }
        userChoice=event.key;
        if (userChoice == "Shift") {
            return;
        }
        if (isLetterInCity(userChoice)) {
            updateCurrentCityDisplay();
        } else {
            guessesRemainingCount--;
        }
        if ((currentCity.textContent.indexOf("_") >= 0) || (currentCity2.textContent.indexOf("_") >= 0) || (currentCity3.textContent.indexOf("_") >= 0)) {
            if (guessesRemainingCount==0) {
                lossesCount++;
                enableButton(lostGameMessage);
             }
            guessesRemaining.textContent = guessesRemainingCount;
            if (lettersGuessed.textContent === "") {
                lettersGuessed.textContent += userChoice.toUpperCase();
            } else {
                lettersGuessed.textContent += " " + userChoice.toUpperCase();
            }
        } else {
            winsCount++;
            //  Start the game from scratch
            enableButton(wonGameMessage);
        }
        winsText.textContent = winsCount;
        lossesText.textContent = lossesCount;
        console.log("user's choice=" + userChoice, "computer's choice=" + computerChoice, "user wins=" + winsCount, "user losses=" + lossesCount);
    }
    //___________________________________________________________
    function changeImage(imageIndex)
    {
        //var newSource = "assets/images/" + UScityImages[imageIndex];
        // var newSource = "assets/images/Bev/" + UScityImages[imageIndex];
        var newSource = "assets/images/Bev/" + imageData[imageIndex].image;
        
        varImage.setAttribute("src", newSource);
        varImage.setAttribute("max-height", '80%');
        cityPictureHintText.textContent = imageData[imageIndex].hint;
        // cityPictureHintText.textContent = UScityNameHints[imageIndex];
    }
    //____________________________________________________________
    function initializeCurrentCityDisplay() {
        var currentCityWord = "";
        guessedLetters= [];
        // load current city words array with the words from the current city
        //var currentCityWords = UScityNames[cityIndex].split(" ");
        var currentCityWords = imageData[cityIndex].location.split(" ");
        for (i=0;i<currentCityWords.length;i++) {
            currentCityWord = currentCityWords[i];
            console.log("Current US city word=" + currentCityWord);

            guessedLetters[i]="";
            for (var j=0;j<currentCityWord.length;j++) {
                guessedLetters[i] += "_";
            }
        }
        console.log("guessedLetters="+ guessedLetters);
    }
    //____________________________________________________________
    function updateCurrentCityDisplay() {
        var currentWord;

        currentCity.textContent = "";
        currentCity2.textContent = "";
        currentCity3.textContent = "";
        for (i=0;i<guessedLetters.length;i++) {
            currentWord = guessedLetters[i];
            for (var j=0;j<currentWord.length;j++) {
                if (i==0) {
                    currentCity.textContent += currentWord.charAt(j) + " ";
                } else if (i==1) {
                    currentCity2.textContent += currentWord.charAt(j) + " ";                       
                } else {
                    currentCity3.textContent += currentWord.charAt(j) + " ";                                          
                }
            }
        }
        console.log("updateCurrentCityDisplay: Current city context="+currentCity.textContent);
    }
    //____________________________________________________________
    function isLetterInCity(letter) {
        var result = false;
        // var cityWords = UScityNames[cityIndex].split(" ");
        var cityWords = imageData[cityIndex].location.split(" ");
        for (i=0;i<cityWords.length;i++) {
            var reconstructedWord = "";
            var guessedLettersWord = guessedLetters[i];
            var currentCityWord = cityWords[i];
            for (var j=0;j<currentCityWord.length;j++) {
            // if (letter.toLowerCase() === UScityNames[cityIndex][i]) {
                if (letter.toLowerCase() === currentCityWord.charAt(j).toLowerCase()) {
                    if (j == 0) {
                        reconstructedWord += letter.toUpperCase();
                        // alert("letter="+letter.toUpperCase());
                    } else {
                        reconstructedWord += letter.toLowerCase();
                    }
                    result = true;
                    console.log("isLetterInCity: currentCity="+ currentCity + " letter="+letter + " currentCity_display="+ currentCity_display);
                } else {
                    reconstructedWord += guessedLettersWord.charAt(j);
                }
            }
            // save the reconstructed word currently being displayed on the web page
            guessedLetters[i] = reconstructedWord;
        }
        console.log("isLetterInCity: reconstructedWord=" + reconstructedWord);
       return result;
    }
    //________________________________________________________________
    function initializeVariableValues() {
        // select the city to be guessed
        var numSelectedCities = 0;
        do {
            // cityIndex = Math.floor(Math.random() * UScityNames.length);
            cityIndex = Math.floor(Math.random() * imageData.length);
            if (selectedCities[cityIndex]) {
                numSelectedCities++;
                if (numSelectedCities == selectedCities.length) {      
                    break;
                }
            }
        } while (selectedCities[cityIndex]);
        if (numSelectedCities == selectedCities.length) {
            alert("You have played all of the cities in this game.");
            initializeSessionVariables();
            resetGame();
            return;
        }         
        selectedCities[cityIndex]=true; // mark that this city has already been selected
        guessesRemainingCount = 5; 
        winsText.textContent = winsCount;
        lossesText.textContent = lossesCount;
        guessesRemaining.textContent = guessesRemainingCount;
        lettersGuessed.textContent = "";
    }
    //__________________________________________________________
    function resetGame() {
        myUserAlertButton.style.visibility = "hidden";
        celebrationImage.style.visibility = "hidden";
        celebrationImage.style.display = "none";
        initializeVariableValues();
        changeImage(cityIndex);
        initializeCurrentCityDisplay();
        updateCurrentCityDisplay();
    }
    //__________________________________________________________
    function initializeSessionVariables() {
        winsCount = 0;
        lossesCount = 0;
        // for (var i=0;i<UScityNames.length;i++)
        for (var i=0;i<imageData.length;i++)
            selectedCities[i]=false;    
    }
    //__________________________________________________________
    function enableButton(buttonLabel) {
        myUserAlertButton.style.visibility = "visible";
        myUserAlertButton.innerText = buttonLabel;
        waitingForReset = true;
        if (buttonLabel == wonGameMessage) {
            audioElement = audioElement_wonGame;
            celebrationImage.style.visibility = "visible";
            celebrationImage.style.display = "block";
        
        } else {
            audioElement = audioElement_lostGame;
        }
        audioElement.currentTime=0;
        audioElement.play();
        myUserAlertButton.onclick = function() {
            audioElement.pause();
            resetGame();
            return;
        }
    }
