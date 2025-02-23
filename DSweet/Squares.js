    const gameInit = document.querySelector('#start');
    const rightT = document.querySelector('#righttop');
    const rightM = document.querySelector('#rightmid');
    const rightM2 = document.querySelector('#rightmid2');
    const rightB = document.querySelector('#rightbottom');
    const downR = document.querySelector('#downright');
    const downM = document.querySelector('#downmid');
    const downM2 = document.querySelector('#downmid2');
    const downL = document.querySelector('#downleft');
    const leftB = document.querySelector('#leftbottom');
    const leftM = document.querySelector('#leftmid');
    const leftM2 = document.querySelector('#leftmid2');
    const leftT = document.querySelector('#lefttop');
    const upL = document.querySelector('#upleft');
    const upM = document.querySelector('#upmid'); 
    const upM2 = document.querySelector('#upmid2'); 
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
    const ninesq = document.querySelector('#nine'); 
    const tensq = document.querySelector('#ten'); 
    const elevensq = document.querySelector('#eleven'); 
    const twelvesq = document.querySelector('#twelve'); 
    const thirteensq = document.querySelector('#thirteen'); 
    const fourteensq = document.querySelector('#fourteen'); 
    const fifteensq = document.querySelector('#fifteen'); 

    // Global functions passing data between Initialization
// Control Panel Module
// Operations Module
// Display Module

const panelPerm = [[16,	0,	1,	2,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	17,	18,	19,	3,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31],
[0,	1,	2,	3,	20,	4,	5,	6,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	21,	22,	23,	7,	24,	25,	26,	27,	28,	29,	30,	31],
[0,	1,	2,	3,	4,	5,	6,	7,	24,	8,	9,	10,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	25,	26,	27,	11,	28,	29,	30,	31],
[0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	28,	12,	13,	14,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	29,	30,	31,	15],
[16,	1,	2,	3,	0,	5,	6,	7,	4,	9,	10,	11,	8,	13,	14,	15,	20,	17,	18,	19,	24,	21,	22,	23,	28,	25,	26,	27,	12,	29,	30,	31],
[0,	17,	2,	3,	4,	1,	6,	7,	8,	5,	10,	11,	12,	9,	14,	15,	16,	21,	18,	19,	20,	25,	22,	23,	24,	29,	26,	27,	28,	13,	30,	31],
[0,	1,	18,	3,	4,	5,	2,	7,	8,	9,	6,	11,	12,	13,	10,	15,	16,	17,	22,	19,	20,	21,	26,	23,	24,	25,	30,	27,	28,	29,	14,	31],
[0,	1,	2,	19,	4,	5,	6,	3,	8,	9,	10,	7,	12,	13,	14,	11,	16,	17,	18,	23,	20,	21,	22,	27,	24,	25,	26,	31,	28,	29,	30,	15],
[1,	2,	3,	19,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	0,	16,	17,	18,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31],
[0,	1,	2,	3,	5,	6,	7,	23,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	4,	20,	21,	22,	24,	25,	26,	27,	28,	29,	30,	31],
[0,	1,	2,	3,	4,	5,	6,	7,	9,	10,	11,	27,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	8,	24,	25,	26,	28,	29,	30,	31],
[0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	13,	14,	15,	31,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	12,	28,	29,	30],
[4,	1,	2,	3,	8,	5,	6,	7,	12,	9,	10,	11,	28,	13,	14,	15,	0,	17,	18,	19,	16,	21,	22,	23,	20,	25,	26,	27,	24,	29,	30,	31],
[0,	5,	2,	3,	4,	9,	6,	7,	8,	13,	10,	11,	12,	29,	14,	15,	16,	1,	18,	19,	20,	17,	22,	23,	24,	21,	26,	27,	28,	25,	30,	31],
[0,	1,	6,	3,	4,	5,	10,	7,	8,	9,	14,	11,	12,	13,	30,	15,	16,	17,	2,	19,	20,	21,	18,	23,	24,	25,	22,	27,	28,	29,	26,	31],
[0,	1,	2,	7,	4,	5,	6,	11,	8,	9,	10,	15,	12,	13,	14,	31,	16,	17,	18,	3,	20,	21,	22,	19,	24,	25,	26,	23,	28,	29,	30,	27]
];
let curPerm=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const dim = 32;
const displayArray=
['black','black','black','black','black','black','black','black','black','black','black','black','black','black','black','black',
'white','white','white','white','white','white','white','white','white','white','white','white','white','white','white','white'];
const xSquare = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'];
    

function pMult(newP, curP, dim) {     // pMult is creates the product of newP on curP of Dimension dim and returns it as dP
  let dP = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
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

rightM2.onclick =function() {
  let dumpie = pMult(panelPerm[2], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
rightB.onclick =function() {
  let dumpie = pMult(panelPerm[3], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downR.onclick =function() {
  let dumpie = pMult(panelPerm[7], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downM.onclick =function() {
  let dumpie = pMult(panelPerm[6], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}

downM2.onclick =function() {
  let dumpie = pMult(panelPerm[5], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
downL.onclick =function() {
  let dumpie = pMult(panelPerm[4], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftB.onclick =function() {
  let dumpie = pMult(panelPerm[11], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftM.onclick =function() {
  let dumpie = pMult(panelPerm[10], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
leftM2.onclick =function() {
  let dumpie = pMult(panelPerm[9], curPerm, dim);
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
  let dumpie = pMult(panelPerm[12], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upM.onclick =function() {
  let dumpie = pMult(panelPerm[13], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}

upM2.onclick =function() {
  let dumpie = pMult(panelPerm[14], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}
upR.onclick =function() {
  let dumpie = pMult(panelPerm[15], curPerm, dim);
  curPerm = dumpie;
  display();
  testWin();
}

function display() {
  let halfDim = (dim/2);
  for (let i=0; i<halfDim; i++) {
    let indD= curPerm[i]; 
    let dumColor = displayArray[indD];
    let dumDiv = xSquare[i]; 
    document.getElementById(dumDiv).style.backgroundColor = dumColor;
  }
}

function testWin() {
}
   
