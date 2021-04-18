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

//Read JSON that contain Dinos
const dinos = [];
fetch("./dino.json")
.then((res) => res.json())
.then((data) => {
    data.Dinos.forEach(element => {
        dinos.push(new Dino(element));
    });
});



// Create Human Object
const getHumanData = ()=>{
    const human = {
        image:'images/human.png',
        species: 'Human'
    };
    human.name = document.getElementById('name').value,
    human.feet = document.getElementById('feet').value,
    human.inches = document.getElementById('inches').value,
    human.weight = document.getElementById('weight').value,
    human.diet = document.getElementById('diet').value

    return human;
}


 

    // dinos.splice(4, 0, { fuck: 'hell yeah'});



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

    function convertFeetToInches (feets) {
        return feets * 12;
    }

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function(humanInfo)  {
        let fact = ';'
        if (humanInfo.diet == this.diet) {
            fact = ' Surprisingly they both have the same diet, ' + humanInfo.diet;
        } else {
            fact = ' While ' + humanInfo.name + ' is an ' + humanInfo.diet + ' this dinosaur is and ' + this.diet;
        }
        return fact;
    }


    function displayInfographic() {
        
        console.log(getHumanData());
        hideForm();
        generateTiles();
    }

    //Generate Tiles for each Dino in Array
    function generateTiles() {
        console.log('se ejecuta generate tiles');
        dinos.forEach(element =>{
            var headingTag = document.createElement('h4');
            var headingText = document.createTextNode(element.species);
            headingTag.appendChild(headingText);
    
            var image = new Image();
            image.src = element.image;
    
            var pTag = document.createElement('p');
            var pText = document.createTextNode(element.compareHeight(getHumanData()) + element.compareWeight(getHumanData()) + element.compareDiet(getHumanData()));
            pTag.appendChild(pText);
    
            var gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.appendChild(headingTag);
            gridItem.appendChild(image);
            gridItem.appendChild(pTag);
    
            var element = document.getElementById('grid');
            element.appendChild(gridItem);
        })
    }

    // Remove form from screen
    function hideForm() {
        var form = document.getElementById('dino-compare');
        form.classList.add('hide');
    }


// On button click, prepare and display infographic
document.getElementById('btn').addEventListener("click", displayInfographic);
