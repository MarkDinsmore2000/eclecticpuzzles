    const gameInit = document.querySelector('#start');
    const panelOne = document.querySelector('#oneP');
    const panelTwo = document.querySelector('#twoP');
    const panelThr = document.querySelector('#thrP');
    const panelFou = document.querySelector('#fouP');
    const panelFiv = document.querySelector('#fivP');
    const panelSix = document.querySelector('#sixP');
    const dInter = document.querySelector('#dCenter'); 

    // Global functions passing data between Initialization
// Control Panel Module
// Operations Module
// Display Module

let panelPerm = [];
let trafLight = [];
let dim = 3;
let curPerm = [];
let curDisp = [];
let turnCounter=0;
const yourScore = [];
const score1 = 'RGRG,GRGR,RGRG,GRGR';
const score2 = 'GRGR,RGRG,GRGR,RGRG';
    

    function pMult(newP, curP, dim) {     // pMult is creates the product of newP on curP of Dimension dim and returns it as dP
      let dP = [0, 1, 2];
      for (let i=0; i<dim; i++) {
            dP[i] = curP[newP[i]];
      }
      return dP;
    }
   
// Display takes the curDisplay and implements it onscreen
// I should ultimately make curDisp a local variable passed to display
    function display() {
      let tsig = document.querySelector('#tSigG');
      if (curDisp[0] === 'G') {
        tsig.src = 'RedLight.png';
      } else { 
        tsig.src = 'GreenLight.png';
      };
      let rsig = document.querySelector('#rSigG');
      if (curDisp[1] === 'G') {
        rsig.src = 'RedLight.png';
      } else { 
        rsig.src = 'GreenLight.png';
      };
      let bsig = document.querySelector('#bSigG');
      if (curDisp[2] === 'G') {
        bsig.src = 'RedLight.png';
      } else { 
        bsig.src = 'GreenLight.png';
      };
      let lsig = document.querySelector('#lSigG');
      if (curDisp[3] === 'G') {
        lsig.src = 'RedLight.png';
      } else { 
        lsig.src = 'GreenLight.png';
      };
 // turn counter and win criteria     
      const tC = document.querySelector('#turnCount');
      tC.innerHTML = 'Turn Count:   ' + turnCounter;
 // winner     
      yourScore.unshift(curDisp);
      if (turnCounter > 3 ) {
        yourScore.pop();
      }
      if (yourScore.length >=5 ) {
        yourScore.pop();
      }
      const wCrit = document.querySelector('#winner');
      wCrit.innerHTML = ' ';
      if ((yourScore.toString() === score1) || (yourScore.toString() === score2)) {
        const wCrit = document.querySelector('#winner');
        wCrit.innerHTML = 'Winner!!';
      }
    };

  function panelOps(dNewPerm) {                /// PanelOps function is called when a button is pushed
    turnCounter++;
    let dumP = pMult(dNewPerm, curPerm, dim)
    curPerm = dumP;
    let curIndex = 0;
    for (i=0; i<6; i++) {
      if (curPerm.toString() === panelPerm[i].toString()) {
       curIndex = i;
       i = 6;
    }
  }  
  curDisp = trafLight[curIndex]; 
}; 


    

   
    
// gameInit performs the initialization when the start button is clicked 
gameInit.onclick = function() {    
let randimg = Math.floor(Math.random()*4); 
if (randimg === 0 ) {
  dInter.style.backgroundImage = "url('CedarRapids.jpeg')";
} else if (randimg === 1){
  dInter.style.backgroundImage = "url('Columbus.jpeg')";
} else if (randimg === 2){
  dInter.style.backgroundImage = "url('reno.jpeg')";
} else if (randimg > 2 ){
  dInter.style.backgroundImage = "url('PicoSepulveda.jpeg')";
}
//      document.getElementById("leftSigG").style.display = "none";
// Start button processing     
//Panel Permutation Initializization Variables   
let initPerm = [[0,1,2], [0,2,1], [1,0,2], [1,2,0], [2,0,1], [2,1,0]];
panelPerm = [];
dim = 3;
turnCounter=0;

//Traffic Light Initialization Variables
let initLight = ['GGRR', 'GRGR', 'GRRG', 'RGGR', 'RGRG', 'RRGG'];
trafLight = [];

// Loop for Initializing Permutations & Lights
let rand = Math.floor(Math.random()*6); 
let randL= Math.floor(Math.random()*6); 
	let num = 6;
	for (let i=num; i>0; i--) {
// Section to initialize the Panel Permutations	
    if (rand === 0) {
          let arrayA = initPerm.shift();
          panelPerm.unshift(arrayA);
            }
    else {
          panelPerm.unshift(initPerm[rand]);
          const arrayD = initPerm.slice(rand+1);
          initPerm.splice(rand-1, 6, initPerm[rand-1]);
          let arrayE = initPerm.concat(arrayD);
          initPerm = arrayE;
          }
//Section to Initial Lights
        if (randL === 0) {
            let arrayLA = initLight.shift();
            trafLight.unshift(arrayLA);
            }
        else {
            trafLight.unshift(initLight[randL]);
            const arrayLD = initLight.slice(randL+1);
            initLight.splice(randL-1, 6, initLight[randL-1]);
            let arrayLE = initLight.concat(arrayLD);
            initLight = arrayLE;
            }
      rand = Math.floor(Math.random()*(i-1));
      randL = Math.floor(Math.random()*(i-1)); 
    }
     
// Initialize current Permutation state & Current Display State
      curPerm = panelPerm[0];
      curDisp = trafLight[0];
      display();
}    

 // Operation Processing
 // take the integer (0-5) from Panel onclick to index Permutation (panelPerm)
 // Multiply the newPerm x curPerm and put it in curPerm
 // use index of curPerm to identify the new Display index 
 // and pass that index to the Display module
 // use index to identify the new display in trafLight
 // use trafLight entry (above function) to reset Display

    
 panelOne.onclick = function() {    // 1) Capture panel Input
  let newPerm = panelPerm[0];
  panelOps(newPerm);                // 2) Operation
  display();                        // 3) Display result
}
    
panelTwo.onclick = function() {
  let newPerm = panelPerm[1];
  panelOps(newPerm);
  display();
}

panelThr.onclick = function() {
  let newPerm = panelPerm[2];
  panelOps(newPerm);
  display();
}
  
panelFou.onclick = function() {
  let newPerm = panelPerm[3];
  panelOps(newPerm);
  display();
}

panelFiv.onclick = function() {
  let newPerm = panelPerm[4];
  panelOps(newPerm);
  display();
}

panelSix.onclick = function() {
  let newPerm = panelPerm[5];
  panelOps(newPerm);
  display();
}

// **** Message Alert Options ****
//      SnapAlert().alert('Alert Title A title yes but does it have a size limt what Can I add to it and how will it look', 'This is a basic alert.');
//      SnapAlert().info('Information', 'This is an info alert.', {
//        position: 'top right',
//        duration: 5000,
//        icon: 'custom-icon-class', // Replace with a Boxicons class name (https://boxicons.com)
//        isDark: true
//      });
//      yoyoToast.fire({
//        type: 'danger',              /// {'info','question','success','warning','danger'}
      //  title: 'Update Available',    /// optional
//        message: 'Update to 10.5.3 OK but if this is really long where does all the text go',
//        timeout: 10000,             /// optional in ms
//        subtext: '~ Info Yoyo Toast ~',    /// optional
//        position: 'top-left'         ///Display position {'top-left', 'top-right', 'bottom-left', 'bottom-right'} (Optional)
    //    timeoutFunction: ()=> alert('Timeout Function called'),
    //    hasConfirmation: true,
    //    confirmLabel: 'Right!',
    //    confirmFunction: () => alert('Confirm Function Called'),
    //    hasCancellation: true,
    //    cancelLabel: 'Not Now',
    //    cancelFunction: () => alert('cancel function Called'),
//    });
        