// Add Notes And Remove Notes

var noteBox = document.getElementById("notes");


function addNotes() {
  var notes = [noteBox.children];
  let deleteme = notes.length;
  var selectedText = window.getSelection().toString().trim();
  noteBox.innerHTML += "<div data-bs='"+ deleteme +"'><a href='" + ('#mark' + highlightNotes) + "' ><h4>" + selectedText + "</h4></a><textarea></textarea><button type='button' onclick='removeNotes()' id='remove'>remove</button></div>";
  
  highlightText();

  console.log(deleteme);
}

function removeNotes() {
  event.target.parentNode.remove();
}

// Add Notes And Remove Notes


//زمان باقیمانده آزمون

var time = new Date().getTime() + 3602 * 1000;
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = time - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = hours + " hours " + minutes + " minut remaining ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time Out";
  }
  if (hours < 1) {
    document.getElementById("timer").innerHTML = minutes + " minut remaining ";
  }
  if (hours < 1 && minutes < 1) {
    document.querySelector(".header").style.backgroundColor = "rgba(241, 75, 75, 0.407)";
    document.getElementById("timer").innerHTML = seconds + " second remaining ";
  }
}, 1000);

//زمان باقیمانده آزمون



// themeColor

function dark() {
    var root = document.documentElement;
    var style = getComputedStyle(root);
  
    root.style.setProperty('--backGroundColorWhite', '#000000');
    root.style.setProperty('--color', '#ffff');
    console.log(style);
  }
  function light() {
    var root = document.documentElement;
    var style = getComputedStyle(root);
  
    root.style.setProperty('--backGroundColorWhite', '#ffff');
    root.style.setProperty('--color', '#00000');
    console.log(style);
  }
  function gold() {
    var root = document.documentElement;
    var style = getComputedStyle(root);
  
    root.style.setProperty('--backGroundColorWhite', '#000000');
    root.style.setProperty('--color', '#ffd700');
    console.log(style);
  }
  
// themeColor



// FontSize

var root = document.documentElement;
var style = getComputedStyle(root);

function regular() {
    
    root.style.setProperty('--Heading', '16px');
    root.style.setProperty('--Text', '16px');
    console.log(style);
  
  }

  function larg() {
    
    root.style.setProperty('--Heading', '22px');
    root.style.setProperty('--Text', '22px');
    console.log(style);
  
  }

  function extraLarg() {  
        
    root.style.setProperty('--Heading', '22px');
    root.style.setProperty('--Text', '22px');
    console.log(style);
  
  }
  
// FontSize



// Highlight And removeHighlight
var highlightNotes = 0;
function highlightText() {
  var paragraph = document.getElementById("paragraph");
  var selectedText = window.getSelection().toString();

  if (selectedText !== '') {
    var range = window.getSelection().getRangeAt(0);


    var mark = document.createElement("mark");
    mark.id = "mark" + highlightNotes;
    highlightNotes =  highlightNotes + 1;
    mark.innerHTML = selectedText;
  

    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.style.color = "red";
    span.innerHTML = selectedText;

    if (paragraph.contains(range.commonAncestorContainer)) {
      range.deleteContents();
      range.insertNode(span);
    }
  }
}

function removeHighlightText() {
  var highlightedText = document.querySelector("span[style='background-color: yellow; color: red;']");
  if (highlightedText) {
    var text = highlightedText.textContent;
    highlightedText.parentNode.replaceChild(document.createTextNode(text), highlightedText);
  }
}
// Highlight And removeHighlight


// highilght and remove options

document.addEventListener("contextmenu", function (event) {
    var paragraph = document.getElementById("paragraph");
    var selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
      var highlightOption = document.getElementById("highlightButton");
      var removeHighlightOption = document.getElementById("removeButton");
      highlightOption.style.position = "absolute";
      highlightOption.style.top = event.clientY + "px";
      highlightOption.style.left = event.clientX + "px";
      highlightOption.style.backgroundColor = "white";
      highlightOption.style.border = "1px solid grey";
      highlightOption.style.padding = "5px";
      highlightOption.style.display = "block";
  
      highlightOption.addEventListener("click", function () {
        highlightText();
  
        highlightOption.style.display = "none";
        removeHighlightOption.style.display = "none";
      });
    }
  });
  
  
  document.addEventListener("contextmenu", function (event) {
    var selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
      event.preventDefault(); // Prevent the default context menu
      var highlightOption = document.getElementById("highlightButton");
      var removeHighlightOption = document.getElementById("removeButton");
      removeHighlightOption.style.position = "absolute";
      removeHighlightOption.style.top = event.clientY + 30 + "px";
      removeHighlightOption.style.left = event.clientX + "px";
      removeHighlightOption.style.backgroundColor = "white";
      removeHighlightOption.style.border = "1px solid grey";
      removeHighlightOption.style.padding = "5px";
      removeHighlightOption.style.display = "block";
      removeHighlightOption.style.cursor = "pointer";
  
      // document.body.appendChild(removeHighlightOption);
  
      removeHighlightOption.addEventListener("click", function () {
        removeHighlightText()
        removeHighlightOption.style.display = "none";
        highlightOption.style.display = "none";
      });
    }
  });
// highilght and remove options
