(function() {

    var _className = function _className(cl) {
        return document.getElementsByClassName(cl);
    };

    var _qrySel = function _qrySel(qry) {
        return document.querySelectorAll(qry);
    }

    var trafficLight = _qrySel(".bulb");
    // var slowLight = _qrySel(".bulb");
    console.log(trafficLight);
    var btn = _className("button");
    // consoloe.log(btn);

    var changeColor = function changeColor() {
        console.log(this.innerHTML);
        if (this.innerHTML === "Stop") {
            trafficLight[1].style.background = "";
            trafficLight[2].style.background = "";
            trafficLight[0].style.background = "red";
        } else if (this.innerHTML === "Slow") {
            trafficLight[0].style.background = "";
            trafficLight[2].style.background = "";
            trafficLight[1].style.background = "yellow";

        } else if (this.innerHTML === "Go") {
            trafficLight[0].style.background = "";
            trafficLight[1].style.background = "";
            trafficLight[2].style.background = "green";

        }


    };

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', changeColor);
    }

}());
