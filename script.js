
const container = document.getElementById("container");
for(let i=0; i<16; i++){
     const rowDiv = document.createElement("div");
     rowDiv.style.cssText = "display: flex";
     container.appendChild(rowDiv);
    for(let j=0; j<16; j++){
       const aBox = document.createElement("div");
       aBox.setAttribute("class", "divboxes");
       aBox.style.cssText = "border: 2px solid black; height: 60px; width: 60px";
       rowDiv.appendChild(aBox);
    }
}
const allBoxes = document.querySelectorAll(".divboxes");
allBoxes.forEach(box=>{
    box.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor="black";})
});

const newGridBtn = document.querySelector("#newgrid");
newGridBtn.addEventListener("click", function(event){
   let newGrid = window.prompt("Enter the number of squares per side: ");
   if(newGrid>100){
    alert("The number of boxes must be less than 10,000!");
   }
   else{
    container.innerHTML="";
    for(let i=0; i<newGrid; i++){
     const rowDiv = document.createElement("div");
     rowDiv.style.cssText = "display: flex";
     container.appendChild(rowDiv);
        for(let j=0; j<newGrid; j++){
            const aBox = document.createElement("div");
            aBox.setAttribute("class", "divboxes");
            let dim = 960/newGrid;
            aBox.style.cssText = `border: 2px solid black; height: ${dim}px; width: ${dim}px`;
            rowDiv.appendChild(aBox);
         }
        }
     const allBoxes = document.querySelectorAll(".divboxes");
     allBoxes.forEach(box=>{
     box.addEventListener("mouseover", function(event){
     event.target.style.backgroundColor="black";});
});
   }
})


