var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

var Library = {
  //SVG 외곽선
  drawLayout: function() {
    Paper.rect(0, 0, 360, 640, 6).attr({
      'stroke': 'gray',
      'fill': 'none'
    });

    // 상단 박스
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

    topBox.text(283, 27, '라21~25').attr({
        'font-size': 18
    });

  },

  //////////////////////////////////////////////////////////////////////////////////////////////
  // HT004
  generateMatchgame: function(params) {
    var condition = params.condition;
    var count = params.choiceCount;
    var pairInfo = {};
    var conData = data.slice(100, 125);
    var paper = Paper.g();

    conData = conData.filter(function(el) {
      if (el.jei_set.indexOf(condition.grade) === -1) return false;
      var setNum = Number(el.jei_set.substring(1, 3));
      if (setNum < condition.setRange[0] || condition.setRange[1] < setNum) return false;
      return true;
    });

    conData = shuffle(conData).slice(0, count);

    var choiceData = conData.map(function(el) {
      return {
        hanja: el.hanja,
        removed: false
      };
    });

    var meanData = conData.map(function(el) {
      return el.mean;
    });

    meanData = shuffle(meanData);

    meanData = meanData.map(function(el) {
      return {
        mean: el,
        answer: findIndex(el, conData)
      };
    });
    // console.log(meanData);

    function findIndex(mean, data) {
      var index;
      for (var i = 0; i < data.length; i++) {
        if (data[i].mean === mean) {
          index = i;
          break;
        }
      }
      return index;
    }

    function shuffle(arr) {
      return (arr.slice()).sort(function() {
        return Math.random() - 0.5;
      });
    }

    return {
      choiceData: choiceData,
      meanData: meanData,

    };
  },

  drawQuestion04: function(params) {
    var paper = params.paper.g();
    var questionInfo = params.questionInfo; //mean

    paper.text(180, 130, questionInfo).attr({
      'font-size': 43,
      'text-anchor': 'middle'
    });

    return paper;
  },

  drawChoice04: function(params) {
    var paper = params.paper.g();
    var exampleInfo = params.exampleInfo;
    var choices = [];

    for (var i = 0; i < exampleInfo.length; i++) {
      choices[i] = paper.g();
      choices[i].attr({
        'cursor': 'pointer',
        'visibility': (exampleInfo[i].removed ? 'hidden' : 'visible')
      });
      choices[i].rect(20 + (i % 5) * 65, 180 + Math.floor(i / 5) * 65, 60, 60, 5, 5).attr({
        'fill': 'white',
        'stroke': '#34b1fb',
        'stroke-width': 1.5
      });
      choices[i].text(50 + (i % 5) * 65, 220 + Math.floor(i / 5) * 65, exampleInfo[i].hanja).attr({
        'font-size': 30,
        'text-anchor': 'middle'
      });
    }

    // 시간 체크
    paper.rect(40, 584, 280, 7, 5).attr({
      'fill': '#dcdcdc'
    });
    var maskBar = paper.mask();
    var mBar = maskBar.rect(40, 583, 280, 8, 5).attr({
      'fill': 'white'
    });
    mBar.animate({
      'width': 8
    }, 10000);
    var myBar = paper.rect(40, 583, 280, 8, 5).attr({
      'fill': '#b4b4dc',
      'mask': maskBar
    });
    paper.image('clock.png', 32, 578, 17, 17);

    return choices;
  },

  choiceCheck04: function(params) {
    var choices = params.choices;
    var rightAnswer = params.answer;
    var callback = params.callback;

    for (var i = 0; i < choices.length; i++) {
      choices[i].data('i', i).click(handler);
    }

    function handler() {
      var userChoice = this.data('i');
      var check = userChoice === rightAnswer;
      var self = this;

      this.select('rect').attr({
        'fill': (check ? 'LemonChiffon' : 'gray')
      });

      setTimeout(function() {
        if (check) {
          self.remove();
          callback();
        } else {
          clearColor();
        }
    }, 500);
    }

    function clearColor() {
      for (var i = 0; i < choices.length; i++) {
        choices[i].select('rect').attr({
          'fill': 'white'
        });
      }
    }
  },
};

Library.drawLayout();
