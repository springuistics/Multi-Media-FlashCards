const data = [
  {
    "meaning": "to make a bad situation even worse",
    "answer_1": "add insult to injury",
    "answer_2": "be in someone’s shoes",
    "answer_3": "hang in there",
    "answer_4": "hit it off",
    "correct": "add insult to injury",
    "example_s": "My boss not only said I could not get a pay increase in future, but to _________________, he reduced my current pay.",
    "written": "add insult to injury"
  },
  {
    "meaning": "to be in the same situation as someone else",
    "answer_1": "pull oneself together",
    "answer_2": "on one’s own",
    "answer_3": "read between the lines",
    "answer_4": "be in someone’s shoes",
    "correct": "be in someone’s shoes",
    "example_s": "If I _____, I wouldn't drive in heavy rain at night.",
    "written": "were in your shoes"
  },
  {
    "meaning": "to not give up",
    "answer_1": "take it easy",
    "answer_2": "hang in there",
    "answer_3": "by all means",
    "answer_4": "be in someone’s shoes",
    "correct": "hang in there",
    "example_s": "Maya didn’t want to keep studying, but she _____ and finally finished.",
    "written": "hung in there"
  },
  {
    "meaning": "to form a good relationship with someone quickly",
    "answer_1": "a great deal of",
    "answer_2": "pull oneself together",
    "answer_3": "take it easy",
    "answer_4": "hit it off",
    "correct": "hit it off",
    "example_s": "Luckily, I really _____ with my new lab mate.",
    "written": "hit it off"
  },
  {
    "meaning": "to contact",
    "answer_1": "be in someone’s shoes",
    "answer_2": "something like",
    "answer_3": "in touch with",
    "answer_4": "a great deal of",
    "correct": "in touch with",
    "example_s": "Please keep _____ your parents or else they will worry.",
    "written": "in touch with"
  },
  {
    "meaning": "to receive no help",
    "answer_1": "as opposed to",
    "answer_2": "by all means",
    "answer_3": "in touch with",
    "answer_4": "on one’s own",
    "correct": "on one’s own",
    "example_s": "He asked for help with his paper, but I am busy, so _____.",
    "written": "I'm on my own"
  },
  {
    "meaning": "to recover self-control and be calm",
    "answer_1": "be in someone’s shoes",
    "answer_2": "as opposed to",
    "answer_3": "add insult to injury",
    "answer_4": "pull oneself together",
    "correct": "pull oneself together",
    "example_s": "Bob was shocked after the car accident, but after he _____, he called the police.",
    "written": "pulled himself together"
  },
  {
    "meaning": "to find meaning that is not clearly stated, only implied",
    "answer_1": "something like",
    "answer_2": "hit it off",
    "answer_3": "by no means",
    "answer_4": "read between the lines",
    "correct": "read between the lines",
    "example_s": "He said we had done enough, but _____, I knew that he thought we should have done more.",
    "written": "read between the lines"
  },
  {
    "meaning": "to relax, to work at a comfortable pace",
    "answer_1": "on one’s own",
    "answer_2": "add insult to injury",
    "answer_3": "take it easy",
    "answer_4": "by no means",
    "correct": "take it easy",
    "example_s": "A: I have so much to do today! B: Well, _____!",
    "written": "take it easy"
  },
  {
    "meaning": "many/much",
    "answer_1": "a great deal of",
    "answer_2": "in touch with",
    "answer_3": "by all means",
    "answer_4": "take it easy",
    "correct": "a great deal of",
    "example_s": "Students at Tohoku University spend _____ of their time in the library.",
    "written": "a great deal"
  },
  {
    "meaning": "in contrast to",
    "answer_1": "hang in there",
    "answer_2": "as opposed to",
    "answer_3": "read between the lines",
    "answer_4": "",
    "correct": "as opposed to",
    "example_s": "Students here learn two foreign languages _____ other universities where they only learn English.",
    "written": "as opposed to"
  },
  {
    "meaning": "absolutely",
    "answer_1": "add insult to injury",
    "answer_2": "on one’s own",
    "answer_3": "by all means",
    "answer_4": "in touch with",
    "correct": "by all means",
    "example_s": "A: May I look at your lab report? B: _____.",
    "written": "By all means"
  },
  {
    "meaning": "absolutely not",
    "answer_1": "pull oneself together",
    "answer_2": "by no means",
    "answer_3": "a great deal of",
    "answer_4": "hang in there",
    "correct": "by no means",
    "example_s": "Even though some people come to class late, it is _____ acceptable to do so.",
    "written": "by no means"
  },
  {
    "meaning": "approximately",
    "answer_1": "hit it off",
    "answer_2": "read between the lines",
    "answer_3": "something like",
    "answer_4": "a great deal of",
    "correct": "something like",
    "example_s": "_____ 500 people showed up to the festival.",
    "written": "Something like"
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

