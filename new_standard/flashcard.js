//Load items from json file - temporarily disabled for testing.

//Be sure to change to the correct location of the fetch!
//bigdata = [];
//  const superP = fetch('./collocations_fc.json')
//    .then((response) => {return response.json();})
//    .then((temp)=> {
//      bigdata = temp;
//      return bigdata;
//    });
//window.onload = async () => {
//    let something = await superP;
//    first_action();
//}

//Sends user data to server when tab closed etc. Make sure to change as appropriate
document.addEventListener('visibilitychange', function logData() {
    if (document.visibilityState === 'hidden') {
      var selections_data = document.getElementById('user_selections').innerHTML;
      var mc_help = document.getElementById('secret_mc_rights').innerHTML;
      var mc_oldrights = parseInt(mc_help);
      var mc_help2 = document.getElementById('secret_wrongs').innerHTML;
      var mc_oldwrongs = parseInt(mc_help2);
      var mc_newrights = mc_rights + mc_oldrights;
      var mc_newwrongs = mc_wrongs + mc_oldwrongs;
      var w_help = document.getElementById('secret_type_rights').innerHTML;
      var w_oldrights = parseInt(w_help);
      var w_help2 = document.getElementById('secret_type_wrongs').innerHTML;
      var w_oldwrongs = parseInt(w_help2);
      var w_newrights = wr_rights + w_oldrights;
      var w_newwrongs = wr_wrongs + w_oldwrongs;
      var sl_help = document.getElementById('secret_s_clicks').innerHTML;
      var sl_oldspeaks = parseInt(sl_help);
      var sl_help2 = document.getElementById('secret_l_clicks').innerHTML;
      var sl_oldlistens = parseInt(sl_help2);
      var sl_sclicks = s_clicks + sl_oldspeaks;
      var sl_lclicks = l_clicks + sl_oldlistens;
      navigator.sendBeacon('logdata.php?mc_rights='+mc_newrights+'&mc_wrongs='+mc_newwrongs+'&wr_rights='+w_newrights+'&wr_wrongs='+w_newwrongs+'&s_clicks='+sl_sclicks+'&l_clicks='+sl_lclicks+'&my_selections='+selections_data);   
    }
})


//Sets variables for the actual practice set (data) and the selected items (item_select)  
var data = [];
var item_select = [];
var mc_rights = 0;
var mc_wrongs = 0;
var wr_rights = 0;
var wr_wrongs = 0;
var s_clicks = 0;
var l_clicks = 0;

//This gets the data from the server and puts it into the "item_selects" and runs initialize
function first_action(){
  //This turns the string into an array of numbers and pushes to "data"
  function gd(string){
    var tarray = string.split(",");
    item_select = tarray.map(str => {return Number(str)});
    for (var i of item_select) {
    data.push(bigdata[i]);
    var string_selection = item_select.toString();
    document.getElementById('user_selections').innerHTML = string_selection;
    } 
  }
    var firsty = "";
    const xmr = new XMLHttpRequest();
    xmr.responseType = 'text';
    xmr.onload = function() {
      //This is CRITICAL. PHP is giving jason_encode, so this make a proper string out of this.
      firsty = JSON.parse(this.responseText);   
      gd(firsty);
      Initialize();
    }
    xmr.open("GET", "getitems.php", true);
    xmr.send();  
}

//The correct multiple choice answer should always be the first one.
const bigdata = [
    {
      "item": "bi, du",
      "mc_1": "two",
      "mc_2": "none",
      "mc_3": "health",
      "mc_4": "friendly",
      "je_1": "二つ",
      "je_2": "蜜",
      "je_3": "やる",
      "je_4": "飛行機",
      "speaking_example": "A dual purpose study",
      "speaking_target": "dual",
      "url": "pEBwH9oMOAE",
      "w_sentence": "Computers use ________ data",
      "w_answer": "binary"
    },
    {
      "item": "tri",
      "mc_1": "three",
      "mc_2": "try",
      "mc_3": "competition",
      "mc_4": "shape",
      "je_1": "三つ",
      "je_2": "競争",
      "je_3": "形",
      "je_4": "挑戦",
      "speaking_example": "Draw a right triangle",
      "speaking_target": "triangle",
      "url": "Y6CyQftidOw",
      "w_sentence": "Three times as many is also called ________",
      "w_answer": "triple"
    }
  ];
  
  //updates the actual practice set data after items have been selected
  function item_update(){
    for (var i of item_select) {
        data.push(bigdata[i]);
    }
    var string_selection = item_select.toString();
    document.getElementById('my_selections').value = string_selection;
    Initialize();
  }
  
  //Opens the items to be chosen by creating elements (a checkbox, the word or word part, and a break)
  function Choose_Items(){
    if (!document.getElementById('itemno_1')){
    document.getElementById('items_chooser').style.display="block";
    bigdata.forEach(function (problemifier, index){
      var checker = document.createElement("input");
      checker.setAttribute("type","checkbox");
      checker.id = "itemno_" + index;
      let current_item = problemifier.item;
      let current_box = "itemno_" + index;
      var labeler = document.createElement("label");
      labeler.setAttribute("for", "itemno_" + index);
      labeler.id = "itemno_id_" + index;
      labeler.textContent = current_item;
      document.getElementById('items_chooser').appendChild(checker);
      document.getElementById('items_chooser').appendChild(labeler);
      if (item_select.length > 0){
        let comeonman = item_select.includes(index);
        if (comeonman == true){
          document.getElementById(current_box).checked=true;
        } else {
          document.getElementById(current_box).checked=false;
        } }
  })};
    
    data = [];
    item_select = [];
  }

  //Once the items have been chosen, this deletes the created elements and hides the choosing section again. Also calls the wpupdate function.
  function Items_Chosen(){
    bigdata.forEach(function (problem, index){
      var get_check = "itemno_"+index;
      var get_label = "itemno_id_"+index;
      var act_label = document.getElementById(get_label);
      var act_check = document.getElementById(get_check);
      if (act_check.checked == true){
        item_select.push(index);
      }
      act_check.parentNode.removeChild(act_check);
      act_label.parentNode.removeChild(act_label);
    });
    document.getElementById('items_chooser').style.display="none";
    item_update();
  }
 
  //Sets Checked Items
  function FirstSet(){
    let fcheck = 0;
    for (let i=0; i<20; i++) {
        let item = "itemno_" + i;
        if (document.getElementById(item).checked == true) {fcheck += 1;}
    }
    if (fcheck < 20) {
        for (let i=0; i<20; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = true;
        }
    } else if (fcheck == 20) {
        for (let i=0; i<20; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = false;
        }
    }
  }
  function SecondSet(){
    let fcheck = 0;
    for (let i=20; i<40; i++) {
        let item = "itemno_" + i;
        if (document.getElementById(item).checked == true) {fcheck += 1;}
    }
    if (fcheck < 20) {
        for (let i=20; i<40; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = true;
        }
    } else if (fcheck == 20) {
        for (let i=20; i<40; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = false;
        }
    }
  }
  function ThirdSet(){
    let fcheck = 0;
    for (let i=40; i<55; i++) {
        let item = "itemno_" + i;
        if (document.getElementById(item).checked == true) {fcheck += 1;}
    }
    if (fcheck < 15) {
        for (let i=40; i<55; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = true;
        }
    } else if (fcheck == 15) {
        for (let i=40; i<55; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = false;
        }
    }
}
  function AllSet(){
    let fcheck = 0;
    for (let i=0; i<55; i++) {
        let item = "itemno_" + i;
        if (document.getElementById(item).checked == true) {fcheck += 1;}
    }
    if (fcheck < 55) {
        for (let i=0; i<55; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = true;
        }
    } else if (fcheck == 55) {
        for (let i=0; i<55; i++) {
            let item = "itemno_" + i;
            document.getElementById(item).checked = false;
        }
    }
}

  //Sets the RN variable, which controls which item is being considered from the data set and the language.
  var RN = 0;
  var language_var = 'en-US'
  function Check_Language(){
    language_var = document.getElementById('language_select').value;
  }
  
  //Reset functions re-hide the decision on whether answers were correct or not. They are called by other functions.
  function reset_speech() {
      document.getElementById('sl_feedback').style.visibility="hidden";
      document.querySelector('#talk').disabled = false;
  }
  function reset_mc_answers() {
      document.getElementById('mc_feedback').style.visibility="hidden";
      document.querySelector('#answer1').disabled = false;
      document.querySelector('#answer2').disabled = false;
      document.querySelector('#answer3').disabled = false;
      document.querySelector('#answer4').disabled = false;
  }
  function reset_wr_answers() {
    document.getElementById('w_feedback').style.visibility="hidden";
    document.querySelector('#writing_answer').disabled = false;
    document.querySelector('#writing_answer2').disabled = false;
  }

  //Sets RN to the next item in the set (or to the first if RN is the last item in the set) and then initializes the questions.
  function getNextWord(){ 
    var combobreaker = data.length-1;
    if (RN == combobreaker){RN = 0;} else {RN = RN+1;}
    Initialize();
  }
  function getPreviousWord(){ 
    if (RN == 0) {RN = (data.length-1);} else {RN = RN-1;}
    Initialize();
  }
  //Sets RN to a random number in the data set and then initializes the questions.
  function getRandomWord() {
    RN = Math.floor(Math.random() * data.length);
    Initialize();
  }

  //Sets up multiple choice in random order then assigns values.
  function Set_mc_answers() {
    var answers = ["A", "B", "C", "D"];
    var random_order = [];
    var db = [];
    for (let i=0; i<4; i++) {
            let temp = Math.random();
            random_order.push(temp);
        }
    for (let i=0; i<4; i++) {
            db.push({"letter": answers[i], "number": random_order[i]});
        }
    var sorted = db.slice().sort((a, b) => a.number - b.number);
    answers = [];
    for (let i=0; i<4; i++){
        answers.push(sorted[i].letter);
    }
    var a_answer = "answer" + (answers.indexOf("A") + 1);
    var b_answer = "answer" + (answers.indexOf("B") + 1);
    var c_answer = "answer" + (answers.indexOf("C") + 1);
    var d_answer = "answer" + (answers.indexOf("D") + 1);
    var question_type = document.getElementById('mc_q_type');
    if (question_type.checked == false){
        document.getElementById('mc_q_sentence').innerHTML = "Match the item to the Japanese equivalent";
        document.getElementById(a_answer).innerHTML=data[RN].je_1;
        document.getElementById(b_answer).innerHTML=data[RN].je_2;
        document.getElementById(c_answer).innerHTML=data[RN].je_3;
        document.getElementById(d_answer).innerHTML=data[RN].je_4;
        correct_answer=data[RN].je_1;
    } else {
        document.getElementById('mc_q_sentence').innerHTML = "Choose the answer that best matches the word";
        document.getElementById(a_answer).innerHTML=data[RN].mc_1;
        document.getElementById(b_answer).innerHTML=data[RN].mc_2;
        document.getElementById(c_answer).innerHTML=data[RN].mc_3;
        document.getElementById(d_answer).innerHTML=data[RN].mc_4;
        correct_answer=data[RN].mc_1;
    }
  }

  //Sets all of the question information based on the value of RN
  function Initialize() {
    document.getElementById('speech_output').value = "";
    document.getElementById('item_value').innerHTML=data[RN].item;
    document.getElementById('v_t_item').innerHTML=data[RN].item;
    document.getElementById('video_p').src= "https://www.youtube.com/embed/" + data[RN].url;
    document.getElementById('h_s_example').innerHTML=data[RN].speaking_example;
    document.getElementById('e_sentence').innerHTML=data[RN].w_sentence;
    reset_mc_answers();
    reset_speech();
    reset_wr_answers();
    Set_mc_answers();
  }
  
  //Keeps track of counts
  function MC_Count(x){
    if (x==1) {
      mc_rights +=1;  
    } else if (x==0) {
      mc_wrongs +=1;
    }
  }
  function WR_Count(x){
    if (x==1) {
        wr_rights +=1;  
      } else if (x==0) {
        wr_wrongs +=1;
      }
  }
  function S_Count(){
    s_clicks +=1;
  }
  function L_Count(){
    l_clicks +=1;
  }

  //Checks multiple choice questions.
  function answered(letter) {
    document.querySelector('#answer1').disabled = true;
    document.querySelector('#answer2').disabled = true;
    document.querySelector('#answer3').disabled = true;
    document.querySelector('#answer4').disabled = true;
    var user_answer;
    if (letter==='A') {user_answer = document.getElementById('answer1').innerHTML;}
    else if (letter==='B') {user_answer = document.getElementById('answer2').innerHTML;}
    else if (letter==='C') {user_answer = document.getElementById('answer3').innerHTML;}
    else if (letter==='D') {user_answer = document.getElementById('answer4').innerHTML;}
      if (user_answer === correct_answer){   
          document.getElementById('mc_feedback').innerHTML="Correct!";
          document.getElementById('mc_feedback').style.visibility="visible";
          document.getElementById('mc_feedback').style.background="rgb(106, 201, 29)";
          MC_Count(1);
          setTimeout(reset_mc_answers, 2000);
      } else {
          document.getElementById('mc_feedback').innerHTML="Incorrect!";
          document.getElementById('mc_feedback').style.visibility="visible";
          document.getElementById('mc_feedback').style.background="rgb(241, 16, 16)";
          MC_Count(0);
          setTimeout(reset_mc_answers, 2000);
      }    
  }

  //Checks writing answer or displays answer when lost
  function W_Check() {
    document.querySelector('#writing_answer').disabled = true;
    document.querySelector('#writing_answer2').disabled = true;
    var wordme = data[RN].w_answer;
    var writing_checked = document.getElementById('boxy-box').value;
    if (wordme.toLowerCase() === writing_checked.toLowerCase()) {
      WR_Count(1);
      document.getElementById('w_feedback').innerHTML="Good Job!";
      document.getElementById('w_feedback').style.visibility="visible";
      document.getElementById('w_feedback').style.background="rgb(106, 201, 29)";
    } else {
      WR_Count(0);
      document.getElementById('w_feedback').innerHTML="Try Again!";
      document.getElementById('w_feedback').style.visibility="visible";
      document.getElementById('w_feedback').style.background="rgb(241, 16, 16)";
    }
    setTimeout(reset_wr_answers, 3000)
  }
  function SeeWritingAnswer() {
    document.querySelector('#writing_answer').disabled = true;
    document.querySelector('#writing_answer2').disabled = true;
    document.getElementById('w_feedback').innerHTML=data[RN].w_answer;
    document.getElementById('w_feedback').style.visibility="visible";
    document.getElementById('w_feedback').style.background="rgb(255, 255, 255)";
    setTimeout(reset_wr_answers, 4000)
  }
  
  //Provides the listening example via text-to-speech, based on language selection.
  function Listen() {
      var word = data[RN].speaking_example;
      L_Count();
      let utter = new SpeechSynthesisUtterance();
      utter.lang = language_var;
      utter.text = word;
      window.speechSynthesis.speak(utter);
  }
  
  //Initializes ASR for speaking question and handles results.
  function init() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
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
              document.getElementById('speech_output').innerHTML += results[i][0].transcript;
          }
      }
  }
  
  //Begins the ASR, including init function, and also sets the stop / time out.
  function start() {
      document.getElementById('speech_output').innerHTML = "";
      document.getElementById('speech_output').style.color = "black";
      document.querySelector('#talk').disabled = true;
      S_Count();
      init();
      recognition.start();
      setTimeout(stop, 4000);
  }
  
  //Checks the pronunciation and then resets the evaluation.
  function check_speech () {
      var wordme = data[RN].speaking_target;
      wordme = wordme.toLowerCase();
      var proncheck = document.getElementById('speech_output').innerHTML;
      proncheck = proncheck.toLowerCase();
      if (proncheck.includes(wordme)) {
          document.getElementById('speech_output').innerHTML = wordme;
          document.getElementById('speech_output').style.color = "red";
          document.getElementById('sl_feedback').innerHTML="Good Job!";
          document.getElementById('sl_feedback').style.visibility="visible";
          document.getElementById('sl_feedback').style.background="rgb(106, 201, 29)";
      } else {
          document.getElementById('sl_feedback').innerHTML="Try Again!";
          document.getElementById('sl_feedback').style.visibility="visible";
          document.getElementById('sl_feedback').style.background="rgb(241, 16, 16)";
      }
      setTimeout(reset_speech, 2000)
  }
  
  //Just used to stop the ASR.
  function stop(){
      recognition.onend = null;
      recognition.stop();
      setTimeout(check_speech, 500);
    }
  
  //Checks the checkboxes to see what types of questions the user wants and acts accordingly.
  function Checkbox_Vocab(){
    var checkBox1 = document.getElementById('vocab_cb');
    var checkBox2 = document.getElementById('writing_cb');
    var checkBox3 = document.getElementById('video_cb');
    var checkBox4 = document.getElementById('s_and_l_cb');
    if (checkBox1.checked == true){
      document.getElementById('all_mc').style.display="block";
      document.getElementById('btn_holder').style.display="block";
    } else {
      document.getElementById('all_mc').style.display="none";
      if (checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false) {
        document.getElementById('btn_holder').style.display="none";
      }
    }
  }
  
  function Checkbox_Writing(){
    var checkBox1 = document.getElementById('vocab_cb');
    var checkBox2 = document.getElementById('writing_cb');
    var checkBox3 = document.getElementById('video_cb');
    var checkBox4 = document.getElementById('s_and_l_cb');
    if (checkBox2.checked == true){
      document.getElementById('btn_holder').style.display="block";
      document.getElementById('writing').style.display="block";
    } else {
      document.getElementById('writing').style.display="none";
      if (checkBox1.checked == false && checkBox3.checked == false && checkBox4.checked == false) {
        document.getElementById('btn_holder').style.display="none";
      }
    }
  }

  function Checkbox_Videos(){
    var checkBox1 = document.getElementById('vocab_cb');
    var checkBox2 = document.getElementById('writing_cb');
    var checkBox3 = document.getElementById('video_cb');
    var checkBox4 = document.getElementById('s_and_l_cb');
    if (checkBox3.checked == true){
      document.getElementById('btn_holder').style.display="block";
      document.getElementById('videos').style.display="block";
    } else {
      document.getElementById('videos').style.display="none";
      if (checkBox1.checked == false && checkBox2.checked == false && checkBox4.checked == false) {
        document.getElementById('btn_holder').style.display="none";
      }
    }
  }

  function Checkbox_SL(){
    var checkBox1 = document.getElementById('vocab_cb');
    var checkBox2 = document.getElementById('writing_cb');
    var checkBox3 = document.getElementById('video_cb');
    var checkBox4 = document.getElementById('s_and_l_cb');
    if (checkBox4.checked == true){
      document.getElementById('btn_holder').style.display="block";
      document.getElementById('all_sl').style.display="block";
    } else {
      document.getElementById('all_sl').style.display="none";
      if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false) {
        document.getElementById('btn_holder').style.display="none";
      }
    }
  }
  
  
  
  