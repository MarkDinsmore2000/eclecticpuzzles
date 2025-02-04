const gameInit = document.querySelector('#start');
    const panelOne = document.querySelector('#oneP');
    const panelTwo = document.querySelector('#twoP');
    const panelThr = document.querySelector('#thrP');
    const panelFou = document.querySelector('#fouP');
    const panelFiv = document.querySelector('#fivP');
    const panelSix = document.querySelector('#sixP');
    const isThisOK = document.querySelector('#OK');
    const postResult = document.querySelector('#end');
    let panelVector=[];       ///panelVector is passed between buttons
    let currPerm = [];       ///currPerm is passed between buttons
    let uGSeat = [];      ///uGSeat is global 
    let uGSeatinit = [];      ///uGSeatinit to index to initial scoring
    let isThisOKCounter = 0;  /// Passed between buttons
    let pDim = 6;       ///pDim is the dimmension of all th permutations
    let gTurn = 1;
    let ScoringOne = [];
    let ScoringTwo = [];
    let maxTurns = 6;
    let seatInd = [];
    const  sosDreamy= [
        " People still talk about what a magical wedding it was. ",
    " It was everything the bride dreamed it would be. "];
    const sosWonderful =[" It was a wonderful wedding. Everything was perfect. ",
    " The food was great. The Music was great. ",
    " The bride was beautiful, the bridesmaids were as well and the Best Man\'s speech was hilarious. Lovely. ",
    " Everyone got along so well. The families really bonded. "];
     
    const sosJoyful = [
    " The bride and groom were so happy and their parents seemed happy too. ",
    " I think everyone really came together and liked each other. ",
    " The reception was in a beautiful location. The speech by the father of the bride was so touching.  ",
    " The reception was fun. Everyone had a great time. ",
    " It was great to the see happiness at  the bridal party\'s table. They were having so much fun. "];
     
    const sosNice = [
    " I liked the wedding. People had a good time at the reception. ",
    " It was fun seeing everyone. Weddings are a great time to get together with people. ",
    " The bride looked beautiful. The reception was at a nice venue, close to the ceremony. ",
    " Weddings are a great place to meet people and to get introduced to other family. ",
    " I had a good time. I got a chance to talk to family I hadn\'t seen in a while. ",
    " I thought the bride\'s family were nice. The bride and bridesmaids looked lovely. ",
    " The groom\'s family was very respectable. Everyone was very polite.  "];
     
    const sosRocky=[
    " There was a little too much drama. Some of the guests seemed to have had issues. ",
    " The bride\'s father came to wedding already drunk and everyone else had a bit too much after. ",
    " There was some shouting after some idiot sat two couples together that hated each other. ",
    " There was this nerdy guy that kept getting too familiar with everyone. Including the bride\'s mother. "];
     
    const sosFraught= [
    " The groom's uncle caused a scene about where he was seated. He didn\'t seem to care for the bride's family. ",
    " There was a shouting match at two of the tables. People didn\'t want to know what it was about ",
    " People should be at their best behavior at weddings. It is the bride and groom's day, and you should not do anything to ruin it. ",
    " It is horrible when families can\'t get along. Especially at weddings. "]
     
    const sosAdisaster=[ 
    " It was the wedding from hell. Brothers and sisters were fighting. Some guests got drunk and behaved in ways they are sure to regret. ",
    " No one would believe some of the things people did at that wedding. "];
    
    const olDull=[
    " It was OK, but it felt like everyone was waiting until they could head home. ",
    " They didn\'t even serve champaign for the wedding toast, it was bubbling apple juice. "];
     
    const olQuiet=[
    " There was a nice toast by the best man and sincere speech by some family and that was that. ",
    " It was a nice quiet wedding. ",
    " There was a little gossip, a lot of congratulations. The speeches were good. The food was OK. Some family caught up on some news and the newlyweds fled early and that was that. ",
    " The bride\'s great aunt wheeled herself around asking the children not to run around for about an hour until fell asleep in her chair. "
    ];
    const olLively=[
    " They had a DJ and lots of people dancing. Someone's grampa went around asking every young women he found to dance. ",
    " Everyone was dancing and having a good time. Even the people that clearly had never danced before. ",
    " Everyone was at it until the wee hours of the morning. No one seemed to have any idea when the bride and groom ducked out. Even the bride's great aunt got a little too tipsy and a lot too handsy. ",
    " It was all good, but the best moment was when the DJ remarked about the groom's dad and bride's mom being a bit too close on the dance floor. ",
    " All night people kept getting up to make speeches to congratulate the couple, but with all the drinking they got a little ribald and funnier, sometimes even on purpose. ",
    " There was a lot of stuff going on. Some that shouldn't be repeated. ",
    " It was all good, except maybe when the best man danced with one too many ex-girlfriends. ",
    " Maybe there were more of them than there should have been, but I liked hanging around the drunks. Especially, the groom\'s maiden aunt. She was cool. ",
    " Everything was nice. I especially liked the side party the bride\'s uncles and aunts started. The family kept inviting people from the wedding next door. ",
    " You know it\'s a real party when the grandmas and grandpas ask the DJ for Led Zepplin and start dancing like the old days. ",
    " It was funny, all our family started getting hugs from my sister's ex\'s wives and we really hate each other. ",
    " There was a lot of drinking, a lot of laughing, a lot of dancing, some fighting, and probably some sex.  "
    ];
    const olMemorable=[
    " That was a wedding to remember. ",
    " The nice speeches were OK, but the one everyone remembers is the one that shouldn't have been given. ",
    " The wedding was beautiful. The hugs of family reconciliation were best part and the shouting matches of unreconciled families were the worst, but the bride's 16 year old younger brother vomiting after getting into the liquor was the most memorable. ",
    " There were lots of things: Flower girls getting lost going down the aisle. The bride's grandpa hitting on the groom's mom. The bride's maid's dress splitting because it was way to small. And the DJ that kept playing Zappa at the groom\'s dad\'s request. ",
    " Every table was too something. One was too old and another too young. One was too loud, another was too angry, another too friendly, and then one was too angry after some of them were too friendly after getting too drunk. "];
     
    const olWild=[
    " It was wild. People were having a good time and then too good a time and then the shouting started and then the apologies and then they started right back having too good a time. ",
    " Everyone had a good time. Then nearing midnight after the kids and old people left everyone had way too good a time. Several people blacked out or at least said they blacked out so they could have plausible denial ability.  ",
    " This was a great wedding. People had a good time and were well behaved, because this was the bride\'s day no one wanted to ruin it. Of course, when the couple left attitudes were somewhat more lax. ",
    " There are some things you might like to see, but not with your mother sitting next to you. After it got around 10PM, this wedding was one of them. "];
     
    const olDaybreak=[
    " While some people did leave early, others just collapsed including some of the staff, but most everyone partied until well past daybreak. It might never have stopped, but they ran out of wine. ",
    " The couple left early, but the reception lasted until the next day. Everyone left went out to breakfast. "];
     
    const olStillGoing=[
    " It was like a bacchanalia. ",
    " No one is ever going to forget that wedding and the things that happened there, no matter how hard they try. It was one for the ages. "];
     
    const bsUnusual=[
    " It was unusual. There was no drama at the wedding. No arguments and no fights. ",
    " There were a lot of people there with a lot of history together and everyone got along fine. "];
     
    const bsSullenGuest=[
    " The wedding didn't have much drama. I think one person felt slighted and left early. ",
    " It was a peaceful wedding, maybe one complaint. ",
    " Everyone at the wedding was in good humor. One old aunt was complaining about something or other, but everyone just smiled ad ignored her. ",
    " Everyone was happy. Except that one old guy who left because he couldn\'t get his vegetarian meal. "];
     
    const bsTwoShouting=[
    " Some idiot sat these couples next to each other that everyone knows had a big falling out last year. ",
    " There was some drama, not too bad. Someone told the groom\'s mom that the bride's mom said she was low class. ",
    " It was quiet, except for the one woman shouting at her husband for talking to his ex and the groom's uncle shouting at the waiter about getting a seat at the kid’s table. ",
    " There were no serious fights. The groom's dad got drunk, and his ex-wife called him a pig. No one disagreed. ",
    " It was normal. One drunk, two shouting matches and some girl crying over her boyfriend dumping her at the wedding. "];
     
    const bsThreeDrunken=[
    " The wedding had 3 drunken scenes. 1st was the bride\'s father, before the ceremony even started. He wanted to help. Next was a guy yelling about being sat next to his old neighbor had a years long affair with his wife. The last was the neighbor\'s wife having a crying fit about being humiliated, not by her husband and the affair, but by the guy complaining about the seating arrangement. ",
    " There was a lot of drinking.  More than a couple had way more than was good for them. There was crying, there was shouting, and then there was that pathetic fight between 2 old men about something that happened over 40 years ago. Neither of them could even make a fist. ",
    " The bride\'s family started it when the sister started screaming at a bridesmaid for stealing her boyfriend. The Groom\'s family topped that when the brothers started a fist fight about who paid how much for their wedding gift. The bride\'s family won in the end, though, when the mother started dragging her ex-husband\'s girlfriend by her hair and ripping up her dress. ",
    " One of the bride\'s cousins got drunk and he started trying to pick up anything in a skirt. His girlfriend started crying and then getting real handsy with the groom\'s dad when he tried to comfort her, which he seemed to enjoy too much for the groom\'s mom. Doesn't everyone know that you sit couples at the same table? "];
     
    const bsBloody=[
    " I don\'t want to discuss it. It was literally a bloody wedding! ",
    " There were 3 fights at the wedding, but only the one stabbing. ",
    " I heard the groom got stabbed in the hand with a fork. Something about trying to shift gears with the maid of honor\'s knee. "];
     
    const bsDamage= [
    " I don\'t think you can say it was a minor scuffle. There were 10 people involved and $100,000 in damage. "];
     
    const bsMurder=[
    " The investigating detective told the best man not to worry too much about it: \"Statistically 1 in 5000 weddings require a homocide investigation. And do you know why couples were seated at different tables? That is not a common practice.\" "];
     
    const gsNeverMore=[
    " It was tedious and no one seemed to want to be there.  A lot of the attendees swore they would never attend another wedding ever. ",
    " It was just a really expensive party where no one had much in common but genes. It\'s better to elope and save the money for a honeymoon. "];
     
    const gsWorse=[
    " Only one of the tables even talked to each other. Everyone else just stared sullenly at each other. ",
    " Worse than expected. Everyone seemed awkward with each other. The two families didn\'t talk to each other at all",
    " No one seemed excited by the wedding. No one seemed to find anyone else interesting. A couple of people got on well and there was some laughter, but not much and not for long. ",
    " The two families never got together at all. They seemed to have no interest in getting to know each other. "];
     
    const gsBetter=[
    " It was a better wedding than I expected. Both families normally were a little prickly, but they seemed to try to reach out to each other. ",
    " The wedding party seemed in good spirits. Everyone seemed content to listen to the speeches and congratulate the happy couple. ",
    " Everyone tried to get along. Two tables really did too. They talked and laughed and danced together. It gave the wedding a  nice celebratory feeling. ",
    " It was a nice wedding. People enjoying friends and relatives that they hadn\'t seen for years in some cases. ",
    " Most attendees had a good time and some had a really good time. I saw a few hugs some kisses as people were leaving. It was a successful wedding. "];
     
    const gsMoreWeddings=[
    " It was beautiful to see two families come together and start building lasting ties because of the marriage of their children. It makes all the planning and expense worth it. ",
    " The bride's father's speech brought tears to the crowd. Especially when he thanked god for giving his daughter such a wonderful man. Weddings can be wonderful. ",
    " The whole crowd could see all four parents openly weeping for joy during the ceremony and the sentiment was shared through the reception and everyone laughed and danced. It was a beautiful experience. ",
    " People at the wedding were happy to see their families and delighted to get to know the people they did\'t know. After an experience like that, everyone wants more weddings. ",
    " It was a great wedding. The general sentiment was that there should have more of these. "];
     
    const gs1NewWedding=[
    " Weddings are so romantic! Some of the unmarried couples were dancing very close as the night wore on. Some of the people there seemed to find a spark with people they met there. There will be more. ",
    " One good wedding deserves another, and this one created more than one spark. ",
    " There were quite a few couples coming together over the romantic spell of this wedding. We will all see good fruit come from this. "];
     
    const gs2NewWeddings=[
    " Two engagements were announced shortly after the wedding. Wedding plans are already being made. There was magic in the air that night. "];
     
    const gs3NewWeddings=[
    " A beautiful wedding is inspirational and this was one of them. There are now three new weddings being planned by couples that were at this one. "];
     
    const gssNothing=[
    " Weddings are supposed to good places for single people to meet, but there were almost no single people there. ",
    " There might have been some unattached people mingling at the reception, but no one saw any young ones. ",
    " One girl pointed out that she did\'t understand the point of having dance music since there were no good single men at the reception. ",
    " One guy complained about not seeing any single women under 50 at the wedding. ",
    " There were eligible singles at the wedding. Eligible for a nursing home that is. ",
    " The bride\'s great aunt Charlotte was the most eligible single there. It turns out whellchair dancing really is a thing. ",
    " Some of the groom\'s co-workers were hoping to meet nice women at the wedding. Unfortunately, the most eligible woman there was the bride's 50-year-old maiden aunt. The bright side was that she really loved dancing. ",
    " It is said that weddings are great places to meet singles, but there weren\'t any single men there. "];
     
    const gssNewMarriage=[
    " Tom and Sally met at that wedding and they are going strong. I hear the are engaged already. ",
    " There were a few connections made at that wedding. I think we are sure to see at least one happy couple soon. "];
     
    const gss2Marriages=[
    " That wedding was amazing for couples getting together. There are two weddings being planned already from people that met there. ",
    "It was amazing seeing all the young people get togther that night! There are two new weddings already planned. I think one might have started their family that night. "];
     
    const gss3Marriages=[
    " Everyone was pairing off at the wedding. There are 3 couples that met there that are now getting married. Heard of love at first sight? One couple was engaged at first light. "
    ," A lot of young people, great dance music, a beautiful ceremony, a romantic setting sure brought a lot of couples togther. The open bar did\'t hurt either."];
     
    const gss4Marriages=[
    " Someone must have invited cupid to that wedding. There are 4 couples that met there who are already engaged. "]
     
    const bssNothing=[
    " It was a wedding with no romance in the air. ",
    " There were unattached singles, unattached, uninterested singles. ",
    " All the single males there had gaming physiques. ",
    " All the single women there were passed their sell-by date. ",
    " One girl said that if you put all the single men there in a line-up, they would look like they belonged in a line-up. ",
    " The bride's great aunt Charlotte was the most eligible single there. ",
    " One woman said: \"I could stand dating a nerd, but all the men here are geeks\" . If you were at the wedding, you would have immediately gotten her point. ",
    " There were lots of young single women there, if you were a single man over 80. "]
     
    const bssSad=[
    " A wedding can be romantically challenged when none of the single men there have a valid driver\'s license. ",
    " One guy found out that it was hard to lose your wedding ring when half the people around grew up with you, but he still tried. ",
    " Sure, weddings can be romantic, but some circumstances make it harder than normal. Like when all your relatives keep asking you how your kids have been doing in high school. "];
     
    const  bssVerySad=[
    " One bridesmaid had starved herself to lose 20 pounds because she had heard that weddings were great places to find someone, but after talking to the single men attending, she decided the reception was best spent trying to gain it all back. ",
    " It was clear romance was dead at this wedding when she realized that the dance partner she found the most mature was 12 and the one most fun was past 80. ",
    " At midnight, the bride's father set a 3-drink limit for young men. When his older sister told him to confiscate car keys instead, he told her he that wasn't what he'd have to confiscate, because he was trying to stop them hitting on her.  "];
     
    const bss1LessMarriage=[
    " After this wedding, all the single women that were there decided to get a cat and the single men moved to the Philippines. "];
     
    const gmsNothing=[
    " There were surprisingly few couples in attendance at the wedding. ",
    " The dating scene must be rough out there. Many people did not bring dates to the wedding. ",
    " The married couples all seemed to want an early night. ",
    " The couples there seemed unaffected by the ceremony. ",
    " A lot of people left early, though some single people stayed around to the end. ",
    " Some thought the reception was a dull affair. ",
    " The married couples didn't seem to be interested in sticking around and the people that brought dates just seem to be interested either. "];
     
    const gmsHappy=[
    " A lot of people had fun, maybe they left the kids home? ",
    " There was a lot of catching up and people introducing spouses and dates to each other. ",
    " It was nice to meet some of the spouses that everyone had heard so much about. ",
    " The bride's sister seemed to be happy showing off her doctor husband and he seemed equally happy to be showing off his lovely wife. ",
    " The couples that had moved out of the area were happy to see old friends and hear the news. ",
    " Everyone was glad to see old friends that had moved away, and they were glad to see the people who stayed. ",
    " The people that had moved away and kept getting questions about how they were and what they'd been doing by all the old gang. "];
     
    const gmsVeryHappy=[
    " One of the kids said it best: \"This is like Christmas! Only bigger.\" Of course he was disappointed when he found out that none of the presents were for him. ",
    " It was a very happy wedding. Brothers and sister were back together after being far apart. Nieces, nephews and grandchildren rarely seem were celebrated and cherished.  "];
     
    const gmsStartFamily=[
    " The wedding was inspirational. One couple went straight home and started a family. Another one didn\'t wait and started one that night. ",
    " Everyone in both families maintained tighter bonds afterwards and many couples  started growing their own as well. "];
     
    const gmsInspirational=[
    " Transcendent one attendee said. That wedding joined each family in stronger bonds as well as bringing the two families together. Everyone went out from the wedding afterwards and began growing nucleus they had to aspire to the feeling they had there. "];
     
    const bmsNothing=[
    " Everyone was very well mannered. If someone had felt slighted or insulted, they kept it to themselves. ",
    " The crowd was very polite. Or maybe they were just very unemotional and dry. ",
    " There were no fights at the wedding. A little odd, right? ",
    " All the couples at the wedding seemed very stable, but dull. ",
    " At times the wedding felt like an AA meeting, without the confessions. \"Hi I'm Tom\". \"Hi Tom.\" ",
    " It's a shame that no one did anything to be ashamed of. ",
    " No one seemed to remember anything bad happening at the wedding. Maybe an open bar with hard liquor would have helped. "];
     
    const bms1LessMarriage=[
    " Something happened at table two that ended a marriage. The details are murky. ",
    " There was a dust-up between the entree and the desert. The bride\'s cousin had way too much fun at the wedding rehearsal, so her husband is filing for a divorce. ",
    " That fight was so avoidable. Some idiot sat the groom's uncle at table 3. I thought everyone knew about the affair his wife had.  ",
    " There was shouting at the second table. It was about more than too much wine. Apparently, the wife had known about her husband's affair with the groom's sister, so sitting them together was somewhat problematic. ",
    " The big fight was a unexpected. I thought the bride's sister knew that her husband had dated her cousin, but I guess she was surprised about the baby. ",
    " There was a big scene at the reception. Apparently, over dinner, the groom\'s cousin learned that some time ago her husband had dated her sister. It must have hit a nerve. Especially when everyone started laughing after he said: \"But we were on a break\". The husband is out of the house now and might be dating the sister again.  ",
    " The groom\'s aunt brought her new husband to the wedding and told everyone he was a pilot. Then the husband told them that he was actually just a bus driver. The aunt was furious. Everyone said they thought bus drivers were great, but they're getting a divorce anyway. "];
     
    const bms2LessMarriages=[
    " The wedding was epic. It seems that the wife of a groomsman had read a text on her husband\'s phone about an encounter he had with a bridesmaid. He admitted that it was the bride\'s cousin. The wife confronted the bride's cousin about it and she admitted it. However, she had confronted the wrong cousin. A married cousin. The right cousin found out and got upset and told the married cousin's husband. This might not be the end of it, however, as the bride does have 8 cousins.  ",
    " A fight started when the bride's brother was shouting at his wife.  Then her boyfriend stood up and started shouting at him.  Then the wife started shouting at both her husband and her boyfriend. The amazing part was the boyfriend\'s wife\'s face as she stared on in horror. Everyone at the reception was amazed, primarily, due to the lack of violence. "];
     
    const bms3LessMarriages=[
    " No one had ever been to a wedding like this. It turns out that the bride\'s sister had been sleeping with all of her husband\'s old friends. Her husband got drunk and texted details to all the wives while desert was being served. Two of the wives getting the texts were at the reception, one at the same table with the bride\’s sister.  First there was shouting, then some shoving, then punching and scratching. Few remember what was served for dessert, but everyone remembers how it clashed with the colors on a bridesmaid dress. "];
     
    const bms4LessMarriages=[
    " So, the story is that the Groom\'s eldest cousin had been involved with half the wives in the neighborhood and fathered maybe 10 kids. His wife told everybody at the wedding, to which half the neighborhood had been invited. Five families have been wrecked but only 3 of them were in attendance at the wedding. So, it could have been worse. "];
     
    const bms5LessMarriages=[
    " The wedding was ruined because it came out that not only was the groom\'s  eldest brother sleeping with groom\'s second oldest brother\'s wife, but also that eldest brother\'s nephew is really his son. This coming out seems to have caused a chain reaction. The eldest brother also fathered kids with a couple of his cousin\'s wives and even one of his cousins. The whole family is falling apart. It's like 6 or more marriages done. You can imagine how the wedding toasts went. "];
    const sosHDreamy=[
    " A Magical Wedding ",
    " A Dream Wedding ",
    " Like A Fairy Story "];
    
    const sosHWonderful=[
    " A Wonderful Wedding ",
    " A Delightful Wedding ",
    " What A Wedding is Supposed to Be ",
    " A Wedding to Remember "]
     
    const sosHJoyful=[
    " A Joy Filled Wedding ",
    " Everyone Sharing Their Happiness ",
    " How a Marriage Should Start ",
    " The Joining of the Families ",
    " A  Nice Ceremony and a Fun Reception "]
     
    const sosHNice=[
    " A Nice Wedding ",
    " A Fun Wedding ",
    " A Good Wedding ",
    " And May They Be Happy ",
    " As a Wedding Should Be ",
    " A Fitting Send Off for the Happy Couple ",
    " You May Now Kiss the Bride "]
     
    const sosHRocky=[
    " Some Wedding Drama ",
    " Just a Few Bumps in the Start of a Long Road ",
    " Some Shouting But a Lot of Fun ",
    " A Nice Wedding with Some Extra Stuff to Talk About "]
     
    const sosHFraught=[
    " The Wedding was A Might Fraught ",
    " You Only Get the One Wedding So Smile for the Photos ",
    " The Top Wedding Question: What was the Fight About? ",
    " It could Have Benn Worse and Then it Was "]
     
    const sosHAdisaster=[
    " The Wedding Was a Disaster ",
    " After That Wedding I give them 6 Months "]

   const  cOGnotAnother=[
" A Dull Wedding ",
" All Things Considered I Would Have Rather Been in Philadelphia "];
 
const cOGworse=[
" It Was Worse Than Expected ",
" No One Had a Good Time ",
" The Happy Couple Were Blessed - They Could Leave Early ",
" Some People Had an OK Time "];
 
const cOGbetter=[
" A Better Time Than Expected ",
" Better then the Last Wedding ",
" Everyone Said the Wedding went Well ",
" There was a Hitch in the Proceedings ",
" A Successful Wedding "];
 
const cOGmoreWeddings =[
" More Weddings Please! ",
" It was a very Nice Wedding ",
" People Had A Great Time - People Should Get Married More Often ",
" This Wedding Made Some Good Memories ",
" The Wedding Brought People Together "];
 
const cOGoneNewW=[
" Weddings are Romance ",
" The Wedding  Was Great ",
" One Good Wedding Deserves Another "];
 
const cOGtwoNewW=[
" This Wedding Planted Seeds for More Weddings "];
 
const cOGthreeNewW=[
" The Wedding Inspired Three Engagements "]

const cOBunusual=[
" A No Drama Wedding ",
" An Unusual Wedding "];
 
const cOBsullenGuest=[
" A Hitch Occurs Without a Hitch ",
" There is Always One ",
" A Great Party with Little to Complain About ",
" A Good Time By All - Someone Must Have Seated People Properly "];
 
const cOBtwoShouting=[
" The Shouting at The Wedding ",
" Someones Bad Manners Did Not Spoil This Day ",
" Emotions Overflowing Are Not Always that Great ",
" Nice Wedding Even Though  Some of the In-Laws Might Have Issues  ",
" A Perfect Wedding is not a Normal Wedding "];
 
const cOBthreeDrunken=[
" On Second Thought an Open Bar May Not Be the Best Option ",
" The Seating Arrangement Could Have Been Better ",
" A Dramatic Wedding Filled with Drama ",
" There Will be  Drama at the Best of Weddings - And This One Too "];
 
const cOBbloody=[
" A Bloody Wedding ",
" A Three Fight Wedding ",
" There Were Only Minor Wounds "];
 
const cOBdamage=[
" Afterwards It Was Like a Tornado Hit a Trailer Park "];
 
const cOBmurder=[
" It Was a Very Nice Wedding but Everyone is Fixated on the Murder "];

/// Start ///
gameInit.onclick = function() {  
console.log('Gameon');         //Test line - channel open
let uGSeating = ourChoice();      /// Select Seating Chart
updateSeatingStatus(uGSeating);    /// Add Names and Status
uGSeat = uGSeating;          /// Save UG seating initial state in dynamic variable
uGSeatinit = uGSeating;         /// Save UG seating initial state in static variable
addSeatingLabels();       /// Add Display Labels
scoringTwo = exampleII();       /// set up scoring tables I & II
scoringOne = exampleI(scoringTwo);
maxTurns = turns();                 /// Upper Limit of Turns Allowed (random # 3-9)
panelVector = panelPush();       /// set up panel permutations
currPerm = [0,1,2,3,4,5];
uGSeat = uGSeating;          /// Save UG seating initial state in dynamic variable
uGSeatinit = uGSeating;         /// Save UG seating initial state in static variable
}

/// isThisOK conversation Data
const typeIIQ=["Is that ready yet?",
    "Where is the seating chart?",
    "Where did you seat the guests?",
    "Let me see it.",
    "We need that before the wedding starts."];  
const typeIQ=["Is this OK?",
    "What do you think of this?",
    "I don't know any of these people.",
    "Any thoughts?",
    "I think this works."];   
    const answerZero= ["Maybe we could use this?",
    "I am not sure.",
    "This might work.",
    "Well?",
    "It might be the best we can do."];   
    const answerTwoPartI= [[" ","is at table"],
    [" ","is seated at"],
    ["I see that", "is at table"],
    ["ahh", "is at"],
    ["Putting","at table"]];   
    const typeMMCC =  
        [["Wait! "," are apart. "," Could you try to keep couples at the same table? "],
        ["What is this? "," are at different tables. "," If they came together, they should sit together "],
        ["Hey! "," are not together. "," Sit couples at the same table please "],
        ["Look at this! "," are separated? "," Couples together please "],
        ["This is wrong! "," are apart "," If they are married, sit them together "]];   
    const commentCount = [
        12,
    4,
    4,
    6,
    2,
    2,
    12,
    4,
    4,
    6,
    2,
    2,
    12,
    4,
    4,
    6,
    2,
    2,
    12,
    4,
    4,
    6,
    2,
    2
    ];  
    const commentIndex = [
        0,
    12,
    16,
    20,
    26,
    28,
    30,
    42,
    46,
    50,
    56,
    58,
    60,
    72,
    76,
    80,
    86,
    88,
    90,
    102,
    106,
    110,
    116,
    118
    ];  
    const comments = ["There\'s a good friend of his at that table.",
    "They have old school chums at that table.",
    "They were neighbors and were close.",
    "There\'s an old friend of his at that table.",
    "I they have an old school chums at that table.",
    "They were neighbors and were close.",
    "There's a Old School friend of his at that table.",
    "They have old school chums at that table.",
    "They were neighbors and were close.",
    "There\'s a friend of his at that table, we all used to hang out.",
    "They have old school chums at that table.",
    "They were neighbors and did stuff together.",
    "They were neighbors.",
    "They were neighbors, I think.",
    "They were neighbors.",
    "They were next door neighbors.",
    "The bride\'s great aunts are at that table.",
    "That\'s going to be a dull table, the groom great grandfather's there.",
    "The bride\'s great aunts are at that table.",
    "That\'s going to be a dull table, the groom\'s great grandfather\'s there.",
    "The groom\'s cousin is at that table.",
    "I think these two will hit it off.",
    "He might get lucky.",
    "That is a next generation table.",
    "He\'ll get along with these people.",
    "The groom\'s step-sister is at that table.",
    "Putting him with all the old farts.",
    "Making him sit with the kids.",
    "He\'ll be stuck with the groom's coworkers.",
    "Sorry, I don't know any of the people at that table.",
    "I think that\'s the drinking table.",
    "We\'ll have to watch that table.",
    "Is he from the groom\'s old high school?",
    "That\'ll be a party table.",
    "Those are the b listers.",
    "I hate that guy.",
    "Looks like a couples table.",
    "Sticking him with the bride\'s co-workers?",
    "I think he knows them.",
    "I think he went out with her some years ago.",
    "She had a thing for him back in high school.",
    "He knows that family from way back.",
    "He\'ll fit, that\'s sort of a miscellaneous table.",
    "I think they're all gamers.",
    "I don\'t think he knows them.",
    "Is anyone at that table under 50?",
    "I bet that\'ll be a quiet table.",
    "Who are these people?",
    "I think that\'s the grooms mother's family.",
    "I think that\'s the grooms father\'s family.",
    "He used to hang with that crowd.",
    "That\'s a next generation table.",
    "He\'ll get along with these people.",
    "I think the groom\'s mother invited them to try to reach parity with the Bride\'s mother.",
    "The bride\'s mother felt they\'d be insulted if they weren\'t invited.",
    "Sure put him there, I don\'t care.",
    "That's an interesting group.",
    "That\'s a very interesting group.",
    "You\'re sticking him with her brothers\' families?",
    "I\'m surprised they came all this way.",
    "That was her best friend in college.",
    "They used to even go on vacations together.",
    "She\'s known him since they were kids.",
    "That was her college roommate.",
    "These two were really close years ago.",
    "They know all these people really well.",
    "I think this guy married her best friend.",
    "There\'ll be a lot of giggling at that table.",
    "I think the bride worked with her and some people at this table.",
    "I think she and her boyfriend are friends with him and her.",
    "Should be OK. I know there is some history.",
    "I definitely would put these two  together.",
    "I think she\'s related to some people at that table.",
    "I remember there was some connection.",
    "You got me. I don't know any of them.",
    "That\'s going to be a drinking table.",
    "I can\'t help you.",
    "Maybe ask the groom's mother.",
    "Sure, stick them with a bunch of old married folk.",
    "I think she and the bride played rugby or something with them.",
    "Could you seat her at my table?",
    "She get\'s along with everybody.",
    "I\'m surprised she didn't bring a date.",
    "I think she knows someone at that table.",
    "There\'s some people at that table that know her.",
    "I\'m sure it won\'t be uncomfortable.",
    "She\'ll be fine there.",
    "It\'s not really important, is it?",
    "I don\'t know.",
    "I wouldn\'t be able to judge.",
    "Fine, they\'re family.",
    "I think married couples get along at these things.",
    "She and her husband know people at that table.",
    "They were good neighbors at one time.",
    "I think her husband stopped drinking, so that table should be OK.",
    "Who cares where they sit, as long as you don/'t sit them near me.",
    "She\'ll be fine there, that\'s her family.",
    "If you put her near them, she\'ll have a great time.",
    "They go long back.",
    "That\'ll be interesting.",
    "I think that\'s her boyfriend\'s brother.",
    "It could work out, it was awhile ago. ",
    "Just stick them somewhere, preferably together if you can.",
    "Who else is sitting in those seats.",
    "At least she'll meet her friend's new in-laws.",
    "I don\'t know who knows who here.",
    "That\'ll certainly lower the average age at theat table.",
    "That\'ll certainly raise the average age at that table.",
    "I think they all ordered the fish.",
    "Her boyfriend is an accountant, right?",
    "They\'re old friends.",
    "I think they played Lacrosse together. ",
    "Sticking all the lawyers at one table are you?",
    "She\'ll fit in with that group.",
    "Has she stopped drinking?",
    "You\'re sitting her down with a bunch of old men?",
    "I think everyone at the table is like 10 years younger than her.",
    "Just a bunch of sorry misfits.",
    "Why ask me?",
    "That\'s an old people's table." 
    ];

panelOne.onclick = function() {
 let pIndex = 0;
 panelProc(pIndex);
}
panelTwo.onclick = function() {
    let pIndex = 1;
    panelProc(pIndex);
   }
panelThr.onclick = function() {
    let pIndex = 2;
    panelProc(pIndex);
}
panelFou.onclick = function() {
    let pIndex = 3;
    panelProc(pIndex);
}
panelFiv.onclick = function() {
    let pIndex = 4;
    panelProc(pIndex);
}
panelSix.onclick = function() {
    let pIndex = 5;
    panelProc(pIndex);
}
isThisOK.onclick = function() {
    isThisOKCounter = 1;                ///reset counter
    OK(0);
    noMoreTurns();
}
postResult.onclick = function() {      
    weddingResult();                       
}
function noMoreTurns(){
    gTurn++;
    if (gTurn >= maxTurns) {
        weddingResult();
    };
    }
function weddingResult() {
    postScoring();
}
function postScoring() {
    let tableV = pScorInd();
    let coupleNotCounter = offCoupleSeat();
    let sumOfScores = sOS(tableV);
    let sosHeader = extractSOSHead(sumOfScores);
    let sosN = extractSOSWords(sumOfScores);   /// Sum of Scores Narrative
    let countOfOutliers = s=cOO(tableV);
    let cOON = extractCOOWords(countOfOutliers);   /// Outliers Narrative
    let countOfBad = cOB(tableV,coupleNotCounter);
    let cOBHead = extractCOBHead(countOfBad);   /// Count of Bad Header
    let cOBN = extractCOBWords(countOfBad);   /// Count of Bad Narrative
    let countOfGood = cOG(tableV);
    let cOGHead = extractCOGHead(countOfGood);   /// Count of Good Narrative
    let cOGN = extractCOGWords(countOfGood);   /// Count of Good Narrative
    let singleGoodWithR = sGWR(tableV);
    let sGWRN = extractSGWRWords(singleGoodWithR);   /// Count of Good Single w/romance Narrative
    let singleBadWithR = sBWR(tableV);
    let sBWRN = extractSBWRWords(singleBadWithR);   /// Count of Bad Single w/romance Narrative
    let marriedGoodWithR = mcGWR(tableV);
    let mcGWRN = extractMCGWRWords(marriedGoodWithR);   /// Count of Bad Single w/romance Narrative
    let marriedBadWithR = mcBWR(tableV,coupleNotCounter);
    let mcBWRN = extractMCBWRWords(marriedBadWithR);   /// Count of Bad Single w/romance Narrative

/// Top Line 
    const aboutWedding = document.getElementById("about");
    aboutWedding.innerHTML = "About the Wedding";
    aboutWedding.scrollIntoView();
    /// Smile
    const smileWedding = document.getElementById("smile");
    smileWedding.innerHTML = "Just remember to always smile for the wedding photos";
    smileWedding.scrollIntoView();
    /// Spread the word - **** sos cOO ****- Header
const weddingHeader = document.getElementById("footh");
weddingHeader.innerHTML = sosHeader;
weddingHeader.scrollIntoView();
/// Spread the word - sos cOO - para
    const weddingPara = document.getElementById("footer");
    let  tale = sosN.concat(cOON);
    weddingPara.innerHTML = tale;
    weddingPara.scrollIntoView();

    /// ***cOG*** Spread the word - cOG - Header
const cOGHeader = document.getElementById("footcog");
cOGHeader.innerHTML = cOGHead;
cOGHeader.scrollIntoView();
 /// Spread the word - cOG - para
    const weddingcOG = document.getElementById("foocog");
    tale = cOGN;
    weddingcOG.innerHTML = tale;
    weddingcOG.scrollIntoView();
  /// Guest Comments Line 
  const choiceWedding = document.getElementById("choice");
  choiceWedding.innerHTML = "Then There Were These Choice Comments that Guests Wrote in the Wedding Diary";
  choiceWedding.scrollIntoView();  
    /// Spread the word - ***cOB*** - Header
    const cOBHeader = document.getElementById("footcob");
    cOBHeader.innerHTML = cOBHead;
    cOBHeader.scrollIntoView();
     /// Spread the word - cOB - para
        const weddingcOB = document.getElementById("foocob");
        tale = cOBN;
        weddingcOB.innerHTML = tale;
        weddingcOB.scrollIntoView();
        ///GoodM mcGWRN BadS sBWRN GoodS sGWRN BadM mcBWRN///
        const GoodMC = document.getElementById("GoodM");
        tale = mcGWRN;
        GoodMC.innerHTML = tale;
        GoodMC.scrollIntoView();  
        const BadSingle = document.getElementById("BadS");
        tale = sBWRN;
        BadSingle.innerHTML = tale;
        BadSingle.scrollIntoView();  
        const GoodSingle = document.getElementById("GoodS");
        tale = sGWRN;
        GoodSingle.innerHTML = tale;
        GoodSingle.scrollIntoView();    
        const BadMC = document.getElementById("BadM");
        tale = mcBWRN;
        BadMC.innerHTML = tale;
        BadMC.scrollIntoView();  
}
function offCoupleSeat() {
    let eCounter = 0;
    let invCur = pInv(currPerm,pDim);
    console.log('inv',invCur,currPerm);
    for (i=0; i<3; i++) {
        let dMC = uGSeatinit[2*i][1];             // marital status for each
        console.log('dMC',dMC);
     if (dMC != "S") {
        let j1 = invCur[2*i];
        let currT1 = uGSeatinit[j1][3];        // Husbands current table
        let j2 = invCur[2*i+1];
        let currT2 = uGSeatinit[j2][3];        // Wifes current table
        console.log('Tables', currT1, currT2);
        if (currT1 != currT2) {           // if currT1 != currT2 eCounter++
            eCounter++;
    }
  }
 } return eCounter; 
}
function mcBWR(tV,cSCB){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (uGSeatinit[i][1] != 'S') {
        if (scoringOne[i][tV[i]] >= 8 && scoringTwo[i][tV[i]] === 1) {
            sum++;
        }}
    }if (cSCB >1) {
        cSCB =  cSCB - 1;
    }
    sum = Math.min(sum + cSCB,6);
    return sum;
}
function extractMCBWRWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = bmsNothing.length;
            rand = Math.floor(Math.random()*dLength);
            return bmsNothing[rand];    
        }
        if (score === 1) {
            dLength = bms1LessMarriage.length;
            rand = Math.floor(Math.random()*dLength);
            return bms1LessMarriage[rand];    
        }if (score === 2) {
            dLength = bms2LessMarriages.length;
            rand = Math.floor(Math.random()*dLength);
            return bms2LessMarriages[rand];    
        }if (score === 3) {
            dLength = bms3LessMarriages.length;
            rand = Math.floor(Math.random()*dLength);
            return bms3LessMarriages[rand];    
        }if (score === 4) {
            dLength = bms4LessMarriages.length;
            rand = Math.floor(Math.random()*dLength);
            return bms4LessMarriages[rand];    
        }if (score >= 5) {
            dLength = bms5LessMarriages.length;
            rand = Math.floor(Math.random()*dLength);
            return bms5LessMarriages[rand];    
        }
    }
};
function mcGWR(tV){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (uGSeatinit[i][1] != 'S') {
        if (scoringOne[i][tV[i]] <= 3 && scoringTwo[i][tV[i]] === 1) {
            sum++;
        }}
    }
    return sum;
}
function extractMCGWRWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = gmsNothing.length;
            rand = Math.floor(Math.random()*dLength);
            return gmsNothing[rand];    
        }
        if (score === 1) {
            dLength = gmsHappy.length;
            rand = Math.floor(Math.random()*dLength);
            return gmsHappy[rand];    
        }if (score === 2) {
            dLength = gmsVeryHappy.length;
            rand = Math.floor(Math.random()*dLength);
            return gmsVeryHappy[rand];    
        }if (score === 3) {
            dLength = gmsStartFamily.length;
            rand = Math.floor(Math.random()*dLength);
            return gmsStartFamily[rand];    
        }if (score >= 4) {
            dLength = gmsInspirational.length;
            rand = Math.floor(Math.random()*dLength);
            return gmsInspirational[rand];    
        }
    }
};
function sBWR(tV){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (uGSeatinit[i][1] === 'S') {
        if (scoringOne[i][tV[i]] >= 8 && scoringTwo[i][tV[i]] === 1) {
            sum++;
        }}
    }
    return sum;
}
function extractSBWRWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = bssNothing.length;
            rand = Math.floor(Math.random()*dLength);
            return bssNothing[rand];    
        }
        if (score === 1) {
            dLength = bssSad.length;
            rand = Math.floor(Math.random()*dLength);
            return bssSad[rand];    
        }if (score === 2) {
            dLength = bssVerySad.length;
            rand = Math.floor(Math.random()*dLength);
            return bssVerySad[rand];    
        }if (score === 3) {
            dLength = bss1LessMarriage.length;
            rand = Math.floor(Math.random()*dLength);
            return bss1LessMarriage[rand];    
        }if (score >= 4) {
            dLength = gs1NewWedding.length;
            rand = Math.floor(Math.random()*dLength);
            return gs1NewWedding[rand];    
        }
    }
}
function sGWR(tV){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (uGSeatinit[i][1] === 'S') {
        if (scoringOne[i][tV[i]] <= 3 && scoringTwo[i][tV[i]] === 1) {
            sum++;
        }}
    }
    return sum;
}
function extractSGWRWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = gssNothing.length;
            rand = Math.floor(Math.random()*dLength);
            return gssNothing[rand];    
        }
        if (score === 1) {
            dLength = gssNewMarriage.length;
            rand = Math.floor(Math.random()*dLength);
            return gssNewMarriage[rand];    
        }if (score === 2) {
            dLength = gss2Marriages.length;
            rand = Math.floor(Math.random()*dLength);
            return gss2Marriages[rand];    
        }if (score === 3) {
            dLength = gss3Marriages.length;
            rand = Math.floor(Math.random()*dLength);
            return gss3Marriages[rand];    
        }if (score >= 4) {
            dLength = gss4Marriages.length;
            rand = Math.floor(Math.random()*dLength);
            return gss4Marriages[rand];    
        } 
        }
    }
function cOG(tV){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (scoringOne[i][tV[i]] <= 3) {
            sum++;
        }
    }
    return sum;
}
function extractCOGHead(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = cOGnotAnother.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGnotAnother[rand];    
        }
        if (score === 1) {
            dLength = cOGworse.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGworse[rand];    
        }if (score === 2) {
            dLength = cOGbetter.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGbetter[rand];    
        }if (score === 3) {
            dLength = cOGmoreWeddings.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGmoreWeddings[rand];    
        }if (score === 4) {
            dLength = cOGoneNewW.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGoneNewW[rand];    
        }if (score === 5) {
            dLength = cOGtwoNewW.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGtwoNewW[rand];    
        }if (score === 6) {
            dLength = cOGthreeNewW.length;
            rand = Math.floor(Math.random()*dLength);
            return cOGthreeNewW[rand];    
        }    
        }
    }
function extractCOGWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = gsNeverMore.length;
            rand = Math.floor(Math.random()*dLength);
            return gsNeverMore[rand];    
        }
        if (score === 1) {
            dLength = gsWorse.length;
            rand = Math.floor(Math.random()*dLength);
            return gsWorse[rand];    
        }if (score === 2) {
            dLength = gsBetter.length;
            rand = Math.floor(Math.random()*dLength);
            return gsBetter[rand];    
        }if (score === 3) {
            dLength = gsMoreWeddings.length;
            rand = Math.floor(Math.random()*dLength);
            return gsMoreWeddings[rand];    
        }if (score === 4) {
            dLength = gs1NewWedding.length;
            rand = Math.floor(Math.random()*dLength);
            return gs1NewWedding[rand];    
        }if (score === 5) {
            dLength = gs2NewWeddings.length;
            rand = Math.floor(Math.random()*dLength);
            return gs2NewWeddings[rand];    
        }if (score === 6) {
            dLength = gs3NewWeddings.length;
            rand = Math.floor(Math.random()*dLength);
            return gs3NewWeddings[rand];    
        }    
        }
    }
function cOB(tV,cSC){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (scoringOne[i][tV[i]] >= 8) {
            sum++;
        }
    }
    if (cSC >=1) {
        sum = sum + cSC - 1;
        sum=Math.min(sum,6);
    }
    return sum;
}
function extractCOBWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = bsUnusual.length;
            rand = Math.floor(Math.random()*dLength);
            return bsUnusual[rand];    
        }
        if (score === 1) {
            dLength = bsSullenGuest.length;
            rand = Math.floor(Math.random()*dLength);
            return bsSullenGuest[rand];    
        }if (score === 2) {
            dLength = bsTwoShouting.length;
            rand = Math.floor(Math.random()*dLength);
            return bsTwoShouting[rand];    
        }if (score === 3) {
            dLength = bsThreeDrunken.length;
            rand = Math.floor(Math.random()*dLength);
            return bsThreeDrunken[rand];    
        }if (score === 4) {
            dLength = bsBloody.length;
            rand = Math.floor(Math.random()*dLength);
            return bsBloody[rand];    
        }if (score === 5) {
            dLength = bsDamage.length;
            rand = Math.floor(Math.random()*dLength);
            return bsDamage[rand];    
        }if (score === 6) {
            dLength = bsMurder.length;
            rand = Math.floor(Math.random()*dLength);
            return bsMurder[rand];    
        }    
        }
    }
    function extractCOBHead(score){
        for (let i=0; i<7; i++) {
            if (score === 0) {
                dLength = cOBunusual.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBunusual[rand];    
            }
            if (score === 1) {
                dLength = cOBsullenGuest.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBsullenGuest[rand];    
            }if (score === 2) {
                dLength = cOBtwoShouting.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBtwoShouting[rand];    
            }if (score === 3) {
                dLength = cOBthreeDrunken.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBthreeDrunken[rand];    
            }if (score === 4) {
                dLength = cOBbloody.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBbloody[rand];    
            }if (score === 5) {
                dLength = cOBdamage.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBdamage[rand];    
            }if (score === 6) {
                dLength = cOBmurder.length;
                rand = Math.floor(Math.random()*dLength);
                return cOBmurder[rand];    
            }    
            }
        }
function cOO(tV){
    let sum = 0;
    for (let i=0; i<6; i++) {
        if (scoringOne[i][tV[i]] >= 9 || scoringOne[i][tV[i]] <=2) {
            sum++;
        }
    }
    return sum;
}
function extractCOOWords(score){
    for (let i=0; i<7; i++) {
        if (score === 0) {
            dLength = olDull.length;
            rand = Math.floor(Math.random()*dLength);
            return olDull[rand];    
        }
        if (score === 1) {
            dLength = olQuiet.length;
            rand = Math.floor(Math.random()*dLength);
            return olQuiet[rand];    
        }if (score === 2) {
            dLength = olLively.length;
            rand = Math.floor(Math.random()*dLength);
            return olLively[rand];    
        }if (score === 3) {
            dLength = olMemorable.length;
            rand = Math.floor(Math.random()*dLength);
            return olMemorable[rand];    
        }if (score === 4) {
            dLength = olWild.length;
            rand = Math.floor(Math.random()*dLength);
            return olWild[rand];    
        }if (score === 5) {
            dLength = olDaybreak.length;
            rand = Math.floor(Math.random()*dLength);
            return olDaybreak[rand];    
        }if (score === 6) {
            dLength = olStillGoing.length;
            rand = Math.floor(Math.random()*dLength);
            return olStillGoing[rand];    
        }    
        }
    }
function extractSOSWords(score){
    if (score <= 20) {
        dLength = sosDreamy.length;
        rand = Math.floor(Math.random()*dLength);
        return sosDreamy[rand];    
    } else if (score <= 26) {
        dLength = sosWonderful.length;
        rand = Math.floor(Math.random()*dLength);
        return sosWonderful[rand];
} else if (score <= 30) {
    dLength = sosJoyful.length;
    rand = Math.floor(Math.random()*dLength);
    return sosJoyful[rand];
} else if (score <= 35) {
    dLength = sosNice.length;
    rand = Math.floor(Math.random()*dLength);
    return sosNice[rand];
} else if (score <= 39) {
    dLength = sosRocky.length;
    rand = Math.floor(Math.random()*dLength);
    return sosRocky[rand];
} else if (score <= 44) {
    dLength = sosFraught.length;
    rand = Math.floor(Math.random()*dLength);
    return sosFraught[rand];
} else if (score <= 60) {
    dLength = sosAdisaster.length;
    rand = Math.floor(Math.random()*dLength);
    return sosAdisaster[rand];
}
}
function extractSOSHead(score){
    if (score <= 20) {
        dLength = sosHDreamy.length;
        rand = Math.floor(Math.random()*dLength);
        return sosHDreamy[rand];    
    } else if (score <= 26) {
        dLength = sosHWonderful.length;
        rand = Math.floor(Math.random()*dLength);
        return sosHWonderful[rand];
} else if (score <= 30) {
    dLength = sosHJoyful.length;
    rand = Math.floor(Math.random()*dLength);
    return sosHJoyful[rand];
} else if (score <= 35) {
    dLength = sosHNice.length;
    rand = Math.floor(Math.random()*dLength);
    return sosHNice[rand];
} else if (score <= 39) {
    dLength = sosHRocky.length;
    rand = Math.floor(Math.random()*dLength);
    return sosHRocky[rand];
} else if (score <= 44) {
    dLength = sosHFraught.length;
    rand = Math.floor(Math.random()*dLength);
    return sosHFraught[rand];
} else if (score <= 60) {
    dLength = sosHAdisaster.length;
    rand = Math.floor(Math.random()*dLength);
    return sosHAdisaster[rand];
}
}
function sOS(tV){
    let sum = 0;
    for (i=0; i<6; i++) {
        sum = sum + scoringOne[i][tV[i]];
    }
    return sum;
}
function pScorInd(){
    let dumV=[0,1,2,3,4,5];
    let dumV1=[0,1,2,3,4,5];
    let pI = pInv(currPerm,pDim);
    console.log('inv',pI);
    for (let i=0; i<6; i++) {
        let j = pI[i];
        dumV[i] = uGSeatinit[j][3];
    }; 
    for (let i1=0; i1<6; i1++) {
        dumV1[i1] = seatInd[dumV[i1]-1];    /// tableV is a 0-5 vector with table lookup values for scoringOne and scoringTwo
    };
    return dumV1;
}
 function OK(indi){              ///isThisOK processing indi = 0 - you ask, indi=1 they interupt and ask
    firstMessage(indi);
    let pickMe = pick();                   
    const messGroup = pickMe[0];    /// index , rand UG details and current table
    const aRUG = pickMe[1];
    const tableNum = pickMe[2];
    secondMessage(messGroup, aRUG, tableNum);
    }
function firstMessage(im){
let randy = Math.floor(Math.random()*5)
if (im === 0) {
    let messIt = typeIQ[randy];
    yoyoToast.fire({
        type: 'question',
        title: 'You Ask:',
        message: messIt,
        timeout: 4000,
 //       subtext: '~ Info Yoyo Toast ~',
        position: 'top-right',
 //       timeoutFunction: ()=> alert('Timeout Function called'),
 //       hasConfirmation: true,
 //       confirmLabel: 'Right!',
 //       confirmFunction: () => alert('Confirm Function Called'),
 //       hasCancellation: true,
 //       cancelLabel: 'Not Now',
 //       cancelFunction: () => alert('cancel function Called'),
    }); 
} else {
    let messItII = typeIIQ[randy];
 yoyoToast.fire({
        type: 'question',
        title: 'The Bride\'s Mother Asks:',
        message: messItII,
        timeout: 4000,
        position: 'top-left',
    });  
}   
}
function secondMessage(imG,rUG, tableIt){
    let randoff = Math.floor(Math.random()*5);   ///Part 1 message 2 concatenate
    let randy = Math.floor(Math.random()*5);   ///Part 2 message 2 concatenate
        let strV = answerTwoPartI[randy];
        let strFirst = answerZero[randoff];
        let str1 = strV[0];
        let fullN = rUG[0];
        let nInd = fullN.indexOf(' ');
        let str2 = fullN.slice(0,nInd);
        let str3 = strV[1];
        let str4 = tableIt;     
        let strLast = commComm(imG);
        let useString = strFirst.concat(" ",strLast);
        let messItIII = strFirst.concat(' ', str1,' ', str2,' ', str3,' ', str4,' --- ', strLast,' \n');
        let couplesComment = marriageRule();
        messItIV = messItIII.concat(' ',couplesComment)
        console.log(couplesComment);
        yoyoToast.fire({
            type: 'warning',
            title: 'The Bride\'s Mother Says:',
            message: messItIV,
            timeout: 8000,
            position: 'bottom-left',
        });     
    }
function marriageRule(){
    let rand=Math.floor(Math.random()*2)
    if (rand === 0) {
        testStat = 'M';
    } else {
        testStat = 'C';
    }
    let coupleNames = getCouple(testStat);
    if (coupleNames === 'abort') {
        let emptyString = '';
        return emptyString;
    }
    let coupleFNames = parseCouple(coupleNames);
    let tableOne = getCurTab(coupleNames[0]);
    let tableTwo = getCurTab(coupleNames[1]);
    if (tableOne === tableTwo) {
        return '';
    }
    let randy=Math.floor(Math.random()*5)
    let dMessOne = typeMMCC[randy][0];
    let dMessTwo = dMessOne.concat(coupleFNames[0]," and ",coupleFNames[1], typeMMCC[randy][1],typeMMCC[randy][2]);
    return dMessTwo;
    
}   
function getCurTab(name) {
    for (i=0; i<6; i++){
        if (name === uGSeat[i][0]) {
            return uGSeatinit[i][3];
        }
    }
}

function parseCouple(twoNames){
    let i = 0;
    let dumStr = [];
        for (element of twoNames) {
            let fullN = element;
            let nInd = fullN.indexOf(' ');
            dumStr[i] = fullN.slice(0,nInd); 
            i++  
        } return dumStr;
    }  
function getCouple(MC){
    for (let i=0; i<6; i++) {
        if (uGSeatinit[i][1] === MC) {
            let names = [uGSeatinit[i][0],uGSeatinit[i+1][0]];
            return names;
        };
    } 
    let abortFlag = 'abort';
    console.log('getcouple', abortFlag)
    return abortFlag
};
function commComm(imUG) {
    let lengthInd = commentCount[imUG];
    rand = Math.floor(Math.random()*lengthInd)
    let indexInd = commentIndex[imUG] + rand; 
    return comments[indexInd];
}
function pick() {                         /// pick a random UG to discuss
let rand = Math.floor(Math.random()*6)
let rUG = uGSeat[rand];                      /// the UG sitting in 'rand' available seat
let numUG = currPerm[rand];                  /// where they started
let randTable = uGSeatinit[rand];            /// randTabIn is the table  where the 'rand' available seat is
let randTabIn = randTable[3];
let scoreIndex = seatInd[randTabIn-1];                /// find the col of the scoring arrays the 'rand' seat corresponds too 
let scoreOneUG = scoringOne[numUG][scoreIndex] ; 
let scoreTwoUG = scoringTwo[numUG][scoreIndex] ; 
let aUGGender = rUG[2];
let aUGStatus = rUG[1];     /// get UG #s
let messyGrp = getCommentsInd(aUGGender, aUGStatus,scoreOneUG,scoreTwoUG);   /// Gender, Martital Status and scores to get index 
let passOut = [messyGrp, rUG, randTabIn];                                    /// return index, rand UG details and current table
return passOut;
}
function getCommentsInd(aUGG, aUGS,s1UG,s2UG) {  // Start Index creation
let messageGroup = 1; 
if (aUGG === 'F') {
    messageGroup = messageGroup+12;
}
if (s2UG === 0) {
    messageGroup = messageGroup+6;
}
if (aUGS === 'S') {
    messageGroup = messageGroup+3;
}
if (s1UG === 4 || s1UG === 7) {
    messageGroup = messageGroup+1;
}
if (s1UG === 5 || s1UG === 6) {
    messageGroup = messageGroup+2;
}
return messageGroup
}

/// Processing Functions
function panelProc(indP) {                        /// Processing for panel buttons 1-6
let newPerm = panelVector[indP];                       /// Get panetlOne permutation (Set in panelPush during INIT)
let nP=pMult(newPerm, currPerm, pDim);            /// Create nP the new Current Permutation
currPerm = nP;                                      ///currPerm not  used basically stored in uGseat
uGSeat = upDSeat(newPerm, pDim);                   /// Update uGSeat)              
addSeatingLabels(uGSeat); 
isThisOKCounter++;
if (isThisOKCounter > 2){
    isThisOKCounter = 1;
   OK(1);                                       /// run is This OK Processing with How you doing variation
};
}
function upDSeat(newP, pID) {                    /// upDSeat reorders the UGs to their new seats pID is dimension                      /// dumInv is the inverse of newP
let nGS=[];                                      /// nGS will be new seating arrangement
for (let it=0; it<pID; it++) {
    indyx = newP[it];
    let dMDum = uGSeat[indyx];
    nGS.push(dMDum);
    }return nGS
}
/// Utlities
function pMult(newP, curP, dim) {   // UTIL: pMult returns the product of permutations newP on curP of dimension dim 
    let dP = [0, 1, 2];
    for (let i=0; i<dim; i++) {
          dP[i] = curP[newP[i]];
    }
    return dP;
}
function pInv(Perm,dim){          /// UTIL: pINV returns the inverse of a permutation Perm of Dimension dim 
    let Inv=[0,0,0,0,0,0];
    for (let i=0; i<dim; i++) {
    let ind = Perm[i];
    Inv[ind]=i;}
    return Inv;
}
/// initialization functions
function panelPush() {              /// INIT: selects set of permutations and associates them with panel buttons
    let panel=[];
const p1 = [[1,2,3,4,5,0],
 [2,3,4,5,0,1],
 [3,4,5,0,1,2],
 [4,5,0,1,2,3],
 [5,0,1,2,3,4,]];
const p5 = [[1,0,2,3,4,5],[0,2,1,3,4,5],[0,1,3,2,4,5],[0,1,2,4,3,5],[0,1,2,3,5,4],
 [2,1,0,3,4,5],[0,3,2,1,4,5],[0,1,4,3,2,5],[0,1,2,5,4,3],[5,1,2,3,4,0],
 [3,1,2,0,4,5],[0,4,2,3,1,5],[0,1,5,3,4,2],[1,2,0,4,5,3],[4,5,3,1,2,0],
 [4,1,2,3,0,5],[0,5,2,3,4,1],[2,1,0,3,4,5],[0,3,2,1,4,5],[0,1,4,3,2,5],
 [5,1,2,3,4,0],[1,0,2,3,4,5],[0,2,1,3,4,5],[0,1,3,2,4,5],[0,1,2,4,3,5]];
  let indy1 = Math.floor(Math.random()*5);
  panel.push(p1[indy1]);
  let indy2 = Math.floor(Math.random()*5)*5;
  panel.push(p5[indy2]);
  panel.push(p5[indy2+1]);
  panel.push(p5[indy2+2]);
  panel.push(p5[indy2+3]);
  panel.push(p5[indy2+4]);
  return panel;
}
function turns() {                 /// INIT: Sets maxTurns - number of turns in the game
let turnCount = Math.floor(Math.random()*3)
+Math.floor(Math.random()*3)
+Math.floor(Math.random()*3)+3;
return turnCount;
}
function exampleI(core2) {         /// INIT: initializes ScoringI table UG to current table 
let coreOne=[];
let core = 0;
//let core = core2;
for (let i=0; i<6; i++) {
    coreOne[i] = [];
    for (let j=0; j<4; j++){
        core = Math.floor(Math.random()*10)+1;
        if (core2[i][j] === 1 ){
            if (core>5){core=Math.min(core+2, 10);} 
                else {core=Math.max(core-2, 1);}
        } 
        coreOne[i][j] = core;
    }}
   return coreOne;     
}
function exampleII() {                 /// INIT: initializes ScoringII table UG to current table 
let coreTwo=[];
for (let i=0; i<6; i++) {
    coreTwo[i] = [];
    for (let j=0; j<4; j++){
        coreTwo[i][j] = 0;
        if (Math.random()>0.33){
            coreTwo[i][j] = 1;
        }}}
        return coreTwo;
}
function ourChoice () {                 /// INIT: Picks one of four seating arrangements
const uGSeating1 = [
    ['Jon Doe', 'M', 'M', 2, 6], ['Jan Doe', 'M', 'F', 2, 5],
    ['Ray Suiter', 'C', 'M', 3, 1],['Rose Smith', 'C', 'F', 3, 5],
    ['Alf Landon', 'S', 'M', 5, 1], ['Kim Roberts', 'S', 'F', 5, 3]];      /// Initialization Functions - Display
const uGSeating2 = [
    ['Jon Doe', 'M', 'M', 3, 5], ['Jan Doe', 'M', 'F', 7, 1],
    ['Ray Suiter', 'C', 'M', 7, 3],['Rose Smith', 'C', 'F', 7, 4],
    ['Alf Landon', 'S', 'M', 8, 2], ['Kim Roberts', 'S', 'F', 8, 6]];       /// & select inital seating maps
const uGSeating3 = [
    ['Jon Doe', 'M', 'M', 4, 3], ['Jan Doe', 'M', 'F', 4, 4],
    ['Ray Suiter', 'C', 'M', 6, 1],['Rose Smith', 'C', 'F', 7, 3],
    ['Alf Landon', 'S', 'M', 8, 4], ['Kim Roberts', 'S', 'F', 8, 6]];
const uGSeating4 = [
    ['Jon Doe', 'M', 'M', 3, 6], ['Jan Doe', 'M', 'F', 4, 2],
    ['Ray Suiter', 'C', 'M', 4, 4],['Rose Smith', 'C', 'F', 6, 1],
    ['Alf Landon', 'S', 'M', 6, 5], ['Kim Roberts', 'S', 'F', 8, 2]];
const rChoice = Math.floor(Math.random()*4);
    if (rChoice === 0) {  
        uGSeating = uGSeating1;
        layout.src = 'pictures/seatingChart1.jpeg';
        seatInd = [0,0,1,1,2,2,2,2];
    } else if (rChoice === 1) {  
        uGSeating = uGSeating2; 
        layout.src = 'pictures/seatingChart2.jpeg';  
        seatInd = [0,0,0,0,0,0,1,2];
    } else if (rChoice === 2) {  
        uGSeating = uGSeating3;
        layout.src = 'pictures/seatingChart3.jpeg';
        seatInd = [0,0,0,0,0,1,2,3];
    } else if (rChoice === 3) {  
        uGSeating = uGSeating4;
        layout.src = 'pictures/seatingChart4.jpeg';
        seatInd = [0,0,0,1,1,2,2,3];
    }  
    return uGSeating;
} 
function addSeatingLabels () {      //  INIT & PROC: function: update seating labels for display 
let color=1
let wCrit = document.querySelector('#red');
for (let i=0; i<6; i++) {
    let element1 = uGSeat[i];
    let element2 = uGSeatinit[i];
    let fullName = element1[0];
    table = element2[3];
    seat = element2[4];
    let label = fullName.concat(" ", "Table:", " ", table, " ", "Seat:", " ", seat );
    if (color === 1) {  wCrit = document.querySelector('#red');
    } else if (color === 2) { wCrit = document.querySelector('#orange');      
    } else if (color === 3) { wCrit = document.querySelector('#yellow'); 
    } else if (color === 4) { wCrit = document.querySelector('#green'); 
    } else if (color === 5) { wCrit = document.querySelector('#blue'); 
    } else if (color === 6) { wCrit = document.querySelector('#violet'); 
    }
    wCrit.innerHTML = label;
    color++;
}    
}
function updateSeatingStatus(seatMap) {         /// INIT: Create UG table 
    const sixNam = sixNames();
    const uGuestStatus = ['MMMMMM','MMMMCC','MMCCCC','CCCCCC','MMMMSS',
        'MMCCSS','CCCCSS','MMSSSS','CCSSSS']; 
        // for 3M, 2MC, M2C, 3C, 2MS, MCS, 2CS, M2S, C2S
    const rand = Math.random()*100 // Guest Status Distribution
    let indexArr=testNum(rand);
    const MCS = uGuestStatus[indexArr];
    for (let j = 0; j<3; j++) {
        if (MCS[2*j+1] === 'M'){
            sixNam[2*j+1][1] = sixNam[2*j][1];
        }
    }
    let fullName=[]
    for (let k = 0; k<6; k++) {
        let fNam = sixNam[k];
        let full = fNam[0].concat(' ',fNam[1]);
        fullName.push(full)
    }
    let i = 0;
    for (let element of seatMap) {
        element[0] = fullName[i];
        element[1] = MCS.charAt(i);
     i++;
    }
    console.log(MCS);
    return seatMap;
}
function testNum(a) {                            /// INIT: Prob Distribution of UG Married, Couple Single UG 9 options
    if (a < 4) {
      return 0;
    } else if (a<12){
      return 1;
    } else if (a<16){
      return 2;
    }else if (a<24){
      return 3;
    }else  if (a<34) {
      return 4;
    } else  if (a<70) {
      return 5;
    }else  if (a<80) {
      return 6;
    }else  if (a<90) {
      return 7;
    } else {
      return 8;
    }
    return result;
  }
function sixNames() {                          /// INIT: get six names for UG
    const boyNames = [
    "Aaron",
    "Adam",
    "Adrian",
    "Aiden",
    "Alan",
    "Albert",
    "Alex",
    "Alexander",
    "Alfred",
    "Andrew",
    "Andy",
    "Anthony",
    "Archer",
    "Arthur",
    "Asher",
    "Austin",
    "Avery",
    "Axel",
    "Benjamin",
    "Bennett",
    "Blake",
    "Braden",
    "Bradley",
    "Brandon",
    "Braxton",
    "Brayden",
    "Brendan",
    "Brian",
    "Brody",
    "Bruce",
    "Bryan",
    "Bryce",
    "Caden",
    "Caleb",
    "Calvin",
    "Cameron",
    "Carl",
    "Carson",
    "Carter",
    "Casey",
    "Charles",
    "Charlie",
    "Chase",
    "Chester",
    "Christian",
    "Christopher",
    "Clarence",
    "Clark",
    "Claude",
    "Clayton",
    "Clifford",
    "Clive",
    "Cody",
    "Colin",
    "Connor",
    "Conrad",
    "Cooper",
    "Corey",
    "Cormac",
    "Craig",
    "Curtis",
    "Dale",
    "Damian",
    "Daniel",
    "Darren",
    "David",
    "Dean",
    "Declan",
    "Derek",
    "Dexter",
    "Dominic",
    "Donald",
    "Douglas",
    "Drew",
    "Duncan",
    "Dylan",
    "Earl",
    "Easton",
    "Eddie",
    "Edgar",
    "Edmund",
    "Edward",
    "Edwin",
    "Eli",
    "Elias",
    "Elijah",
    "Elliot",
    "Ellis",
    "Emerson",
    "Emery",
    "Eric",
    "Ernest",
    "Ethan",
    "Eugene",
    "Evan",
    "Everett",
    "Ezekiel",
    "Felix",
    "Finley",
    "Fletcher",
    "Floyd",
    "Francis",
    "Frank",
    "Franklin",
    "Gabriel",
    "Gage",
    "Garrett",
    "Gary",
    "Gavin",
    "Geoffrey",
    "George",
    "Gerald",
    "Gilbert",
    "Gordon",
    "Graham",
    "Grant",
    "Grayson",
    "Gregory",
    "Griffin",
    "Harold",
    "Harrison",
    "Harry",
    "Harvey",
    "Hayden",
    "Hector",
    "Henry",
    "Herbert",
    "Howard",
    "Hudson",
    "Hugh",
    "Hunter",
    "Ian",
    "Isaac",
    "Isaiah",
    "Jack",
    "Jackson",
    "Jacob",
    "James",
    "Jared",
    "Jason",
    "Jasper",
    "Javier",
    "Jay",
    "Jeffrey",
    "Jeremy",
    "Jerome",
    "Jesse",
    "Jim",
    "Joel",
    "John"
    ] 
    const girlNames = [
     "Abigail",
    "Ada",
    "Adelaide",
    "Ainsley",
    "Alexandra",
    "Alice",
    "Alicia",
    "Alina",
    "Alison",
    "Amanda",
    "Amber",
    "Amelia",
    "Amy",
    "Ana",
    "Anastasia",
    "Andrea",
    "Angelina",
    "Ann",
    "Anna",
    "Annabelle",
    "Anne",
    "Annette",
    "Ariel",
    "Ashley",
    "Audrey",
    "Aurora",
    "Autumn",
    "Ava",
    "Avery",
    "Bella",
    "Bernice",
    "Bethany",
    "Bianca",
    "Brenda",
    "Brianna",
    "Bridget",
    "Brooke",
    "Cadence",
    "Caitlyn",
    "Camila",
    "Camille",
    "Carla",
    "Carmen",
    "Carol",
    "Caroline",
    "Casey",
    "Cassandra",
    "Catherine",
    "Cecilia",
    "Celeste",
    "Charlotte",
    "Chloe",
    "Christina",
    "Christine",
    "Claire",
    "Clara",
    "Clarissa",
    "Claudia",
    "Colleen",
    "Cora",
    "Courtney",
    "Crystal",
    "Cynthia",
    "Daisy",
    "Dakota",
    "Dana",
    "Danielle",
    "Daphne",
    "Deborah",
    "Debra",
    "Delia",
    "Denise",
    "Diana",
    "Diane",
    "Donna",
    "Dora",
    "Dorothy",
    "Edith",
    "Eileen",
    "Elaine",
    "Eleanor",
    "Elena",
    "Elisa",
    "Elise",
    "Elizabeth",
    "Ella",
    "Ellen",
    "Eloise",
    "Elsa",
    "Emily",
    "Emma",
    "Erica",
    "Erin",
    "Esme",
    "Esther",
    "Ethel",
    "Eva",
    "Evelyn",
    "Faith",
    "Felicia",
    "Fiona",
    "Florence",
    "Frances",
    "Gabriella",
    "Gail",
    "Georgia",
    "Giselle",
    "Gloria",
    "Grace",
    "Gretchen",
    "Hannah",
    "Harper",
    "Hazel",
    "Heather",
    "Heidi",
    "Helen",
    "Isabel",
    "Isabella",
    "Ivy",
    "Jackie",
    "Jade",
    "Jamie",
    "Jane",
    "Jasmine",
    "Jean",
    "Jenna",
    "Jennifer",
    "Jessica",
    "Jill",
    "Joan",
    "Jocelyn",
    "Joyce",
    "Judith",
    "Julia",
    "Julie",
    "June",
    "Karen",
    "Kate",
    "Katherine",
    "Kathleen",
    "Kathryn",
    "Kayla",
    "Kelly",
    "Kimberly",
    "Laura",
    "Lauren",
    "Leah",
    "Leslie",
    "Lillian",
    "Lily" 
    ]
    const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
    "Gomez",
    "Phillips",
    "Evans",
    "Turner",
    "Diaz",
    "Parker",
    "Cruz",
    "Edwards",
    "Collins",
    "Reyes",
    "Stewart",
    "Morris",
    "Morales",
    "Murphy",
    "Cook",
    "Rogers",
    "Gutierrez",
    "Ortiz",
    "Morgan",
    "Cooper",
    "Peterson",
    "Bailey",
    "Reed",
    "Kelly",
    "Howard",
    "Ramos",
    "Kim",
    "Cox",
    "Ward",
    "Richardson",
    "Watson",
    "Brooks",
    "Chavez",
    "Wood",
    "James",
    "Bennett",
    "Gray",
    "Mendoza",
    "Ruiz",
    "Hughes",
    "Price",
    "Alvarez",
    "Castillo",
    "Sanders",
    "Patel",
    "Myers",
    "Long",
    "Ross",
    "Foster",
    "Jimenez",
    "Powell",
    "Jenkins",
    "Perry",
    "Russell",
    "Sullivan",
    "Bell",
    "Coleman",
    "Butler",
    "Henderson",
    "Barnes",
    "Gonzales",
    "Fisher",
    "Vasquez",
    "Simmons",
    "Romero",
    "Jordan",
    "Patterson",
    "Alexander",
    "Hamilton",
    "Graham",
    "Reynolds",
    "Griffin",
    "Wallace",
    "Moreno",
    "West",
    "Cole",
    "Hayes",
    "Bryant",
    "Herrera",
    "Gibson",
    "Ellis",
    "Tran",
    "Medina",
    "Aguilar",
    "Stevens",
    "Murray",
    "Ford",
    "Castro",
    "Marshall",
    "Owens",
    "Harrison",
    "Fernandez",
    "Mcdonald",
    "Woods",
    "Washington",
    "Kennedy",
    "Wells",
    "Vargas",
    "Shaw",
    "Snyder"
    ]
    const six = [];
    for (let step = 0; step < 3; step++) {
        let Ind1 = Math.floor(Math.random()*150);
        let b = boyNames[Ind1];
        let Ind2 = Math.floor(Math.random()*150);
        let bL = lastNames[Ind2];
        let bName = [b,bL];
        six.push(bName);
        let Ind3 = Math.floor(Math.random()*150);
        let g = girlNames[Ind3];
        let Ind4 = Math.floor(Math.random()*150);
        let gL = lastNames[Ind4];
        let gName = [g,gL];
        six.push(gName);
      }
      
    return six;   //console.log(str1.concat(' ', str2));
    }