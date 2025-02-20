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
    const Pict1  = document.querySelector('#Pict1');
    const Pict2  = document.querySelector('#Pict2');
    const Pict3  = document.querySelector('#Pict3');
    const Pict4  = document.querySelector('#Pict4');
    const Pict5  = document.querySelector('#Pict5');

    
// pMult is creates the product of newP on curP of Dimension dim and returns it as dP
    function pMult(newP, curP, dim) {
      let dP = [0, 1, 2];
      for (let i=0; i<dim; i++) {
            dP[i] = curP[newP[i]];
      }
      return dP;
    }
  function iDisplay(cityI, cityIOld) {    //// This highlights the new city and displays city images
    console.log('cityindex',cityI,cityIOld);
    if (cityIOld === 0) {
      paris1.style.outline = "2px solid #000000";
    } else if (cityI === 0) {
      paris1.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/paris1.jpg";
    }
    if (cityIOld === 1) {
      marseille2.style.outline = "2px solid #000000";
    } else if (cityI === 1) {
      marseille2.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Mars1.jpg";
    }
    if (cityIOld === 2) {
      lyon3.style.outline = "2px solid #000000";
    } else if (cityI === 2) {
      lyon3.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Lyon1.jpg";
    }
    if (cityIOld === 3) {
      toulouse4.style.outline = "2px solid #000000";
    } else if (cityI === 3) {
      toulouse4.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Toul1.jpg";
    }
    if (cityIOld === 4) {
      nice5.style.outline = "2px solid #000000";
    } else if (cityI === 4) {
      nice5.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Nice1.jpg";
      
    }
    if (cityIOld === 5) {
      nantes6.style.outline = "2px solid #000000";
    } else if (cityI === 5) {
      nantes6.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Nant1.jpg";
    }
    if (cityIOld === 6) {
      strasbourg7.style.outline = "2px solid #000000";
    } else if (cityI === 6) {
      strasbourg7.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Stra1.jpg";
    }
    if (cityIOld === 7) {
      bordeaux8.style.outline = "2px solid #000000";
    } else if (cityI === 7) {
      bordeaux8.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Bord1.jpg";
    }
    if (cityIOld === 8) {
      lille9.style.outline = "2px solid #000000";
    } else if (cityI === 8) {
      lille9.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Lill1.jpg";
    }
    if (cityIOld === 9) {
      rennes10.style.outline = "2px solid #000000";
    } else if (cityI === 9) {
      rennes10.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Renn1.jpg";
    }
    if (cityIOld === 10) {
      dijon11.style.outline = "2px solid #000000";
    } else if (cityI === 10) {
      dijon11.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Dijo1.jpg";
    }
    if (cityIOld === 11) {
      rouen12.style.outline = "2px solid #000000";
    } else if (cityI === 11) {
      rouen12.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Roue1.jpg";
    }
    if (cityIOld === 12) {
      biarritz13.style.outline = "2px solid #000000";
    } else if (cityI === 12) {
      biarritz13.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Biar1.jpg";
    }
    if (cityIOld === 13) {
      avignon14.style.outline = "2px solid #000000";
    } else if (cityI === 13) {
      avignon14.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Avig1.jpg";
    }
    if (cityIOld === 14) {
      annecy15.style.outline = "2px solid #000000";
    } else if (cityI === 14) {
      annecy15.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Anne1.jpg";
    }
    if (cityIOld === 15) {
      colmar16.style.outline = "2px solid #000000";
    } else if (cityI === 15) {
      colmar16.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Cole1.jpg";
    }
    if (cityIOld === 16) {
      larochelle17.style.outline = "2px solid #000000";
    } else if (cityI === 16) {
      larochelle17.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Laro1.jpg";
    }
    if (cityIOld === 17) {
      ajaccio18.style.outline = "2px solid #000000";
    } else if (cityI === 17) {
     ajaccio18.style.outline = "8px solid #0000FF";
     Pict1.src = "France14Pictures/Ajac1.jpg";
    }
    if (cityIOld === 18) {
      cherbourg19.style.outline = "2px solid #000000";
    } else if (cityI === 18) {
      cherbourg19.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Cher1.jpg";
    }
    if (cityIOld === 19) {
      montpellier20.style.outline = "2px solid #000000";
    } else if (cityI === 19) {
    montpellier20.style.outline = "8px solid #0000FF";
    Pict1.src = "France14Pictures/Mont1.jpg";
    }
    if (cityIOld === 20) {
     aixenprovence21.style.outline = "2px solid #000000";
    } else if (cityI === 20) {
      aixenprovence21.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Aixe1.jpg";
    }
    if (cityIOld === 21) {
      brest22.style.outline = "2px solid #000000";
    } else if (cityI === 21) {
      brest22.style.outline = "8px solid #0000FF";
      Pict1.src = "France14Pictures/Bres1.jpg"; 
    }
    if (cityIOld === 22) {
     tours23.style.outline = "2px solid #000000";
    } else if (cityI === 22) {
     tours23.style.outline = "8px solid #0000FF";
     Pict1.src = "France14Pictures/Tour1.jpg";
    }
    if (cityIOld === 23) {
      perpignan24.style.outline = "2px solid #000000";
    } else if (cityI === 23) {
     perpignan24.style.outline = "8px solid #0000FF";
     Pict1.src = "France14Pictures/Perp1.jpg";
    }
 };
  function cMessage(dIndex, dcityScore) { 
    const scoreOne=[" I think this is the train to Avignon.  ",
" Are you sure this is the right train? ",
" Just get on. This is the last train. ",
" I think even if you speak French these instructions don\'t make sense. ",
" I am so tired ",
" I think I've figured out the timetable: This goes to Bordeaux. ",
" Why did we bring so much stuff? ",
" Grab your bags, we\'re getting on this train now. ",
" You get the tickets. I'll just stay with the bags. ",
" Which is the train to Lyon again? ",
" Italy would have been better  ",
" Could we go to Rome? ",
" Can I try some wine? ",
" Yeah, this is boring ",
" Do they have more fun museums there! ",
" We could get pizza there! ",
" Pizza! Could we get pizza there? ",
" Dad said wine is just grape juice., but it tasted yuky! ",
" The hamburgers here taste funny ",
" They have Disneyland!? "];  
const scoreFour=[" This is all so quaint ",
" I love this shop. ",
" Why don\'t we just spend another day here? ",
" We can just relax for a day ",
" Those kids asked me to walk in the park. Can I go? ",
" This dress is cute ",
" Can I ride the ferris wheel? ",
" They said not to eat in here. "];
const scoreSix=[" Next vacation we should spend a whole week here ",
" It really  feels like I'm in France now. ",
" How about we all just take a walk? ",
" The croissants are so good here. ",
" There's a concert in the park, can I go? It's free. ",
" The croissants are good ",
" This hamburger is OK. ",
" Why can't we get croissants at home? "];
  const scoreMore=[" I want to stay here a few days ",
" Everyone is so nice and helpful! ",
" I could get used to the coffee from this place. ",
" It would be a nice place to retire ",
" I want to learn to speak French ",
" That guy speaks English, but with a really cool accent! ",
" Can I ride the merry-go-round? ",
" This is the best ice cream store ever. "];
const thisFam = ['Mom says','Dad says','Teenager daughter says','Little boy says'];
/// End dialog ///
const dCul = document.querySelector('#ulH'); // turn counter and win criteria  
     dCul.innerHTML = 'French Vacation Day ' + dayCounter; 
     const dC = document.querySelector('#dayCount'); // turn counter and win criteria  
     dC.innerHTML = 'French Vacation Day ' + dayCounter; 
     const dCR = document.querySelector('#cityRept'); // City Report 
     dCR.innerHTML = 'French Vacation Day ' + dayCounter;
     let dcityNow =  cityNames[dIndex];
     let tripdum = [dIndex, dcityNow, dcityScore];
    tripItin.push(tripdum);
    console.log('tripdum',tripdum,tripItin);
     let randTalker = Math.floor(Math.random()*4);
     let speaker = thisFam[randTalker]; 
     let speak = ' ';
     let randTalk = 0; 
    if (dcityScore === 1) {
      dCR.innerHTML = dcityNow + ' is nice, but where are we going tomorrow?';
       randTalk = Math.floor(Math.random()*5);
       indexSpeak = randTalk + 5*randTalker;
        speak = scoreOne[indexSpeak];
        yoyoFam(speaker,speak);
    } else if (dcityScore <= 4 ) {
      dCR.innerHTML = " This is a beautiful city, I like it here. ";
      randTalk = Math.floor(Math.random()*2);
       indexSpeak = randTalk + 2*randTalker;
        speak = scoreFour[indexSpeak];
        yoyoFam(speaker,speak);

  } else if (dcityScore <= 8 ) {
    dCR.innerHTML = " The restaurants here are great! Where should we eat next? ";
    randTalk = Math.floor(Math.random()*2);
       indexSpeak = randTalk + 2*randTalker;
        speak = scoreSix[indexSpeak];
        yoyoFam(speaker,speak);

  }  else if (dcityScore > 8 ) {
    dCR.innerHTML = " I love this city and the people, I could live here! ";
    randTalk = Math.floor(Math.random()*2);
       indexSpeak = randTalk + 2*randTalker;
        speak = scoreMore[indexSpeak];
        yoyoFam(speaker,speak);
};
function yoyoFam(tle,mess) {
  if (2 === dayCounter%5) {
       yoyoToast.fire({
         type: 'question',
        title: tle,
         message: mess,
         timeout: 4000,
         position: 'top-right',
     }); 
    };
};
  } 
  function gMessage(daycounter,gameScore) {    //// This sends out game experienc rating messages
    const dgSA = document.querySelector('#tripRept'); // City Report 
    if (dayCounter === 7) {
      if (gameScore < 10 ) {
        dgSA.innerHTML = 'I think Italy would have been a better choice' ;
      } else if (gameScore < 20 ) {
        dgSA.innerHTML = 'We should definately stay in France another week' ;
      } else if (gameScore >= 20 ) {
        dgSA.innerHTML = 'This has been such a nice trip!' ;
      }
    }
    if (dayCounter === 14) {
      if (gameScore < 23 ) {
        dgSA.innerHTML = 'Italy definately would have been a better choice' ;
      } else if (gameScore < 40 ) {
        dgSA.innerHTML = 'We should absolutely, definately stay in France for another week' ;
      } else if (gameScore >= 42 ) {
        dgSA.innerHTML = 'This is the best trip I have ever taken!' ;
      } else if (gameScore >= 52 ) {
        dgSA.innerHTML = 'I do not want to go home!' ;
      }
    }
    if (dayCounter >= 21) {
      endgame(gameScore);
      
    }
  };

  function endgame(gS) {
    const dCul = document.querySelector('#ulH'); // turn counter and win criteria  
     dCul.innerHTML = 'Your 21 Days in France '; 
    let list = document.getElementById("itinerary");
    for (i = 0; i < 21; i++) {
        let li = document.createElement('li');
        li.innerText = tripItin[i][1];
        list.appendChild(li);
    }
    document.getElementById('frenchMap').style.backgroundImage = "url(Images/jetclouds.jpg)";
    document.getElementById('frenchMap').style.backgroundColor ='#0DCAF0';
    document.getElementById('paris').style.opacity = "0%";
    document.getElementById('marseille').style.opacity = "0%";
document.getElementById('lyon').style.opacity = "0%";
document.getElementById('toulouse').style.opacity = "0%";
document.getElementById('nice').style.opacity = "0%";
document.getElementById('nantes').style.opacity = "0%";
document.getElementById('strasbourg').style.opacity = "0%";
document.getElementById('bordeaux').style.opacity = "0%";
document.getElementById('lille').style.opacity = "0%";
document.getElementById('rennes').style.opacity = "0%";
document.getElementById('dijon').style.opacity = "0%";
document.getElementById('rouen').style.opacity = "0%";
document.getElementById('biarritz').style.opacity = "0%";
document.getElementById('avignon').style.opacity = "0%";
document.getElementById('annecy').style.opacity = "0%";
document.getElementById('colmar').style.opacity = "0%";
document.getElementById('larochelle').style.opacity = "0%";
document.getElementById('ajaccio').style.opacity = "0%";
document.getElementById('cherbourg').style.opacity = "0%";
document.getElementById('montpellier').style.opacity = "0%";
document.getElementById('aixenprovence').style.opacity = "0%";
document.getElementById('brest').style.opacity = "0%";
document.getElementById('tours').style.opacity = "0%";
document.getElementById('perpignan').style.opacity = "0%";
document.getElementById('news').style.opacity = "0%";
    let cityScoreTable = [['Paris', 0, 0],
    ['Marseille',0,0],
    ['Lyon',0,0],
    ['Toulouse',0,0],
   ['Nice',0,0,],
    ['Nantes',0,0],
    ['Strasbourg',0,0],
  ['Bordeaux',0,0],
  ['Lille',0,0],
  ['Rennes',0,0],
  ['Dijon',0,0],
  ['Rouen',0,0],
  ['Biarritz',0,0],
  ['Avignon',0,0],
  ['Annecy',0,0],
  ['Colmar',0,0],
  ['la Rochelle',0,0],
  ['Ajaccio',0,0],
  ['Cherbourg',0,0],
  ['Montpellier',0,0],
  ['Aix-en-Provence',0,0],
  ['Brest',0,0],
  ['Tours',0,0],
  ['Perpignon',0,0]];
  for (i=0; i<21; i++) {
    dinx = tripItin[i][0];
    cityScoreTable[dinx][1]++;
    dscr = tripItin[i][2];
    cityScoreTable[dinx][2]=cityScoreTable[dinx][2]+dscr;
  };
  let tom = goodCity(cityScoreTable);
  let tam = badCity(cityScoreTable);
  const bestCity = document.querySelector('#bestC');   
     bestCity.innerHTML = 'Your favorite city of the trip was'
     const bestCitya = document.querySelector('#bestCa'); 
     bestCitya.innerHTML = tom[1]; 
     const worstCitya = document.querySelector('#worstCa');   
     worstCitya.innerHTML = tam[1]; 
     const worstCity = document.querySelector('#worstC');   
     worstCity.innerHTML = 'was the most disappointing'; 
     finalThoughts(gS);
  };

  function finalThoughts(gameSc){
    console.log(gameSc); 
    const finalThoughts = document.querySelector('#finalT');
    const narrative = ['Your husband is spending the flight home worrying about how to pay off all the new credit card debt you’ve built up. Your little boy is sick. Your teenage daughter is complaining about everything and acting like a teenager, and you are thinking about how you’re going to have to stave yourself for the next few months to lose the 15 pounds you put on during the trip. The worst part though, is that your dream trip to France was a nightmare.',
     'Your wife seems content with her dream vacation. Your young son is busy playing some game on his phone and your teenage daughter is sitting quiet on hers. The best part, however, is that the next few vacations will be camping or visiting relatives somewhere so you can fill the big hole in your vacation budget.',
      'Your wife and teenage daughter are talking excitedly about telling all their friends the places they’ve been, the things they’ve seen and the people they’ve met. Your son is laughing in delight as everyone teases him, and you are surprised how much you have gotten out of the trip. It was worth it. You really should try Italy in a few years.',
      'Your husband is relaxed and happy. A year in Provence when you retire is not out of the question. Your teenage daughter is spending the flight home studying French and making plans to continue, so she can go back to study there in college. Your little boy is asleep with his head on your lap acting like a little angel. And for you the trip was beyond even the dreams you had always had. A glorious trip'
      ];
    let words='';
    if (gameSc < 38 ) {
      words = narrative[0];
    } else if (gameSc < 53 ) {
      words = narrative[1];
    } else if (gameSc < 68 ) {
      words = narrative[2];
    } else if (gameSc >= 68 ) {
      words = narrative[3];
    }
    console.log(words);
    finalThoughts.innerHTML = words ;
  }

  function goodCity(cSTab) {
    let goodSum = 0;
    let goodInd = 0;
    let goodCity = '';
    for (i=0; i<24; i++) {
      if (cSTab[i][2] > goodSum) {
        goodCity = cSTab[i][0];
        goodSum = cSTab[i][2];
        goodInd = i;
      }; 
    };
    let tommy = [goodInd,goodCity,goodSum];
    return tommy;
  };
  
  function badCity(cSTab) {
    let badSum = 0;
    let badInd = 0;
    let badCity = '';
    for (i=0; i<24; i++) {
      if (cSTab[i][1] === cSTab[i][2]) {
      if (cSTab[i][1] > badSum) {
        badCity = cSTab[i][0];
        badSum = cSTab[i][1];
        badInd = i;
      };
    };
  };
  let tammy = [badInd,badCity,badSum];
  return tammy;
};

function Convert(numstr){
  let a = [];
  for (i=0; i<4; i++) {
  let d = parseInt(numstr[i])-1;
   a.push(d) 
  }
    return a;
  }

function deConvert(array1,dim){
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
  'Tours','Perpignan'];
const cityPerms = [ ['1243','1324','1432','2134','2413',
    '2431','2314','2341','4312'], 
    ['1243','1423','4321','1324','4132','3142','3214'],
    ['1324','1342','2143','3214','2143','2314','2341'],
    ['1423','1243','4312','4231','3241'],
    ['1324','1432','4123','2143','2314'],
    ['1432','4231','3214','2431','2314'],
    ['2134','1423','1324','1342','3142'],
    ['2413','2431','4213','4321','3412'],
    ['3142','1342','1432','1423','4123'],
    ['4132','1243','1324','2413','2341'],
    ['3124','3214','2134','2143','4231'],
    ['4123','1342','1324','3412','3241'],
    ['2143','3241','1243','4213','4132'],
    ['2143','1423','3214','3142'],
    ['3124','2134','1342','1243'],
    ['4123','2413','2143','1243'],
    ['3124','3214','4321','2134'],
    ['4321','4231'],
    ['3142','3412','1423'],
    ['2431','2413','2314','3214','1342'],
    ['3214','3421','3124','4312'],
    ['4132','2134','3142','1342'],
    ['3421','3124','4123','2413','2134'],
    ['4213','3412','2431','1423']];
let cityDestArray = [];

const cityDigitCodes = [ '1234' ,'1243','1324','1342','1423','1432','2134','2143','2413',
    '2431','2314','2341','3124','3142','3214','3241','3412','3421','4123','4132',
    '4213','4231','4312','4321'];

const destCounts = [9,7,7,5,5,5,5,5,5,5,5,5,5,4,4,4,4,2,3,5,4,4,5,4];
const scoreBonus = [4,4,4,4,4,4,6,9,12];
let cityScore = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let dayCounter = 0;
let dDest = 0;
let initPerm = [];
let rand=0;
let gameScore=0;
let curPerm = [];
let tripItin= [];

//    
// gameInit performs the initialization when the start button is clicked 
//
gameInit.onclick = function() { 
curPerm = [0,1,2,3];
//Test line
      const bell = document.querySelector('#lightUp');
      bell.style.backgroundColor = '#bee1bd';
// loop through cities to initialize panel

for (let j=0; j<=23; j++) {
  initPerm = cityPerms[j];
  dDest = destCounts[j];
  rand = Math.floor(Math.random()*dDest);  //random varible 0-destCounts[j]-1

	for (let i=dDest; i>0; i--) {                // Randomized initPerm into panelPerm
    if (rand === 0) {                        //if rand is 0, take the first remaining perm and shift into panelPerm[0]
          let arrayA = Convert(initPerm.shift());
          panelPerm.unshift(arrayA);
            }
    else { 
        panelPerm.unshift(Convert(initPerm[rand]));
        const arrayD = initPerm.slice(rand+1);
        initPerm.splice(rand-1, 6, initPerm[rand-1]);
        let arrayE = initPerm.concat(arrayD);
        initPerm = arrayE;
        }
        rand = Math.floor(Math.random()*(i-1));
      }
      if (j>=1);
      for (k=0; k<(9-dDest); k++) {                   
        let dPP = panelPerm[Math.min(k,dDest)];
        panelPerm.push(dPP);
      }

      panelPerm.unshift([0,1,2,3]); 
      cityDestArray.push(panelPerm); 
      panelPerm = [];                            
  }  /// cityDestArray is now a 24x10 array of randomized city destinations
    /// Score cities
    let scoreAccum = 0;
    let modIndex = 0;
      for (let i=0; i<1000; i++) {
        modIndex = i%24;
        let rand = Math.floor(Math.random()*10);
          if (rand === 0) {
            cityScore[modIndex] = cityScore[modIndex] + scoreBonus[scoreAccum];
            scoreAccum++;
            if (scoreAccum > 8) {
               i=1000;
            }
          }
      }
      cityScore[17] =cityScore[17]+12;
      cityScore[12] =cityScore[12]+8;
      gameScore = cityScore[0];                     /// Paris initial score is initial gamescore
      let dNewScore = Math.ceil(0.5 * gameScore);   /// Cut city score in half
      cityScore[0] = dNewScore;
      dumParis = [0,'Paris',gameScore];
      tripItin.push(dumParis);
      paris1.style.outline = "8px solid #0000FF";

  }  
  ///Operations - Panel
  panelStay.onclick = function() {    // The Stay in City Button
    let dCurPerm = deConvert(curPerm,dim);    /// dCurPerm is a 4 digit string of curPerm
    dIndex = cityDigitCodes.indexOf(dCurPerm);    /// dIndex is the (int) index of the cur city
    let dcityScore = cityScore[dIndex];        /// dcityScore this cities score          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;
    iDisplay(dIndex, dIndex);
    cMessage(dIndex, dcityScore);
    gMessage(dayCounter,gameScore)
  }
  
  panelOne.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][1];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelTwo.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][2];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelThr.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][3];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelFou.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][4];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelFiv.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][5];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelSix.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][6];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelSev.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][7];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelEig.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][8];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };

  panelNin.onclick = function() {             /// Goto new city
    let dCurPerm = deConvert(curPerm,dim);            /// curPerm starts as prev city (turned to str)
    let dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dIndexOld = dIndex;
    let newPerm = cityDestArray[dIndex][9];
    curPerm = pMult(newPerm, curPerm, dim);            /// new city => curPerm
    dCurPerm = deConvert(curPerm,dim);                /// update dIndex
    dIndex = cityDigitCodes.indexOf(dCurPerm);
    let dcityScore = cityScore[dIndex];                /// dcityScore for new city          
    gameScore = gameScore + dcityScore;
    cityScore[dIndex] = Math.ceil(0.5*dcityScore);    ///halve cityscore for stays & repeats
    dayCounter++;   
    iDisplay(dIndex, dIndexOld);                       /// iDisplay highlights new city on map and shows imgs
    cMessage(dIndex, dcityScore);           /// cMessages Gives reaction to new city
    gMessage(dayCounter,gameScore);         /// gMessages Gives status of trip
  };