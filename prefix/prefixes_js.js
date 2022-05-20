const data = [
    {
        "prefix": "a-, non-",
        "answer_1": "without",
        "answer_2": "around",
        "answer_3": "not, away",
        "answer_4": "between",
        "correct": "without",
        "example_word": "apathy"
      },
      {
        "prefix": "anti-, contra-",
        "answer_1": "through, across",
        "answer_2": "forward, giving",
        "answer_3": "against, opposing",
        "answer_4": "afar",
        "correct": "against, opposing",
        "example_word": "contradiction"
      },
      {
        "prefix": "ad-, at-",
        "answer_1": "removing, down",
        "answer_2": "towards",
        "answer_3": "wrong, bad, sick",
        "answer_4": "under",
        "correct": "towards",
        "example_word": "advance"
      },
      {
        "prefix": "auto-",
        "answer_1": "against, opposing",
        "answer_2": "half, partial",
        "answer_3": "self",
        "answer_4": "not, non",
        "correct": "self",
        "example_word": "autograph"
      },
      {
        "prefix": "circum-, peri-",
        "answer_1": "around",
        "answer_2": "one",
        "answer_3": "after",
        "answer_4": "before",
        "correct": "around",
        "example_word": "perimeter"
      },
      {
        "prefix": "co-, syn-",
        "answer_1": "above",
        "answer_2": "out, former",
        "answer_3": "too much",
        "answer_4": "with",
        "correct": "with",
        "example_word": "synchronize"
      },
      {
        "prefix": "de-",
        "answer_1": "many",
        "answer_2": "removing, down",
        "answer_3": "back, again",
        "answer_4": "without",
        "correct": "removing, down",
        "example_word": "defrost"
      },
      {
        "prefix": "dis-, un-",
        "answer_1": "not, away",
        "answer_2": "around",
        "answer_3": "between",
        "answer_4": "through, across",
        "correct": "not, away",
        "example_word": "disallow"
      },
      {
        "prefix": "en-, em-",
        "answer_1": "outside, not",
        "answer_2": "against, hate",
        "answer_3": "adding, entering",
        "answer_4": "above, better",
        "correct": "adding, entering",
        "example_word": "entrap"
      },
      {
        "prefix": "ex-",
        "answer_1": "forward, giving",
        "answer_2": "afar",
        "answer_3": "towards",
        "answer_4": "out, former",
        "correct": "out, former",
        "example_word": "extract"
      },
      {
        "prefix": "hemi-, semi-",
        "answer_1": "removing, down",
        "answer_2": "wrong, bad, sick",
        "answer_3": "half, partial",
        "answer_4": "under",
        "correct": "half, partial",
        "example_word": "hemisphere"
      },
      {
        "prefix": "hyper-, over-",
        "answer_1": "against, opposing",
        "answer_2": "self",
        "answer_3": "half, partial",
        "answer_4": "too much",
        "correct": "too much",
        "example_word": "hypertension"
      },
      {
        "prefix": "in-, im-, il-, ir-",
        "answer_1": "one",
        "answer_2": "after",
        "answer_3": "not, non",
        "answer_4": "before",
        "correct": "not, non",
        "example_word": "illogical"
      },
      {
        "prefix": "inter-",
        "answer_1": "between",
        "answer_2": "above",
        "answer_3": "with",
        "answer_4": "out, former",
        "correct": "between",
        "example_word": "intercept"
      },
      {
        "prefix": "mal-, mis-",
        "answer_1": "too much",
        "answer_2": "wrong, bad, sick",
        "answer_3": "many",
        "answer_4": "back, again",
        "correct": "wrong, bad, sick",
        "example_word": "malicious"
      },
      {
        "prefix": "meta-, trans-",
        "answer_1": "through, across",
        "answer_2": "without",
        "answer_3": "around",
        "answer_4": "not, away",
        "correct": "through, across",
        "example_word": "metaphor"
      },
      {
        "prefix": "mono-, uni-",
        "answer_1": "between",
        "answer_2": "through, across",
        "answer_3": "one",
        "answer_4": "forward, giving",
        "correct": "one",
        "example_word": "monopoly"
      },
      {
        "prefix": "multi-, poly-",
        "answer_1": "afar",
        "answer_2": "towards",
        "answer_3": "removing, down",
        "answer_4": "many",
        "correct": "many",
        "example_word": "polyglot"
      },
      {
        "prefix": "post-",
        "answer_1": "wrong, bad, sick",
        "answer_2": "under",
        "answer_3": "after",
        "answer_4": "against, opposing",
        "correct": "after",
        "example_word": "postscript"
      },
      {
        "prefix": "pre-",
        "answer_1": "self",
        "answer_2": "half, partial",
        "answer_3": "before",
        "answer_4": "not, non",
        "correct": "before",
        "example_word": "predict"
      },
      {
        "prefix": "pro-",
        "answer_1": "forward, giving",
        "answer_2": "many",
        "answer_3": "one",
        "answer_4": "after",
        "correct": "forward, giving",
        "example_word": "promote"
      },
      {
        "prefix": "re-",
        "answer_1": "before",
        "answer_2": "one",
        "answer_3": "above",
        "answer_4": "back, again",
        "correct": "back, again",
        "example_word": "retreat"
      },
      {
        "prefix": "sub-",
        "answer_1": "with",
        "answer_2": "under",
        "answer_3": "out, former",
        "answer_4": "too much",
        "correct": "under",
        "example_word": "subconscious"
      },
      {
        "prefix": "super-",
        "answer_1": "many",
        "answer_2": "back, again",
        "answer_3": "above",
        "answer_4": "with",
        "correct": "above",
        "example_word": "superior"
      },
      {
        "prefix": "tele-",
        "answer_1": "afar",
        "answer_2": "out, former",
        "answer_3": "too much",
        "answer_4": "many",
        "correct": "afar",
        "example_word": "telescope"
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
    document.getElementById('prefix').innerHTML=data[RN].prefix;
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
    var wordme = data[RN].example_word;
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



