'use strict';

var setup = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var NUMBER_OF_WIZARDS = 4;
var wizards = [];

function getRandomIndex(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getArrayWizard(wizardNumber) {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var j = 0; j < wizardNumber; j++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomIndex(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomIndex(0, WIZARD_SURNAMES.length - 1)],
      coatColor: COAT_COLORS[getRandomIndex(0, COAT_COLORS.length - 1)],
      eyesColor: EYES_COLORS[getRandomIndex(0, EYES_COLORS.length - 1)]
    });
  }
  return wizards;
}

function drawCloneWizards(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

(function insertWizards() {
  var fragment = document.createDocumentFragment();
  getArrayWizard(NUMBER_OF_WIZARDS);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(drawCloneWizards(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
})();

// задание 4 урока

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var wraps = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  // if (userNameInput.focus() === false) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
  // }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// вот тут пошли непонятки - первый вариант для ESC ниже

function stopEvent() {
  onPopupEscPress.stopPropagation();
}

(function stopExit() {
  userNameInput.addEventListener('keydown', stopEvent);
})();

// другой вариант ниже

/*
userNameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup.stopPropagation();
  }
});
*/

// валидация

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// изменение цвета мантии и т.д.

function getRandom(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

(function changeCoatColor() {
  wizardCoat.addEventListener('click', function () {
    wizardCoat.setAttribute('style', 'fill: ' + coats[getRandom(0, coats.length - 1)]);
  });
})();

(function changeEyesColor() {
  wizardEyes.addEventListener('click', function () {
    wizardEyes.setAttribute('style', 'fill: ' + eyes[getRandom(0, eyes.length - 1)]);
  });
})();

(function changeEyesColor() {
  fireballWrap.addEventListener('click', function () {
    fireballWrap.setAttribute('style', 'background-color: ' + wraps[getRandom(0, wraps.length - 1)]);
  });
})();

// ---неработающий код для esc----------------------

/* if (userNameInput.focus()) {
  onPopupEscPress.stopPropagation();
}*/


/* if (userNameInput.focus()) {
  stopEvent();
}*/

// userNameInput.addEventListener('click', stopEvent, false);

// if (input.focus()) {
// onPopupEscPress.preventDefault();
// input.addEventListener('focused', function () {
// onPopupEscPress.preventDefault();
// }, false);
// }

// if (input.focus()) {
// onPopupEscPress.preventDefault();
// input.addEventListener('focused', function () {
// onPopupEscPress.preventDefault();
// }, false);
// }
// }
/*
input.onfocus = function () {
  if (input.focus()) {
    onPopupEscPress.preventDefault();
  }
};
*/
// ----------------------------------------------------
