const data = [
  {
    "word": "devote",
    "sentence": "Rare individuals devote their lives to the service of others.",
    "answer_1": "dedicate",
    "answer_2": "radiate",
    "answer_3": "enclose",
    "answer_4": "improve",
    "correct": "dedicate"
  },
  {
    "word": "displayed",
    "sentence": "Your permit must be displayed at the entrance gate.",
    "answer_1": "used",
    "answer_2": "searched",
    "answer_3": "radiated",
    "answer_4": "shown",
    "correct": "shown"
  },
  {
    "word": "drawbacks",
    "sentence": "His proposal has too many drawbacks for us to proceed.",
    "answer_1": "trends",
    "answer_2": "displays",
    "answer_3": "problems",
    "answer_4": "enhancements",
    "correct": "problems"
  },
  {
    "word": "emanating",
    "sentence": "This device is used to detect light emanating from distant stars.",
    "answer_1": "surrounding",
    "answer_2": "radiating",
    "answer_3": "comprehensive",
    "answer_4": "enclosing",
    "correct": "radiating"
  },
  {
    "word": "employed",
    "sentence": "We employed a novel technique to gather the relevant data.",
    "answer_1": "enhanced",
    "answer_2": "displayed",
    "answer_3": "used",
    "answer_4": "envisioned",
    "correct": "used"
  },
  {
    "word": "enclosing",
    "sentence": "A fence was built enclosing the flower garden.",
    "answer_1": "comprehensing",
    "answer_2": "surrounding",
    "answer_3": "dedicating",
    "answer_4": "employing",
    "correct": "surrounding"
  },
  {
    "word": "enhance",
    "sentence": "She wants to enhance her speaking skills.",
    "answer_1": "improve",
    "answer_2": "trend",
    "answer_3": "devote",
    "answer_4": "display",
    "correct": "improve"
  },
  {
    "word": "envision",
    "sentence": "I envision us starting the project sometime in October.",
    "answer_1": "enhance",
    "answer_2": "dedicate",
    "answer_3": "imagine",
    "answer_4": "forage",
    "correct": "imagine"
  },
  {
    "word": "fad",
    "sentence": "Brightly dyed hair has become a fad among teenagers.",
    "answer_1": "trend",
    "answer_2": "display",
    "answer_3": "drawback",
    "answer_4": "envision",
    "correct": "trend"
  },
  {
    "word": "forage",
    "sentence": "Wild chimps forage for food for up to 18 hours a day.",
    "answer_1": "devote",
    "answer_2": "search",
    "answer_3": "holistic",
    "answer_4": "employ",
    "correct": "search"
  },
  {
    "word": "holistic",
    "sentence": "Deep learning requires a holistic teaching approach.",
    "answer_1": "shown",
    "answer_2": "comprehensive",
    "answer_3": "problematic",
    "answer_4": "emanating",
    "correct": "comprehensive"
  },
  {
    "word": "dedicate",
    "sentence": "Rare individuals dedicate their lives to the service of others.",
    "answer_1": "employ",
    "answer_2": "enclose",
    "answer_3": "devote",
    "answer_4": "radiate",
    "correct": "devote"
  },
  {
    "word": "shown",
    "sentence": "Your permit must be shown at the entrance gate.",
    "answer_1": "surrounded",
    "answer_2": "displayed",
    "answer_3": "envisioned",
    "answer_4": "imagined",
    "correct": "displayed"
  },
  {
    "word": "problems",
    "sentence": "His proposal has too many problems for us to proceed.",
    "answer_1": "fads",
    "answer_2": "forages",
    "answer_3": "drawbacks",
    "answer_4": "enclosures",
    "correct": "drawbacks"
  },
  {
    "word": "radiating",
    "sentence": "This device is used to detect light radiating from distant stars.",
    "answer_1": "surrounding",
    "answer_2": "improving",
    "answer_3": "emanating",
    "answer_4": "enhancing",
    "correct": "emanating"
  },
  {
    "word": "used",
    "sentence": "We used a novel technique to gather the relevant data.",
    "answer_1": "employed",
    "answer_2": "dedicated",
    "answer_3": "envisioned",
    "answer_4": "searched",
    "correct": "employed"
  },
  {
    "word": "surrounding",
    "sentence": "A fence was built surrounding the flower garden.",
    "answer_1": "envisioning",
    "answer_2": "devoting",
    "answer_3": "enclosing",
    "answer_4": "foraging",
    "correct": "enclosing"
  },
  {
    "word": "improve",
    "sentence": "She wants to improve her speaking skills.",
    "answer_1": "devote",
    "answer_2": "trend",
    "answer_3": "enhance",
    "answer_4": "radiate",
    "correct": "enhance"
  },
  {
    "word": "imagine",
    "sentence": "I imagine us starting the project sometime in October.",
    "answer_1": "emanate",
    "answer_2": "envision",
    "answer_3": "enhance",
    "answer_4": "fad",
    "correct": "envision"
  },
  {
    "word": "trend",
    "sentence": "Brightly dyed hair has become a trend among teenagers.",
    "answer_1": "forage",
    "answer_2": "holistic",
    "answer_3": "display",
    "answer_4": "fad",
    "correct": "fad"
  },
  {
    "word": "search",
    "sentence": "Wild chimps search for food for up to 18 hours a day.",
    "answer_1": "emanate",
    "answer_2": "forage",
    "answer_3": "employ",
    "answer_4": "enclose",
    "correct": "forage"
  },
  {
    "word": "comprehensive",
    "sentence": "Deep learning requires a comprehensive teaching approach.",
    "answer_1": "dedicated",
    "answer_2": "holistic",
    "answer_3": "displayed",
    "answer_4": "improved",
    "correct": "holistic"
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



