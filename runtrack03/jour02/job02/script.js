
var button = document.getElementById("button");
var article = document.getElementById("article");

function showhide() {
    if (getComputedStyle(article).display != "none") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}
button.addEventListener(button, showhide())
if (getComputedStyle(article).display != "none") {
    article.style.display = "none";
} else {
    article.style.display = "block";
}
button.onclick = showhide;

