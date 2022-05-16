const data = [
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

function reset_writing() {
  document.getElementById('good_w_a').style.visibility="hidden";
}

function getRandomWord() {
    document.getElementById('speech_output').value = "";
    document.getElementById('good_a').style.visibility="hidden";
    document.getElementById('good_p').style.visibility="hidden";
    document.getElementById('good_w_a').style.visibility="hidden";
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
    var word = data[RN].written;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = language_var;
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

function SeeWritingAnswer() {
    document.getElementById('good_w_a').innerHTML=data[RN].written;
    document.getElementById('good_w_a').style.visibility="visible";
    document.getElementById('good_w_a').style.color="rgb(0, 0, 0)";
  setTimeout(reset_writing, 4000)
}

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

function stop(){
    recognition.onend = null;
    recognition.stop();
    setTimeout(check_speech, 1500);
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

function Check_Writing(){
  var checkBox1 = document.getElementById('writing_cb');
  if (checkBox1.checked == true){
    document.getElementById('writing').style.display="block";

  } else {
    document.getElementById('writing').style.display="none";
  }
}

