
let buttons = document.querySelectorAll("button"); //select all <button> elements

//SCORE
let scoreElement = document.querySelector(".score"); //select HTML element with class of score
let score = 0; //keep track of score



//RANDOM COLOR FOR SQUARES FUNCTION
function getRandomColor() {

    // Generate random values for R, G, and B
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    // Convert them into a color string in the format "#rrggbb"
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  
//FIND SQUARE ELEMENTS
var squares = document.getElementsByClassName('square');

//FUNCTION TO CHANGE COLOR FOR EACH SQUARE
function changeColor() {
    for (var i = 0; i < squares.length; i++) {
        // Loop through all elements with the class 'square' to change color in each
        var random_color = getRandomColor();
        squares[i].style.backgroundColor = random_color;
    }
}

//INTERVAL TO CHANGE COLOR FOR TOP LINE
setInterval(changeColor, 900); 
    



//CHECK ANSWER FUNCTION
function check(event){
    //find clicked button
    let button = event.target; 
    
    //get class name of button
    let name = button.className; 
    
    //PARENT ELEMENTS TO SEPARATE EACH GRID WITH EXPLANATIONS AND DISABLING 
    let item = button.parentElement;
    let grid = item.parentElement; 
    let section = grid.parentElement; 
    let questionButtons = grid.querySelectorAll("button");

    if (name.includes("correct")){ //IF ANSWER IS RIGHT
        button.style.borderColor = "green"; 
        score++;
        scoreElement.textContent = score; 

        let explanations = section.querySelectorAll("h4.explanationR");

        //change display property
        for(let explanation of explanations){
            explanation.style.display = "block"; 
        }
        
    } else { //IF ANSWER IS WRONG
        button.style.borderColor = "red"; 
        
        let explanations = section.querySelectorAll("h4.explanationW");

        //change display property
        for(let explanation of explanations){
            explanation.style.display = "block"; 
        }

    }

//DISABLE BUTTONS AFTER ANSWER IS SELECTED
    for(let button of questionButtons){
        button.disabled = true; 
    }
    
 }

 for(let button of buttons){
    //run check function when its clicked
    button.onclick = check;
}
