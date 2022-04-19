const data = [
  {
    "word": "aesthetically",
    "sentence": "The city’s unique architecture is very aesthetically pleasing.",
    "answer_1": "beautiful",
    "answer_2": "finely",
    "answer_3": "artistically",
    "answer_4": "supposedly",
    "correct": "artistically"
  },
  {
    "word": "allegedly",
    "sentence": "There are studies allegedly showing that this treatment works.",
    "answer_1": "indistinctly",
    "answer_2": "aesthetically",
    "answer_3": "supposedly",
    "answer_4": "conversely",
    "correct": "supposedly"
  },
  {
    "word": "appellation",
    "sentence": "Elvis earned the appelation the King due to his popularity.",
    "answer_1": "moniker",
    "answer_2": "ghost",
    "answer_3": "award",
    "answer_4": "money of",
    "correct": "moniker"
  },
  {
    "word": "archetype",
    "sentence": "Pluto is the perfect archetype of a dwarf planet.",
    "answer_1": "style",
    "answer_2": "model",
    "answer_3": "function",
    "answer_4": "shape",
    "correct": "model"
  },
  {
    "word": "assembling",
    "sentence": "The research team will be assembling in the laboratory at 9:00.",
    "answer_1": "going",
    "answer_2": "presenting",
    "answer_3": "gathering",
    "answer_4": "researching",
    "correct": "gathering"
  },
  {
    "word": "blurry",
    "sentence": "His image was blurry due to the poor Wi-Fi connection.",
    "answer_1": "visible",
    "answer_2": "finely",
    "answer_3": "banned",
    "answer_4": "indistinct",
    "correct": "indistinct"
  },
  {
    "word": "bound",
    "sentence": "An electron is bound to a nucleus by electromagnetism.",
    "answer_1": "widespread",
    "answer_2": "tied",
    "answer_3": "combination",
    "answer_4": "modelled",
    "correct": "tied"
  },
  {
    "word": "common",
    "sentence": "Environmental courses have become common recently.",
    "answer_1": "concoction",
    "answer_2": "conserved",
    "answer_3": "widespread",
    "answer_4": "monikered",
    "correct": "widespread"
  },
  {
    "word": "concoction",
    "sentence": "He used an interesting concoction of chemicals.",
    "answer_1": "combination",
    "answer_2": "negation",
    "answer_3": "appellation",
    "answer_4": "archetype",
    "correct": "combination"
  },
  {
    "word": "conserve",
    "sentence": "In fact, camels do not conserve water in their humps.",
    "answer_1": "blurry",
    "answer_2": "indistinct",
    "answer_3": "retain",
    "answer_4": "combine",
    "correct": "retain"
  },
  {
    "word": "counteracted",
    "sentence": "Her new policies completely counteracted the previous rules.",
    "answer_1": "negated",
    "answer_2": "tied",
    "answer_3": "widespread",
    "answer_4": "concocted",
    "correct": "negated"
  },
  {
    "word": "artistically",
    "sentence": "The city’s unique architecture is very artistically pleasing.",
    "answer_1": "aesthetically",
    "answer_2": "finely",
    "answer_3": "supposedly",
    "answer_4": "beautiful",
    "correct": "aesthetically"
  },
  {
    "word": "supposedly",
    "sentence": "There are studies supposedly showing that this treatment works.",
    "answer_1": "aesthetically",
    "answer_2": "indistinctly",
    "answer_3": "allegedly",
    "answer_4": "conversely",
    "correct": "allegedly"
  },
  {
    "word": "moniker",
    "sentence": "Elvis earned the moniker the King due to his popularity.",
    "answer_1": "money of",
    "answer_2": "appellation",
    "answer_3": "award",
    "answer_4": "ghost",
    "correct": "appellation"
  },
  {
    "word": "model",
    "sentence": "Pluto is the perfect model of a dwarf planet.",
    "answer_1": "archetype",
    "answer_2": "function",
    "answer_3": "shape",
    "answer_4": "style",
    "correct": "archetype"
  },
  {
    "word": "gathering",
    "sentence": "The research team will be gathering in the laboratory at 9:00.",
    "answer_1": "researching",
    "answer_2": "presenting",
    "answer_3": "assembling",
    "answer_4": "going",
    "correct": "assembling"
  },
  {
    "word": "indistinct",
    "sentence": "His image was indistinct due to the poor Wi-Fi connection.",
    "answer_1": "blurry",
    "answer_2": "banned",
    "answer_3": "visible",
    "answer_4": "finely",
    "correct": "blurry"
  },
  {
    "word": "tied",
    "sentence": "An electron is tied to a nucleus by electromagnetism.",
    "answer_1": "combination",
    "answer_2": "bound",
    "answer_3": "modelled",
    "answer_4": "widespread",
    "correct": "bound"
  },
  {
    "word": "widespread",
    "sentence": "Environmental courses have become widespread recently.",
    "answer_1": "monikered",
    "answer_2": "concoction",
    "answer_3": "common",
    "answer_4": "conserved",
    "correct": "common"
  },
  {
    "word": "combination",
    "sentence": "He used an interesting combination of chemicals.",
    "answer_1": "concoction",
    "answer_2": "archetype",
    "answer_3": "negation",
    "answer_4": "appellation",
    "correct": "concoction"
  },
  {
    "word": "retain",
    "sentence": "In fact, camels do not retain water in their humps.",
    "answer_1": "blurry",
    "answer_2": "conserve",
    "answer_3": "combine",
    "answer_4": "indistinct",
    "correct": "conserve"
  },
  {
    "word": "negated",
    "sentence": "Her new policies completely negated the previous rules.",
    "answer_1": "tied",
    "answer_2": "widespread",
    "answer_3": "concocted",
    "answer_4": "counteracted",
    "correct": "counteracted"
  }
];


var RN = "";

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
    document.getElementById('word').innerHTML=data[RN].word;
    document.getElementById('q_sentence').innerHTML=data[RN].sentence;
    document.getElementById('answer1').innerHTML=data[RN].answer_1;
    document.getElementById('answer2').innerHTML=data[RN].answer_2;
    document.getElementById('answer3').innerHTML=data[RN].answer_3;
    document.getElementById('answer4').innerHTML=data[RN].answer_4;
    document.getElementById('example_word').innerHTML=data[RN].word;
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
    var word = data[RN].word;
    let utter = new SpeechSynthesisUtterance();
    utter.lang='en-US';
    utter.text = word;
    window.speechSynthesis.speak(utter);
}

function init() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
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
    var wordme = data[RN].word;
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



