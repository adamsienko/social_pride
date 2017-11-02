var time = 0;

var canvas = document.querySelector('canvas');


var ctx = canvas.getContext('2d');

var numberOfSides = 130,
    size = 220,
    Xcenter = 240,
    Ycenter = 240,
    floatingAmount = 20,
    pointSpeedFactor = 15;

var randomLinesAmount = Math.random() * 90;
var randomLines = new Array();
var circle = new Array();
var circleFloating = new Array();


for (var i = 1; i <= numberOfSides; i += 1) {
    x = Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides) + Math.random() * 80;
    y = Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides) + Math.random() * 80;
    circle.push([x, y]);
    circleFloating.push([x, y, '', '']);
}

for (var i = 0; i < randomLinesAmount; i++) {
    randomLines.push(Math.floor(Math.random() * circleFloating.length));
}

/*function drawlines() {
    for (var i = 0; i < randomLinesAmount; i++) {
        ctx.beginPath();
        ctx.moveTo(circleFloating[randomLines[i]][0], circleFloating[randomLines[i]][1]);
        if (i > 0) {
            ctx.lineTo(circleFloating[randomLines[i - 1]][0], circleFloating[randomLines[i - 1]][1]);
        } else {
            ctx.lineTo(circleFloating[randomLines[0]][0], circleFloating[randomLines[0]][1]);

        }
        ctx.strokeStyle = "#252525";
            ctx.lineWidth = 0.3;
            ctx.stroke();
        
        ctx.closePath();
        
    }
}*/

    function drawCircle() {
        for (i = 0; i < circle.length; i++) {
            ctx.beginPath();
            ctx.moveTo(circleFloating[i][0], circleFloating[i][1]);
            if (i > 0) {
                ctx.lineTo(circleFloating[i - 1][0], circleFloating[i - 1][1]);
            } else {
                ctx.lineTo(circleFloating[0][0], circleFloating[0][1]);
            }
            ctx.strokeStyle = "#252525";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.arc(circleFloating[i][0], circleFloating[i][1], 2, 0, Math.PI * 2, false);
            ctx.fillStyle = '#252525';
            ctx.fill();
            ctx.strokeStyle = '#252525';
            ctx.stroke();
            ctx.closePath();
        }
    }

    function floatingCoordinates() {

        for (i = 0; i < circle.length; i++) {

            if (circleFloating[i][0] === circle[i][0]) {
                if (Math.random() > 0.5) {
                    circleFloating[i][2] = "right";
                } else {
                    circleFloating[i][2] = "left";
                }
            }

            if (circleFloating[i][0] <= circle[i][0] - floatingAmount) {
                circleFloating[i][2] = "right";
            } else if (circleFloating[i][0] >= circle[i][0] + floatingAmount) {
                circleFloating[i][2] = "left";
            }


            if (circleFloating[i][2] == "right") {
                circleFloating[i][0] = circleFloating[i][0] + Math.random() / pointSpeedFactor;
            } else if (circleFloating[i][2] == "left") {
                circleFloating[i][0] = circleFloating[i][0] - Math.random() / pointSpeedFactor;
            }

            if (circleFloating[i][1] === circle[i][1]) {
                if (Math.random() > 0.5) {
                    circleFloating[i][3] = "up";
                } else {
                    circleFloating[i][3] = "down";
                }
            }

            if (circleFloating[i][1] <= circle[i][1] - floatingAmount) {
                circleFloating[i][3] = "up";
            } else if (circleFloating[i][1] >= circle[i][1] + floatingAmount) {
                circleFloating[i][3] = "down";
            }

            if (circleFloating[i][3] == "up") {
                circleFloating[i][1] = circleFloating[i][1] + Math.random() / pointSpeedFactor;
            } else if (circleFloating[i][3] == "down") {
                circleFloating[i][1] = circleFloating[i][1] - Math.random() / pointSpeedFactor;
            }
        }
    }


    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //2 razy width?

        for (i = 0; i < circleFloating.length; i++) {
            if (circleFloating[i][0] < circle[i][0] - floatingAmount) {}
        }
        floatingCoordinates();
        drawCircle();
//        drawlines();
        time++;
        setTimeout(function () {
            window.requestAnimationFrame(draw)
        }, 16);
    }
    draw();