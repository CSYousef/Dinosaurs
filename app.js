
    // Create Dino Constructor
    let DinoArray = [

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

        
    ];

    function Dino(img,species, weight, height, diet, where, when, fact) {
        this.Image=img
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = [fact];
        return this;
      }

    // Create Dino Objects
      const DinoMap = DinoArray.map((x)=> 
      new Dino(
        `../images/${x.species}.png`,
        x.species,
        x.weight, 
        x.height, 
        x.diet, 
        x.where,
         x.when, 
         x.fact  ) 
         
         )

    // Create Human Object

    function Human(name, height, weight, diet) {
        this.fact = "";
        this.species = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
      }
      let human = new Human();
      

    // Use IIFE to get human data from form
    const HumanData = (function () {
         human = {
          name : document.getElementById("name").value,
          species : "human",
          Image: "images/human.png",
          height:parseInt(document.getElementById("inches").value) + parseInt(document.getElementById("feet").value) * 12,
          weight: document.getElementById("weight").value,
          diet: document.getElementById("diet").value,
          fact: [""],
        };
        return human;
      })
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    Dino.prototype.compareWeight = (dino, human) => {
     dino.weight > human.weight ? dino.fact.push(`${dino.species}  is heavier than you by ${dino.weight - human.weight} lbs`) :  dino.fact.push(` ${dino.species}  is lighter than you by  ${Math.abs(dino.weight - human.weight)} lbs`)
        
      };

      

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareHeight =  (dino, human) => {
     dino.height > human.height ? dino.fact.push(`${dino.species}  is taller than you by ${dino.height - human.height} Inches`) : dino.fact.push( ` ${dino.species}  is shorter than you by  ${Math.abs(dino.height - human.height)} Inches`)
        
      };
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet =  (dino, human) => {
       dino.diet === human.diet ? dino.fact.push(`You have the same ${dino.diet} diet as  ${dino.species}`) :  dino.fact.push(`You don't have the same ${dino.diet} diet as  ${dino.species}  `)
       
      };



    // Generate Tiles for each Dino in Array
  function Generate(){


    DinoMap.splice(4,0,human)
    document.getElementById("grid").innerHTML = DinoMap.map( x =>
        
    `<div class="grid-item" > 
    <h3>${x.species === "human" ? x.name : x.species}</h3>
     <img src="${x.Image}"> 
      <p>${x.species === "Pigeon" ? 'All birds are living dinosaurs' : x.fact[Math.floor( Math.random() * x.fact.length )]}</p>
    </div>`

    

).join('')
  }
        // Add tiles to DOM

    // Remove form from screen
   

// On button click, prepare and display infographic
function onclick1 (){
    HumanData()
document.getElementById("dino-compare").remove();
DinoMap.forEach( x => x.compareWeight(x,human));
DinoMap.forEach( x =>x.compareHeight(x,human));
DinoMap.forEach( x =>x.compareDiet(x,human));
Generate();


}
