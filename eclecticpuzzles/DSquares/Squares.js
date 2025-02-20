    const gameInit = document.querySelector('#start');
    const rightT = document.querySelector('#righttop');
    const rightB = document.querySelector('#rightbottom');
    const downR = document.querySelector('#downright');
    const downL = document.querySelector('#downleft');
    const leftB = document.querySelector('#leftbottom');
    const leftT = document.querySelector('#lefttop');
    const upL = document.querySelector('#upleft'); 
    const upR = document.querySelector('#upright'); 
    const zerosq = document.querySelector('#zero'); 
    const onesq = document.querySelector('#one'); 
    const twosq = document.querySelector('#two'); 
    const threesq = document.querySelector('#three'); 

    // Global functions passing data between Initialization
// Control Panel Module
// Operations Module
// Display Module

const panelPerm = [[4,0,2,3,5,1,6,7],
[0,1,6,2,4,5,7,3],
[0,5,2,1,4,7,6,3],
[4,1,0,3,6,5,2,7],
[0,1,3,7,4,5,2,6],
[1,5,2,3,0,4,6,7],
[2,1,6,3,0,5,4,7],
[0,3,2,7,4,1,6,5]];
let curPerm=[0,1,2,3,4,5,6,7];
const dim = 8;
const displayArray=['black','black','black','black','white','white','white','white'];
const xSquare = ['zero','one','two','three'];
    

function pMult(newP, curP, dim) {     // pMult is creates the product of newP on curP of Dimension dim and returns it as dP
  let dP = [0,1,2,3,4,5,6,7];
    for (let i=0; i<dim; i++) {
      dP[i] = curP[newP[i]];
    }
    return dP;
  }

gameInit.onclick = function() {
  let randPerm = [];
  let dumpy=[];
  for (let i=0; i<6; i++) {
     indrand = Math.floor(Math.random()*8);
     randPerm = panelPerm[indrand]; 
     dumpy = pMult(randPerm,curPerm,dim);
     curPerm = dumpy;
  }
  display();
}

rightT.onclick =function() {
   let dumpie = pMult(panelPerm[0], curPerm, dim);
   curPerm = dumpie;
   display();
   testWin();
}
rightB.onclick =function() {
  let dumpie = pMult(panelPerm[1], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downR.onclick =function() {
  let dumpie = pMult(panelPerm[2], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downL.onclick =function() {
  let dumpie = pMult(panelPerm[3], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftB.onclick =function() {
  let dumpie = pMult(panelPerm[4], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftT.onclick =function() {
  let dumpie = pMult(panelPerm[5], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upL.onclick =function() {
  let dumpie = pMult(panelPerm[6], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upR.onclick =function() {
  let dumpie = pMult(panelPerm[7], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}

function display() {
  let halfDim = dim/2;
  for (let i=0; i<halfDim; i++) {
    let indD= curPerm[i]; 
    let dumColor = displayArray[indD];
    let dumDiv = xSquare[i]; 
    document.getElementById(dumDiv).style.backgroundColor = dumColor;
  }
}

function testWin() {
}
   
