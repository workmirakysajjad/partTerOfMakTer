
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
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


// function highlightText() {
// var selectedText = window.getSelection().toString().trim();

//   if (selectedText !== '') {
//     var span = document.createElement("span");
//     span.style.backgroundColor = "yellow";
//     span.innerHTML = selectedText;
//     var selection = window.getSelection().getRangeAt(0);

//     // Extract the contents within the selection range
//     var extractedContents = selection.extractContents();

//     // Reconstruct the contents and include <br> tags
//     var reconstructedContents = document.createDocumentFragment();
//     for (var i = 0; i < extractedContents.childNodes.length; i++) {
//       var node = extractedContents.childNodes[i];
//       if (node.nodeName === "BR" ) {
//         reconstructedContents.appendChild(node.cloneNode());
//       } else {
//         var span = document.createElement("span");
//         span.innerHTML = node.textContent;
//         reconstructedContents.appendChild(span);
//       }
//     }

//     // Insert the reconstructed contents back into the selection range
//     selection.deleteContents();
//     selection.insertNode(reconstructedContents);
//   }
// }








//     // Reconstruct the contents and include <br> tags
//     var reconstructedContents = document.createDocumentFragment();
//     for (var i = 0; i < extractedContents.childNodes.length; i++) {
//       var node = extractedContents.childNodes[i];
//       if (node.nodeName === "BR" ) {
//         reconstructedContents.appendChild(node.cloneNode());
//       } else {
//         var span = document.createElement("span");
//         span.innerHTML = node.textContent;
//         reconstructedContents.appendChild(span);
//       }
//     }



var highlightNotes = 0;
function highlightText() {
 
  var selectedText = window.getSelection().getRangeAt(0).extractContents().children;
  // var selectedText1 = window.getSelection().toString();
  // let dfg = selectedText.childNodes;
  // for(let item of dfg){
    console.log(selectedText)
    // if( !selectedText == "" ){
    //   var mark = document.createElement("mark");
    //       mark.id = "mark" + highlightNotes;
    //       highlightNotes = highlightNotes + 1;
      
    //       mark.appendChild(selectedText);
    //       var selection = window.getSelection().getRangeAt(0);
    //       selection.deleteContents();
    //       selection.insertNode(mark);
    //   console.log(true)
    // }
  // }
  // console.log(dfg)
  // if (selectedText !== ''  || selectedText.childNodes.includes()) {
  // for(var end = 0 ; end < selectedText.childNodes.length; end++ ){
    // if(selectedText.childNodes[end].nodeName === "BR"){
      
        
          // var mark = document.createElement("mark");
          // mark.id = "mark" + highlightNotes;
          // highlightNotes = highlightNotes + 1;
      
          // mark.innerHTML = selectedText;
          // var selection = window.getSelection().getRangeAt(0);
          // selection.deleteContents();
          // selection.insertNode(mark);
        
     
    // }
  // }
// }
  // if( selectedText.containsNode(selectedTextnodeName === "BR" , true)){
  //   console.log("sajad kose")
  // }
  // var extractedContents = selection.extractContents();


  
  // if( selectedText.children.nodeName === "BR"){
    
  //   console.log("sajad goh nakhor")

  // }
  // }

}


function removeHighlightText() {
  var selectedText = window.getSelection().toString();

  if (selectedText !== '') {
    var span = document.createElement("span");
    span.style.backgroundColor = "white";
    span.innerHTML = selectedText;
    var selection = window.getSelection().getRangeAt(0);
    selection.deleteContents();
    selection.insertNode(span);
  }
}

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
    removeHighlightOption.style.left = event.clientX + 30 + "px";
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









// notes

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