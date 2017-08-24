/**
 * Created by LI on 2017/8/9.
 */
bg.onmousemove=function(ev){

    imgchange = doodle.offsetLeft;
    check = ev.clientX - bg.offsetLeft;
    
    if(check <= 163) {
        doodle.style.left = check + bg.offsetWidth/2 + "px";
    }else{
        doodle.style.left = 400 + "px";
    }

   if(imgchange>doodle.offsetLeft){
        doodle.style.backgroundImage = "url(img/Ldoodle.png)";
    }else{
        doodle.style.backgroundImage = "url(img/Rdoodle.png)";
    }
}
doodle.onmousemove = function (ev) {
    ev.stopPropagation();
}