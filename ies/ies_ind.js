//The full data set is listed here because I can't get the dumb thing to load a json file from my webpage.
const bigdata = [
    {
        "meaning": "occurring at some time that is not yet definite",
        "answer_1": "put time into",
        "answer_2": "at some point",
        "answer_3": "so far",
        "answer_4": "at the moment",
        "correct": "at some point",
        "example_s": "I want you to check my paper ______. When are you free?",
        "written": "at some point"
      },
      {
        "meaning": "right now",
        "answer_1": "so far",
        "answer_2": "at the moment",
        "answer_3": "at the time",
        "answer_4": "at some point",
        "correct": "at the moment",
        "example_s": "I’m busy ______. Please come back later.",
        "written": "at the moment"
      },
      {
        "meaning": "occurring at the time being discussed",
        "answer_1": "put time into",
        "answer_2": "at the moment",
        "answer_3": "at the time",
        "answer_4": "at some point",
        "correct": "at the time",
        "example_s": "I didn’t know you were a student ______. I thought you had graduated by then.",
        "written": "at the time"
      },
      {
        "meaning": "make effort, spend time doing",
        "answer_1": "put time into",
        "answer_2": "so far",
        "answer_3": "at the time",
        "answer_4": "at the moment",
        "correct": "put time into",
        "example_s": "I __________ my project, so I got a good grade.",
        "written": "put time into"
      },
      {
        "meaning": "up to the current point in time; to a limited extent",
        "answer_1": "so far",
        "answer_2": "put time into",
        "answer_3": "beats me",
        "answer_4": "at the moment",
        "correct": "so far",
        "example_s": "___________, this is his best novel.",
        "written": "So far"
      },
      {
        "meaning": "to not know",
        "answer_1": "benefit of the doubt",
        "answer_2": "go for",
        "answer_3": "no doubt",
        "answer_4": "beats me",
        "correct": "beats me",
        "example_s": "A: What time does the meeting start? B: ________.",
        "written": "Beats me"
      },
      {
        "meaning": "to use a judgement despite uncertainty",
        "answer_1": "benefit of the doubt",
        "answer_2": "no doubt",
        "answer_3": "beats me",
        "answer_4": "go for",
        "correct": "benefit of the doubt",
        "example_s": "I don’t know if he was really sick or not, but I will give him the ______.",
        "written": "benefit of the doubt"
      },
      {
        "meaning": "to want",
        "answer_1": "go for",
        "answer_2": "beats me",
        "answer_3": "slip one's mind",
        "answer_4": "no doubt",
        "correct": "go for",
        "example_s": "I could ______ a break. I’ve been studying for four hours straight!",
        "written": "go for"
      },
      {
        "meaning": "it is certain",
        "answer_1": "benefit of the doubt",
        "answer_2": "slip one's mind",
        "answer_3": "point of view",
        "answer_4": "no doubt",
        "correct": "no doubt",
        "example_s": "There is ______ that the earth is round.",
        "written": "no doubt"
      },
      {
        "meaning": "one’s opinion or feelings",
        "answer_1": "shake one's head",
        "answer_2": "point of view",
        "answer_3": "slip one's mind",
        "answer_4": "beats me",
        "correct": "point of view",
        "example_s": "His ______ is different from the rest of the team’s.",
        "written": "point of view"
      },
      {
        "meaning": "to understand someone’s opinion or idea",
        "answer_1": "see what one is saying",
        "answer_2": "shake one's head",
        "answer_3": "go for",
        "answer_4": "beats me",
        "correct": "see what one is saying",
        "example_s": "I see __________, but I disagree.",
        "written": "what you are saying"
      },
      {
        "meaning": "to disagree or refuse",
        "answer_1": "benefit of the doubt",
        "answer_2": "no doubt",
        "answer_3": "slip one's mind",
        "answer_4": "shake one’s head",
        "correct": "shake one’s head",
        "example_s": "I asked if she would help, but she just __________.",
        "written": "shook her head"
      },
      {
        "meaning": "to forget",
        "answer_1": "see what one is saying",
        "answer_2": "shake one's head",
        "answer_3": "go for",
        "answer_4": "slip one’s mind",
        "correct": "slip one’s mind",
        "example_s": "I didn’t go to the meeting because it ____________.",
        "written": "slipped my mind"
      },
      {
        "meaning": "will probably happen",
        "answer_1": "bound to",
        "answer_2": "taken advantage of",
        "answer_3": "lead to",
        "answer_4": "cut someone some slack",
        "correct": "bound to",
        "example_s": "With all the studying you have been doing, you are ________ pass the test.",
        "written": "bound to"
      },
      {
        "meaning": "if something happens",
        "answer_1": "no matter what it takes",
        "answer_2": "in the event (of/that)",
        "answer_3": "find oneself doing something",
        "answer_4": "take for granted",
        "correct": "in the event (of/that)",
        "example_s": "_________ rain, the game will be cancelled.",
        "written": "In the event of"
      },
      {
        "meaning": "to cause",
        "answer_1": "bound to",
        "answer_2": "find oneself doing something",
        "answer_3": "lead to",
        "answer_4": "take advantage of",
        "correct": "lead to",
        "example_s": "Eating less and exercising more _______ weight loss.",
        "written": "leads to"
      },
      {
        "meaning": "to allow more freedom or be more forgiving than usual",
        "answer_1": "no matter what it takes",
        "answer_2": "deal with",
        "answer_3": "in the event (of/that)",
        "answer_4": "cut someone some slack",
        "correct": "cut someone some slack",
        "example_s": "Because he was sick, his teacher ______ with the assignment deadline.",
        "written": "cut him some slack"
      },
      {
        "meaning": "to take action, manage, handle, or treat",
        "answer_1": "cut someone some slack",
        "answer_2": "take for granted",
        "answer_3": "deal with",
        "answer_4": "lead to",
        "correct": "deal with",
        "example_s": "Only team leaders should ____ the administration office.",
        "written": "deal with"
      },
      {
        "meaning": "to do something naturally, without conscious intention",
        "answer_1": "take for granted",
        "answer_2": "in the event (of/that)",
        "answer_3": "find oneself doing something",
        "answer_4": "no matter what it takes",
        "correct": "find oneself doing something",
        "example_s": "At her new job, she _______ applying the skills she had learned in university.",
        "written": "found herself"
      },
      {
        "meaning": "the purpose or reason, in consideration of",
        "answer_1": "for the sake of",
        "answer_2": "bound to",
        "answer_3": "deal with",
        "answer_4": "take advantage of",
        "correct": "for the sake of",
        "example_s": "My essay was not easy to understand, so I rewrote it ____ clarity.",
        "written": "for the sake of"
      },
      {
        "meaning": "to do anything necessary to achieve something",
        "answer_1": "bound to",
        "answer_2": "cut someone some slack",
        "answer_3": "no matter what it takes",
        "answer_4": "take for granted",
        "correct": "no matter what it takes",
        "example_s": "We will work all night if we have to, because we have to finish the report, ____!",
        "written": "no matter what it takes"
      },
      {
        "meaning": "to make good use of an opportunity; to exploit",
        "answer_1": "find oneself doing something",
        "answer_2": "in the event (of/that)",
        "answer_3": "deal with",
        "answer_4": "take advantage of",
        "correct": "take advantage of",
        "example_s": "We should ____ the library while it is still open.",
        "written": "take advantage of"
      },
      {
        "meaning": "to fail to properly appreciate; to assume that something is true",
        "answer_1": "lead to",
        "answer_2": "cut someone some slack",
        "answer_3": "for the sake of",
        "answer_4": "take for granted",
        "correct": "take for granted",
        "example_s": "I _______ that I would be paid for my work.",
        "written": "took it for granted"
      },
      {
        "meaning": "to make a bad situation even worse",
        "answer_1": "add insult to injury",
        "answer_2": "be in someone’s shoes",
        "answer_3": "hang in there",
        "answer_4": "hit it off",
        "correct": "add insult to injury",
        "example_s": "My boss not only said I could not get a pay increase in future, but to _________________, he reduced my current pay.",
        "written": "add insult to injury"
      },
      {
        "meaning": "to be in the same situation as someone else",
        "answer_1": "pull oneself together",
        "answer_2": "on one’s own",
        "answer_3": "read between the lines",
        "answer_4": "be in someone’s shoes",
        "correct": "be in someone’s shoes",
        "example_s": "If I _____, I wouldn't drive in heavy rain at night.",
        "written": "were in your shoes"
      },
      {
        "meaning": "to not give up",
        "answer_1": "take it easy",
        "answer_2": "hang in there",
        "answer_3": "by all means",
        "answer_4": "be in someone’s shoes",
        "correct": "hang in there",
        "example_s": "Maya didn’t want to keep studying, but she _____ and finally finished.",
        "written": "hung in there"
      },
      {
        "meaning": "to form a good relationship with someone quickly",
        "answer_1": "a great deal of",
        "answer_2": "pull oneself together",
        "answer_3": "take it easy",
        "answer_4": "hit it off",
        "correct": "hit it off",
        "example_s": "Luckily, I really _____ with my new lab mate.",
        "written": "hit it off"
      },
      {
        "meaning": "to contact",
        "answer_1": "be in someone’s shoes",
        "answer_2": "something like",
        "answer_3": "in touch with",
        "answer_4": "a great deal of",
        "correct": "in touch with",
        "example_s": "Please keep _____ your parents or else they will worry.",
        "written": "in touch with"
      },
      {
        "meaning": "to receive no help",
        "answer_1": "as opposed to",
        "answer_2": "by all means",
        "answer_3": "in touch with",
        "answer_4": "on one’s own",
        "correct": "on one’s own",
        "example_s": "He asked for help with his paper, but I am busy, so _____.",
        "written": "I'm on my own"
      },
      {
        "meaning": "to recover self-control and be calm",
        "answer_1": "be in someone’s shoes",
        "answer_2": "as opposed to",
        "answer_3": "add insult to injury",
        "answer_4": "pull oneself together",
        "correct": "pull oneself together",
        "example_s": "Bob was shocked after the car accident, but after he _____, he called the police.",
        "written": "pulled himself together"
      },
      {
        "meaning": "to find meaning that is not clearly stated, only implied",
        "answer_1": "something like",
        "answer_2": "hit it off",
        "answer_3": "by no means",
        "answer_4": "read between the lines",
        "correct": "read between the lines",
        "example_s": "He said we had done enough, but _____, I knew that he thought we should have done more.",
        "written": "read between the lines"
      },
      {
        "meaning": "to relax, to work at a comfortable pace",
        "answer_1": "on one’s own",
        "answer_2": "add insult to injury",
        "answer_3": "take it easy",
        "answer_4": "by no means",
        "correct": "take it easy",
        "example_s": "A: I have so much to do today! B: Well, _____!",
        "written": "take it easy"
      },
      {
        "meaning": "many/much",
        "answer_1": "a great deal of",
        "answer_2": "in touch with",
        "answer_3": "by all means",
        "answer_4": "take it easy",
        "correct": "a great deal of",
        "example_s": "Students at Tohoku University spend _____ of their time in the library.",
        "written": "a great deal"
      },
      {
        "meaning": "in contrast to",
        "answer_1": "hang in there",
        "answer_2": "as opposed to",
        "answer_3": "read between the lines",
        "answer_4": "",
        "correct": "as opposed to",
        "example_s": "Students here learn two foreign languages _____ other universities where they only learn English.",
        "written": "as opposed to"
      },
      {
        "meaning": "absolutely",
        "answer_1": "add insult to injury",
        "answer_2": "on one’s own",
        "answer_3": "by all means",
        "answer_4": "in touch with",
        "correct": "by all means",
        "example_s": "A: May I look at your lab report? B: _____.",
        "written": "By all means"
      },
      {
        "meaning": "absolutely not",
        "answer_1": "pull oneself together",
        "answer_2": "by no means",
        "answer_3": "a great deal of",
        "answer_4": "hang in there",
        "correct": "by no means",
        "example_s": "Even though some people come to class late, it is _____ acceptable to do so.",
        "written": "by no means"
      },
      {
        "meaning": "approximately",
        "answer_1": "hit it off",
        "answer_2": "read between the lines",
        "answer_3": "something like",
        "answer_4": "a great deal of",
        "correct": "something like",
        "example_s": "_____ 500 people showed up to the festival.",
        "written": "Something like"
      },
      {
        "meaning": "very different",
        "answer_1": "a far cry from",
        "answer_2": "get cold feet",
        "answer_3": "hit the sack/hay",
        "answer_4": "let the cat out of the bag",
        "correct": "a far cry from",
        "example_s": "The weather in Hawaii is _________ the weather in Hokkaido.",
        "written": "a far cry from"
      },
      {
        "meaning": "very expensive",
        "answer_1": "hit the nail on the head",
        "answer_2": "like the back of one’s hand",
        "answer_3": "cost an arm and a leg",
        "answer_4": "head over heels",
        "correct": "cost an arm and a leg",
        "example_s": "The airfare to Europe _____ these days.",
        "written": "costs an arm and a leg"
      },
      {
        "meaning": "to stop working on something",
        "answer_1": "a far cry from",
        "answer_2": "like the back of one’s hand",
        "answer_3": "call it a day",
        "answer_4": "once in a blue moon",
        "correct": "call it a day",
        "example_s": "We’ve done enough work. Let’s _____.",
        "written": "call it a day"
      },
      {
        "meaning": "to get something by luck or coincidence without effort",
        "answer_1": "fall into one’s lap",
        "answer_2": "on the ball",
        "answer_3": "let the cat out of the bag",
        "answer_4": "play by ear",
        "correct": "fall into one’s lap",
        "example_s": "I'm jealous of Sarah. Good grades seem to _____ for every class.",
        "written": "fall into her lap"
      },
      {
        "meaning": "to suddenly have the feeling of not wanting to do something that was planned",
        "answer_1": "hit the sack/hay",
        "answer_2": "get cold feet",
        "answer_3": "once in a blue moon",
        "answer_4": "over one’s head",
        "correct": "get cold feet",
        "example_s": "She’s _____ about her wedding tomorrow.",
        "written": "got cold feet"
      },
      {
        "meaning": "to be in love, especially in the beginning of a relationship",
        "answer_1": "hit the nail on the head",
        "answer_2": "let the cat out of the bag",
        "answer_3": "take the bull by the horns",
        "answer_4": "head over heels",
        "correct": "head over heels",
        "example_s": "He has been _____ for her ever since they met.",
        "written": "head over heels"
      },
      {
        "meaning": "to do or say something perfectly",
        "answer_1": "cost an arm and a leg",
        "answer_2": "hit the nail on the head",
        "answer_3": "over one’s head",
        "answer_4": "under the weather",
        "correct": "hit the nail on the head",
        "example_s": "You really _____ with your answer today.",
        "written": "hit the nail on the head"
      },
      {
        "meaning": "go to sleep",
        "answer_1": "fall into one’s lap",
        "answer_2": "once in a blue moon",
        "answer_3": "play by ear",
        "answer_4": "hit the sack/hay",
        "correct": "hit the sack/hay",
        "example_s": "I’m going to _____ around midnight. *use \"sack",
        "written": "hit the sack"
      },
      {
        "meaning": "to tell or reveal a secret",
        "answer_1": "a far cry from",
        "answer_2": "over one’s head",
        "answer_3": "cost an arm and a leg",
        "answer_4": "let the cat out of the bag",
        "correct": "let the cat out of the bag",
        "example_s": "Please don’t _____ about me moving to Tokyo.",
        "written": "let the cat out of the bag"
      },
      {
        "meaning": "to know something very well",
        "answer_1": "like the back of one’s hand",
        "answer_2": "head over heels",
        "answer_3": "under the weather",
        "answer_4": "over one’s head",
        "correct": "like the back of one’s hand",
        "example_s": "I know Shinjuku _____.",
        "written": "like the back of my hand"
      },
      {
        "meaning": "to be attentive, and quick to act",
        "answer_1": "fall into one’s lap",
        "answer_2": "on the fence",
        "answer_3": "on the ball",
        "answer_4": "like the back of one’s hand",
        "correct": "on the ball",
        "example_s": "Our new employee is really _____.",
        "written": "on the ball"
      },
      {
        "meaning": "to be indecisive",
        "answer_1": "cost an arm and a leg",
        "answer_2": "on the fence",
        "answer_3": "on the ball",
        "answer_4": "take the bull by the horns",
        "correct": "on the fence",
        "example_s": "He’s _____ about attending a public or private university.",
        "written": "on the fence"
      },
      {
        "meaning": "very rarely",
        "answer_1": "a far cry from",
        "answer_2": "head over heels",
        "answer_3": "play by ear",
        "answer_4": "once in a blue moon",
        "correct": "once in a blue moon",
        "example_s": "I swim in the ocean _____.",
        "written": "once in a blue moon"
      },
      {
        "meaning": "too difficult to do",
        "answer_1": "hit the sack/hay",
        "answer_2": "like the back of one’s hand",
        "answer_3": "over one’s head",
        "answer_4": "take the bull by the horns",
        "correct": "over one’s head",
        "example_s": "I'm not as good at math as you. Those equations might be easy for you, but they are _____.",
        "written": "over my head"
      },
      {
        "meaning": "very easy",
        "answer_1": "call it a day",
        "answer_2": "piece of cake",
        "answer_3": "a far cry from",
        "answer_4": "the last straw",
        "correct": "piece of cake",
        "example_s": "That test was a _____.",
        "written": "piece of cake"
      },
      {
        "meaning": "to do something without a plan",
        "answer_1": "play by ear",
        "answer_2": "fall into one’s lap",
        "answer_3": "let the cat out of the bag",
        "answer_4": "get cold feet",
        "correct": "play by ear",
        "example_s": "I’m going to play this weekend _____.",
        "written": "play by ear"
      },
      {
        "meaning": "to deal with a difficult situation in a very direct way",
        "answer_1": "hit the nail on the head",
        "answer_2": "call it a day",
        "answer_3": "take the bull by the horns",
        "answer_4": "the last straw",
        "correct": "take the bull by the horns",
        "example_s": "In this job, you’ll have to _____.",
        "written": "take the bull by the horns"
      },
      {
        "meaning": "to not take something you are told seriously, because it may be untrue",
        "answer_1": "take with a grain of salt",
        "answer_2": "once in a blue moon",
        "answer_3": "hit the nail on the head",
        "answer_4": "piece of cake",
        "correct": "take with a grain of salt",
        "example_s": "I usually take the news that I read on Facebook _____.",
        "written": "with a grain of salt"
      },
      {
        "meaning": "the last in a series of small bad things to happen that finally causes one big bad thing to happen",
        "answer_1": "the last straw",
        "answer_2": "head over heels",
        "answer_3": "on the fence",
        "answer_4": "on the ball",
        "correct": "the last straw",
        "example_s": "I forgave his poor work because he was new, but being late today was _____. I’m going to have to fire him.",
        "written": "the last straw"
      },
      {
        "meaning": "feeling ill",
        "answer_1": "under the weather",
        "answer_2": "cost an arm and a leg",
        "answer_3": "call it a day",
        "answer_4": "get cold feet",
        "correct": "under the weather",
        "example_s": "I’m _____, so I won’t be coming in to work today.",
        "written": "under the weather"
      }
];
//Sets variables for the actual practice set (data) and the selected items (item_select)
var data = [];
var item_select = [];

//updates the actual practice set data after items have been selected
function wpupdate(){
for (var i of item_select) {
  data.push(bigdata[i]);
} 
getRandomWord();
}

//Opens the items to be chosen by creating elements (a checkbox, the word or word part, and a break)
function Choose_Items(){
  document.getElementById('items_chooser').style.display="block";
  bigdata.forEach(function (problemifier, index){
    var checker = document.createElement("input");
    checker.setAttribute("type","checkbox");
    checker.id = "itemno_" + index;
    let current_item = problemifier.correct;
    let current_box = "itemno_" + index;
    var labeler = document.createElement("label");
    labeler.setAttribute("for", "itemno_" + index);
    labeler.id = "itemno_id_" + index;
    labeler.textContent = current_item;
    document.getElementById('items_chooser').appendChild(checker);
    document.getElementById('items_chooser').appendChild(labeler);
    if (item_select.length > 0){
      
      let comeonman = item_select.includes(index);
      if (comeonman == true){
        document.getElementById(current_box).checked=true;
      } else {
        document.getElementById(current_box).checked=false;
      } }
});
  
  data = [];
  item_select = [];
}


//Once the items have been chosen, this deletes the created elements and hides the choosing section again. Also calls the wpupdate function.
function Items_Chosen(){
  bigdata.forEach(function (problem, index){
    var get_check = "itemno_"+index;
    var get_label = "itemno_id_"+index;
    var act_label = document.getElementById(get_label);
    var act_check = document.getElementById(get_check);
    if (act_check.checked == true){
      item_select.push(index);
      
    }
    act_check.parentNode.removeChild(act_check);
    act_label.parentNode.removeChild(act_label);
  });
  document.getElementById('items_chooser').style.display="none";
  wpupdate();
}


//Sets the RN variable, which controls which item is being considered from the data set and the language.
var RN = 0;
var language_var = 'en-US'
function Check_Language(){
  language_var = document.getElementById('language_select').value;
}

//Reset functions re-hide the decision on whether answers were correct or not. They are called by other functions.
function reset_speech() {
    document.getElementById('good_p').style.visibility="hidden";
}

function reset_answers() {
    document.getElementById('good_a').style.visibility="hidden";
}

function reset_writing() {
    document.getElementById('good_w_a').style.visibility="hidden";
  }

//Sets RN to a random number in the data set and then initializes the questions.
function getRandomWord() {
    RN = Math.floor(Math.random() * data.length);
  Initialize();
    
}

//Sets RN to the next item in the set (or to the first if RN is the last item in the set) and then initializes the questions.
function getNextWord(){
  
  var combobreaker = data.length;
  if (RN == combobreaker){
    RN = 0;
    Initialize();
  } else {
    RN = RN+1;
    Initialize();
  }
  
  
}

//Sets all of the question information based on the value of RN
function Initialize() {
  document.getElementById('speech_output').value = "";
  document.getElementById('good_a').style.visibility="hidden";
  document.getElementById('good_p').style.visibility="hidden";
  document.getElementById('good_w_a').style.visibility="hidden";
  document.getElementById('meaning').innerHTML=data[RN].meaning;
  document.getElementById('answer1').innerHTML=data[RN].answer_1;
  document.getElementById('answer2').innerHTML=data[RN].answer_2;
  document.getElementById('answer3').innerHTML=data[RN].answer_3;
  document.getElementById('answer4').innerHTML=data[RN].answer_4;
  document.getElementById('e_sentence').innerHTML=data[RN].example_s;
  document.getElementById('example_word').innerHTML=data[RN].correct;
  document.getElementById('example_word').style.display="inline";
  correct_answer=data[RN].correct;
  
}

//Checks for if answer "A" is selected.
function answeredA() {
    if (data[RN].answer_1 === correct_answer)
    {
        document.getElementById('good_a').innerHTML="Correct!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(106, 201, 29)";
        setTimeout(reset_answers, 3500);
    } else {
        document.getElementById('good_a').innerHTML="Incorrect!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(241, 16, 16)";
        setTimeout(reset_answers, 3500);
    }    
}

//Checks for if answer "B" is selected.
function answeredB() {
    correct_answer=data[RN].correct;
    if (data[RN].answer_2 === correct_answer)
    {
        document.getElementById('good_a').innerHTML="Correct!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(106, 201, 29)";
        setTimeout(reset_answers, 3500);
    } else {
        document.getElementById('good_a').innerHTML="Incorrect!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(241, 16, 16)";
        setTimeout(reset_answers, 3500);
    }    
}

//Checks for if answer "C" is selected.
function answeredC() {
    correct_answer=data[RN].correct;
    if (data[RN].answer_3 === correct_answer)
    {
        document.getElementById('good_a').innerHTML="Correct!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(106, 201, 29)";
        setTimeout(reset_answers, 3500);
    } else {
        document.getElementById('good_a').innerHTML="Incorrect!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(241, 16, 16)";
        setTimeout(reset_answers, 3500);
    }    
}

//Checks for if answer "D" is selected.
function answeredD() {
    correct_answer=data[RN].correct;
    if (data[RN].answer_4 === correct_answer)
    {
        document.getElementById('good_a').innerHTML="Correct!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(106, 201, 29)";
        setTimeout(reset_answers, 3500);
    } else {
        document.getElementById('good_a').innerHTML="Incorrect!";
        document.getElementById('good_a').style.visibility="visible";
        document.getElementById('good_a').style.color="rgb(241, 16, 16)";
        setTimeout(reset_answers, 3500);
    }    
}

//Provides the listening example via text-to-speech, based on language selection.
function Listen() {
    var word = data[RN].written;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = language_var;
    utter.text = word;
    window.speechSynthesis.speak(utter);
}

//Initializes ASR for speaking question and handles results.
function init() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = language_var;
    recognition.interimResults = true;
    recognition.onresult = disp;
}

function disp(event) {
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; ++i) {
        if (results[i].isFinal) {
            document.getElementById('speech_output').value += results[i][0].transcript;
        }
    }
}

//Begins the ASR, including init function, and also sets the stop / time out.
function start() {
    document.getElementById('speech_output').value = "";
    init();
    recognition.start();
    setTimeout(stop, 3000);
}

//Checks user answer to written question
function WroteSomething() {
    var wordme = data[RN].written;
    var writing_checked = document.getElementById('boxy-box').value;
    if (wordme.toLowerCase() === writing_checked.toLowerCase()) {
      document.getElementById('good_w_a').innerHTML="Good Job!";
      document.getElementById('good_w_a').style.visibility="visible";
      document.getElementById('good_w_a').style.color="rgb(106, 201, 29)";
  } else {
      document.getElementById('good_w_a').innerHTML="Try Again!";
      document.getElementById('good_w_a').style.visibility="visible";
      document.getElementById('good_w_a').style.color="rgb(241, 16, 16)";
  }
  setTimeout(reset_writing, 4000)
  }
  
  //Displays answer to user upon click.
  function SeeWritingAnswer() {
      document.getElementById('good_w_a').innerHTML=data[RN].written;
      document.getElementById('good_w_a').style.visibility="visible";
      document.getElementById('good_w_a').style.color="rgb(0, 0, 0)";
    setTimeout(reset_writing, 4000)
  }


//Checks the pronunciation and then resets the evaluation.
function check_speech () {
    var wordme = data[RN].written;
    var proncheck = document.getElementById('speech_output').value;
    if (wordme.toLowerCase() === proncheck.toLowerCase()) {
        document.getElementById('good_p').innerHTML="Good Job!";
        document.getElementById('good_p').style.visibility="visible";
        document.getElementById('good_p').style.color="rgb(106, 201, 29)";
    } else {
        document.getElementById('good_p').innerHTML="Try Again!";
        document.getElementById('good_p').style.visibility="visible";
        document.getElementById('good_p').style.color="rgb(241, 16, 16)";
    }
    setTimeout(reset_speech, 4000)
}

//Just used to stop the ASR.
function stop(){
    recognition.onend = null;
    recognition.stop();
    setTimeout(check_speech, 500);
  }

//Checks the checkboxes to see what types of questions the user wants and acts accordingly.
function Check_Vocab(){
  var checkBox1 = document.getElementById('vocab_cb');
  if (checkBox1.checked == true){
    document.getElementById('all_mc').style.display="block";

  } else {
    document.getElementById('all_mc').style.display="none";
  }
}

function Check_SL(){
  var checkBox2 = document.getElementById('s_and_l_cb');
  if (checkBox2.checked == true){
    document.getElementById('all_sl').style.display="block";

  } else {
    document.getElementById('all_sl').style.display="none";
  }
}

function Check_Writing(){
    var checkBox1 = document.getElementById('writing_cb');
    if (checkBox1.checked == true){
      document.getElementById('writing').style.display="block";
  
    } else {
      document.getElementById('writing').style.display="none";
    }
  }