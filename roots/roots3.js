const data = [
    {
        "root": "pend",
        "answer_1": "five",
        "answer_2": "hang",
        "answer_3": "wait",
        "answer_4": "foot",
        "correct": "hang",
        "example_word": "suspend"
      },
      {
        "root": "port",
        "answer_1": "carry",
        "answer_2": "boat",
        "answer_3": "wine",
        "answer_4": "break",
        "correct": "carry",
        "example_word": "portable, export"
      },
      {
        "root": "rupt",
        "answer_1": "throw",
        "answer_2": "ground, earth",
        "answer_3": "volcano",
        "answer_4": "break",
        "correct": "break",
        "example_word": "erupt"
      },
      {
        "root": "scribe, script, graph",
        "answer_1": "sun",
        "answer_2": "statistic, table",
        "answer_3": "record, write",
        "answer_4": "listen",
        "correct": "record, write",
        "example_word": "graphic"
      },
      {
        "root": "sol, heli",
        "answer_1": "sound",
        "answer_2": "soldier",
        "answer_3": "atmosphere",
        "answer_4": "sun",
        "correct": "sun",
        "example_word": "parasol"
      },
      {
        "root": "sol",
        "answer_1": "alone",
        "answer_2": "asleep",
        "answer_3": "look, charactistic",
        "answer_4": "sound",
        "correct": "alone",
        "example_word": "desolate"
      },
      {
        "root": "son, phon",
        "answer_1": "see",
        "answer_2": "sound",
        "answer_3": "technology",
        "answer_4": "mind, soul",
        "correct": "sound",
        "example_word": "phonology"
      },
      {
        "root": "spec",
        "answer_1": "bend",
        "answer_2": "place, location",
        "answer_3": "look, charactistic",
        "answer_4": "glass",
        "correct": "look, charactistic",
        "example_word": "inspect"
      },
      {
        "root": "tempor, chron",
        "answer_1": "soften",
        "answer_2": "time",
        "answer_3": "order",
        "answer_4": "body",
        "correct": "time",
        "example_word": "chronological"
      },
      {
        "root": "terr, geo",
        "answer_1": "ground, earth",
        "answer_2": "star",
        "answer_3": "fearful",
        "answer_4": "study, reasoning",
        "correct": "ground, earth",
        "example_word": "territory"
      },
      {
        "root": "therm",
        "answer_1": "cool",
        "answer_2": "harm",
        "answer_3": "pull",
        "answer_4": "heat",
        "correct": "heat",
        "example_word": "thermometer"
      },
      {
        "root": "tract",
        "answer_1": "truck",
        "answer_2": "pull",
        "answer_3": "push",
        "answer_4": "stomach",
        "correct": "pull",
        "example_word": "tractor"
      },
      {
        "root": "vac",
        "answer_1": "clean",
        "answer_2": "full",
        "answer_3": "empty",
        "answer_4": "turn, change",
        "correct": "empty",
        "example_word": "evacuate"
      },
      {
        "root": "vert",
        "answer_1": "turn, change",
        "answer_2": "empty",
        "answer_3": "green",
        "answer_4": "plant",
        "correct": "turn, change",
        "example_word": "vertical"
      },
      {
        "root": "vis, scope",
        "answer_1": "large",
        "answer_2": "body",
        "answer_3": "sound",
        "answer_4": "see",
        "correct": "see",
        "example_word": "microscope"
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
    document.getElementById('prefix').innerHTML=data[RN].root;
    document.getElementById('answer1').innerHTML=data[RN].answer_1;
    document.getElementById('answer2').innerHTML=data[RN].answer_2;
    document.getElementById('answer3').innerHTML=data[RN].answer_3;
    document.getElementById('answer4').innerHTML=data[RN].answer_4;
    document.getElementById('example_word').innerHTML=data[RN].example_word;
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
    var word = data[RN].example_word;
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

function check_speech () {
    var wordme = data[RN].example_word;
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



