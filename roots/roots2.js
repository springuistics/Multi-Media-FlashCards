const data = [
  {
    "root": "hetero",
    "answer_1": "difficult",
    "answer_2": "different",
    "answer_3": "heat",
    "answer_4": "human",
    "correct": "different",
    "example_word": "heterogeneous"
  },
  {
    "root": "homin, athrop",
    "answer_1": "antelope",
    "answer_2": "same",
    "answer_3": "human",
    "answer_4": "against",
    "correct": "human",
    "example_word": "hominoid"
  },
  {
    "root": "ign, pyr",
    "answer_1": "fire",
    "answer_2": "sign",
    "answer_3": "private",
    "answer_4": "five",
    "correct": "fire",
    "example_word": "ignite"
  },
  {
    "root": "ject",
    "answer_1": "milk",
    "answer_2": "catch",
    "answer_3": "jump",
    "answer_4": "throw",
    "correct": "throw",
    "example_word": "eject"
  },
  {
    "root": "lact",
    "answer_1": "lack",
    "answer_2": "tongue, language",
    "answer_3": "light",
    "answer_4": "milk",
    "correct": "milk",
    "example_word": "lactic acid"
  },
  {
    "root": "ling, lang",
    "answer_1": "languish",
    "answer_2": "tongue, language",
    "answer_3": "tough",
    "answer_4": "place, position",
    "correct": "tongue, language",
    "example_word": "bilingual"
  },
  {
    "root": "loc",
    "answer_1": "place, position",
    "answer_2": "lock",
    "answer_3": "study, reasoning",
    "answer_4": "body",
    "correct": "place, position",
    "example_word": "location"
  },
  {
    "root": "log",
    "answer_1": "wood",
    "answer_2": "mind",
    "answer_3": "study, reasoning",
    "answer_4": "tongue, language",
    "correct": "study, reasoning",
    "example_word": "biology"
  },
  {
    "root": "lum(in), phot",
    "answer_1": "light",
    "answer_2": "sound",
    "answer_3": "fast",
    "answer_4": "star",
    "correct": "light",
    "example_word": "photosynthesis"
  },
  {
    "root": "max, macro",
    "answer_1": "mind, soul",
    "answer_2": "measure",
    "answer_3": "small",
    "answer_4": "large",
    "correct": "large",
    "example_word": "maximum"
  },
  {
    "root": "ment, psych(o)",
    "answer_1": "fire",
    "answer_2": "means",
    "answer_3": "mind, soul",
    "answer_4": "heart",
    "correct": "mind, soul",
    "example_word": "psychology"
  },
  {
    "root": "meter",
    "answer_1": "run",
    "answer_2": "measure",
    "answer_3": "meaning",
    "answer_4": "human",
    "correct": "measure",
    "example_word": "kilometer"
  },
  {
    "root": "mini, micro",
    "answer_1": "large",
    "answer_2": "small",
    "answer_3": "same",
    "answer_4": "alone",
    "correct": "small",
    "example_word": "microscope"
  },
  {
    "root": "mort, necr",
    "answer_1": "death",
    "answer_2": "nector",
    "answer_3": "birth",
    "answer_4": "necessary",
    "correct": "death",
    "example_word": "necrophobia"
  },
  {
    "root": "nat/nai/nasc, gen",
    "answer_1": "death",
    "answer_2": "natural",
    "answer_3": "birth",
    "answer_4": "generic",
    "correct": "birth",
    "example_word": "generate"
  },
  {
    "root": "nov, neo",
    "answer_1": "birth",
    "answer_2": "all",
    "answer_3": "old",
    "answer_4": "new",
    "correct": "new",
    "example_word": "innovate"
  },
  {
    "root": "omni, pan",
    "answer_1": "all",
    "answer_2": "cook",
    "answer_3": "god",
    "answer_4": "see",
    "correct": "all",
    "example_word": "panorama"
  },
  {
    "root": "path",
    "answer_1": "foot",
    "answer_2": "suffering, feeling",
    "answer_3": "study, reasoning",
    "answer_4": "way through",
    "correct": "suffering, feeling",
    "example_word": "sympathy"
  },
  {
    "root": "ped, pod",
    "answer_1": "push",
    "answer_2": "hand",
    "answer_3": "foot",
    "answer_4": "place, position",
    "correct": "foot",
    "example_word": "pedal"
  },
  {
    "root": "pel",
    "answer_1": "push",
    "answer_2": "place, position",
    "answer_3": "pull",
    "answer_4": "bone",
    "correct": "push",
    "example_word": "expel"
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



