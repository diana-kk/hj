var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var login = Paper.image('dudu01.png', 0, 0, 30, 45).toDefs();


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


// 상단
var topArea = Paper.g();
login.use().transform('t30, 55').appendTo(topArea);

topArea.text(68, 90, '36~40세트 학습한자').attr({
  'font-size': 18,
  'font-weight': 'bold'
});

topArea.rect(250, 72, 80, 25, 5).attr({
  'fill': 'LemonChiffon',
  'stroke': 'gray'
});
topArea.text(260, 89, '카드로 보기').click(handlerCard).attr({
  'font-size': 13,
  'cursor': 'pointer'
});

function handlerCard() {
  location.replace('check36(2).html');
}

// 한자
var bottomArea = Paper.g();

for (var i = 0; i < 5; i++) {
  bottomArea.rect(30, (i * 100) + 130, 300, 60, 5).attr({
    'fill': '#f1f3f4'
  });
}

var hanjaChoices = Paper.g();

hanjaChoices.text(45, 170, data[175].hanja).click(handler05).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 170, data[176].hanja).click(handler06).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 170, data[177].hanja).click(handler07).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 170, data[178].hanja).click(handler08).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 170, data[179].hanja).click(handler09).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 270, data[180].hanja).click(handler10).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 270, data[181].hanja).click(handler11).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 270, data[182].hanja).click(handler12).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 270, data[183].hanja).click(handler13).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 270, data[184].hanja).click(handler14).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 370, data[185].hanja).click(handler15).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 370, data[186].hanja).click(handler16).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 370, data[187].hanja).click(handler17).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 370, data[188].hanja).click(handler18).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 370, data[189].hanja).click(handler19).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 470, data[190].hanja).click(handler20).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 470, data[191].hanja).click(handler21).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 470, data[192].hanja).click(handler22).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 470, data[193].hanja).click(handler23).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 470, data[194].hanja).click(handler24).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 570, data[195].hanja).click(handler25).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 570, data[196].hanja).click(handler26).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 570, data[197].hanja).click(handler27).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 570, data[198].hanja).click(handler28).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 570, data[199].hanja).click(handler29).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

function handler05() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[175].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler06() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[176].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler07() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[177].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler08() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[178].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler09() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[179].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler10() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[180].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler11() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[181].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler12() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[182].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler13() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[183].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler14() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[184].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler15() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[185].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler16() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[186].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler17() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[187].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler18() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[188].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler19() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[189].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler20() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[190].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler21() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[191].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler22() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[192].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler23() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[193].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler24() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[194].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}


function handler25() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[195].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler26() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[196].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler27() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[197].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler28() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[198].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}

function handler29() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, data[199].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  setTimeout(function() {
    group.remove();
  }, 1000);
}
