const data = [
  {
    "root": "bi, du",
    "answer_1": "two",
    "answer_2": "none",
    "answer_3": "health",
    "answer_4": "friendly",
    "correct": "two",
    "example_word": "dual"
  },
  {
    "root": "tri",
    "answer_1": "competition",
    "answer_2": "try",
    "answer_3": "three",
    "answer_4": "shape",
    "correct": "three",
    "example_word": "triangle"
  },
  {
    "root": "qua(r)t, tetra",
    "answer_1": "five",
    "answer_2": "four",
    "answer_3": "earth",
    "answer_4": "water",
    "correct": "four",
    "example_word": "quarter"
  },
  {
    "root": "quint, pent",
    "answer_1": "four",
    "answer_2": "catch",
    "answer_3": "last",
    "answer_4": "five",
    "correct": "five",
    "example_word": "quintuplet"
  },
  {
    "root": "anim, bio",
    "answer_1": "star",
    "answer_2": "science",
    "answer_3": "living",
    "answer_4": "believe",
    "correct": "living",
    "example_word": "biological"
  },
  {
    "root": "aqua, hyrdo",
    "answer_1": "water",
    "answer_2": "home, enviroment",
    "answer_3": "animal",
    "answer_4": "drink",
    "correct": "water",
    "example_word": "aquatic"
  },
  {
    "root": "agri",
    "answer_1": "aquatic",
    "answer_2": "farm",
    "answer_3": "star",
    "answer_4": "field",
    "correct": "field",
    "example_word": "agriculture"
  },
  {
    "root": "astro",
    "answer_1": "star",
    "answer_2": "sky",
    "answer_3": "space",
    "answer_4": "hard, last",
    "correct": "star",
    "example_word": "astronaut"
  },
  {
    "root": "capt / cept",
    "answer_1": "body",
    "answer_2": "catch",
    "answer_3": "fly",
    "answer_4": "stick",
    "correct": "catch",
    "example_word": "intercept"
  },
  {
    "root": "corp, phys",
    "answer_1": "army",
    "answer_2": "body",
    "answer_3": "fight",
    "answer_4": "catch",
    "correct": "body",
    "example_word": "physician"
  },
  {
    "root": "cred",
    "answer_1": "four",
    "answer_2": "catch",
    "answer_3": "guide, gather",
    "answer_4": "believe",
    "correct": "believe",
    "example_word": "incredible"
  },
  {
    "root": "dict",
    "answer_1": "say, word",
    "answer_2": "book",
    "answer_3": "believe",
    "answer_4": "bend",
    "correct": "say, word",
    "example_word": "dictionary"
  },
  {
    "root": "dom, eco-",
    "answer_1": "earth",
    "answer_2": "win",
    "answer_3": "home, enviroment",
    "answer_4": "recycle",
    "correct": "home, enviroment",
    "example_word": "domestic"
  },
  {
    "root": "duc(t)",
    "answer_1": "bird",
    "answer_2": "guide, gather",
    "answer_3": "tape",
    "answer_4": "hard, last",
    "correct": "guide, gather",
    "example_word": "produce"
  },
  {
    "root": "dur",
    "answer_1": "time",
    "answer_2": "home, enviroment",
    "answer_3": "catch",
    "answer_4": "hard, last",
    "correct": "hard, last",
    "example_word": "durable"
  },
  {
    "root": "equ, homo",
    "answer_1": "same",
    "answer_2": "horse",
    "answer_3": "two",
    "answer_4": "opposite",
    "correct": "same",
    "example_word": "homogeneous"
  },
  {
    "root": "flect(x)",
    "answer_1": "look",
    "answer_2": "four",
    "answer_3": "bend",
    "answer_4": "shape",
    "correct": "bend",
    "example_word": "reflect"
  },
  {
    "root": "form, morph",
    "answer_1": "living",
    "answer_2": "shape",
    "answer_3": "change",
    "answer_4": "bend",
    "correct": "shape",
    "example_word": "metamorphosis"
  },
  {
    "root": "herb, botan",
    "answer_1": "plant",
    "answer_2": "home, enviroment",
    "answer_3": "guide, gather",
    "answer_4": "water",
    "correct": "plant",
    "example_word": "botany"
  },
  {
    "root": "hemo",
    "answer_1": "same",
    "answer_2": "living",
    "answer_3": "plant",
    "answer_4": "blood",
    "correct": "blood",
    "example_word": "hemorrhage"
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



