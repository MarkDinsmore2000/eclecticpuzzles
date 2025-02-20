    const gameInit = document.querySelector('#start');
    const rightT = document.querySelector('#righttop');
    const rightM = document.querySelector('#rightmid');
    const rightB = document.querySelector('#rightbottom');
    const downR = document.querySelector('#downright');
    const downM = document.querySelector('#downmid');
    const downL = document.querySelector('#downleft');
    const leftB = document.querySelector('#leftbottom');
    const leftM = document.querySelector('#leftmid');
    const leftT = document.querySelector('#lefttop');
    const upL = document.querySelector('#upleft');
    const upM = document.querySelector('#upmid'); 
    const upR = document.querySelector('#upright'); 
    const zerosq = document.querySelector('#zero'); 
    const onesq = document.querySelector('#one'); 
    const twosq = document.querySelector('#two'); 
    const threesq = document.querySelector('#three'); 
    const foursq = document.querySelector('#four'); 
    const fivesq = document.querySelector('#five'); 
    const sixsq = document.querySelector('#six'); 
    const sevensq = document.querySelector('#seven'); 
    const eightsq = document.querySelector('#eight'); 

    // Global functions passing data between Initialization
// Control Panel Module
// Operations Module
// Display Module

const panelPerm = [[11,	0,	1,	3,	4,	5,	6,	7,	8,	2,	9,	10,	12,	13,	14,	15,	16,	17],
[0,	1,	2,	14,	3,	4,	6,	7,	8,	9,	10,	11,	5,	12,	13,	15,	16,	17],
[0,	1,	2,	3,	4,	5,	17,	6,	7,	9,	10,	11,	12,	13,	14,	8,	15,	16],
[0,	1,	11,	3,	4,	2,	6,	7,	5,	9,	10,	14,	12,	13,	17,	15,	16,	8],
[0,	10,	2,	3,	1,	5,	6,	4,	8,	9,	13,	11,	12,	16,	14,	15,	7,	17],
[9,	1,	2,	0,	4,	5,	3,	7,	8,	12,	10,	11,	15,	13,	14,	6,	16,	17],
[0,	1,	2,	3,	4,	5,	7,	8,	17,	9,	10,	11,	12,	13,	14,	6,	15,	16],
[0,	1,	2,	4,	5,	14,	6,	7,	8,	9,	10,	11,	3,	12,	13,	15,	16,	17],
[1,	2,	11,	3,	4,	5,	6,	7,	8,	0,	9,	10,	12,	13,	14,	15,	16,	17],
[3,	1,	2,	6,	4,	5,	15,	7,	8,	0,	10,	11,	9,	13,	14,	12,	16,	17],
[0,	4,	2,	3,	7,	5,	6,	16,	8,	9,	1,	11,	12,	10,	14,	15,	13,	17],
[0,	1,	5,	3,	4,	8,	6,	7,	17,	9,	10,	2,	12,	13,	11,	15,	16,	14]];
let curPerm=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const dim = 18;
const displayArray=['black','black','black','black','black','black','black','black','black',
  'white','white','white','white','white','white','white','white','white'];
const xSquare = ['zero','one','two','three','four','five','six','seven','eight'];
    

function pMult(newP, curP, dim) {     // pMult is creates the product of newP on curP of Dimension dim and returns it as dP
  let dP = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    for (let i=0; i<dim; i++) {
      dP[i] = curP[newP[i]];
    }
    return dP;
  }

gameInit.onclick = function() {
  let randPerm = [];
  let dumpy=[];
  for (let i=0; i<7; i++) {
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
rightM.onclick =function() {
  let dumpie = pMult(panelPerm[1], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
rightB.onclick =function() {
  let dumpie = pMult(panelPerm[2], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downR.onclick =function() {
  let dumpie = pMult(panelPerm[3], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downM.onclick =function() {
  let dumpie = pMult(panelPerm[4], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downL.onclick =function() {
  let dumpie = pMult(panelPerm[5], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftB.onclick =function() {
  let dumpie = pMult(panelPerm[6], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftM.onclick =function() {
  let dumpie = pMult(panelPerm[7], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftT.onclick =function() {
  let dumpie = pMult(panelPerm[8], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upL.onclick =function() {
  let dumpie = pMult(panelPerm[9], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upM.onclick =function() {
  let dumpie = pMult(panelPerm[10], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upR.onclick =function() {
  let dumpie = pMult(panelPerm[11], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}

function display() {
  let halfDim = (dim/2) - 1;
  for (let i=0; i<halfDim; i++) {
    let indD= curPerm[i]; 
    let dumColor = displayArray[indD];
    let dumDiv = xSquare[i]; 
    document.getElementById(dumDiv).style.backgroundColor = dumColor;
  }
}

function testWin() {
}
   
