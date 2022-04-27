const data = [
    {
        "word": "period",
        "sentence": "Picasso went through a period using only blueish paints.",
        "answer_1": "restart",
        "answer_2": "salvage",
        "answer_3": "phase",
        "answer_4": "layer",
        "correct": "phase"
      },
      {
        "word": "pertain",
        "sentence": "His lectures pertain to his experiences in the Antarctic.",
        "answer_1": "resume",
        "answer_2": "relate",
        "answer_3": "propose",
        "answer_4": "imply",
        "correct": "relate"
      },
      {
        "word": "previous",
        "sentence": "He comes highly recommended by his previous employer.",
        "answer_1": "period",
        "answer_2": "suggested",
        "answer_3": "former",
        "answer_4": "salvaged",
        "correct": "former"
      },
      {
        "word": "resume",
        "sentence": "We hope to resume the game as soon as possible.",
        "answer_1": "restart",
        "answer_2": "imply",
        "answer_3": "talent",
        "answer_4": "strata",
        "correct": "restart"
      },
      {
        "word": "salvaged",
        "sentence": "I think the data can be salvaged if we act quickly.",
        "answer_1": "adeptness",
        "answer_2": "submerged",
        "answer_3": "layered",
        "answer_4": "saved",
        "correct": "saved"
      },
      {
        "word": "strata",
        "sentence": "The Grand Canyon is made up of over 40 rock strata.",
        "answer_1": "symmetries",
        "answer_2": "adeptness",
        "answer_3": "layers",
        "answer_4": "periods",
        "correct": "layers"
      },
      {
        "word": "submerged",
        "sentence": "The test object must be submerged to a depth of at least 1 meter.",
        "answer_1": "related",
        "answer_2": "sunken",
        "answer_3": "pertained",
        "answer_4": "salvaged",
        "correct": "sunken"
      },
      {
        "word": "suggest",
        "sentence": "The results suggest that our presumptions were correct.",
        "answer_1": "pertain",
        "answer_2": "resume",
        "answer_3": "imply",
        "answer_4": "save",
        "correct": "imply"
      },
      {
        "word": "symmetrical",
        "sentence": "Most planets have a symmetrical orbit in relation to their stars.",
        "answer_1": "sunken",
        "answer_2": "former",
        "answer_3": "phase",
        "answer_4": "proportional",
        "correct": "proportional"
      },
      {
        "word": "talent",
        "sentence": "She has a true talent for analyzing statistical data.",
        "answer_1": "strata",
        "answer_2": "symmetry",
        "answer_3": "adeptness",
        "answer_4": "phrase",
        "correct": "adeptness"
      },
      {
        "word": "phase",
        "sentence": "Picasso went through a phase using only blueish paints.",
        "answer_1": "resume",
        "answer_2": "adeptness",
        "answer_3": "period",
        "answer_4": "layer",
        "correct": "period"
      },
      {
        "word": "relate",
        "sentence": "His lectures relate to his experiences in the Antarctic.",
        "answer_1": "suggest",
        "answer_2": "submerge",
        "answer_3": "pertain",
        "answer_4": "restart",
        "correct": "pertain"
      },
      {
        "word": "former",
        "sentence": "He comes highly recommended by his former employer.",
        "answer_1": "previous",
        "answer_2": "proportional",
        "answer_3": "talent",
        "answer_4": "suggested",
        "correct": "previous"
      },
      {
        "word": "restart",
        "sentence": "We hope to restart the game as soon as possible.",
        "answer_1": "symmetrical",
        "answer_2": "imply",
        "answer_3": "relate",
        "answer_4": "resume",
        "correct": "resume"
      },
      {
        "word": "saved",
        "sentence": "I think the data can be saved if we act quickly.",
        "answer_1": "submerged",
        "answer_2": "suggested",
        "answer_3": "implied",
        "answer_4": "salvaged",
        "correct": "salvaged"
      },
      {
        "word": "layers",
        "sentence": "The Grand Canyon is made up of over 40 rock layers.",
        "answer_1": "phases",
        "answer_2": "adeptness",
        "answer_3": "strata",
        "answer_4": "relations",
        "correct": "strata"
      },
      {
        "word": "sunken",
        "sentence": "The test object must be sunken to a depth of at least 1 meter.",
        "answer_1": "pertained",
        "answer_2": "saved",
        "answer_3": "submerged",
        "answer_4": "propelled",
        "correct": "submerged"
      },
      {
        "word": "imply",
        "sentence": "The results imply that our presumptions were correct.",
        "answer_1": "restart",
        "answer_2": "adept",
        "answer_3": "pertain",
        "answer_4": "suggest",
        "correct": "suggest"
      },
      {
        "word": "proportional",
        "sentence": "Most planets have a proportional orbit in relation to their stars.",
        "answer_1": "former",
        "answer_2": "symmetrical",
        "answer_3": "layered",
        "answer_4": "salvaged",
        "correct": "symmetrical"
      },
      {
        "word": "adeptness",
        "sentence": "She has a true adeptness for analyzing statistical data.",
        "answer_1": "proportion",
        "answer_2": "phase",
        "answer_3": "relation",
        "answer_4": "talent",
        "correct": "talent"
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



