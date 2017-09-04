/**
 * Created by LI on 2017/8/9.
 */

/*
*   砖块和人物向下移动
*   记录得分
*   难度提升(火狐浏览器在提生时出现bug)
* */
var probability = 0.7;
var score = 0;
var speed = 1;
function jumpmove(){
    var scorediv = document.getElementById("score");
    doodle.style.top = doodle.offsetTop + speed +"px";
    score += speed;
    scorediv.innerHTML = parseInt(score);
    if(score > 3000) {
        probability = 0.5;
        level = 80;
        speed = 1.5;
    }
    if(score > 7000){
        probability = 0.2;
        level = 100;
        speed = 2;
    }
    if(score > 12000) {
        probability = 0.1;
        level = 130 ;
        speed = 3;
    }
    for(let i=0;i<panel.length;i++) {
        panel[i].style.top = panel[i].offsetTop + speed  + "px";
    }
}