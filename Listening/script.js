
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});


function light() {
  var root = document.documentElement;
  var style = getComputedStyle(root);

  root.style.setProperty('--backGroundColorWhite', '#000000');
  root.style.setProperty('--color', '#ffff');
  console.log(style);
}






// function light() { var root = document.documentElement;
//    root.style.setProperty('--backgroundColor','black') 
//    console.log(root.style) }









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
var highlighted_text = [];
var pined_text = [];
var item_control = 1;
var idItem = "fesad";
// let item_set_model = {
//   item_data: "",
//   item_text: "",
//   data_type: ""
// }
function highlightText() {
  var selectedText = window.getSelection();
  if (selectedText.anchorNode.parentElement == selectedText.focusNode.parentElement && Object.values(selectedText.getRangeAt(0).cloneContents().childNodes).every(itemwe => itemwe.nodeName !== "BR")) {
    var span = document.createElement("mark");
    span.style.backgroundColor = "yellow";
    var sample = selectedText.getRangeAt(0).extractContents();
    span.appendChild(sample);
    span.dataset.id = item_control;
    span.id = idItem;
    item_control = item_control + 1;
    var selection = window.getSelection().getRangeAt(0);
    // let item_set = new item_set_model;
    // item_set = 
    // {
    //   item_data: span.dataset.id,
    //   item_text: selectedText,
    //   data_type: "highlighted"
    // }
    // highlighted_text.push(item_set);
    selection.deleteContents();
    selection.insertNode(span);
    var myitem = document.querySelectorAll("#fesad");
    myitem.forEach(apelo => {
      apelo.onclick = () => {
        let abbas = apelo.innerHTML;
        apelo.replaceWith(abbas);
        console.log(1);
      }
    })
  }

}
// }
// function removeHighlightText() {
//   var high_lighted = document.querySelectorAll("mark[data-id]");
//   // console.log(high_lighted);
//   high_lighted.forEach(item =>{
//     item.onclick = function () {
//       var item_detail = item.innerHTML;
//       var item_dataset = item.id;
//       var item_Situation = Object.values(item.parentNode.childNodes);
//       var test = item_Situation.find((myItem) => { return myItem.id = item_dataset });
//       console.log(test , item_detail , item_dataset)
//     };
//   })
// var selectedText = window.getSelection().toString();

// if (selectedText !== '') {
//   var span = document.createElement("mark");
//   span.style.backgroundColor = "white";
//   span.innerHTML = selectedText;
//   var selection = window.getSelection().getRangeAt(0);
//   selection.deleteContents();
//   selection.insertNode(span);
// }
// }

document.addEventListener("contextmenu", function (event) {
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

    highlightOption.onclick = function () {
      highlightText();

      highlightOption.style.display = "none";
      removeHighlightOption.style.display = "none";
    };
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

    removeHighlightOption.onclick = function () {
      removeHighlightText()
      removeHighlightOption.style.display = "none";
      highlightOption.style.display = "none";
    };
  }
});


// "فانکشن سوال های جواب داده شده"

var allAnswers = document.querySelectorAll(".answers");
// "اگه به لیست جواب ها نیازه"
// var AnswerArray = [];

function getQuestionValue() {
  for (let i = 0; i < allAnswers.length; i++) {
    var answerBox = allAnswers[i].childNodes;

    for (let x = 0; x < answerBox.length; x++) {
      // Check if the child node is a label
      if (answerBox[x].nodeName === 'LABEL') {
        // Get the value of the input radio inside the label
        var radioValue = answerBox[x].querySelector('input[type=radio]');
        radioValue.onfocus = function () {
          var testNumber = event.target.parentNode.parentNode.parentNode.dataset.number;
          testNumber = Number(testNumber);
          var testNumberBox = document.querySelectorAll(".qstNumberBox");
          if (!testNumberBox[testNumber].classList.contains("pass")) {
            testNumberBox[testNumber].classList.add("pass");
            // console.log(event.target.parentNode.parentNode.parentNode.dataset.number);

          }
          nextPrev(testNumber);
        }
      }
    }
  }
}

getQuestionValue()

// "فانکشن نشان شده ها"

function setMarked() {
  var markerbtn = document.querySelectorAll(".markerQuestion")
  for (let item of markerbtn) {
    item.onclick = function () {
      var testNumberMark = event.target.parentNode.parentNode.dataset.number;
      testNumberMark = Number(testNumberMark);
      var testNumberMarkBox = document.querySelectorAll(".qstNumber");
      testNumberMarkBox[testNumberMark].classList.toggle("mark");

      event.target.querySelector(".marked").classList.toggle("hidden");
      event.target.querySelector(".unmarked").classList.toggle("hidden");
    }
  }
}
setMarked();


// "فانکشن next prev"

function nextPrev(testNumber) {
  if (testNumber - 1 < 0) {
    document.querySelector(".prev").href = "#question" + (allAnswers.length - 1);

  } else {
    document.querySelector(".prev").href = "#question" + (testNumber - 1);

  }
  if (testNumber + 1 > allAnswers.length - 1) {
    document.querySelector(".next").href = "#question0";

  } else {
    document.querySelector(".next").href = "#question" + (testNumber + 1);

  }

}
var qstshowNext = 1;
var qstshowPrev = allAnswers.length - 1;

function nextPrevClick() {
  if (qstshowNext + 1 > allAnswers.length) {
    document.querySelector(".next").href = "#question0";
    qstshowNext = 0;
    console.log(qstshowNext)
  } else {
    document.querySelector(".next").href = "#question" + qstshowNext;
    qstshowNext = qstshowNext + 1;
    console.log(qstshowNext)
  }
  if (qstshowPrev - 1 < 0) {
    document.querySelector(".prev").href = "#question0";
    qstshowPrev = allAnswers.length - 1;
    console.log(qstshowPrev)
  } else {
    document.querySelector(".prev").href = "#question" + qstshowPrev;
    qstshowPrev = qstshowPrev - 1;
    console.log(qstshowPrev)
  }
  // console.log(allAnswers.length)
}

// "ارتباط شماره ها با next prev"

