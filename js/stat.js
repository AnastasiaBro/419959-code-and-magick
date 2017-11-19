'use strict';

window.renderStatistics = function (ctx, names, times) {
  var slip = 10;

  var drawShadowCloud = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.bezierCurveTo(100 + slip, 10 + slip, 150 + slip, -10 + slip, 200 + slip, 20 + slip);
    ctx.bezierCurveTo(200 + slip, 20 + slip, 250 + slip, -20 + slip, 370 + slip, 25 + slip);
    ctx.bezierCurveTo(370 + slip, 25 + slip, 500 + slip, -30 + slip, 510 + slip, 70 + slip);
    ctx.bezierCurveTo(510 + slip, 70 + slip, 580 + slip, 120 + slip, 520 + slip, 180 + slip);
    ctx.bezierCurveTo(520 + slip, 180 + slip, 540 + slip, 300 + slip, 420 + slip, 280 + slip);
    ctx.bezierCurveTo(420 + slip, 280 + slip, 350 + slip, 315 + slip, 280 + slip, 270 + slip);
    ctx.bezierCurveTo(280 + slip, 270 + slip, 155 + slip, 320 + slip, 95 + slip, 260 + slip);
    ctx.bezierCurveTo(95 + slip, 260 + slip, 20 + slip, 200 + slip, 100 + slip, 100 + slip);
    ctx.bezierCurveTo(100 + slip, 100 + slip, 60 + slip, 50 + slip, 100 + slip, 10 + slip);
    ctx.closePath();
    ctx.stroke();
    return ctx.fill();
  };
  drawShadowCloud();

  var drawMainCloud = function () {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.bezierCurveTo(100, 10, 150, -10, 200, 20);
    ctx.bezierCurveTo(200, 20, 250, -20, 370, 25);
    ctx.bezierCurveTo(370, 25, 500, -30, 510, 70);
    ctx.bezierCurveTo(510, 70, 580, 120, 520, 180);
    ctx.bezierCurveTo(520, 180, 540, 300, 420, 280);
    ctx.bezierCurveTo(420, 280, 350, 315, 280, 270);
    ctx.bezierCurveTo(280, 270, 155, 320, 95, 260);
    ctx.bezierCurveTo(95, 260, 20, 200, 100, 100);
    ctx.bezierCurveTo(100, 100, 60, 50, 100, 10);
    ctx.closePath();
    ctx.stroke();
    return ctx.fill();
  };
  drawMainCloud();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = -1;
  var searchMax = function () {
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > maxTime) {
        maxTime = time;
      }
    }
    return maxTime;
  };

  var histogramHeight = 150;
  var step = histogramHeight / (searchMax() - 0);
  var distanceX = 120;
  var spaceBar = 90;
  var resultY = 90;
  var barY = 100;
  var nameY = 270;
  var barWidth = 40;

  var getRandomNumber = function () {
    return Math.random();
  };

  for (var j = 0; j < times.length; j++) {
    var printScoreBar = function () {
      ctx.fillStyle = '#000';
      return ctx.fillText(Math.round(times[j]), distanceX + spaceBar * j, resultY + histogramHeight - times[j] * step);
    };
    printScoreBar();

    var printUserBar = function () {
      if (names[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomNumber() + ')';
      }
      return ctx.fillRect(distanceX + spaceBar * j, barY + histogramHeight - times[j] * step, barWidth, times[j] * step);
    };
    printUserBar();

    var printNameBar = function () {
      ctx.fillStyle = '#000';
      return ctx.fillText(names[j], distanceX + spaceBar * j, nameY);
    };
    printNameBar();
  }
};
