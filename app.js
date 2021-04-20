//Class To apply to all dinosaurs
function Dino(dino) {
  this.species = dino.species;
  this.image = 'images/' + dino.species + '.png';
  this.weight = dino.weight;
  this.height = dino.height;
  this.diet = dino.diet;
  this.where = dino.where;
  this.when = dino.when;
  this.fact = dino.fact;
}

//To read from an external source and add the dinos to an array
const dinos = [];
fetch('./dino.json')
  .then((res) => res.json())
  .then((data) => {
    data.Dinos.forEach((element) => {
      dinos.push(new Dino(element));
    });
  });

//To convert the feet to inches for the human height (same unit as dinosaurs heights)
function convertFeetToInches(feets) {
  return feets * 12;
}

//To returns a fact relating human height to dino height
Dino.prototype.compareWeight = function (humanInfo) {
  let proportion = 0;
  if (humanInfo.weight > this.weight) {
    proportion = Math.round(humanInfo.weight / this.weight);
    return humanInfo.name + ' is ' + proportion + ' times heavier.';
  } else if (humanInfo.weight < this.weight) {
    proportion = Math.round(this.weight / humanInfo.weight);
    return humanInfo.name + ' is ' + proportion + 3 + ' times lighter.';
  } else {
    return 'They both weight the same, ' + this.weight + ' lbs';
  }
};

//To Returns a fact relating human weight to dino height
Dino.prototype.compareHeight = function (humanInfo) {
  let humanHeight = convertFeetToInches(humanInfo.feet) + humanInfo.inches;
  console.log(humanHeight);
  let proportion = 0;
  if (humanHeight > this.height) {
    proportion = Math.round(humanHeight / this.height);
    return humanInfo.name + ' is ' + proportion + ' times taller.';
  } else if (humanHeight < this.height) {
    proportion = Math.round(this.height / humanHeight);
    return humanInfo.name + ' is ' + proportion + ' times smaller.';
  } else {
    return 'They both have the same Height,' + this.weight;
  }
};

//To returns a fact relating human diet to dinosaur diet
Dino.prototype.compareDiet = function (humanInfo) {
  let fact = ';';
  if (humanInfo.diet.toLowerCase() === this.diet.toLowerCase()) {
    fact =
      ' Surprisingly they both have the same diet, ' +
      humanInfo.diet.toLowerCase() +
      '.';
  } else {
    fact =
      ' While ' +
      humanInfo.name +
      ' is an ' +
      humanInfo.diet +
      ' this dinosaur is an ' +
      this.diet +
      '.';
  }
  return fact;
};

//To generate the content of the tiles and create de infographic
function generateTiles(human) {
  dinos.forEach((element) => {
    //Tittle for species or human
    let headingContent = '';
    if (element.species == 'Human') {
      headingContent = element.name;
    } else {
      headingContent = element.species;
    }
    const headingTag = document.createElement('h4');
    const headingText = document.createTextNode(headingContent);
    headingTag.appendChild(headingText);
    //the image in the tile
    const image = new Image();
    image.src = element.image;
    //the fact in the tile
    const pTag = document.createElement('p');
    if (element.species != 'Human') {
      let factContent = '';
      if (element.species == 'Pigeon') {
        factContent = 'All birds are Dinosaurs.';
      } else {
        //Group facts to choose them randomly
        const facts = [
          element.compareHeight(human),
          element.compareWeight(human),
          element.compareDiet(human),
          element.fact,
        ];
        factContent = facts[Math.floor(Math.random() * facts.length)];
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
  });
}

// Remove form from screen
function hideForm() {
  var form = document.getElementById('dino-compare');
  form.classList.add('hide');
}

//Shows the infrographic relating Human vs Dinosaurs
function displayInfographic() {
  hideForm();
  const human = (getHumanData = () => {
    return {
      image: "images/human.png",
      species: "Human",
      name: document.getElementById("name").value,
      feet: document.getElementById("feet").value,
      inches: document.getElementById("inches").value,
      weight: document.getElementById("weight").value,
      diet: document.getElementById("diet").value,
    };
  })();
  dinos.splice(4, 0, getHumanData()); //Add Human object (in center of the grid)
  generateTiles(human);
}

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', displayInfographic);
