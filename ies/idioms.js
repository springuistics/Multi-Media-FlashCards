const data = [
  {
    "meaning": "very different",
    "answer_1": "a far cry from",
    "answer_2": "get cold feet",
    "answer_3": "hit the sack/hay",
    "answer_4": "let the cat out of the bag",
    "correct": "a far cry from",
    "example_s": "The weather in Hawaii is _________ the weather in Hokkaido.",
    "written": "a far cry from"
  },
  {
    "meaning": "very expensive",
    "answer_1": "hit the nail on the head",
    "answer_2": "like the back of one’s hand",
    "answer_3": "cost an arm and a leg",
    "answer_4": "head over heels",
    "correct": "cost an arm and a leg",
    "example_s": "The airfare to Europe _____ these days.",
    "written": "costs an arm and a leg"
  },
  {
    "meaning": "to stop working on something",
    "answer_1": "a far cry from",
    "answer_2": "like the back of one’s hand",
    "answer_3": "call it a day",
    "answer_4": "once in a blue moon",
    "correct": "call it a day",
    "example_s": "We’ve done enough work. Let’s _____.",
    "written": "call it a day"
  },
  {
    "meaning": "to get something by luck or coincidence without effort",
    "answer_1": "fall into one’s lap",
    "answer_2": "on the ball",
    "answer_3": "let the cat out of the bag",
    "answer_4": "play by ear",
    "correct": "fall into one’s lap",
    "example_s": "I'm jealous of Sarah. Good grades seem to _____ for every class.",
    "written": "fall into her lap"
  },
  {
    "meaning": "to suddenly have the feeling of not wanting to do something that was planned",
    "answer_1": "hit the sack/hay",
    "answer_2": "get cold feet",
    "answer_3": "once in a blue moon",
    "answer_4": "over one’s head",
    "correct": "get cold feet",
    "example_s": "She’s _____ about her wedding tomorrow.",
    "written": "got cold feet"
  },
  {
    "meaning": "to be in love, especially in the beginning of a relationship",
    "answer_1": "hit the nail on the head",
    "answer_2": "let the cat out of the bag",
    "answer_3": "take the bull by the horns",
    "answer_4": "head over heels",
    "correct": "head over heels",
    "example_s": "He has been _____ for her ever since they met.",
    "written": "head over heels"
  },
  {
    "meaning": "to do or say something perfectly",
    "answer_1": "cost an arm and a leg",
    "answer_2": "hit the nail on the head",
    "answer_3": "over one’s head",
    "answer_4": "under the weather",
    "correct": "hit the nail on the head",
    "example_s": "You really _____ with your answer today.",
    "written": "hit the nail on the head"
  },
  {
    "meaning": "go to sleep",
    "answer_1": "fall into one’s lap",
    "answer_2": "once in a blue moon",
    "answer_3": "play by ear",
    "answer_4": "hit the sack/hay",
    "correct": "hit the sack/hay",
    "example_s": "I’m going to _____ around midnight. *use \"sack",
    "written": "hit the sack"
  },
  {
    "meaning": "to tell or reveal a secret",
    "answer_1": "a far cry from",
    "answer_2": "over one’s head",
    "answer_3": "cost an arm and a leg",
    "answer_4": "let the cat out of the bag",
    "correct": "let the cat out of the bag",
    "example_s": "Please don’t _____ about me moving to Tokyo.",
    "written": "let the cat out of the bag"
  },
  {
    "meaning": "to know something very well",
    "answer_1": "like the back of one’s hand",
    "answer_2": "head over heels",
    "answer_3": "under the weather",
    "answer_4": "over one’s head",
    "correct": "like the back of one’s hand",
    "example_s": "I know Shinjuku _____.",
    "written": "like the back of my hand"
  },
  {
    "meaning": "to be attentive, and quick to act",
    "answer_1": "fall into one’s lap",
    "answer_2": "on the fence",
    "answer_3": "on the ball",
    "answer_4": "like the back of one’s hand",
    "correct": "on the ball",
    "example_s": "Our new employee is really _____.",
    "written": "on the ball"
  },
  {
    "meaning": "to be indecisive",
    "answer_1": "cost an arm and a leg",
    "answer_2": "on the fence",
    "answer_3": "on the ball",
    "answer_4": "take the bull by the horns",
    "correct": "on the fence",
    "example_s": "He’s _____ about attending a public or private university.",
    "written": "on the fence"
  },
  {
    "meaning": "very rarely",
    "answer_1": "a far cry from",
    "answer_2": "head over heels",
    "answer_3": "play by ear",
    "answer_4": "once in a blue moon",
    "correct": "once in a blue moon",
    "example_s": "I swim in the ocean _____.",
    "written": "once in a blue moon"
  },
  {
    "meaning": "too difficult to do",
    "answer_1": "hit the sack/hay",
    "answer_2": "like the back of one’s hand",
    "answer_3": "over one’s head",
    "answer_4": "take the bull by the horns",
    "correct": "over one’s head",
    "example_s": "I'm not as good at math as you. Those equations might be easy for you, but they are _____.",
    "written": "over my head"
  },
  {
    "meaning": "very easy",
    "answer_1": "call it a day",
    "answer_2": "piece of cake",
    "answer_3": "a far cry from",
    "answer_4": "the last straw",
    "correct": "piece of cake",
    "example_s": "That test was a _____.",
    "written": "piece of cake"
  },
  {
    "meaning": "to do something without a plan",
    "answer_1": "play by ear",
    "answer_2": "fall into one’s lap",
    "answer_3": "let the cat out of the bag",
    "answer_4": "get cold feet",
    "correct": "play by ear",
    "example_s": "I’m going to play this weekend _____.",
    "written": "play by ear"
  },
  {
    "meaning": "to deal with a difficult situation in a very direct way",
    "answer_1": "hit the nail on the head",
    "answer_2": "call it a day",
    "answer_3": "take the bull by the horns",
    "answer_4": "the last straw",
    "correct": "take the bull by the horns",
    "example_s": "In this job, you’ll have to _____.",
    "written": "take the bull by the horns"
  },
  {
    "meaning": "to not take something you are told seriously, because it may be untrue",
    "answer_1": "take with a grain of salt",
    "answer_2": "once in a blue moon",
    "answer_3": "hit the nail on the head",
    "answer_4": "piece of cake",
    "correct": "take with a grain of salt",
    "example_s": "I usually take the news that I read on Facebook _____.",
    "written": "with a grain of salt"
  },
  {
    "meaning": "the last in a series of small bad things to happen that finally causes one big bad thing to happen",
    "answer_1": "the last straw",
    "answer_2": "head over heels",
    "answer_3": "on the fence",
    "answer_4": "on the ball",
    "correct": "the last straw",
    "example_s": "I forgave his poor work because he was new, but being late today was _____. I’m going to have to fire him.",
    "written": "the last straw"
  },
  {
    "meaning": "feeling ill",
    "answer_1": "under the weather",
    "answer_2": "cost an arm and a leg",
    "answer_3": "call it a day",
    "answer_4": "get cold feet",
    "correct": "under the weather",
    "example_s": "I’m _____, so I won’t be coming in to work today.",
    "written": "under the weather"
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

function reset_writing() {
  document.getElementById('good_w_a').style.visibility="hidden";
}

function getRandomWord() {
    document.getElementById('speech_output').value = "";
    document.getElementById('good_a').style.visibility="hidden";
    document.getElementById('good_p').style.visibility="hidden";
    document.getElementById('good_w_a').style.visibility="hidden";
    RN = Math.floor(Math.random() * data.length);
    document.getElementById('meaning').innerHTML=data[RN].meaning;
    document.getElementById('answer1').innerHTML=data[RN].answer_1;
    document.getElementById('answer2').innerHTML=data[RN].answer_2;
    document.getElementById('answer3').innerHTML=data[RN].answer_3;
    document.getElementById('answer4').innerHTML=data[RN].answer_4;
    document.getElementById('e_sentence').innerHTML=data[RN].example_s;
    document.getElementById('example_word').innerHTML=data[RN].correct;
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
    var word = data[RN].written;
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

function WroteSomething() {
  var wordme = data[RN].written;
  var writing_checked = document.getElementById('boxy-box').value;
  if (wordme.toLowerCase() === writing_checked.toLowerCase()) {
    document.getElementById('good_w_a').innerHTML="Good Job!";
    document.getElementById('good_w_a').style.visibility="visible";
    document.getElementById('good_w_a').style.color="rgb(106, 201, 29)";
} else {
    document.getElementById('good_w_a').innerHTML="Try Again!";
    document.getElementById('good_w_a').style.visibility="visible";
    document.getElementById('good_w_a').style.color="rgb(241, 16, 16)";
}
setTimeout(reset_writing, 4000)
}

function SeeWritingAnswer() {
    document.getElementById('good_w_a').innerHTML=data[RN].written;
    document.getElementById('good_w_a').style.visibility="visible";
    document.getElementById('good_w_a').style.color="rgb(0, 0, 0)";
  setTimeout(reset_writing, 4000)
}

function check_speech () {
    var wordme = data[RN].written;
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

function Check_Writing(){
  var checkBox1 = document.getElementById('writing_cb');
  if (checkBox1.checked == true){
    document.getElementById('writing').style.display="block";

  } else {
    document.getElementById('writing').style.display="none";
  }
}

