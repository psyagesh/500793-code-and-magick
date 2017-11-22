'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(90, 10, 540, 300);
  ctx.fillRect(90, 10, 540, 300);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.strokeRect(80, -10, 540, 300);
  ctx.fillRect(80, -10, 540, 300);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
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

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 190;
  var initialY = 115;
  var lineHeight = 15;

  // ctx.fillText('Худшее время: ' + max + 'мс у игрока ' + names[maxIndex], 175, 80);

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight + histogramHeight);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY + histogramHeight - times[i] * step - lineHeight);

    if (names[i] === 'Вы') {
      ctx.fillStyle = ('rgba(255, 0, 0, 1)');
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.ceil(Math.random() * 10) / 10 + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY + histogramHeight - times[i] * step, barWidth, times[i] * step);
  }


};
