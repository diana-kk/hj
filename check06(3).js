var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': 'Wheat'
});

topBox.rect(11, 6, 32, 28).attr({
  'fill': 'Wheat',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

topBox.text(280, 27, '라06~10').attr({
  'font-size': 18
});


// 상단
var hanjaArea = Paper.g();
var t1 = hanjaArea.text(180, 300, '5').attr({
  'font-size': 130,
  'text-anchor': 'middle'
});

var t2;
setTimeout(function() {
  t1.remove();
  t2 = hanjaArea.text(180, 300, '4').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 1000);

var t3;
setTimeout(function() {
  t2.remove();
  t3 = hanjaArea.text(180, 300, '3').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 2000);

var t4;
setTimeout(function() {
  t3.remove();
  t4 = hanjaArea.text(180, 300, '2').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 3000);

var t5;
setTimeout(function() {
  t4.remove();
  t5 = hanjaArea.text(180, 300, '1').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 4000);

setTimeout(function() {
  location.replace('check06(4).html');
}, 5000);
