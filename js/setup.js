'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var NUMBER_OF_WIZARDS = 4;
  var wizards = [];

  var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var wraps = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = setup.querySelector('.setup-fireball-wrap');

  /* function getRandomIndex(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }*/

  function getArrayWizard(wizardNumber) {
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

    for (var j = 0; j < wizardNumber; j++) {
      wizards.push({
        name: WIZARD_NAMES[window.util.isRandomNumber(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[window.util.isRandomNumber(0, WIZARD_SURNAMES.length - 1)],
        coatColor: COAT_COLORS[window.util.isRandomNumber(0, COAT_COLORS.length - 1)],
        eyesColor: EYES_COLORS[window.util.isRandomNumber(0, EYES_COLORS.length - 1)]
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

  function insertWizards() {
    var fragment = document.createDocumentFragment();
    getArrayWizard(NUMBER_OF_WIZARDS);
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(drawCloneWizards(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  }
  insertWizards();

  function changeWizards() {
    changeCoatColor();
    changeEyesColor();
    changeWrapColor();
  }
  changeWizards();

  function changeCoatColor() {
    wizardCoat.addEventListener('click', function () {
      wizardCoat.setAttribute('style', 'fill: ' + coats[window.util.isRandomNumber(0, coats.length - 1)]);
    });
  }

  function changeEyesColor() {
    wizardEyes.addEventListener('click', function () {
      wizardEyes.setAttribute('style', 'fill: ' + eyes[window.util.isRandomNumber(0, eyes.length - 1)]);
    });
  }

  function changeWrapColor() {
    fireballWrap.addEventListener('click', function () {
      fireballWrap.setAttribute('style', 'background-color: ' + wraps[window.util.isRandomNumber(0, wraps.length - 1)]);
    });
  }
})();
