/**
 * Created by LI on 2017/8/9.
 */
/*
* 使用随机函数创建砖块
* 
* */
var  randompanel = {
    randomNum:function (min,max) {
        return parseInt(Math.random()*(max-min+1)+min);
    },
    panelXnum:function (){
        return this.randomNum(0,380);
    },
    panelYnum:function () {
        return this.randomNum(level,150);
    },
    panelType:function () {
        return Math.random();
    }
}
function createpanel(){
 var newpanel = document.createElement("div");
 newpanel.className="panel";
 newpanel.style.position="absolute";
 newpanel.style.left= randompanel.panelXnum() + "px";
 newpanel.style.top= panel[panel.length-1].offsetTop - randompanel.panelYnum() + "px";
 var panelType = randompanel.panelType();
 if(panelType > probability){
     newpanel.style.backgroundColor = "white";
     newpanel.style.border = "1px solid black";
     newpanel.style.height = "12px";
 }
 bg.appendChild(newpanel);
 }