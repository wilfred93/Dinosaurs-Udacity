
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
        this.specie = dino.species;
        this.image = '/image/' + dino.species + '.png';
    };

    // Create Human Object
    const human = {
        species : 'Human',
        name: 'Alfredo',
        heightFeet: 300,
        heightInchis: 234,
        weight: 28,
        diet :'Herbavor',
    };

    // Create Dino Objects
    var dinosCompared = [];
    dinos.forEach(dino => {
        if (dino.species != 'Pigeon') {
            dinosCompared.push(new DinoCompared(dino));
        } 

    });
    console.log(dinosCompared);

    dinos.splice(4, 0, { fuck: 'hell yeah'});



    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWeight(humanInfo, dinoWeight) {
        let fact = ';'
        if (humanInfo.weight > dinoWeight) {
            fact = humanInfo.name + ' '
        } else if (humanInfo.weight < dinoWeight) {
            humanWeightIs = 'less';
        } else {
            humanWeightIs ='same';
        }

    }
  
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(humanInfo, dinoHeight) {
        let humanHeight = convertFeetToInches(humanInfo.feets) + humanInfo.inches;
        if (humanHeight > dinoHeight) {
            let proportion = (humanHeight/dinoHeight);
        } else if (humanHeight < dinoHeight) {
            let proportion = (dinoHeight/humanTotalHeight)
        } else {

        }
    }

    function convertFeetToInches (feets) {
        return feets * 12;
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(humanDiet, dinoDiet) {

    }


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
