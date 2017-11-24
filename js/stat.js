'use strict';

var FONT = '16px PT Mono';

function getRandomBlueColor() {
  return 'rgba(0, 0, 255,' + Math.ceil(Math.random() * 10) / 10 + ')';
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(90, 10, 540, 300);
  ctx.fillRect(90, 10, 540, 300);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.strokeRect(80, -10, 540, 300);
  ctx.fillRect(80, -10, 540, 300);

  ctx.fillStyle = 'black';
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', 260, 30);
  ctx.fillText('Список результатов:', 248, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = Math.round(time);
      maxIndex = i;
    }
  }

  var HISTOGRAM_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var INDENT = 90;
  var INITIAL_X = 190;
  var INITIAL_Y = 115;
  var LINE_HEIGHT = 15;
  var step = HISTOGRAM_HEIGHT / (max - 0);

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], INITIAL_X + INDENT * i, INITIAL_Y + LINE_HEIGHT + HISTOGRAM_HEIGHT);
    ctx.fillText(Math.round(times[i]), INITIAL_X + INDENT * i, INITIAL_Y + HISTOGRAM_HEIGHT - times[i] * step - LINE_HEIGHT);

    if (names[i] === 'Вы') {
      ctx.fillStyle = ('rgba(255, 0, 0, 1)');
    } else {
      ctx.fillStyle = getRandomBlueColor();
    }

    ctx.fillRect(INITIAL_X + INDENT * i, INITIAL_Y + HISTOGRAM_HEIGHT - times[i] * step, BAR_WIDTH, times[i] * step);
  }
};
