var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = {};

window.onYouTubeIframeAPIReady = function () {
    ['trailer1', 'trailer2', 'trailer3'].forEach(id => {
        players[id] = new YT.Player(id);
    });
};

window.addEventListener("load", () => {
    const iframes = document.querySelectorAll("iframe");

    iframes.forEach(frame => {
        frame.setAttribute("loading", "lazy");
    });
});

function stopAllVideos() {
    Object.values(players).forEach(player => {
        if (player && player.pauseVideo) {
            player.pauseVideo();
        }
    });
}

let ticking = false;

window.addEventListener("scroll", function () {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            ticking = false;
        });

        ticking = true;
    }
});

window.playVideo = function (id) {
    if (players[id] && players[id].playVideo) {
        players[id].playVideo();
    }
};

window.pauseVideo = function (id) {
    if (players[id] && players[id].pauseVideo) {
        players[id].pauseVideo();
    }
};

function stopAllVideos() {
    Object.values(players).forEach(player => {
        if (player && player.pauseVideo) {
            player.pauseVideo();
        }
    });
}

function showMainSections() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("players").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("videos").style.display = "none";
    stopAllVideos();
}

function showVideos(event) {
    event.preventDefault();

    document.getElementById("home").style.display = "none";
    document.getElementById("players").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("videos").style.display = "block";
}

function showHome(event) {
    event.preventDefault();

    showMainSections();

    setTimeout(() => {
        document.getElementById("home").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 50);
}

function showPlayers(event) {
    event.preventDefault();

    showMainSections();

    setTimeout(() => {
        document.getElementById("players").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 50);
}

function showAbout(event) {
    event.preventDefault();

    showMainSections();

    setTimeout(() => {
        document.getElementById("about").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 50);
}