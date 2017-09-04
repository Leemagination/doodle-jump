/**
 * Created by LI on 2017/8/9.
 */
/*  
*  使用setinterval函数实现人物跳跃动画
*  失败判定
* */
function jump() {
    
    doodle.style.top = doodle.offsetTop - JH-- + "px";
    if(JH< -14) {
        JH = -14;
    }
    if(JH<0){
        doodlecondition = 1;
    }
    else{
        doodlecondition = 0;
    }

    var fall = doodle.offsetTop + doodle.offsetHeight;
    if(fall>bg.offsetHeight){
        alert("you failed\n"  +"your score:"+ parseInt(score));
        clearInterval(doodlejump);
        clearInterval(gaming);
        clearInterval(doodlejump);
        clearInterval(doodlepanel);
        window.location.href = "index.html";
    }
}