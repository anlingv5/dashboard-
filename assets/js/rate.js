
var rate = 0;

function fSetrateData(rate) {
    document.getElementById("left_foot").style.left = $("#rate").width() * 2 / 5 - 24 + "px";
    document.getElementById("right_foot").style.left = $("#rate").width() * 4 / 5 - 24 + "px";
    document.getElementById("right_foot").style.top = 100 - rate + "px";

    document.getElementById("ratetext").innerText = rate + "%";
    document.getElementById("ratetext").style.left = $("#rate").width() * 3 / 5 - 20 + "px";
    document.getElementById("ratetext").style.top =  100 - rate / 2  + "px";
    document.getElementById("ratetext").style.color = "red";
    document.getElementById("ratetext").style.fontSize = 30 + "px";
}
