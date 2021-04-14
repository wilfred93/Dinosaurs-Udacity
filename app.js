
        const dinos = [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]
    // Create Dino Constructor
    function DinoCompared(dino) {
        this.species = dino.species;
        this.image = 'images/' + dino.species + '.png';
        this.weight = dino.weight;
        this.height = dino.height;
        this.diet = dino.diet;
        this.where = dino.where;
        this.when = dino.when;
        this.fact = dino.fact;
    };

    // Create Human Object
    const human = {
        species : 'Human',
        name: 'Alfredo',
        heightFeet: 300,
        heightInchis: 200,
        weight: 28,
        diet :'herbavor',
    };

    // Create Dino Objects
    var dinosCompared = [];
    dinos.forEach(dino => {
        if (dino.species != 'Pigeon') {
            dinosCompared.push(new DinoCompared(dino));
        } 
    });
 

    dinos.splice(4, 0, { fuck: 'hell yeah'});



    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoCompared.prototype.compareWeight = function(humanInfo) {
        let fact = '';
        let proportion = 0;
        if (humanInfo.weight > this.weight) {
            proportion = Math.round(humanInfo.weight/this.weight)
            fact = ' and ' + proportion + ' times heavier.'
        } else if (humanInfo.weight < this.weight) {
            proportion = Math.round((this.weight/humanInfo.weight));
            fact = ' and ' + proportion + 3 + ' times lighter.'
        } else {
            humanWeightIs ='and the same weight';
        }
        return fact;
    }
  
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoCompared.prototype.compareHeight =  function(humanInfo) {
        let humanHeight = convertFeetToInches(humanInfo.heightFeet) + humanInfo.heightInchis;
        let fact = '';
        let proportion = 0;
        if (humanHeight > this.height) {
            proportion = Math.round((humanHeight/this.height));
            fact = humanInfo.name + ' is ' + proportion + ' times taller';
        } else if (humanHeight < dinoHeight) {
            proportion = (this.height/humanTotalHeight)
            fact = humanInfo.name + ' is ' + proportion + ' times smaller';
        } else {
            fact = humanInfo.name + ' has the same height'; 
        }
        return fact;
    }

    function convertFeetToInches (feets) {
        return feets * 12;
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoCompared.prototype.compareDiet = function(humanInfo)  {
        let fact = ';'
        if (humanInfo.diet == this.diet) {
            fact = ' Surprisingly they both have the same diet, ' + humanInfo.diet;
        } else {
            fact = ' While ' + humanInfo.name + ' is an ' + humanInfo.diet + ' this dinosaur is and ' + this.diet;
        }
        return fact;
    }


    console.log(dinosCompared[1].compareHeight(human) + dinosCompared[1].compareWeight(human));

    // Generate Tiles for each Dino in Array
    dinosCompared.forEach(element =>{
        var headingTag = document.createElement('h4');
        var headingText = document.createTextNode(element.species);
        headingTag.appendChild(headingText);

        var image = new Image();
        image.src = element.image;

        var pTag = document.createElement('p');
        var pText = document.createTextNode(element.compareHeight(human) + element.compareWeight(human) + element.compareDiet(human));
        pTag.appendChild(pText);

        var gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.appendChild(headingTag);
        gridItem.appendChild(image);
        gridItem.appendChild(pTag);

        var element = document.getElementById('grid');
        element.appendChild(gridItem);
    })

    // Remove form from screen


// On button click, prepare and display infographic
