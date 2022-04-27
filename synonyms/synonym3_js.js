const data = [
    {
        "word": "illuminated",
        "sentence": "His lecture illuminated the more difficult parts of the textbook.",
        "answer_1": "lineated",
        "answer_2": "clarified",
        "answer_3": "minimized",
        "answer_4": "intensified",
        "correct": "clarified"
      },
      {
        "word": "infamous",
        "sentence": "She was infamous for continuously ignoring company rules.",
        "answer_1": "duty",
        "answer_2": "notorious",
        "answer_3": "inventory",
        "answer_4": "apparent",
        "correct": "notorious"
      },
      {
        "word": "inventory",
        "sentence": "We must purchase inventory for the shop before next week.",
        "answer_1": "merchandise",
        "answer_2": "means",
        "answer_3": "lineage",
        "answer_4": "duties",
        "correct": "merchandise"
      },
      {
        "word": "lethal",
        "sentence": "Surprisingly, tarantula venom is not lethal to humans.",
        "answer_1": "intensified",
        "answer_2": "obligated",
        "answer_3": "infamous",
        "answer_4": "deadly",
        "correct": "deadly"
      },
      {
        "word": "lineage",
        "sentence": "Most people do not know their extended family lineage.",
        "answer_1": "obligation",
        "answer_2": "heritage",
        "answer_3": "medium",
        "answer_4": "objective",
        "correct": "heritage"
      },
      {
        "word": "magnified",
        "sentence": "Scrutiny of the data will be magnified once it is published.",
        "answer_1": "intensified",
        "answer_2": "reduced",
        "answer_3": "illuminated",
        "answer_4": "peculiar",
        "correct": "intensified"
      },
      {
        "word": "medium",
        "sentence": "Metal wires are a medium to conduct electricity.",
        "answer_1": "lineage",
        "answer_2": "objective",
        "answer_3": "means",
        "answer_4": "magnificent",
        "correct": "means"
      },
      {
        "word": "minimizes",
        "sentence": "It is known that physical exercise minimizes mental stress.",
        "answer_1": "obligates",
        "answer_2": "clarifies",
        "answer_3": "reduces",
        "answer_4": "illuminates",
        "correct": "reduces"
      },
      {
        "word": "objective",
        "sentence": "To succeed in your studies, you must have a clear objective.",
        "answer_1": "apparent",
        "answer_2": "obvious",
        "answer_3": "purpose",
        "answer_4": "obligation",
        "correct": "purpose"
      },
      {
        "word": "obligation",
        "sentence": "Parents have an obligation to provide for their children.",
        "answer_1": "objective",
        "answer_2": "lineage",
        "answer_3": "obvious",
        "answer_4": "duty",
        "correct": "duty"
      },
      {
        "word": "obvious",
        "sentence": "Subatomic particles have no obvious physical structure.",
        "answer_1": "unusual",
        "answer_2": "apparent",
        "answer_3": "lethal",
        "answer_4": "minimized",
        "correct": "apparent"
      },
      {
        "word": "peculiar",
        "sentence": "The bacteria have a very peculiar knot-like protein structure.",
        "answer_1": "unusual",
        "answer_2": "lethal",
        "answer_3": "infamous",
        "answer_4": "medium",
        "correct": "unusual"
      },
      {
        "word": "clarified",
        "sentence": "His lecture clarified the more difficult parts of the textbook.",
        "answer_1": "illuminated",
        "answer_2": "magnified",
        "answer_3": "minimized",
        "answer_4": "objectified",
        "correct": "illuminated"
      },
      {
        "word": "notorious",
        "sentence": "She was notorious for continuously ignoring company rules.",
        "answer_1": "infamous",
        "answer_2": "obvious",
        "answer_3": "peculiar",
        "answer_4": "intensified",
        "correct": "infamous"
      },
      {
        "word": "merchandise",
        "sentence": "We must purchase merchandise for the shop before next week.",
        "answer_1": "mediums",
        "answer_2": "objectives",
        "answer_3": "apparents",
        "answer_4": "inventory",
        "correct": "inventory"
      },
      {
        "word": "deadly",
        "sentence": "Surprisingly, tarantula venom is not deadly to humans.",
        "answer_1": "magnified",
        "answer_2": "minimized",
        "answer_3": "apparent",
        "answer_4": "lethal",
        "correct": "lethal"
      },
      {
        "word": "heritage",
        "sentence": "Most people do not know their extended family heritage.",
        "answer_1": "medium",
        "answer_2": "obligation",
        "answer_3": "lineage",
        "answer_4": "reduction",
        "correct": "lineage"
      },
      {
        "word": "intensified",
        "sentence": "Scrutiny of the data will be intensified once it is published.",
        "answer_1": "magnified",
        "answer_2": "clarified",
        "answer_3": "deadly",
        "answer_4": "purposeful",
        "correct": "magnified"
      },
      {
        "word": "means",
        "sentence": "Metal wires are a means to conduct electricity.",
        "answer_1": "medium",
        "answer_2": "objective",
        "answer_3": "lineage",
        "answer_4": "duty",
        "correct": "medium"
      },
      {
        "word": "reduces",
        "sentence": "It is known that physical exercise reduces mental stress.",
        "answer_1": "obligates",
        "answer_2": "minimizes",
        "answer_3": "peculiar",
        "answer_4": "incentivizes",
        "correct": "minimizes"
      },
      {
        "word": "purpose",
        "sentence": "To succeed in your studies, you must have a clear purpose.",
        "answer_1": "heritage",
        "answer_2": "means",
        "answer_3": "inventory",
        "answer_4": "objective",
        "correct": "objective"
      },
      {
        "word": "duty",
        "sentence": "Parents have a duty to provide for their children.",
        "answer_1": "means",
        "answer_2": "obligation",
        "answer_3": "apparent",
        "answer_4": "purpose",
        "correct": "obligation"
      },
      {
        "word": "apparent",
        "sentence": "Subatomic particles have no apparent physical structure.",
        "answer_1": "unusual",
        "answer_2": "intensified",
        "answer_3": "obvious",
        "answer_4": "reduced",
        "correct": "obvious"
      },
      {
        "word": "unusual",
        "sentence": "The bacteria have a very unusual knot-like protein structure.",
        "answer_1": "obvious",
        "answer_2": "lethal",
        "answer_3": "heritage",
        "answer_4": "peculiar",
        "correct": "peculiar"
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



