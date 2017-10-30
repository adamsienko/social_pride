var canvas = document.querySelector('canvas');

canvas.width = 750;
canvas.height = 714;


var c = canvas.getContext('2d');


c.beginPath();
c.moveTo(133, 24);
c.lineTo(190, 85);
c.lineTo(215, 107);
c.lineTo(201, 42);
c.lineTo(186, 105);
c.lineTo(177, 123);
c.lineTo(165, 141);
c.lineTo(127, 84);
c.lineTo(177, 123);
c.lineTo(215, 107);
c.lineTo(186, 105);
c.lineTo(127, 84);
c.lineTo(190, 85);

c.lineWidth=2;
c.strokeStyle = 'darkgrey';
c.stroke();


c.beginPath();
c.moveTo(78, 116);
c.lineTo(102, 166);
c.lineTo(96, 235);
c.lineTo(28, 183);
c.lineTo(102, 166);
c.lineTo(165, 141);
c.lineTo(107, 98);
c.lineTo(102, 166);
c.lineTo(32, 126);

c.lineWidth=2;
c.strokeStyle = 'darkgrey';
c.stroke();

c.beginPath();
c.moveTo(88, 288);
c.lineTo(96, 235);
c.lineTo(44, 237);
c.lineTo(88, 288);
c.lineTo(105, 313);
c.lineTo(91, 330);
c.lineTo(88, 288);
c.lineTo(34, 281);
c.lineTo(91, 331);


c.lineWidth=2;
c.strokeStyle = 'darkgrey';
c.stroke();