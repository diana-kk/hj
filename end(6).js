var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var finish02 = Paper.image('finish02.png', 0, 0, 200, 200).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

Paper.text(35, 160, '이번 주 학습을 마칩니다!').attr({
  'font-size': 30
});

finish02.use().transform('t80, 190').appendTo(Paper);

var orangeB = Paper.rect(120, 410, 120, 30).attr({
  'fill': '#fe9b00',
  'rx': 8,
  'ry': 8
});
var orangeBT = Paper.text(157, 430, '처음으로').attr({
  'fill': 'white',
  'font-size': 13
});
var orange = Paper.g(orangeB, orangeBT).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('check06(1).html');
}
