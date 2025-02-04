    const gameInit = document.querySelector('#start');
    const panelFFr = document.querySelector('#FFir');
    const panelOne = document.querySelector('#oneP');
    const panelTwo = document.querySelector('#twoP');
    const panelThr = document.querySelector('#thrP');
    const panelFou = document.querySelector('#fouP');
    const panelFiv = document.querySelector('#fivP');
    const panelSix = document.querySelector('#sixP');

    
// pMult is creates the product of newP on curP of Dimension dim and returns it as dP
    function pMult(newP, curP, dim) {        // pMult is creates the product of newP on curP of Dimension dim and returns it as dP
      let dP = [0, 1, 2];
      for (let i=0; i<dim; i++) {
            dP[i] = curP[newP[i]];
      }
      return dP;
    }
   
    function display() {

// Part I: Show Status of the forests (scenario updates)
    let homebase = document.querySelector('#homebase');   
    homebase.style.outline = "2px solid #000000";

    let umpqua = document.querySelector('#umpqua');
    umpqua.style.outline = "2px solid #000000";
   if (curFires[0] === 0) {umpqua.style.backgroundColor = "#7ECB95";}
     else if (curFires[0] === 1) {umpqua.style.backgroundColor = "#EED202";}
     else if (curFires[0] === 2) {umpqua.style.backgroundColor = "#FFA500";}
     else if (curFires[0] === 4) {umpqua.style.backgroundColor = "#DC143C";}
     else if (curFires[0] === 3) {umpqua.style.backgroundColor = "#FFA500";}
     else if (curFires[0] === 5) {umpqua.style.backgroundColor = "#DC143C";}
     else if (curFires[0] === 6) {umpqua.style.backgroundColor = "#000000";}

    let rogue = document.querySelector('#rogue');
    rogue.style.outline = "2px solid #000000";
    if (curFires[1] === 0) {rogue.style.backgroundColor = "#7ECB95";}
     else if (curFires[1] === 1) {rogue.style.backgroundColor = "#EED202";}
     else if (curFires[1] === 2) {rogue.style.backgroundColor = "#FFA500";}
     else if (curFires[1] === 4) {rogue.style.backgroundColor = "#DC143C";}
     else if (curFires[1] === 3) {rogue.style.backgroundColor = "#FFA500";}
     else if (curFires[1] === 5) {rogue.style.backgroundColor = "#DC143C";}
     else if (curFires[1] === 6) {rogue.style.backgroundColor = "#000000";}
    
    let freemont = document.querySelector('#freemont');
    freemont.style.outline = "2px solid #000000";
    if (curFires[2] === 0) {freemont.style.backgroundColor = "#7ECB95";}
     else if (curFires[2] === 1) {freemont.style.backgroundColor = "#EED202";}
     else if (curFires[2] === 2) {freemont.style.backgroundColor = "#FFA500";}
     else if (curFires[2] === 4) {freemont.style.backgroundColor = "#DC143C";}
     else if (curFires[2] === 3) {freemont.style.backgroundColor = "#FFA500";}
     else if (curFires[2] === 5) {freemont.style.backgroundColor = "#DC143C";}
     else if (curFires[2] === 6) {freemont.style.backgroundColor = "#000000";}

    let cascades = document.querySelector('#cascades');
    cascades.style.outline = "2px solid #000000";
    if (curFires[3] === 0) { cascades.style.backgroundColor = "#7ECB95";}
     else if (curFires[3] === 1) {cascades.style.backgroundColor = "#EED202";}
     else if (curFires[3] === 2) {cascades.style.backgroundColor = "#FFA500";}
     else if (curFires[3] === 4) {cascades.style.backgroundColor = "#DC143C";}
     else if (curFires[3] === 3) {cascades.style.backgroundColor = "#FFA500";}
     else if (curFires[3] === 5) {cascades.style.backgroundColor = "#DC143C";}
     else if (curFires[3] === 6) {cascades.style.backgroundColor = "#000000";}

     let klamath = document.querySelector('#klamath');
     klamath.style.outline = "2px solid #000000";
    if (curFires[4] === 0) {klamath.style.backgroundColor = "#7ECB95";}
     else if (curFires[4] === 1) {klamath.style.backgroundColor = "#EED202";}
     else if (curFires[4] === 2) {klamath.style.backgroundColor = "#FFA500";}
     else if (curFires[4] === 4) {klamath.style.backgroundColor = "#DC143C";}
     else if (curFires[4] === 3) {klamath.style.backgroundColor = "#FFA500";}
     else if (curFires[4] === 5) {klamath.style.backgroundColor = "#DC143C";}
     else if (curFires[4] === 6) {klamath.style.backgroundColor = "#000000";}

     let modoc = document.querySelector('#modoc');
     modoc.style.outline = "2px solid #000000";
    if (curFires[5] === 0) {modoc.style.backgroundColor = "#7ECB95";}
     else if (curFires[5] === 1) {modoc.style.backgroundColor = "#EED202";}
     else if (curFires[5] === 2) {modoc.style.backgroundColor = "#FFA500";}
     else if (curFires[5] === 4) {modoc.style.backgroundColor = "#DC143C";}
     else if (curFires[5] === 3) {modoc.style.backgroundColor = "#FFA500";}
     else if (curFires[5] === 5) {modoc.style.backgroundColor = "#DC143C";}
     else if (curFires[5] === 6) {modoc.style.backgroundColor = "#000000";}


///  Part II: Updates due to fire fighters location

      if (curPerm[0] === 0) { homebase.style.outline = "8px solid #0000FF"; }
      if (curPerm[0] === 1) { umpqua.style.outline = "8px solid #0000FF"; }
      if (curPerm[0] === 2) { rogue.style.outline = "8px solid #0000FF"; }
      if (curPerm[0] === 3) { freemont.style.outline = "8px solid #0000FF"; }
      if (curPerm[0] === 4) { cascades.style.outline = "8px solid #0000FF"; }
      if (curPerm[0] === 5) { klamath.style.outline = "8px solid #0000FF"; }
      if (curPerm[0] === 6) { modoc.style.outline = "8px solid #0000FF"; }
   
     let news = document.querySelector('#news');  //  Part III NEWS chevron new fires, season totals , trivia, ads ... jokes ...
     news.style.outline = "2px solid #000000";
    const dC = document.querySelector('#dayCount'); // turn counter and win criteria  
    dC.innerHTML = 'Fire Season Day ' + dayCounter;  
    const selPara = document.querySelector('#fireReport');
    const weirdComments = ['You may not have all the insurance you need. Call us and get a full appraisal today!',
      'We have Medicare Advantage plans and Medicare Supplement plans. Let us help you with your senior insurance needs',
      'Are you covered for Long Term Nursing Care Needs. This is the largest financial exposure seniors have in today\'s world',
      'We have solutions for estate planning. Make sure you take care of those you love.'];
    let randComments = Math.floor(Math.random()*4); 
    commercials = weirdComments[randComments];
    if (dayCounter <= 1) {
      selPara.innerHTML = 'This is the Beginning of Fire Season: Please show extra care.'; 
    } else {selPara.innerHTML = commercials; 
    }  /// set up random variations for the else category ///
    let newsF1 = newsFlash[0];
    let newsF2 = newsFlash[1];
    let newsF3 = newsFlash[2];
    let newsF4 = newsFlash[3];
    let newsF5 = newsFlash[4];
    let newsF6 = newsFlash[5];

    if (newsF1 == 1) {selPara.innerHTML = 'Fire reported in ' + forests[1] + ' Forest';}
    if (newsF1 == 2) {selPara.innerHTML = 'Fire spreading rapidly in ' + forests[1] + ' Forest';}
    if (newsF1 == 3) {selPara.innerHTML = 'Fire almost under control  ' + forests[1] + ' Forest';}
    if (newsF2 == 1) {selPara.innerHTML = 'Fire reported in ' + forests[2] + ' Forest'; }
    if (newsF3 == 1) {selPara.innerHTML = 'Fire reported in ' + forests[3] + ' Forest'; }
    if (newsF4 == 1) {selPara.innerHTML = 'Fire reported in ' + forests[4] + ' Forest'; }
    if (newsF5 == 1) {selPara.innerHTML = 'Fire reported in ' + forests[5] + ' Forest'; }
    if (newsF6 == 1) {selPara.innerHTML = 'Fire reported in ' + forests[6] + ' Forest'; }
    if (newsF2 == 2) {selPara.innerHTML = 'Fire spreading rapidly in ' + forests[2] + ' Forest';}
    if (newsF2 == 3) {selPara.innerHTML = 'Fire almost under control ' + forests[2] + ' Forest';}
    if (newsF3 == 2) {selPara.innerHTML = 'Fire spreading rapidly in ' + forests[3] + ' Forest';}
    if (newsF3 == 3) {selPara.innerHTML = 'Fire almost under control ' + forests[3] + ' Forest';}
    if (newsF4 == 2) {selPara.innerHTML = 'Fire spreading rapidly in ' + forests[4] + ' Forest';}
    if (newsF4 == 3) {selPara.innerHTML = 'Fire almost under control ' + forests[4] + ' Forest';}
    if (newsF5 == 2) {selPara.innerHTML = 'Fire spreading rapidly in ' + forests[5] + ' Forest';}
    if (newsF5 == 3) {selPara.innerHTML = 'Fire almost under control ' + forests[5] + ' Forest';}
    if (newsF6 == 2) {selPara.innerHTML = 'Fire spreading rapidly in ' + forests[6] + ' Forest';}
    if (newsF6 == 3) {selPara.innerHTML = 'Fire almost under control ' + forests[6] + ' Forest';}
   
    for (i=0; i<=5; i++){
      if (newsFlash[i] == 1) { 
        let ddum1 = newsFlash[i];
        let dForest = forests[i+1];
        selPara.innerHTML = 'Fire reported in  ' + dForest + ' Forest'; 
      } else if (newsFlash[i] == 2) {
        let ddum2 = newsFlash[i];
      } else if (newsFlash[i] == 3) {
        let ddum3 = newsFlash[i];
  }
  newsFlash = [0,0,0,0,0,0]; //the news is out!!
  FFFlag = 0;
}
}      
  function panelOps(dNewPerm) {
    dayCounter++;
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

const forests = ['homebase', 'Umpqua', 'Rogue',  'Freemont', 'Cascades','Klamath', 'Modoc'];  //just needed for display
let panelPerm = [];         // Operations Global Variables
let dim = 7;        
let curFires = [0,0,0,0,0,0];
let curFiresPast = [0,0,0,0,0,0];
let acresBurned = [0,0,0,0,0,0];
let newsFlash = [0,0,0,0,0,0];
let curPerm = [0,1,2,3,4,5,6];
let dayCounter = 0;
let FFCounter = 1;
let FFFlag = 0;


//    
// gameInit performs the initialization when the start button is clicked 
//
gameInit.onclick = function() { 
curFires = [0,0,0,0,0,0];
acresBurned = [0,0,0,0,0,0];
curPerm = [0,1,2,3,4,5,6];
newsFlash= [0,0,0,0,0,0];
FFCounter = 1;  
display();                // Initialize Display
dayCounter = 0;      // Initialize Day Counter

let initPerm = [[6,0,1,2,3,4,5], [5,6,0,1,2,3,4], [4,5,6,0,1,2,3], [3,4,5,6,0,1,2], [2,3,4,5,6,0,1], [1,2,3,4,5,6,0]];
let rand = Math.floor(Math.random()*6);  //random varible 0-5
let num = 6;
  
	for (let i=num; i>0; i--) {                // Randomeized initPerm into panelPerm
    if (rand === 0) {                        //if rand is 0, take the first remaining perm and shift into panelPerm[0]
          let arrayA = initPerm.shift();
          panelPerm.unshift(arrayA);
            }
    else {                                        //else shift middle one int panelPerm[0] & slice and splice initPerm 
          panelPerm.unshift(initPerm[rand]);
          const arrayD = initPerm.slice(rand+1);
          initPerm.splice(rand-1, 6, initPerm[rand-1]);
          let arrayE = initPerm.concat(arrayD);
          initPerm = arrayE;
          }
          rand = Math.floor(Math.random()*(i-1));
          
        }  
      panelPerm.unshift([0,1,2,3,4,5,6]);       //the panelFFr element is always the identity e
      curPerm = panelPerm[0];                   // Initialize current Permutation state to FFR: e
    }
      
      

panelFFr.onclick = function() {    // Panel buttons drive the process
  FFCounter++;
  dayCounter++;
  scenario();
  display();
}

panelOne.onclick = function() {
  //Test line
  const bell = document.querySelector('#lightUp');
  bell.style.backgroundColor = '#2ee2bd';
  //end test   
  let newPerm = panelPerm[1];
  curPerm = pMult(newPerm, curPerm, dim);
  dayCounter++;
  FFCounter = 1;
  scenario();
  display();
}
panelTwo.onclick = function() { 
  let newPerm = panelPerm[2];
  curPerm = pMult(newPerm, curPerm, dim);
  dayCounter++;
  FFCounter = 1;
  scenario();
  display();
}
panelThr.onclick = function() { 
  let newPerm = panelPerm[3];
  curPerm = pMult(newPerm, curPerm, dim);
  dayCounter++;
  FFCounter = 1;
  scenario();
  display();
}
panelFou.onclick = function() { 
  let newPerm = panelPerm[4];
  curPerm = pMult(newPerm, curPerm, dim);
  dayCounter++;
  FFCounter = 1;
  scenario();
  display();
}
panelFiv.onclick = function() { 
  let newPerm = panelPerm[5];
  curPerm = pMult(newPerm, curPerm, dim);
  dayCounter++;
  FFCounter = 1;
  scenario();
  display();
} 
panelSix.onclick = function() { 
  let newPerm = panelPerm[6];
  curPerm = pMult(newPerm, curPerm, dim);
  dayCounter++;
  FFCounter = 1;
  scenario();
  display();
}

/// Scenario Development **** Below are Probability Constants ****
function scenario() {
const fireStartPb = [1, 2 ,3 ,3,4,5,4,3,2,0];       
const fireWorsePb = [20, 20, 30 , 30, 40, 50, 40, 30, 30, 10];
const fireImprvPb = [30, 20, 20 , 10, 10, 10, 10, 10, 30, 50];
const fireFightin = [[.5,.8,.9,1,1,1], [.5,.8,.9,1,1,1], [.3,.5,.8,.9,1,1],
[.2,.3,.5,.8,.9,1], [.1,.2,.3,.5,.8,.9], [.1,.1,.2,.3,.5,.8]];
 console.log(dayCounter);
  if (dayCounter >= 100) {            //// if DayCounter>=100 end Game and sum up
    getScore();                      
  }
  let rand = 0;
  let rane = 0;
  let curDayIndx = Math.floor(0.1*(dayCounter-1)); 
  let limit=0;
  let limit1=0;                             
  for (let i=0; i<=5; i++) {                              //loop through locations
    const test = curFires[i];                              // test unchanged throughout if statement
    if (test === 0) {                                // if no fire now, does one start?
      rand = Math.floor(Math.random()*100)+1;              
      limit = fireStartPb[curDayIndx];
      if (rand <= limit ) {                      
        curFires[i] = 1;
        newsFlash[i] = 1; 
        let dtestit=newsFlash[i];
        let idtestit = i;
      }
    } 
    else if (test !== 0) {                          // else if there is a fire here ...
      rand = Math.floor(Math.random()*100)+1; 
      rane = 101-rand;
      limit = fireWorsePb[curDayIndx]; 
      limit1 = fireImprvPb[curDayIndx];                                           
      if (limit > rand) {                                  // if fire then check if it gets worse   
          curFires[i] = Math.min(curFires[i]+1,6);
          newsFlash[i] = 2;  
          console.log('NewsF2');
      } else if (limit1 > rane) {                          // or better
          curFires[i]= Math.max(curFires[i]-1,0); 
          newsFlash[i] = 3; 
          console.log('NewsF3');
      }
    }
    }                                                        /// End natural fire impacts
   for (let i=0; i<=5; i++) {                                /// add impact of fire fighters - loop through locations
      rand = Math.random();  
      const test=curFires[i];
      const testP=curPerm[0];
      if ((testP === i+1) && test > 0) {
        const index1=Math.min(curFires[i],6)-1;
        const index2=Math.min(FFCounter-1,5);
        limit = fireFightin[index1][index2];
        if (limit > rand) {
          let FFTest = curFires[i];
          let FFDum = Math.max(FFTest-1,0); 
          curFires[i] =FFDum;
          FFFlag = 1;
          console.log('Fire Fighter successful!');
       }
     }
    }
    let bRate = [0, 100, 200, 500, 2000, 10000, 50000];
    let dAcre =[0,0,0,0,0,0,0];

    for (let i=0; i<=5; i++) {
      dAcre[i] = bRate[curFires[i]];
      acresBurned[i] = acresBurned[i] + dAcre[i];
    }
  }        /// end scenario round
  
  function getScore() {
    console.log("End Game")
    let totBurned = 0;
    let maxForest = 0;
    let indexForest = 0;
    for (let i=0; i<=5; i++) {
      totBurned = acresBurned[i] + totBurned;
      if (maxForest < acresBurned[i]) {
        indexForest = i+1;
        console.log('indexForset');
        console.log(i);
        console.log(indexForest);
        maxForest = acresBurned[i]; 
      }
    }
let worstForest = forests[indexForest];
console.log(acresBurned);
dayCounter =0;
displayScore(totBurned, worstForest, maxForest);
  }
  function displayScore(totBurned, worstF, acresB){
/// Clear out map
    document.getElementById('fireMap').style.backgroundImage = "url(images/EndSeason.jpeg)";
    document.getElementById('fireMap').style.textAlign = "center";
    document.getElementById('homebase').style.opacity = "0%";
    document.getElementById('umpqua').style.opacity = "0%";
    document.getElementById('cascades').style.opacity = "0%";
    document.getElementById('freemont').style.opacity = "0%";
    document.getElementById('modoc').style.opacity = "0%";
    document.getElementById('rogue').style.opacity = "0%";
    document.getElementById('klamath').style.opacity = "0%";
    document.getElementById('news').style.opacity = "0%";

    const sStep1 = document.querySelector('#headline'); // Headline
    sStep1.innerHTML = 'The Fire Season is Over!' 
  if (totBurned <= 20000) {
    const sStep5 = document.querySelector('#great');  
    sStep5.innerHTML = 'Great Job!!! only ' + totBurned + ' forest acres burned this season. The best result in decades.'
  } else {
    let sheSaid = ''              /// What She Said
    if (totBurned <= 200000) {
      sheSaid = 'There were ' + totBurned + ' acres of timber burned this fire season. A sad amount to be sure, but well below the recent average'
    } else if ( totBurned <= 400000) {
      sheSaid = totBurned + ' acres of Jackson timber were destroyed in fires this season. A terrible loss to be sure, but amazingly still below recent averages'
    } else if ( totBurned <= 500000) {
      sheSaid = 'Burned forest acreage for this fire season was ' + totBurned + ' exceeding the average of the last few years.';
      sheSaid = sheSaid.concat(' This reporter feels that it is past time that we rethink our forest management in Jackson.')
    } else if ( totBurned > 500000) {
      sheSaid = 'Burned forest acreage for this fire season was ' + totBurned + ' This was horrific. Jackson forest management has become an embarassment.';
    sheSaid = sheSaid.concat(' It is this reporter\'s opinion, that the citizens of Jackson need to start holding our officials accountable for these last disasterous fires.')
      }
    
    const sStep2 = document.querySelector('#SeasonDamage'); /// What she said  
    sStep2.innerHTML = sheSaid
    
    const sStep3 = document.querySelector('#totaldamage'); /// The worst forest  
    sStep3.innerHTML = 'The greatest damage was to the ' + worstF + ' Forest'
    const sStep4 = document.querySelector('#worstforests');  
    sStep4.innerHTML = 'The total loss in ' + worstF + ' was ' + acresB + '. I can only ask: When will Jackson adopt a rational forest management program?' 
    }  
  };