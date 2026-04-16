var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = {};

window.onYouTubeIframeAPIReady = function() {
    // We target the ID "trailer1" from your HTML
    players['trailer1'] = new YT.Player('trailer1');
};

window.playVideo = function(id) {
    if (players[id] && players[id].playVideo) {
        players[id].playVideo();
    }
};

window.pauseVideo = function(id) {
    if (players[id] && players[id].pauseVideo) {
        players[id].pauseVideo();
    }
};

window.showVideos = function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("players").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("videos").style.display = "block";
};

window.showHome = function() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("players").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("videos").style.display = "none";
};

window.showPlayers = function () {

    document.getElementById("home").style.display = "flex";
    document.getElementById("players").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("videos").style.display = "none";

    document.getElementById("players").scrollIntoView();
};



window.showAbout = function () {

    document.getElementById("home").style.display = "flex";
    document.getElementById("players").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("videos").style.display = "none";

    document.getElementById("about").scrollIntoView();
};

window.showHome = function() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("players").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("videos").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};