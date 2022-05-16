const data = [
  {
    "meaning": "take care of someone or something; be responsible for something",
    "answer_1": "look after",
    "answer_2": "get back",
    "answer_3": "come out",
    "answer_4": "carry on",
    "correct": "look after",
    "example_s": "Senior Professors have to ___________ both their students and their younger co-workers."
  },
  {
    "meaning": "go to a far place; disappear or stop happening",
    "answer_1": "go back",
    "answer_2": "go away",
    "answer_3": "come away",
    "answer_4": "go off",
    "correct": "go away",
    "example_s": "I wish mom's cancer would just _________ so she could be healthy again."
  },
  {
    "meaning": "return; reply; regain a favorable condition",
    "answer_1": "go back",
    "answer_2": "win back",
    "answer_3": "come off",
    "answer_4": "come back",
    "correct": "come back",
    "example_s": "After the big scandel, our former president is hoping that this rally will be his big _________."
  },
  {
    "meaning": "return; get revenge; regain posession",
    "answer_1": "get back",
    "answer_2": "get away",
    "answer_3": "back off",
    "answer_4": "fight back",
    "correct": "get back",
    "example_s": "He embarassed me in front of everyone! I'm going to _______ at him at lunch time!"
  },
  {
    "meaning": "return; think about the past; exist since a time in the past",
    "answer_1": "go back",
    "answer_2": "go away",
    "answer_3": "go in",
    "answer_4": "look on",
    "correct": "go back",
    "example_s": "Though the 1950s are shown fondly in movies, there is no way we can _______ to that time."
  },
  {
    "meaning": "enter; arrive",
    "answer_1": "look after",
    "answer_2": "get in",
    "answer_3": "get away",
    "answer_4": "come out",
    "correct": "get in",
    "example_s": "I can't talk more right now because I'm getting on the train. I will call you again when I __________ ."
  },
  {
    "meaning": "enter",
    "answer_1": "go off",
    "answer_2": "carry on",
    "answer_3": "go back",
    "answer_4": "go in",
    "correct": "go in",
    "example_s": "Mrs. Swanson may invite you to ________ to her dining room for tea and cookies."
  },
  {
    "meaning": "leave; separate; explode or suddenly move",
    "answer_1": "go off",
    "answer_2": "go after",
    "answer_3": "come on",
    "answer_4": "take off",
    "correct": "go off",
    "example_s": "My mother _________ on me every time I arrive home after curfew."
  },
  {
    "meaning": "continue despite hard circumstances; continue to make a noise or fuss",
    "answer_1": "carry away",
    "answer_2": "carry in",
    "answer_3": "come on",
    "answer_4": "carry on",
    "correct": "carry on",
    "example_s": "The workers ___________ building the house despite the rain and strong wind."
  },
  {
    "meaning": "to advance slowly; come to a place of touching; ask to hurry",
    "answer_1": "come on",
    "answer_2": "come in",
    "answer_3": "go on",
    "answer_4": "come off",
    "correct": "come on",
    "example_s": "Quit wasting time! _________ and start the experiment."
  },
  {
    "meaning": "(dis)board a vehicle; to avoid a punishment",
    "answer_1": "carry on/off",
    "answer_2": "go on/off",
    "answer_3": "get away",
    "answer_4": "get on/off",
    "correct": "get on/off",
    "example_s": "The jury found the defendent not guilty, so she _________ on all charges."
  },
  {
    "meaning": "continue; happen; continue to a place",
    "answer_1": "go out",
    "answer_2": "look on",
    "answer_3": "get on",
    "answer_4": "go on",
    "correct": "go on",
    "example_s": "Please _______! I want to hear the end of your story!"
  },
  {
    "meaning": "accept work or responsibility; fight against something",
    "answer_1": "take out",
    "answer_2": "go on",
    "answer_3": "take on",
    "answer_4": "work out",
    "correct": "take on",
    "example_s": "Manchester United will _________ Chelsea in this week's upcoming football match!"
  },
  {
    "meaning": "continue to labor; work (transitive)",
    "answer_1": "work back",
    "answer_2": "carry on",
    "answer_3": "come out",
    "answer_4": "work on",
    "correct": "work on",
    "example_s": "You can go home. I will continue to __________ the presentation until it's just right."
  },
  {
    "meaning": "bring to success despite difficulty; put a plan into action",
    "answer_1": "carry in",
    "answer_2": "carry out",
    "answer_3": "carry away",
    "answer_4": "get out",
    "correct": "carry out",
    "example_s": "We hope that the completion of our five-step plan will be ____________ by February of next year."
  },
  {
    "meaning": "become known or seen; move outside; cause a result; remove",
    "answer_1": "come in",
    "answer_2": "come out",
    "answer_3": "carry away",
    "answer_4": "come on",
    "correct": "come out",
    "example_s": "The detergent amazingly helped the red wine __________ of her wedding dress."
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
    var word = data[RN].correct;
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
    var wordme = data[RN].correct;
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

function check_meaning(){
  var checkBox2 = document.getElementById('meaning_cb');
  if (checkBox2.checked == true){
    document.getElementById('prompt_meaning').style.display="block";
    document.getElementById('meaning').style.display="block";

  } else {
    document.getElementById('prompt_meaning').style.display="none";
    document.getElementById('meaning').style.display="none";
  }
}

function check_example(){
  var checkBox2 = document.getElementById('example_cb');
  if (checkBox2.checked == true){
    document.getElementById('prompt_sentence').style.display="block";
    document.getElementById('e_sentence').style.display="block";

  } else {
    document.getElementById('prompt_sentence').style.display="none";
    document.getElementById('e_sentence').style.display="none";
  }
}
