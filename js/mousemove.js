/**
 * Created by LI on 2017/8/9.
 */
var mouseTrack = []
bg.onmousemove = function (ev) {

    var mousePosition = function (ev) {
        mouseTrack.push(ev.clientX);
        if (mouseTrack.length > 3) {
            mouseTrack.shift();
        }
    };
    mousePosition(ev);
    var direction = mouseTrack[1] - mouseTrack[0];
    if (direction < 0) {
        doodle.style.backgroundImage = "url(img/Ldoodle.png)";
        if (doodle.offsetLeft < -10) {
            doodle.style.left = -10 + "px";
        } else {
            doodle.style.left = doodle.offsetLeft - 2 + "px";
        }
    } else {
        if (direction > 0) {
            doodle.style.backgroundImage = "url(img/Rdoodle.png)";
            if (doodle.offsetLeft > 400) {
                doodle.style.left = 400 + "px";
            } else {
                doodle.style.left = doodle.offsetLeft + 2 + "px";
            }
        }
    }
}
doodle.onmousemove = function (ev) {
    ev.stopPropagation();
}