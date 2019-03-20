//var fullscreen = false;

const fullscreenModule = {
    fullscreen: false,
    fullscreenToggle: () => {
        if (!fullscreenModule.fullscreen) {
            const docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
            else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    },
    toggleButton: () => { }
}
export default fullscreenModule;

document.addEventListener("fullscreenchange", function () {
    fullscreenModule.fullscreen = document.fullscreen;
    fullscreenModule.toggleButton(fullscreenModule.fullscreen);
}, false);

document.addEventListener("mozfullscreenchange", function () {
    fullscreenModule.fullscreen = document.mozFullScreen;
    fullscreenModule.toggleButton(fullscreenModule.fullscreen);
}, false);

document.addEventListener("webkitfullscreenchange", function () {
    fullscreenModule.fullscreen = document.webkitIsFullScreen;
    fullscreenModule.toggleButton(fullscreenModule.fullscreen);
}, false);

document.addEventListener("msfullscreenchange", function () {
    fullscreenModule.fullscreen = document.msFullscreenElement;
    fullscreenModule.toggleButton(fullscreenModule.fullscreen);
}, false);


/*const toggleButton = (state) => {
    if (state) {
        document.querySelector('.fs-toggle .fas').classList.remove('fa-arrows-alt');
        document.querySelector('.fs-toggle .fas').classList.add('fa-compress-arrows-alt');
    } else {
        document.querySelector('.fs-toggle .fas').classList.add('fa-arrows-alt');
        document.querySelector('.fs-toggle .fas').classList.remove('fa-compress-arrows-alt');
    }

};*/