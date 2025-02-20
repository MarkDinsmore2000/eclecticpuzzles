const gameInit = document.querySelector('#start');
const zeroUL = document.querySelector('#stoneul');
const oneUR = document.querySelector('#stoneur');
const twoLR = document.querySelector('#stonelr');
const threeLL = document.querySelector('#stonell');

/// ****Global Variables ****

let loops = [];
let junctions = [];
let junctionCount = 0;
let position = [0,0];
let links = [];
let basePathLength = 0;           /// number of links in base path 
let baseMetric = 0;
let gameMetric = 0;
let posOrient = 0;
let exit = [0,0];
const opsTransitionMatrix= [[1,0,3,2], [0,3,2,1], [3,2,1,0], [2,1,0,3]]; 

function pMult(newP, curP, dim) {     // pMult is creates the product of newP on curP of Dimension dim and returns it as dP
  let dP = [0,1,2,3,4,5,6,7];
    for (let i=0; i<dim; i++) {
      dP[i] = curP[newP[i]];
    }
    return dP;
  }

gameInit.onclick = function() {
  initDisplay();
  basePath();
  console.log('newloop',loops,junctions,links);
  deadEnds();
  position = [0,0];
  posOrient = 0;
}

function deadEnds() {
  for (let j=0; j<basePathLength; j++) {
  let dumind1 = j;                                 /// go through the base path loops 
  let dumind2 = junctionCount+1;                    /// make new loops appended to base loop
  let dEIndex1 = Math.floor(Math.random()*3);
  let dEIndex2 = Math.floor(Math.random()*3);
  let dEIndex3 = Math.floor(Math.random()*3);
  let dEndsLimit = dEIndex1 + dEIndex2+ dEIndex3;      //// the number of loops in current dead end
  for (let i=0; i<dEndsLimit; i++) {
  nextLoop();
  makeJunction2(dumind1,dumind2);
  dumind1 = dumind2;
  dumind2 = junctionCount+1; /// New Junk Maker has different way to pick exist point
  };
}
}
function makeJunction2(loop1,loop2) {      
  let dIndex = [0,0];                        /// place to store a pair of junctions
  let dLength = loops[loop1].length;
  let positionOnLoop = 0;
  let counter = 0;
  for (let i=0; i<dLength; i++) {     /// find old junctions on old loop
    if (junctions[loop1][i] > 0 ) { 
      dIndex[counter]  = i;
      counter++;
      if (counter>1) { 
        i = 100;
    };
    }
  }
  let pDiff = Math.abs(dIndex[0]-dIndex[1]);
  /// could make a random number here based on fraction of diff to take away clue to dead ends
  /// use to modifiy  positionOnLoop 
  if (pDiff > Math.floor(dLength/2)) {
    positionOnLoop = Math.floor((dIndex[0]+dIndex[1])/2);
  } else positionOnLoop = Math.floor((dLength + Math.floor(dIndex[0]+dIndex[1]))/2);
  if (positionOnLoop >= dLength) {
    positionOnLoop = positionOnLoop - dLength;   //// link position on loop
  }
  junctionCount++                               
  junctions[loop1][positionOnLoop] = junctionCount;   /// this last stuff should all work
  let orient = getOrientation(dLength,positionOnLoop); /// This is current loop orientation
  putOthJunk(orient, loop2);                            /// insert junction on new loop
  let dumLink = [loop1, positionOnLoop, loop2, position[1]];
  links.push(dumLink);
} 
function basePath (){
  let dumLoopL = firstTwoLoops();
  let dPIndex1 = Math.floor(Math.random()*3);
  basePathLength = dPIndex1 + 2;
  makeJunction(0,1);
  for (i=1; i<basePathLength; i++) {
  dumLoopL = nextLoop();
  makeJunction(i,i+1);
  }
  exit[0] = basePathLength;
  let dLE = loops[basePathLength].length;
  console.log('exit',dLE,basePathLength,exit)
  exit[1] = Math.floor(dLE/2);
  calcBaseMetric();
}
function makeJunction(loop1,loop2) {
  let dLength = loops[loop1].length;
  let temp = (dLength/2) - 1
  let die1 = Math.floor(Math.random()*(Math.floor( temp ) ) )+1; 
  let die2 = Math.floor(Math.random()*(Math.floor( temp ) ) )+1;
  linkNum = die1 + die2; /// Min is 2. Max is looplength-2 implies no link 0 (+/-) 1 on Base loop
  let positionOnLoop = position[1] + linkNum; //// modular (dLength) arithmatic
  if (positionOnLoop >= dLength) {
    positionOnLoop = positionOnLoop - dLength;   //// link position on loop
  }
  if (junctions[loop1][positionOnLoop] === 0) {   /// later maybe expand limitation to +/- (1 or 2 ...)
    junctionCount++                               /// no links on base path - need to review for dead ends
    junctions[loop1][positionOnLoop] = junctionCount;   
  }
  let orient = getOrientation(dLength,positionOnLoop); /// This is current loop orientation
  putOthJunk(orient, loop2);                            /// insert junction on new loop
  let dumLink = [loop1, positionOnLoop, loop2, position[1]];
  links.push(dumLink);
} 
function putOthJunk(orio, loop2) { /// orio is 0 ,1, 2, or 3. 
  let dBon1 = 0;
  let dBon2 = 0;
  let dLength = loops[loop2].length;
  let orient2 = orio+2;
  if (orient2 > 3) { orient2 = orient2 - 4;}   //// modular (4) arithmatic  
  let index = orient2 * Math.floor(dLength/4);
  let dRem = dLength%4;
  if (dRem > 0) {dBon1 = 1};
  if (dRem > 1) {dBon2 = 1};
  if (orient2 > 0) {index = index + dBon1;};
  if (orient2 > 2) {index = index + dBon2;};
  junctions[loop2][index] = junctionCount;
  position = [loop2,index];  /// position of last link while building maze
}
function getOrientation(L,p) {
  let quoit = Math.floor(L/4);
  let rem = L%4;
  let bonus = 0;
  if (rem>0) {bonus=1};
  let P = bonus + quoit;
  bonus = 0;
  let limits = [1,3,5,7];
  limits[0] = Math.floor(P/2);
  if (rem>2) {bonus=1};
  limits[1] = limits[0] + quoit + bonus;
  bonus=0;
  if (rem>1) {bonus=1};
  limits[2] = limits[1] + quoit + bonus;
  limits[3] = limits[2] + quoit;
  let ori = 0;
  if (p>limits[0]) {ori=1}; 
  if (p>limits[1]) {ori=2}; 
  if (p>limits[2]) {ori=3}; 
  if (p>limits[3]) {ori=0}; 
  return ori;
}
function nextLoop() {
  let accuml=0;
  let dumLoop = [];
  let dumJunction = [];
  for (let i=0; i<4; i++) {
    accuml = accuml + Math.floor(Math.random()*8) + 1;  /// size of loop
  }
  for (let i=0; i<accuml; i++) { /// content of loop
    dumLoop.push(i);
    dumJunction.push(0);
  }
  loops.push(dumLoop);
  junctions.push(dumJunction);   //// append to loops and junctions
} 
function firstTwoLoops() {
  for (let j=0; j<2; j++) {
    let accuml=0;
    let dumLoop = [];
    let dumJunction = [];
  for (let i=0; i<4; i++) {
    accuml = accuml + Math.floor(Math.random()*8) + 1;  /// size of first loop
  }
  for (let i=0; i<accuml; i++) { /// input loop
    dumLoop.push(i);
    dumJunction.push(0);
  }
  if (j===0) {dumJunction[0]=1;};
loops.push(dumLoop);
junctions.push(dumJunction);
  }
}
function initDisplay(){         //change mp4 show stones
  document.getElementById("video").src = "images/WaterOnly.mp4";
  document.getElementById('stoneul').style.opacity = "80%";
  document.getElementById('stoneur').style.opacity = "80%";
  document.getElementById('stonem').style.opacity = "80%";
}
function calcBaseMetric() {
  let halfL = (loops[0].length)/2;
  let dPart1=halfL;
  let dPart2=Math.abs(halfL - links[0][1]);
  baseMetric = dPart1 - dPart2;                /// for loop 1
  for (let i=1; i<basePathLength; i++) {
    halfL = (loops[i].length)/2;
    dPart1 = Math.abs(halfL - links[i][1]);  
    dPart2 = Math.abs(halfL - links[i-1][3]);
    deltaMetric = dPart1 - dPart2;
    baseMetric = baseMetric + deltaMetric;     /// for loops 1 to basePathLength
  }
  halfL = (loops[basePathLength].length)/2;
  deltaMetric = halfL;  
  baseMetric = baseMetric + deltaMetric;       /// and tail end loop too
}
zeroUL.onclick =function() {
  opsProcess(0);
}
oneUR.onclick =function() {
  opsProcess(1);
}
twoLR.onclick =function() {
  opsProcess(2);
}
threeLL.onclick =function() {
  opsProcess(3);
}     
function opsProcess(indStone) {
  let dL = position[0];
  let dLL = loops[dL].length;
  let dLPOS = position[1];
  opsPathF(indStone,dL,dLL,dLPOS); ///Get new Position
  dL = position[0];
  dLL = loops[dL].length;
  dLPOS = position[1];
  posOrient = getOrientation(dLL,dLPOS); ///Get Oreintation of new position
  gMetric(indStone) 
  let newJunk = junctions[dL][dLPOS];
  console.log('position',position,exit);
  updateDisplay(newJunk);                /// Display stones of new position
}
function updateDisplay(newJunk) {
  if (newJunk != 0) {
    document.getElementById('stoneul').style.opacity = "80%";
    document.getElementById('stoneur').style.opacity = "80%";
    document.getElementById('stonell').style.opacity = "80%";
    document.getElementById('stonelr').style.opacity = "80%";
    document.getElementById('stoneul').disabled = false;
    document.getElementById('stoneur').disabled = false;
    document.getElementById('stonell').disabled = false;
    document.getElementById('stonelr').disabled = false;
  } else {
    if (posOrient === 0) {
      document.getElementById('stoneul').style.opacity = "80%";
      document.getElementById('stoneur').style.opacity = "80%";
      document.getElementById('stonell').style.opacity = "0%";
      document.getElementById('stonelr').style.opacity = "0%";
      document.getElementById('stoneul').disabled = false;
      document.getElementById('stoneur').disabled = false;
      document.getElementById('stonell').disabled = true;
      document.getElementById('stonelr').disabled = true;
    } else if (posOrient === 1) {
      document.getElementById('stoneul').style.opacity = "80%";
      document.getElementById('stoneur').style.opacity = "0%";
      document.getElementById('stonell').style.opacity = "80%";
      document.getElementById('stonelr').style.opacity = "0%";
      document.getElementById('stoneul').disabled = false;
      document.getElementById('stoneur').disabled = true;
      document.getElementById('stonell').disabled = false;
      document.getElementById('stonelr').disabled = true;
    } else if (posOrient === 2) {
      document.getElementById('stoneul').style.opacity = "0%";
      document.getElementById('stoneur').style.opacity = "0%";
      document.getElementById('stonell').style.opacity = "80%";
      document.getElementById('stonelr').style.opacity = "80%";
      document.getElementById('stoneul').disabled = true;
      document.getElementById('stoneur').disabled = true;
      document.getElementById('stonell').disabled = false;
      document.getElementById('stonelr').disabled = false;
    } else if (posOrient === 3) {
      document.getElementById('stoneul').style.opacity = "0%";
      document.getElementById('stoneur').style.opacity = "80%";
      document.getElementById('stonell').style.opacity = "0%";
      document.getElementById('stonelr').style.opacity = "80%";
      document.getElementById('stoneul').disabled = true;
      document.getElementById('stoneur').disabled = false;
      document.getElementById('stonell').disabled = true;
      document.getElementById('stonelr').disabled = false;
    }
  }
  if (exit[0] === position[0] && exit[1] === position[1]) {
    document.getElementById("video").src = "images/DATWS.mp4";
    const winner = document.querySelector('#winner'); 
    winner.innerHTML = 'You have gracefully danced across the water and made it to the opposite shore';
    document.getElementById('stoneul').style.opacity = "0%";
    document.getElementById('stoneur').style.opacity = "0%";
    document.getElementById('stonell').style.opacity = "0%";
    document.getElementById('stonelr').style.opacity = "0%";
    document.getElementById('stonem').style.opacity = "0%";
    document.getElementById('file').style.opacity = "0%";
    document.getElementById('start').style.opacity = "0%";
    document.getElementById('meterlabel').style.opacity = "0%";
}
}
function gMetric(indStone) {
  if (indStone<2) {
    gameMetric++;
  } else if (indStone>1) {
    gameMetric--;
  }
  let metricRatio = Math.min(Math.floor(100*gameMetric/baseMetric),100);
  const dMeter = document.getElementById("file");
  dMeter.value=metricRatio;
}
function opsPathF(indStone,dumLoop,dumLoopLen,dumLoopPOS) {
  let opsJunk = junctions[dumLoop];
  let opsPath = opsTransitionMatrix[indStone][posOrient];
  if (opsPath === 0) {
    dumLoopPOS++
  } else if (opsPath === 1) {
    dumLoopPOS--
} else if (opsPath > 1) {                               /// cases where you have no stones or switch loops
  opsLinkTest = junctions[position[0]][position[1]];
  if (opsLinkTest === 0) {                             /// NO Stones - do nothing
  } else { 
    dumLink = links[opsLinkTest-1];                                            /// Switch Loops
    if (dumLoop === dumLink[2]) {      /// if the old loop (dumLoop) 
      dumLoop = dumLink[0];
      dumLoopPOS = dumLink[1];
    } else { 
      dumLoop = dumLink[2]
      dumLoopPOS = dumLink[3];
    }
    if (opsPath === 2) {
      dumLoopPOS++
    } else if (opsPath === 3) {
      dumLoopPOS--
  }
  }
}
position[0] = dumLoop;  
let dLL = loops[dumLoop].length;                           /// update position with loop and (modular addition) position on loop
if (dumLoopPOS < 0) {
  dumLoopPOS = dumLoopPOS + dLL;
}
if (dumLoopPOS >= dLL) {
  dumLoopPOS = dumLoopPOS - dLL;
}
position[1] = dumLoopPOS;
}
