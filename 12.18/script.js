function handler(event) {
    //thirdClickTest
    event.stopPropagation();
    console.log(event);
    console.log(this);
}

function handler2(event) {
    // alert("second alert");
    alert(this.id);
    console.log("target = ", event.target);
    event.target.removeEventListener("click", handler2);
}

//раскомментировать только вместе с html
/*document.getElementById("clickTest").onclick = () => {
    alert('И опять нажато!');
};
console.log(document.getElementById("clickTest"));
console.log(document);


function clickTest() {
    alert("Да хватит нас нажимать!");
}

document.getElementById("secondClickTest").onclick = clickTest;

document.getElementById("thirdClickTest").onclick = handler;
document.getElementById("thirdClickTest").onclick = handler2;


var fourthDiv = document.getElementById("fourthClickTest");
fourthDiv.addEventListener("click", handler);
fourthDiv.addEventListener("click", handler2);*/


document.getElementById("div1").addEventListener("click", handler);
document.getElementById("div2").addEventListener("click", handler);
document.getElementById("div3").addEventListener("click", handler);
document.getElementsByTagName("body")[0].addEventListener("click", handler);


// document.getElementById("div1").addEventListener("click", handler2, true);
// document.getElementById("div2").addEventListener("click", handler2, true);
// document.getElementById("div3").addEventListener("click", handler2, true);
// document.getElementsByTagName("body")[0].addEventListener("click", handler2, true);