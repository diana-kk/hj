var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var end = Paper.image('end.png', 0, 0, 250, 160).toDefs();

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

topBox.text(290, 27, '라등급').attr({
    'font-size': 18
});


// 한자 카드 카운팅
var progress = Paper.g();
var p0 = progress.text(170, 100, '/ 25').attr({
    'fill': 'gray',
    'font-size': 25
});
var p1 = progress.text(150, 100, '1').attr({
    'fill': 'none',
    'font-size': 25
});
var p2 = progress.text(150, 100, '2').attr({
    'fill': 'none',
    'font-size': 25
});
var p3 = progress.text(150, 100, '3').attr({
    'fill': 'none',
    'font-size': 25
});
var p4 = progress.text(150, 100, '4').attr({
    'fill': 'none',
    'font-size': 25
});
var p5 = progress.text(150, 100, '5').attr({
    'fill': 'none',
    'font-size': 25
});
setTimeout(function() {
    p1.attr({
        'fill': 'gray'
    });
}, 10);
setTimeout(function() {
    p1.attr({
        'fill': 'none'
    });
}, 3900);

setTimeout(function() {
    p2.attr({
        'fill': 'gray'
    });
}, 4000);
setTimeout(function() {
    p2.attr({
        'fill': 'none'
    });
}, 7900);

setTimeout(function() {
    p3.attr({
        'fill': 'gray'
    });
}, 8000);
setTimeout(function() {
    p3.attr({
        'fill': 'none'
    });
}, 11900);

setTimeout(function() {
    p4.attr({
        'fill': 'gray'
    });
}, 12000);
setTimeout(function() {
    p4.attr({
        'fill': 'none'
    });
}, 15900);

setTimeout(function() {
    p5.attr({
        'fill': 'gray'
    });
}, 16000);
setTimeout(function() {
    p5.attr({
        'fill': 'none'
    });
    p0.attr({
        'fill': 'none'
    });
}, 19000);


// 한자 깜빡이 카드
var blinkArea = Paper.g();

var t1 = blinkArea.text(180, 330, '病').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt1 = blinkArea.text(180, 500, '병 병').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t2 = blinkArea.text(180, 330, '始').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt2 = blinkArea.text(180, 500, '처음 시').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t3 = blinkArea.text(180, 330, '每').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt3 = blinkArea.text(180, 500, '매양 매').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t4 = blinkArea.text(180, 330, '學').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt4 = blinkArea.text(180, 500, '배울 학').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t5 = blinkArea.text(180, 330, '層').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt5 = blinkArea.text(180, 500, '층 층').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

setTimeout(function() {
    t1.attr({
        'fill': 'black'
    });
}, 10);
setTimeout(function() {
    t1.attr({
        'fill': 'none'
    });
}, 1000);
setTimeout(function() {
    t1.attr({
        'fill': 'black'
    });
    tt1.attr({
        'fill': 'black'
    });
}, 2000);
setTimeout(function() {
    t1.attr({
        'fill': 'none'
    });
    tt1.attr({
        'fill': 'none'
    });
}, 3000);

setTimeout(function() {
    t2.attr({
        'fill': 'black'
    });
}, 4000);
setTimeout(function() {
    t2.attr({
        'fill': 'none'
    });
}, 5000);
setTimeout(function() {
    t2.attr({
        'fill': 'black'
    });
    tt2.attr({
        'fill': 'black'
    });
}, 6000);
setTimeout(function() {
    t2.attr({
        'fill': 'none'
    });
    tt2.attr({
        'fill': 'none'
    });
}, 7000);

setTimeout(function() {
    t3.attr({
        'fill': 'black'
    });
}, 8000);
setTimeout(function() {
    t3.attr({
        'fill': 'none'
    });
}, 9000);
setTimeout(function() {
    t3.attr({
        'fill': 'black'
    });
    tt3.attr({
        'fill': 'black'
    });
}, 10000);
setTimeout(function() {
    t3.attr({
        'fill': 'none'
    });
    tt3.attr({
        'fill': 'none'
    });
}, 11000);

setTimeout(function() {
    t4.attr({
        'fill': 'black'
    });
}, 12000);
setTimeout(function() {
    t4.attr({
        'fill': 'none'
    });
}, 13000);
setTimeout(function() {
    t4.attr({
        'fill': 'black'
    });
    tt4.attr({
        'fill': 'black'
    });
}, 14000);
setTimeout(function() {
    t4.attr({
        'fill': 'none'
    });
    tt4.attr({
        'fill': 'none'
    });
}, 15000);

setTimeout(function() {
    t5.attr({
        'fill': 'black'
    });
}, 16000);
setTimeout(function() {
    t5.attr({
        'fill': 'none'
    });
}, 17000);
setTimeout(function() {
    t5.attr({
        'fill': 'black'
    });
    tt5.attr({
        'fill': 'black'
    });
}, 18000);
setTimeout(function() {
    t5.attr({
        'fill': 'none'
    });
    tt5.attr({
        'fill': 'none'
    });
}, 19000);

setTimeout(function() {
    end.use().transform('t60, 180').appendTo(Paper);
    var redB = Paper.rect(36, 410, 120, 30).attr({
        'fill': '#f8371f',
        'rx': 8,
        'ry': 8
    });
    var redBT = Paper.text(75, 430, '처음으로').click(handler01).attr({
        'fill': 'white',
        'font-size': 13
    });
    var red = Paper.g(redB, redBT).attr({
        'cursor': 'pointer'
    });
    var orangeB = Paper.rect(200, 410, 120, 30).attr({
        'fill': '#fe9b00',
        'rx': 8,
        'ry': 8
    });
    var orangeBT = Paper.text(250, 430, '게임').click(handler02).attr({
        'fill': 'white',
        'font-size': 13
    });
    var orange = Paper.g(orangeB, orangeBT).attr({
        'cursor': 'pointer'
    });

    function handler01() {
        location.replace('check26(1).html');
    }

    function handler02() {
        location.replace('07_la_game26.html');
    }
}, 19500);
