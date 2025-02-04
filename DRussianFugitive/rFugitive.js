   //
   //  Control Buttons Defined
   //
    const gameInit = document.querySelector('#start');
    const panelStay = document.querySelector('#stay');
    const panelOne = document.querySelector('#oneP');
    const panelTwo = document.querySelector('#twoP');
    const panelThr = document.querySelector('#thrP');
    const panelFou = document.querySelector('#fouP');
    const panelFiv = document.querySelector('#fivP');
    const panelSix = document.querySelector('#sixP');
    const panelSev = document.querySelector('#sevP');
    const panelEig = document.querySelector('#eigP');
    const panelNin = document.querySelector('#ninP');
    const paris1        = document.querySelector('#paris');
    const marseille2    = document.querySelector('#marseille');
    const lyon3         = document.querySelector('#lyon');
    const toulouse4     = document.querySelector('#toulouse');
    const nice5         = document.querySelector('#nice');
    const nantes6       = document.querySelector('#nantes');
    const strasbourg7   = document.querySelector('#strasbourg');
    const bordeaux8     = document.querySelector('#bordeaux');
    const lille9        = document.querySelector('#lille');
    const rennes10      = document.querySelector('#rennes');
    const dijon11       = document.querySelector('#dijon');
    const rouen12       = document.querySelector('#rouen');
    const biarritz13    = document.querySelector('#biarritz');
    const avignon14     = document.querySelector('#avignon');
    const annecy15      = document.querySelector('#annecy');
    const colmar16      = document.querySelector('#colmar');
    const larochelle17  = document.querySelector('#larochelle');
    const ajaccio18     = document.querySelector('#ajaccio');
    const cherbourg19   = document.querySelector('#cherbourg');
    const montpellier20 = document.querySelector('#montpellier');
    const aixenprovence21 = document.querySelector('#aixenprovence');
    const brest22       = document.querySelector('#brest');
    const tours23       = document.querySelector('#tours');
    const perpignan24   = document.querySelector('#perpignan');
    const dC = document.querySelector('#dayCount'); 
    const dCR = document.querySelector('#cityRept'); 
    const dgSA = document.querySelector('#tripRept'); 
    const dExit = document.querySelector('#frenchMap'); 
    const styCit = document.querySelectorAll(".lCity");
    const endGame = document.querySelector('#endGame'); 
    const dSumIt = document.querySelector('#dSumIt'); 
    const aComment = document.querySelector('#aComment'); 
    const aOthCom = document.querySelector('#aOthCom'); 
    const badEnd = document.querySelector('#badEnd'); 
    const dSumIt2 = document.querySelector('#dSumIt2'); 
    const aComment2 = document.querySelector('#aComment2'); 
    const aOthCom2 = document.querySelector('#aOthCom2'); 

    
// pMult is creates the product of newP on curP of Dimension dim and returns it as dP
    function pMult(newP, curP, dim) {
      let dP = [0, 1, 2, 3];
      for (let i=0; i<dim; i++) {
            dP[i] = curP[newP[i]];
      }
      return dP;
    }
   

  function iDisplay(cityI, cityIOld) {    //// This highlights the new city and displays city images
   
   if (cityIOld !== cityI) {
    if (cityIOld === 0) {
      paris1.style.outline = "2px solid #000000";
    } else if (cityI === 0) {
      paris1.style.outline = "8px solid #0000FF";
    }
    if (cityIOld === 1) {
      marseille2.style.outline = "2px solid #000000";
    } else if (cityI === 1) {
      marseille2.style.outline = "8px solid #0000FF";
     }
    if (cityIOld === 2) {
      lyon3.style.outline = "2px solid #000000";
    } else if (cityI === 2) {
      lyon3.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 3) {
      toulouse4.style.outline = "2px solid #000000";
    } else if (cityI === 3) {
      toulouse4.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 4) {
      nice5.style.outline = "2px solid #000000";
    } else if (cityI === 4) {
      nice5.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 5) {
      nantes6.style.outline = "2px solid #000000";
    } else if (cityI === 5) {
      nantes6.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 6) {
      strasbourg7.style.outline = "2px solid #000000";
    } else if (cityI === 6) {
      strasbourg7.style.outline = "8px solid #0000FF";
   }
    if (cityIOld === 7) {
      bordeaux8.style.outline = "2px solid #000000";
    } else if (cityI === 7) {
      bordeaux8.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 8) {
      lille9.style.outline = "2px solid #000000";
    } else if (cityI === 8) {
      lille9.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 9) {
      rennes10.style.outline = "2px solid #000000";
    } else if (cityI === 9) {
      rennes10.style.outline = "8px solid #0000FF";
     }
    if (cityIOld === 10) {
      dijon11.style.outline = "2px solid #000000";
    } else if (cityI === 10) {
      dijon11.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 11) {
      rouen12.style.outline = "2px solid #000000";
    } else if (cityI === 11) {
      rouen12.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 12) {
      biarritz13.style.outline = "2px solid #000000";
    } else if (cityI === 12) {
      biarritz13.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 13) {
      avignon14.style.outline = "2px solid #000000";
    } else if (cityI === 13) {
      avignon14.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 14) {
      annecy15.style.outline = "2px solid #000000";
    } else if (cityI === 14) {
      annecy15.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 15) {
      colmar16.style.outline = "2px solid #000000";
    } else if (cityI === 15) {
      colmar16.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 16) {
      larochelle17.style.outline = "2px solid #000000";
    } else if (cityI === 16) {
      larochelle17.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 17) {
      ajaccio18.style.outline = "2px solid #000000";
    } else if (cityI === 17) {
     ajaccio18.style.outline = "8px solid #0000FF";
     }
    if (cityIOld === 18) {
      cherbourg19.style.outline = "2px solid #000000";
    } else if (cityI === 18) {
      cherbourg19.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 19) {
      montpellier20.style.outline = "2px solid #000000";
    } else if (cityI === 19) {
    montpellier20.style.outline = "8px solid #0000FF";
    }
    if (cityIOld === 20) {
     aixenprovence21.style.outline = "2px solid #000000";
    } else if (cityI === 20) {
      aixenprovence21.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 21) {
      brest22.style.outline = "2px solid #000000";
    } else if (cityI === 21) {
      brest22.style.outline = "8px solid #0000FF";
      }
    if (cityIOld === 22) {
     tours23.style.outline = "2px solid #000000";
    } else if (cityI === 22) {
     tours23.style.outline = "8px solid #0000FF";
     }
    if (cityIOld === 23) {
      perpignan24.style.outline = "2px solid #000000";
    } else if (cityI === 23) {
     perpignan24.style.outline = "8px solid #0000FF";
     }
    }
};

  function cMessage() { 
     dC.innerHTML = 'This is day ' + dayCounter + ' trying to escape Communist Russia' ; 
     dCR.innerHTML = 'You trudge on, secret police of the OGPU always on your tail';
     dgSA.innerHTML = 'Scrounging food and shelter, you stowaway on any vehicle that might lead you to freedom';
     if (10 === dayCounter) {
      dCR.innerHTML = 'Notices with your name begin to appear descibing you as a vicious criminal wanted by the state';
     }
     if (4 === dayCounter%7) {
      dgSA.innerHTML = 'You hear rumors the OGPU have added more agents to the search. You feel them closing in.';
     }
     if (15 === dayCounter%23) {
      dgSA.innerHTML = 'The word is out, people mumble your name as you pass by them.';
     }
     if (29 === dayCounter) {
      dCR.innerHTML = 'You are tired, sick and starving. You begin to wonder if it is worth going on.';
     }
     
};
function Convert(numstr){                    /// convert 4 digit string example: '1234' to Perm [0,1,2,3]
  let a = [];
  for (i=0; i<4; i++) {
  let d = parseInt(numstr[i])-1;
   a.push(d) 
  }
    return a;
  }
function deConvert(array1,dim){             /// Convert Perm to 4 digit string & backwards
  let a=''
  for (let i=0; i<dim; i++){
   a = a.concat(array1[i]+1);
  }
  return a;
}

// Operations Global Variables
let panelPerm = [];
let dim = 4;        
// Global functions passing data between modules (sort of)
const cityNames   = ['Paris','Marseille','Lyon','Toulouse','Nice','Nantes','Strasbourg',
  'Bordeaux','Lille','Rennes','Dijon','Rouen','Biarritz','Avignon','Annecy','Colmar',
  'la Rochelle','Ajaccio','Cherbourg','Montpellier','Aix-en-Provence','Brest',
  'Tours','Perpignon'];
const cityPerms = [ ['1234','1243','1324','1432','2134','2413',
     '2431','2314','2341','4312'], 
    ['1234','1243','1423','1342','1324','4132','3142','3214'],
    ['1234','1324','1342','2143','3214','2143','2314','2341'],
    ['1234','1423','1243','4312','4231','3241'],
    ['1234','1324','1432','4123','2143','2314','1342'],
    ['1234','1432','4231','3214','2431','2314'],
    ['1234','2134','1423','1324','1342','3142'],
    ['1234','2413','2431','4213','4321','3412'],
    ['1234','3142','1342','1432','1423','4123'],
    ['1234','4132','1243','1324','2413','2341'],
    ['1234','3124','3214','2134','2143','4231'],
    ['1234','4123','1342','1324','3412','3241'],
    ['1234','2143','3241','1243','4213','4132','2314'],
    ['1234','2143','1423','3214','3142'],
    ['1234','3124','1423','1342','1243'],
    ['1234','4123','1324','2143','1243'],
    ['1234','3124','2314','4321','2134'],
    ['1234','4321','4231','4312'],
    ['1234','3142','3412','1423','2341'],
    ['1234','2431','2413','2314','3214','1342'],
    ['1234','3214','3421','3124','4312'],
    ['1234','4132','2134','3142','1342','4231'],
    ['1234','3421','3124','4123','2413','2134'],
    ['1234','4213','3412','2431','1423','4321']];
let cityDestArray = [];

const cityDigitCodes = [ '1234' ,'1243','1324','1342','1423','1432','2134','2143','2413',
    '2431','2314','2341','3124','3142','3214','3241','3412','3421','4123','4132',
    '4213','4231','4312','4321'];

const destCounts = [10,8,8,6,7,6,6,6,6,6,6,6,7,5,5,5,5,4,5,6,5,6,6,6];
let dayCounter = 0;
let initPerm = [];
let rand=0;
let curPerm = [];
let sPolPerm = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]]; /// Scenario Globals
let sPolCount = 0;
let captureFlag = 0;
let endFlag = 0;
let sPFlag = 0;


//    
// gameInit performs the initialization when the start button is clicked 
//
gameInit.onclick = function() { 
curPerm = [0,1,2,3];
dExit.style.backgroundImage = "url('Russia1933Adj.jpg')";
dC.innerHTML = ''; 
dCR.innerHTML = '';
dgSA.innerHTML = '';
// styCit.style.opacity = "0%";
styCit.forEach(lCity => {
  lCity.style.opacity = "80%";
  lCity.style.outline = "0px";
});
paris1.style.outline = "8px solid #0000FF";

//Test line
      const bell = document.querySelector('#lightUp');
      bell.style.backgroundColor = '#bee1bd';
// loop through cities to initialize panel

for (let j=0; j<=23; j++) {                //// loop through the cities
  initPerm = cityPerms[j];
  let dDest = destCounts[j];               // destCounts is number of destination available by city
  rand = Math.floor(Math.random()*dDest);  //random varible 0-destCounts[j]-1
	for (let i=dDest; i>0; i--) {                // Loop through the destinations  - Randomized initPerm into panelPerm
    if (rand === 0) {                        //if rand is 0, take the first remaining perm and shift into panelPerm[0]
          let arrayA = Convert(initPerm.shift());  /// shift takes out first element of residual initPerm and 
          panelPerm.unshift(arrayA);                /// unshift puts it in panelPerm
            }
    else { 
        panelPerm.unshift(Convert(initPerm[rand]));    ///First convert and load selected (rand) into panelPerm 
        const arrayD = initPerm.slice(rand+1);         ///arrayD is the part of initPerm after the selected (rand) perm
        initPerm.splice(rand-1, 6, initPerm[rand-1]);  //// Then take the part before selected (6 is more enough)
        let arrayE = initPerm.concat(arrayD);           //// put Humpty together again (less seected Perm)
        initPerm = arrayE;                              //// it's the new initPerm
        }
        rand = Math.floor(Math.random()*(i-1));         //// select the next one to grab
      }
      if (j>=1);
      for (k=0; k<(10-dDest); k++) {                   /// for destCounts less than 10 fill panelPerm with repeats
        let dPP = panelPerm[Math.min(k,dDest)];
        panelPerm.push(dPP);
      }
      cityDestArray.push(panelPerm);                   /// converted and placed in cityDstArray
      panelPerm = [];                     
  } 
  console.log('cityDestArray',cityDestArray);
} 

  ///Operations - Panel
  panelStay.onclick = function() {    // The Stay in City Button
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][9];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld); 
    if ((endFlag === 0) && (captureFlag === 0)) {                     
     cMessage(); 
    }          
  };
  
  panelOne.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][0];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };

  panelTwo.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][1];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };
  panelThr.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][2];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)){                     
      cMessage(); 
      }          
  };
  panelFou.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][3];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };
  panelFiv.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][4];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };
  panelSix.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][5];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };
  panelSev.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][6];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };
  panelEig.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][7];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };
  panelNin.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][8];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    dayCounter++; 
    scenario();  
    scenarioTest(dIndex); 
    uDead();
    uFree(dIndexOld, dIndex);
    iDisplay(dIndex, dIndexOld);                      
    if ((endFlag === 0) && (captureFlag === 0)) {                     
      cMessage(); 
      }          
  };

  function scenario() {
    let dNewPolPerm = [];
    let dPerm = [];
   if (dayCounter === 3) {            
    sPolCount = 3;
   };
   if (dayCounter === 8) {             /// Add More Secret Police to the Chase!
    sPolCount++;
   };
   if (dayCounter === 12) {
    sPolCount++;
   };
   if (dayCounter === 16) {
    sPolCount++;
   };
   if (dayCounter === 20) {             /// Add More Secret Police to the Chase!
    sPolCount++;
   };
   if (dayCounter === 25) {
    sPolCount++;
   };
   if (dayCounter === 30) {
    sPolCount++;
   };
   if (dayCounter === 35) {             /// Add More Secret Police to the Chase!
    sPolCount++;
   };
   if (dayCounter === 40) {
    sPolCount++;
   };
   if (dayCounter === 45) {
    sPolCount++;
   };
   if (sPolCount > 12) {
    sPolCount = 6;
   };
      for (let i=0; i < sPolCount; i++) {        ///Secret Police are on the move
        rand = Math.floor(Math.random()*24);
        dNewPolPerm = Convert(cityDigitCodes[rand]);
        dPerm = pMult(dNewPolPerm,sPolPerm[i],dim);
        sPolPerm[i] = dPerm;
      }
      console.log("polplaces",sPolPerm);
  };

  function scenarioTest(I) {
    for (let i = 0; i < sPolCount; i++) { 
      let dTestPol = sPolPerm[i];
      let dCurPerm = deConvert(dTestPol,dim);                /// update dIndex
      let dPI = cityDigitCodes.indexOf(dCurPerm);
      console.log(I,'Input', dPI, 'iPol');
      if (dPI === I) {
        captureFlag++;
        sPFlag = 1;
        console.log(captureFlag);
      }
    }
    if (sPFlag === 0) {
      captureFlag = 0;
    }
    sPFlag = 0;
  };
  function uDead() {
    if (captureFlag === 1) {
      dCR.innerHTML = 'Returning to where you slept a message scrathed on the wall read: They are looking for you';
      dgSA.innerHTML = 'You scramble away and try anything to flee the city';
    } else if (captureFlag === 2) {
      dCR.innerHTML = 'The people avoid your presense and avert their eyes';
      dgSA.innerHTML = 'You find a flyer with your name and description: You have to get away!';
    } else if (captureFlag > 2) {
      dSumIt2.innerHTML = 'They take you! Day ' + dayCounter; 
      aComment2.innerHTML = 'You are never heard from again';
      aOthCom2.innerHTML = 'According to Kremlin archives, uncovered in 1995, you died in 1937 in a Siberian slave labor camp';
      endFlag = 1;
      eGame(0);
    }
  };

  function uFree(oI, newIndex) {
    console.log(oI, 'oI');
    console.log(newIndex, 'nI');
    console.log(cityDigitCodes[oI],cityDigitCodes[newIndex]);
    let dTest = ((oI === 4) || (oI === 12) );
    let d1Test = ((oI === 17) || (oI === 18) );
    let d2Test = ((oI === 21) || (oI === 23) );
    let d3Test = (dTest || (d1Test) );
    let dTTest = (d2Test || (d3Test) );
    console.log(dTTest, 'dTTest', newIndex, 'ID');
    if ((dTTest === true) && (newIndex === 0)) {
      aComment.innerHTML = 'Your sensational story on the Holodomor comes out. Many news outlets dismiss it as fiction';
      aOthCom.innerHTML = 'You do not win a Pulitzer';
      dSumIt.innerHTML = 'You escape! After ' + dayCounter + ' days'; 
      endFlag = 1;
      eGame(1);
    }
  };

  function eGame(i) {
    document.getElementById('news').style.opacity = "0%";
  if (i === 0) {
   dExit.style.backgroundImage = "url('gulag.jpeg')";
  } else if ( i === 1) {
   dExit.style.backgroundImage = "url('Freedom.jpg')";
   document.getElementById('badEnd').style.opacity = "0%";
  };
  styCit.forEach(lCity => {
    lCity.style.opacity = "0%";
  });
};








