let url = window.location.href;
let anchors = document.querySelectorAll('nav a');

for (var i = 0; i < anchors.length; i++) {

    if (anchors[i].href === url) {
        anchors[i].classList.add('current');
    }
}