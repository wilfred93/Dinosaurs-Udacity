// Create Dino Constructor
function Dino(dino) {
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
const getHumanData = () => {
    const human = {
        image:'images/human.png',
        species: 'Human',
        name: document.getElementById('name').value,
        feet: document.getElementById('feet').value,
        inches: document.getElementById('inches').value,
        weight: document.getElementById('weight').value,
        diet: document.getElementById('diet').value
    };
    return human;
}

//Read JSON that contain Dinos
const dinos = [];
fetch("./dino.json")
.then((res) => res.json())
.then((data) => {
    data.Dinos.forEach(element => {
        dinos.push(new Dino(element));
    });
});

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function(humanInfo) {
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
Dino.prototype.compareHeight =  function(humanInfo) {
    let humanHeight = convertFeetToInches(humanInfo.feet) + humanInfo.inches;
    let fact = '';
    let proportion = 0;
    if (humanHeight > this.height) {
        proportion = Math.round((humanHeight/this.height));
        fact = humanInfo.name + ' is ' + proportion + ' times taller';
    } else if (humanHeight < this.height) {
        proportion = Math.round(this.height/humanHeight)
        fact = humanInfo.name + ' is ' + proportion + ' times smaller';
    } else {
        fact = humanInfo.name + ' has the same height'; 
    }
    return fact;
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function(humanInfo)  {
    let fact = ';'
    if (humanInfo.diet.toLowerCase() === this.diet.toLowerCase()) {
        fact = ' Surprisingly they both have the same diet, ' + humanInfo.diet.toLowerCase() + '.';
    } else {
        fact = ' While ' + humanInfo.name + ' is an ' + humanInfo.diet + ' this dinosaur is an ' + this.diet + '.';
    }
    return fact;
}


function displayInfographic() {
    hideForm();
    dinos.splice(4, 0, getHumanData()); //Add Human object (in center of the grid)
    generateTiles();
    }

//Generate Tiles for each Dino in Array
function generateTiles() {
    dinos.forEach(element =>{
        //Choose name or species for title
        let headingContent = '';
        if (element.species == 'Human') {
            headingContent = element.name;
        } else {
            headingContent = element.species;
        }

        const headingTag = document.createElement('h4');
        const headingText = document.createTextNode(headingContent);
        headingTag.appendChild(headingText);

        const image = new Image();
        image.src = element.image;
        //add fact only for NOT Humnas
        const pTag = document.createElement('p');
        if (element.species != 'Human') {
            let factContent = '';
            if (element.species == 'Pigeon') {
                factContent = 'All birds are Dinosaurs.'
            } else {
                factContent = element.compareHeight(getHumanData()) + element.compareWeight(getHumanData()) + element.compareDiet(getHumanData());
            }
            const pText = document.createTextNode(factContent);
            pTag.appendChild(pText);
        }

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.appendChild(headingTag);
        gridItem.appendChild(image);
        //include P tag for NOT Humans
        if (element.species != 'Human') {
            gridItem.appendChild(pTag);
        }

        const grid = document.getElementById('grid');
        grid.appendChild(gridItem);
    })
}

// Remove form from screen
function hideForm() {
    var form = document.getElementById('dino-compare');
    form.classList.add('hide');
}

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener("click", displayInfographic);

//Helper Functions
function convertFeetToInches (feets) {
    return feets * 12;
}

