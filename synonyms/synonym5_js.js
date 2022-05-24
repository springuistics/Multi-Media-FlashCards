const data = [
    {
        "word": "transition",
        "sentence": "The period from 1954 to 1964 was a time of great economic transition in Japan.",
        "answer_1": "prevalence",
        "answer_2": "change",
        "answer_3": "fanatics",
        "answer_4": "ubiquity",
        "correct": "change"
      },
      {
        "word": "ubiquitous",
        "sentence": "Toyotas are the most ubiquitous vehicle on the road today.",
        "answer_1": "null",
        "answer_2": "prevalent",
        "answer_3": "ardent",
        "answer_4": "hated",
        "correct": "prevalent"
      },
      {
        "word": "witnessed",
        "sentence": "The crime was not witnessed by anyone.",
        "answer_1": "ardent",
        "answer_2": "infracted",
        "answer_3": "observed",
        "answer_4": "inflicted",
        "correct": "observed"
      },
      {
        "word": "zealots",
        "sentence": "Though common in the 1970s, political zealots are rare today.",
        "answer_1": "ubiquities",
        "answer_2": "fervent",
        "answer_3": "transitions",
        "answer_4": "fanatics",
        "correct": "fanatics"
      },
      {
        "word": "null",
        "sentence": "The contract is null if either party violates the agreement.",
        "answer_1": "ardent",
        "answer_2": "violation",
        "answer_3": "void",
        "answer_4": "animosity",
        "correct": "void"
      },
      {
        "word": "fervent",
        "sentence": "His fervent supporters marched with him to city hall.",
        "answer_1": "ardent",
        "answer_2": "prevalent",
        "answer_3": "zealots",
        "answer_4": "witnessed",
        "correct": "ardent"
      },
      {
        "word": "infraction",
        "sentence": "A minor traffic infraction can have serious consequences.",
        "answer_1": "transition",
        "answer_2": "violation",
        "answer_3": "robust",
        "answer_4": "witness",
        "correct": "violation"
      },
      {
        "word": "inflict",
        "sentence": "Luckily, the typhoon did not inflict any damage on the town.",
        "answer_1": "animosity",
        "answer_2": "change",
        "answer_3": "void",
        "answer_4": "wreak",
        "correct": "wreak"
      },
      {
        "word": "robust",
        "sentence": "The economy remained robust throughout the 1980s.",
        "answer_1": "void",
        "answer_2": "ubiquitous",
        "answer_3": "strong",
        "answer_4": "infracted",
        "correct": "strong"
      },
      {
        "word": "animosity",
        "sentence": "The heated disagreement caused animosity between them.",
        "answer_1": "infracted",
        "answer_2": "hatred",
        "answer_3": "inflicted",
        "answer_4": "fanatic",
        "correct": "hatred"
      },
      {
        "word": "change",
        "sentence": "The period from 1954 to 1964 was a time of great economic change in Japan.",
        "answer_1": "zealot",
        "answer_2": "transition",
        "answer_3": "fervent",
        "answer_4": "hurt",
        "correct": "transition"
      },
      {
        "word": "prevalent",
        "sentence": "Toyotas are the most prevalent vehicle on the road today.",
        "answer_1": "void",
        "answer_2": "ubiquitous",
        "answer_3": "ardent",
        "answer_4": "wreaked",
        "correct": "ubiquitous"
      },
      {
        "word": "observed",
        "sentence": "The crime was not observed by anyone.",
        "answer_1": "wreaked",
        "answer_2": "prevented",
        "answer_3": "infracted",
        "answer_4": "witnessed",
        "correct": "witnessed"
      },
      {
        "word": "fanatics",
        "sentence": "Though common in the 1970s, political fanatics are rare today.",
        "answer_1": "prevalence",
        "answer_2": "inflictions",
        "answer_3": "zealots",
        "answer_4": "animosities",
        "correct": "zealots"
      },
      {
        "word": "void",
        "sentence": "The contract is void if either party violates the agreement.",
        "answer_1": "infracted",
        "answer_2": "fervent",
        "answer_3": "robust",
        "answer_4": "null",
        "correct": "null"
      },
      {
        "word": "ardent",
        "sentence": "His ardent supporters marched with him to city hall.",
        "answer_1": "zealots",
        "answer_2": "fervent",
        "answer_3": "wreaked",
        "answer_4": "void",
        "correct": "fervent"
      },
      {
        "word": "violation",
        "sentence": "A minor traffic violation can have serious consequences.",
        "answer_1": "void",
        "answer_2": "robust",
        "answer_3": "observation",
        "answer_4": "infraction",
        "correct": "infraction"
      },
      {
        "word": "wreak",
        "sentence": "Luckily, the typhoon did not wreak any damage on the town.",
        "answer_1": "strengthen",
        "answer_2": "observe",
        "answer_3": "transition",
        "answer_4": "inflict",
        "correct": "inflict"
      },
      {
        "word": "strong",
        "sentence": "The economy remained strong throughout the 1980s.",
        "answer_1": "void",
        "answer_2": "animated",
        "answer_3": "robust",
        "answer_4": "null",
        "correct": "robust"
      },
      {
        "word": "hatred",
        "sentence": "The heated disagreement caused hatred between them.",
        "answer_1": "ubiquity",
        "answer_2": "fanatics",
        "answer_3": "violations",
        "answer_4": "animosity",
        "correct": "animosity"
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



