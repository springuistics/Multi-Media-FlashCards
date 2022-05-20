const data = [
  {
    "meaning": "to discover or learn",
    "answer_1": "find out",
    "answer_2": "set out",
    "answer_3": "take over",
    "answer_4": "follow up",
    "correct": "find out",
    "example_s": "We conduct research in order to _____________ how the world works."
  },
  {
    "meaning": "leave or exit; become known",
    "answer_1": "find out",
    "answer_2": "set out",
    "answer_3": "get out",
    "answer_4": "point out",
    "correct": "get out",
    "example_s": "I don't want it to ________ that I failed my math class last year."
  },
  {
    "meaning": "leave or exit; disappear or break; take part in social activities (such as dating)",
    "answer_1": "go out",
    "answer_2": "point out",
    "answer_3": "follow up",
    "answer_4": "take up",
    "correct": "go out",
    "example_s": "You have to turn on the gas quickly so that the fire doesn't _______."
  },
  {
    "meaning": "direct someone's attention; mention or discuss",
    "answer_1": "point out",
    "answer_2": "take over",
    "answer_3": "end up",
    "answer_4": "get up",
    "correct": "point out",
    "example_s": "Dr. Stevens will ________ some important points to study for next week's test."
  },
  {
    "meaning": "display or arrange; begin something with a purpose",
    "answer_1": "followed up",
    "answer_2": "sorted out",
    "answer_3": "came up",
    "answer_4": "set out",
    "correct": "set out",
    "example_s": "I finished all of the tasks that I had _______ to do today."
  },
  {
    "meaning": "find, discover, or solve a problem",
    "answer_1": "turn out",
    "answer_2": "sort out",
    "answer_3": "set up",
    "answer_4": "get up",
    "correct": "sort out",
    "example_s": "The class TA helps to ________ the mistakes that we make in our computer code."
  },
  {
    "meaning": "be the end result; push outwards or put out; produce rapidly; show up",
    "answer_1": "turn out",
    "answer_2": "sort out",
    "answer_3": "set up",
    "answer_4": "follow up",
    "correct": "turn out",
    "example_s": "It could ________ that we don't have to write a lab report this week, so you shouldn't start writing your report just yet."
  },
  {
    "meaning": "solve a problem through effort; exercise; end with a good or effective result",
    "answer_1": "set out",
    "answer_2": "set up",
    "answer_3": "work out",
    "answer_4": "get up",
    "correct": "work out",
    "example_s": "It took me three hours, but I was finally able to ________ the answers to the math homework."
  },
  {
    "meaning": "get control or possesion of something; become responsible for something",
    "answer_1": "find out",
    "answer_2": "take over",
    "answer_3": "follow up",
    "answer_4": "go out",
    "correct": "take over",
    "example_s": "Professor Nakayma is going to have a baby, so Dr. Tanaka will ________ her teaching duties next semester."
  },
  {
    "meaning": "pass from one end to the other; experience",
    "answer_1": "go through",
    "answer_2": "go out",
    "answer_3": "work up",
    "answer_4": "point out",
    "correct": "go through",
    "example_s": "I'm sorry that you had to ____________ such an ordeal."
  },
  {
    "meaning": "finish or reach a result or conclusion (often unexpected)",
    "answer_1": "make out",
    "answer_2": "find out",
    "answer_3": "end up",
    "answer_4": "set up",
    "correct": "end up",
    "example_s": "How hard you study will determine which laboratory you ________ in."
  },
  {
    "meaning": "pursue to take further action; remain in contact properly",
    "answer_1": "follow up",
    "answer_2": "turn out",
    "answer_3": "end up",
    "answer_4": "sort out",
    "correct": "follow up",
    "example_s": "If you have more questions, you can _________ with me later."
  },
  {
    "meaning": "rise or ascend; awaken",
    "answer_1": "go through",
    "answer_2": "turn out",
    "answer_3": "get up",
    "answer_4": "find out",
    "correct": "get up",
    "example_s": "When you fail, it is important to _______, dust yourself off, and try again."
  },
  {
    "meaning": "hold and lift; clean or tidy; collect; acquire; receive a signal; resume",
    "answer_1": "go through",
    "answer_2": "set out",
    "answer_3": "pick up",
    "answer_4": "follow up",
    "correct": "pick up",
    "example_s": "Satellites can ________ radio signals sent from Earth."
  },
  {
    "meaning": "place upright or in a particular fashion; found or begin; make preparations",
    "answer_1": "take up",
    "answer_2": "set up",
    "answer_3": "take over",
    "answer_4": "point out",
    "correct": "set up",
    "example_s": "Be sure to _________ the equipment properly before starting your work."
  },
  {
    "meaning": "hold and lift; occupy; assume responsibility or purpose; begin an endeavor",
    "answer_1": "sort out",
    "answer_2": "get out",
    "answer_3": "get up",
    "answer_4": "take up",
    "correct": "take up",
    "example_s": "Sarah is going to __________ studying physics at Dr. Jones' laboratory next semester."
  }
];


var RN = "";
var language_var = 'en-US'
function Check_Language(){
  language_var = document.getElementById('language_select').value;
}

function reset_speech() {
    document.getElementById('good_p').style.visibility="hidden";
}

function reset_answers() {
    document.getElementById('good_a').style.visibility="hidden";
}

function getRandomWord() {
    document.getElementById('speech_output').value = "";
    document.getElementById('good_a').style.visibility="hidden";
    document.getElementById('good_p').style.visibility="hidden";
    RN = Math.floor(Math.random() * data.length);
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

function Listen() {
    var word = data[RN].correct;
    let utter = new SpeechSynthesisUtterance();
    utter.lang=language_var;
    utter.text = word;
    window.speechSynthesis.speak(utter);
}

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

function start() {
    document.getElementById('speech_output').value = "";
    init();
    recognition.start();
    setTimeout(stop, 3000);
}

function check_speech () {
    var wordme = data[RN].correct;
    if (wordme === document.getElementById('speech_output').value) {
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

function stop(){
    recognition.onend = null;
    recognition.stop();
    setTimeout(check_speech, 1000);
  }

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

function check_meaning(){
  var checkBox2 = document.getElementById('meaning_cb');
  if (checkBox2.checked == true){
    document.getElementById('prompt_meaning').style.display="block";
    document.getElementById('meaning').style.display="block";

  } else {
    document.getElementById('prompt_meaning').style.display="none";
    document.getElementById('meaning').style.display="none";
  }
}

function check_example(){
  var checkBox2 = document.getElementById('example_cb');
  if (checkBox2.checked == true){
    document.getElementById('prompt_sentence').style.display="block";
    document.getElementById('e_sentence').style.display="block";

  } else {
    document.getElementById('prompt_sentence').style.display="none";
    document.getElementById('e_sentence').style.display="none";
  }
}
