
// == like or Dislike ==

function like(){
    document.getElementById('increment').style.color = "blue";
    document.getElementById('decrement').style.color = "gray";
}

function dislike(){
    document.getElementById('increment').style.color = "gray";
    document.getElementById('decrement').style.color = "blue";
}


// ===== Counter incresement only after click on like button =====

let count = 0;

document.getElementById("increment").onclick = function(){
    count += 1;
    document.getElementById("counter").innerHTML = count;
}

// ===== Counter decresement only after click on dislike button =====

document.getElementById("decrement").onclick = function(){
    count += 1;
    document.getElementById("counterDislike").innerHTML = count;
}




