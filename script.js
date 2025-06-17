
const container = document.getElementById("container");
for(let i=0; i<16; i++){
     const rowDiv = document.createElement("div");
     rowDiv.style.cssText = "display: flex";
     container.appendChild(rowDiv);
    for(let j=0; j<16; j++){
       const aBox = document.createElement("div");
       aBox.style.cssText = "border: 2px solid black; height: 50px; width: 50px";
       rowDiv.appendChild(aBox);
    }

}

