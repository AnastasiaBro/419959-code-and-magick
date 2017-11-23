'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
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
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
