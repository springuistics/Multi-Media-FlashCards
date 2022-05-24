//The full data set is listed here because I can't get the dumb thing to load a json file from my webpage.
const bigdata = [
    {
      "root": "bi, du",
      "answer_1": "two",
      "answer_2": "none",
      "answer_3": "health",
      "answer_4": "friendly",
      "correct": "two",
      "example_word": "dual"
    },
    {
      "root": "tri",
      "answer_1": "competition",
      "answer_2": "try",
      "answer_3": "three",
      "answer_4": "shape",
      "correct": "three",
      "example_word": "triangle"
    },
    {
      "root": "qua(r)t, tetra",
      "answer_1": "five",
      "answer_2": "four",
      "answer_3": "earth",
      "answer_4": "water",
      "correct": "four",
      "example_word": "quarter"
    },
    {
      "root": "quint, pent",
      "answer_1": "four",
      "answer_2": "catch",
      "answer_3": "last",
      "answer_4": "five",
      "correct": "five",
      "example_word": "quintuplet"
    },
    {
      "root": "anim, bio",
      "answer_1": "star",
      "answer_2": "science",
      "answer_3": "living",
      "answer_4": "believe",
      "correct": "living",
      "example_word": "biological"
    },
    {
      "root": "aqua, hyrdo",
      "answer_1": "water",
      "answer_2": "home, enviroment",
      "answer_3": "animal",
      "answer_4": "drink",
      "correct": "water",
      "example_word": "aquatic"
    },
    {
      "root": "agri",
      "answer_1": "aquatic",
      "answer_2": "farm",
      "answer_3": "star",
      "answer_4": "field",
      "correct": "field",
      "example_word": "agriculture"
    },
    {
      "root": "astro",
      "answer_1": "star",
      "answer_2": "sky",
      "answer_3": "space",
      "answer_4": "hard, last",
      "correct": "star",
      "example_word": "astronaut"
    },
    {
      "root": "capt / cept",
      "answer_1": "body",
      "answer_2": "catch",
      "answer_3": "fly",
      "answer_4": "stick",
      "correct": "catch",
      "example_word": "intercept"
    },
    {
      "root": "corp, phys",
      "answer_1": "army",
      "answer_2": "body",
      "answer_3": "fight",
      "answer_4": "catch",
      "correct": "body",
      "example_word": "physician"
    },
    {
      "root": "cred",
      "answer_1": "four",
      "answer_2": "catch",
      "answer_3": "guide, gather",
      "answer_4": "believe",
      "correct": "believe",
      "example_word": "incredible"
    },
    {
      "root": "dict",
      "answer_1": "say, word",
      "answer_2": "book",
      "answer_3": "believe",
      "answer_4": "bend",
      "correct": "say, word",
      "example_word": "dictionary"
    },
    {
      "root": "dom, eco-",
      "answer_1": "earth",
      "answer_2": "win",
      "answer_3": "home, enviroment",
      "answer_4": "recycle",
      "correct": "home, enviroment",
      "example_word": "domestic"
    },
    {
      "root": "duc(t)",
      "answer_1": "bird",
      "answer_2": "guide, gather",
      "answer_3": "tape",
      "answer_4": "hard, last",
      "correct": "guide, gather",
      "example_word": "produce"
    },
    {
      "root": "dur",
      "answer_1": "time",
      "answer_2": "home, enviroment",
      "answer_3": "catch",
      "answer_4": "hard, last",
      "correct": "hard, last",
      "example_word": "durable"
    },
    {
      "root": "equ, homo",
      "answer_1": "same",
      "answer_2": "horse",
      "answer_3": "two",
      "answer_4": "opposite",
      "correct": "same",
      "example_word": "homogeneous"
    },
    {
      "root": "flect(x)",
      "answer_1": "look",
      "answer_2": "four",
      "answer_3": "bend",
      "answer_4": "shape",
      "correct": "bend",
      "example_word": "reflect"
    },
    {
      "root": "form, morph",
      "answer_1": "living",
      "answer_2": "shape",
      "answer_3": "change",
      "answer_4": "bend",
      "correct": "shape",
      "example_word": "metamorphosis"
    },
    {
      "root": "herb, botan",
      "answer_1": "plant",
      "answer_2": "home, enviroment",
      "answer_3": "guide, gather",
      "answer_4": "water",
      "correct": "plant",
      "example_word": "botany"
    },
    {
      "root": "hemo",
      "answer_1": "same",
      "answer_2": "living",
      "answer_3": "plant",
      "answer_4": "blood",
      "correct": "blood",
      "example_word": "hemorrhage"
    },
    {
      "root": "hetero",
      "answer_1": "difficult",
      "answer_2": "different",
      "answer_3": "heat",
      "answer_4": "human",
      "correct": "different",
      "example_word": "heterogeneous"
    },
    {
      "root": "homin, athrop",
      "answer_1": "antelope",
      "answer_2": "same",
      "answer_3": "human",
      "answer_4": "against",
      "correct": "human",
      "example_word": "hominoid"
    },
    {
      "root": "ign, pyr",
      "answer_1": "fire",
      "answer_2": "sign",
      "answer_3": "private",
      "answer_4": "five",
      "correct": "fire",
      "example_word": "ignite"
    },
    {
      "root": "ject",
      "answer_1": "milk",
      "answer_2": "catch",
      "answer_3": "jump",
      "answer_4": "throw",
      "correct": "throw",
      "example_word": "eject"
    },
    {
      "root": "lact",
      "answer_1": "lack",
      "answer_2": "tongue, language",
      "answer_3": "light",
      "answer_4": "milk",
      "correct": "milk",
      "example_word": "lactic acid"
    },
    {
      "root": "ling, lang",
      "answer_1": "languish",
      "answer_2": "tongue, language",
      "answer_3": "tough",
      "answer_4": "place, position",
      "correct": "tongue, language",
      "example_word": "bilingual"
    },
    {
      "root": "loc",
      "answer_1": "place, position",
      "answer_2": "lock",
      "answer_3": "study, reasoning",
      "answer_4": "body",
      "correct": "place, position",
      "example_word": "location"
    },
    {
      "root": "log",
      "answer_1": "wood",
      "answer_2": "mind",
      "answer_3": "study, reasoning",
      "answer_4": "tongue, language",
      "correct": "study, reasoning",
      "example_word": "biology"
    },
    {
      "root": "lum(in), phot",
      "answer_1": "light",
      "answer_2": "sound",
      "answer_3": "fast",
      "answer_4": "star",
      "correct": "light",
      "example_word": "photosynthesis"
    },
    {
      "root": "max, macro",
      "answer_1": "mind, soul",
      "answer_2": "measure",
      "answer_3": "small",
      "answer_4": "large",
      "correct": "large",
      "example_word": "maximum"
    },
    {
      "root": "ment, psych(o)",
      "answer_1": "fire",
      "answer_2": "means",
      "answer_3": "mind, soul",
      "answer_4": "heart",
      "correct": "mind, soul",
      "example_word": "psychology"
    },
    {
      "root": "meter",
      "answer_1": "run",
      "answer_2": "measure",
      "answer_3": "meaning",
      "answer_4": "human",
      "correct": "measure",
      "example_word": "kilometer"
    },
    {
      "root": "mini, micro",
      "answer_1": "large",
      "answer_2": "small",
      "answer_3": "same",
      "answer_4": "alone",
      "correct": "small",
      "example_word": "microscope"
    },
    {
      "root": "mort, necr",
      "answer_1": "death",
      "answer_2": "nector",
      "answer_3": "birth",
      "answer_4": "necessary",
      "correct": "death",
      "example_word": "necrophobia"
    },
    {
      "root": "nat/nai/nasc, gen",
      "answer_1": "death",
      "answer_2": "natural",
      "answer_3": "birth",
      "answer_4": "generic",
      "correct": "birth",
      "example_word": "generate"
    },
    {
      "root": "nov, neo",
      "answer_1": "birth",
      "answer_2": "all",
      "answer_3": "old",
      "answer_4": "new",
      "correct": "new",
      "example_word": "innovate"
    },
    {
      "root": "omni, pan",
      "answer_1": "all",
      "answer_2": "cook",
      "answer_3": "god",
      "answer_4": "see",
      "correct": "all",
      "example_word": "panorama"
    },
    {
      "root": "path",
      "answer_1": "foot",
      "answer_2": "suffering, feeling",
      "answer_3": "study, reasoning",
      "answer_4": "way through",
      "correct": "suffering, feeling",
      "example_word": "sympathy"
    },
    {
      "root": "ped, pod",
      "answer_1": "push",
      "answer_2": "hand",
      "answer_3": "foot",
      "answer_4": "place, position",
      "correct": "foot",
      "example_word": "pedal"
    },
    {
      "root": "pel",
      "answer_1": "push",
      "answer_2": "place, position",
      "answer_3": "pull",
      "answer_4": "bone",
      "correct": "push",
      "example_word": "expel"
    },
    {
      "root": "pend",
      "answer_1": "five",
      "answer_2": "hang",
      "answer_3": "wait",
      "answer_4": "foot",
      "correct": "hang",
      "example_word": "suspend"
    },
    {
      "root": "port",
      "answer_1": "carry",
      "answer_2": "boat",
      "answer_3": "wine",
      "answer_4": "break",
      "correct": "carry",
      "example_word": "portable, export"
    },
    {
      "root": "rupt",
      "answer_1": "throw",
      "answer_2": "ground, earth",
      "answer_3": "volcano",
      "answer_4": "break",
      "correct": "break",
      "example_word": "erupt"
    },
    {
      "root": "scribe, script, graph",
      "answer_1": "sun",
      "answer_2": "statistic, table",
      "answer_3": "record, write",
      "answer_4": "listen",
      "correct": "record, write",
      "example_word": "graphic"
    },
    {
      "root": "sol, heli",
      "answer_1": "sound",
      "answer_2": "soldier",
      "answer_3": "atmosphere",
      "answer_4": "sun",
      "correct": "sun",
      "example_word": "parasol"
    },
    {
      "root": "sol",
      "answer_1": "alone",
      "answer_2": "asleep",
      "answer_3": "look, charactistic",
      "answer_4": "sound",
      "correct": "alone",
      "example_word": "desolate"
    },
    {
      "root": "son, phon",
      "answer_1": "see",
      "answer_2": "sound",
      "answer_3": "technology",
      "answer_4": "mind, soul",
      "correct": "sound",
      "example_word": "phonology"
    },
    {
      "root": "spec",
      "answer_1": "bend",
      "answer_2": "place, location",
      "answer_3": "look, charactistic",
      "answer_4": "glass",
      "correct": "look, charactistic",
      "example_word": "inspect"
    },
    {
      "root": "tempor, chron",
      "answer_1": "soften",
      "answer_2": "time",
      "answer_3": "order",
      "answer_4": "body",
      "correct": "time",
      "example_word": "chronological"
    },
    {
      "root": "terr, geo",
      "answer_1": "ground, earth",
      "answer_2": "star",
      "answer_3": "fearful",
      "answer_4": "study, reasoning",
      "correct": "ground, earth",
      "example_word": "territory"
    },
    {
      "root": "therm",
      "answer_1": "cool",
      "answer_2": "harm",
      "answer_3": "pull",
      "answer_4": "heat",
      "correct": "heat",
      "example_word": "thermometer"
    },
    {
      "root": "tract",
      "answer_1": "truck",
      "answer_2": "pull",
      "answer_3": "push",
      "answer_4": "stomach",
      "correct": "pull",
      "example_word": "tractor"
    },
    {
      "root": "vac",
      "answer_1": "clean",
      "answer_2": "full",
      "answer_3": "empty",
      "answer_4": "turn, change",
      "correct": "empty",
      "example_word": "evacuate"
    },
    {
      "root": "vert",
      "answer_1": "turn, change",
      "answer_2": "empty",
      "answer_3": "green",
      "answer_4": "plant",
      "correct": "turn, change",
      "example_word": "vertical"
    },
    {
      "root": "vis, scope",
      "answer_1": "large",
      "answer_2": "body",
      "answer_3": "sound",
      "answer_4": "see",
      "correct": "see",
      "example_word": "microscope"
    }
  ];
  
  //Sets variables for the actual practice set (data) and the selected items (item_select)
  var data = [];
  var item_select = [];
  
  //updates the actual practice set data after items have been selected
  function wpupdate(){
  for (var i of item_select) {
    data.push(bigdata[i]);
  } 
  getRandomWord();
  }
  
  //Opens the items to be chosen by creating elements (a checkbox, the word or word part, and a break)
  function Choose_Items(){
    document.getElementById('items_chooser').style.display="block";
    bigdata.forEach(function (problemifier, index){
      var checker = document.createElement("input");
      checker.setAttribute("type","checkbox");
      checker.id = "itemno_" + index;
      let current_item = problemifier.root;
      let current_box = "itemno_" + index;
      var labeler = document.createElement("label");
      labeler.setAttribute("for", "itemno_" + index);
      labeler.id = "itemno_id_" + index;
      labeler.textContent = current_item;
      var dumb_br = document.createElement("br");
      dumb_br.id = "dumb_br_" + index;
      document.getElementById('items_chooser').appendChild(dumb_br);
      document.getElementById('items_chooser').appendChild(checker);
      document.getElementById('items_chooser').appendChild(labeler);
      if (item_select.length > 0){
        
        let comeonman = item_select.includes(index);
        if (comeonman == true){
          document.getElementById(current_box).checked=true;
        } else {
          document.getElementById(current_box).checked=false;
        } }
  });
    
    data = [];
    item_select = [];
  }
  
  
  //Once the items have been chosen, this deletes the created elements and hides the choosing section again. Also calls the wpupdate function.
  function Items_Chosen(){
    bigdata.forEach(function (problem, index){
      var get_check = "itemno_"+index;
      var get_label = "itemno_id_"+index;
      var get_br = "dumb_br_"+index;
      var act_br = document.getElementById(get_br);
      var act_label = document.getElementById(get_label);
      var act_check = document.getElementById(get_check);
      if (act_check.checked == true){
        item_select.push(index);
        
      }
      act_check.parentNode.removeChild(act_check);
      act_label.parentNode.removeChild(act_label);
      act_br.parentNode.removeChild(act_br);
    });
    document.getElementById('items_chooser').style.display="none";
    wpupdate();
  }
  
  
  //Sets the RN variable, which controls which item is being considered from the data set and the language.
  var RN = 0;
  var language_var = 'en-US'
  function Check_Language(){
    language_var = document.getElementById('language_select').value;
  }
  
  //Reset functions re-hide the decision on whether answers were correct or not. They are called by other functions.
  function reset_speech() {
      document.getElementById('good_p').style.visibility="hidden";
  }
  
  function reset_answers() {
      document.getElementById('good_a').style.visibility="hidden";
  }
  
  //Sets RN to a random number in the data set and then initializes the questions.
  function getRandomWord() {
      RN = Math.floor(Math.random() * data.length);
    Initialize();
      
  }
  
  //Sets RN to the next item in the set (or to the first if RN is the last item in the set) and then initializes the questions.
  function getNextWord(){
    
    var combobreaker = data.length;
    if (RN == combobreaker){
      RN = 0;
      Initialize();
    } else {
      RN = RN+1;
      Initialize();
    }
    
    
  }
  
  //Sets all of the question information based on the value of RN
  function Initialize() {
    document.getElementById('speech_output').value = "";
    document.getElementById('good_a').style.visibility="hidden";
    document.getElementById('good_p').style.visibility="hidden";
    document.getElementById('prefix').innerHTML=data[RN].root;
    document.getElementById('answer1').innerHTML=data[RN].answer_1;
    document.getElementById('answer2').innerHTML=data[RN].answer_2;
    document.getElementById('answer3').innerHTML=data[RN].answer_3;
    document.getElementById('answer4').innerHTML=data[RN].answer_4;
    document.getElementById('example_word').innerHTML=data[RN].example_word;
    document.getElementById('example_word').style.display="inline";
    correct_answer=data[RN].correct;
    
  }
  
  //Checks for if answer "A" is selected.
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
  
  //Checks for if answer "B" is selected.
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
  
  //Checks for if answer "C" is selected.
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
  
  //Checks for if answer "D" is selected.
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
  
  //Provides the listening example via text-to-speech, based on language selection.
  function Listen() {
      var word = data[RN].example_word;
      let utter = new SpeechSynthesisUtterance();
      utter.lang = language_var;
      utter.text = word;
      window.speechSynthesis.speak(utter);
  }
  
  //Initializes ASR for speaking question and handles results.
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
  
  //Begins the ASR, including init function, and also sets the stop / time out.
  function start() {
      document.getElementById('speech_output').value = "";
      init();
      recognition.start();
      setTimeout(stop, 3000);
  }
  
  //Checks the pronunciation and then resets the evaluation.
  function check_speech () {
      var wordme = data[RN].example_word;
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
  
  //Just used to stop the ASR.
  function stop(){
      recognition.onend = null;
      recognition.stop();
      setTimeout(check_speech, 1500);
    }
  
  //Checks the checkboxes to see what types of questions the user wants and acts accordingly.
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
  
  
  
  