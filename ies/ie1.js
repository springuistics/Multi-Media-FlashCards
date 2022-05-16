const data = [
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

