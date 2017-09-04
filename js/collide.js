/**
 * Created by LI on 2017/8/9.
 */
/*
*  人物与砖块碰撞检测
*  
* */
function collide() {

    var doodleL = doodle.offsetLeft;
    var doodleR = doodle.offsetWidth + doodleL;
    var doodleD = doodle.offsetHeight + doodle.offsetTop;
    for (let i = 0; i < panel.length; i++) {
        var panelL = panel[i].offsetLeft;
        var panelR = panel[i].offsetWidth + panel[i].offsetLeft;
        var panelU = panel[i].offsetTop;
        var panelD = panel[i].offsetHeight + panel[i].offsetTop;

        if (doodlecondition) {
            if (panelL < doodleR - 15 && panelR > doodleL + 23) {
                if (doodleD >= panelU && doodleD <= panelD) {
                    clearInterval(panelmove);
                    JH = jumpheight;
                    doodlecondition = 0;

                    standardpanel = panelD;

                    if (panel[i].style.backgroundColor == "white") {
                        bg.removeChild(panel[i]);/*白色砖块只能跳一次*/
                    }
                    if (standardpanel < 500) {
                        var panellist = [];
                        for (let i = 0; i < panel.length; i++) {
                            var ele = panel[i];
                            panellist.push(ele);
                        }
                        panelmove = setInterval(function () {
                            jumpmove();/*碰撞成功   人物与砖块向下移动*/
                            standardpanel = panellist[i].offsetHeight + panellist[i].offsetTop;
                            if (standardpanel >= 500) {
                                clearInterval(panelmove);
                            }
                        }, 4);
                    }

                }
            }
        }
        if (panel[0].offsetTop > 610) {
            bg.removeChild(panel[0]);/*超出画面的砖块移除*/
        }
    }
}