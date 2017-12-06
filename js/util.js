// Файл util.js
'use strict';

(function () {
  window.util = (function () {

    return {
      isEscEvent: function (evt, action) {
        if (evt.keyCode === window.ESC_KEYCODE) {
          action();
        }
      },
      isEnterEvent: function (evt, action) {
        if (evt.keyCode === window.ENTER_KEYCODE) {
          action();
        }
      },
      isRandomNumber: function (min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
      },
      isOpacity: function () {
        return Math.ceil(Math.random() * 10) / 10;
      },
      isSearchMax: function (maxValue, array) {
        for (var i = 0; i < array.length; i++) {
          var value = array[i];
          if (value > maxValue) {
            maxValue = value;
          }
        }
        return maxValue;
      }
    };
  })();
})();
