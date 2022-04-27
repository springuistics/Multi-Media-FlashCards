const data = [
    {
        "word": "hurl",
        "sentence": "The debate ended when he began to hurl insults at others.",
        "answer_1": "quote",
        "answer_2": "ease",
        "answer_3": "exhaust",
        "answer_4": "sling",
        "correct": "sling"
      },
      {
        "word": "timid",
        "sentence": "It is hard not to feel a little timid when meeting someone new.",
        "answer_1": "disorderly",
        "answer_2": "concurrent",
        "answer_3": "nervous",
        "answer_4": "merciful",
        "correct": "nervous"
      },
      {
        "word": "soothe",
        "sentence": "A cup of tea usually helps to soothe one's frayed nerves.",
        "answer_1": "exhaust",
        "answer_2": "mercy",
        "answer_3": "cite",
        "answer_4": "ease",
        "correct": "ease"
      },
      {
        "word": "deplete",
        "sentence": "Action must be taken soon not to deplete the earth's resources.",
        "answer_1": "exhaust",
        "answer_2": "alleviate",
        "answer_3": "hurl",
        "answer_4": "chaotic",
        "correct": "exhaust"
      },
      {
        "word": "cite",
        "sentence": "You must cite your sources when writing papers.",
        "answer_1": "sling",
        "answer_2": "quote",
        "answer_3": "mitigate",
        "answer_4": "concur",
        "correct": "quote"
      },
      {
        "word": "chaotic",
        "sentence": "The meeting was very chaotic, so little was accomplished.",
        "answer_1": "clemency",
        "answer_2": "simultaneous",
        "answer_3": "disorderly",
        "answer_4": "depleted",
        "correct": "disorderly"
      },
      {
        "word": "clemency",
        "sentence": "The lawyer argued that his client should receive clemency.",
        "answer_1": "chaos",
        "answer_2": "sling",
        "answer_3": "mercy",
        "answer_4": "freight",
        "correct": "mercy"
      },
      {
        "word": "freight",
        "sentence": "Three percent of the world's freight is carried through the Panama Canal.",
        "answer_1": "soothe",
        "answer_2": "citations",
        "answer_3": "cargo",
        "answer_4": "chaos",
        "correct": "cargo"
      },
      {
        "word": "mitigate",
        "sentence": "The medicine, though very effective, does not mitigate pain.",
        "answer_1": "cite",
        "answer_2": "disorder",
        "answer_3": "exhaust",
        "answer_4": "alleviate",
        "correct": "alleviate"
      },
      {
        "word": "concurrent",
        "sentence": "Concurrent studies will be conducted in three different countries.",
        "answer_1": "soothe",
        "answer_2": "simultaneous",
        "answer_3": "clemency",
        "answer_4": "timid",
        "correct": "simultaneous"
      },
      {
        "word": "sling",
        "sentence": "The debate ended when he began to sling insults at others.",
        "answer_1": "mitigate",
        "answer_2": "soothe",
        "answer_3": "quote",
        "answer_4": "hurl",
        "correct": "hurl"
      },
      {
        "word": "nervous",
        "sentence": "It is hard not to feel a little nervous when meeting someone new.",
        "answer_1": "timid",
        "answer_2": "quoted",
        "answer_3": "soothed",
        "answer_4": "chaotic",
        "correct": "timid"
      },
      {
        "word": "ease",
        "sentence": "A cup of tea usually helps to ease one's frayed nerves.",
        "answer_1": "freight",
        "answer_2": "deplete",
        "answer_3": "concur",
        "answer_4": "soothe",
        "correct": "soothe"
      },
      {
        "word": "exhaust",
        "sentence": "Action must be taken soon not to exhaust the earth's resources.",
        "answer_1": "cargo",
        "answer_2": "sling",
        "answer_3": "quote",
        "answer_4": "deplete",
        "correct": "deplete"
      },
      {
        "word": "quote",
        "sentence": "You must quote your sources when writing papers.",
        "answer_1": "clemency",
        "answer_2": "alleviate",
        "answer_3": "hurl",
        "answer_4": "cite",
        "correct": "cite"
      },
      {
        "word": "disorderly",
        "sentence": "The meeting was very disorderly, so little was accomplished.",
        "answer_1": "mitigated",
        "answer_2": "concurrent",
        "answer_3": "nervous",
        "answer_4": "chaotic",
        "correct": "chaotic"
      },
      {
        "word": "mercy",
        "sentence": "The lawyer argued that his client should receive mercy.",
        "answer_1": "cargo",
        "answer_2": "exhaustion",
        "answer_3": "disorderly",
        "answer_4": "clemency",
        "correct": "clemency"
      },
      {
        "word": "cargo",
        "sentence": "Three percent of the world's cargo is carried through the Panama Canal.",
        "answer_1": "simultaneous",
        "answer_2": "depletion",
        "answer_3": "quota",
        "answer_4": "freight",
        "correct": "freight"
      },
      {
        "word": "alleviate",
        "sentence": "The medicine, though very effective, does not alleviate pain.",
        "answer_1": "timid",
        "answer_2": "concur",
        "answer_3": "mitigate",
        "answer_4": "freight",
        "correct": "mitigate"
      },
      {
        "word": "simultaneous",
        "sentence": "Simultaneous studies will be conducted in three different countries.",
        "answer_1": "cargo",
        "answer_2": "concurrent",
        "answer_3": "ease",
        "answer_4": "mercy",
        "correct": "concurrent"
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



