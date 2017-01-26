$(document).ready(function() {
  var actionBtn = document.querySelectorAll('div[data-name="action"]');
  var defaultElement = document.querySelector('div[data-name="toclone"]');

  // you need to add elements first
  addMember(defaultElement, 'Daniel Pietrucha', '31', 'torro');
  addMember(defaultElement, 'Grzegorz Brzęczyczykiewicz', '72', 'scorpion');
  addMember(defaultElement, 'Gregory Kupala', '31', 'scorpion');
  addMember(defaultElement, 'Kurt Cobain', '45', 'torro');
  addMember(defaultElement, 'Stevie Wonder', '67', 'cancer');
  addMember(defaultElement, 'Benjamin Franklin', '102', 'lion');
  addMember(defaultElement, 'My wife', '31', 'scorpion');
  addMember(defaultElement, 'Chuck Norris', '77', 'torro');

  // then operate on them
  actionBtn = document.querySelectorAll('div[data-name="action"]');
  hoverAnimations(actionBtn);
  deleteConfirm(actionBtn);
});

function hoverAnimations(button) {
  for (var i = 0, len = button.length; i < len; i++) {
    button[i].addEventListener('mouseover', function() {
      if ( !(this.classList.contains('backgroundAnimation-red')) ) {
        //background animattion on hover
        this.classList.add('backgroundAnimation-red');
        // span visibility on hover
        this.children[0].style.visibility = "visible";
        this.children[1].style.color = "#ddd";
      }
    });

    button[i].addEventListener('mouseout', function() {
      if ( this.classList.contains('backgroundAnimation-red') ) {
        //background animattion on hover
        this.classList.remove('backgroundAnimation-red');
        // span visibility on hover
        // only when parent container is not selected
        if( !(this.parentNode.classList.contains('selected')) ) {
          this.children[0].style.visibility = "hidden";
          this.children[1].style.color = "#f43b3b";
        }
      }
    });
  }
}

function deleteConfirm(button) {
  var toDelete;

  for (var i = 0, len = button.length; i < len; i++) {
    button[i].addEventListener('click', function(e) {

      // this is a second click on a selected row
      // removing from DOM content
      if (this.parentNode.classList.contains('selected')) {
        toDelete = this.parentNode;
        //using jquery only for animation before delete ;)
        $(toDelete).slideUp(500, function() {
          toDelete.parentNode.removeChild(toDelete);
        });
      }

      // first click
      if ( !(this.parentNode.classList.contains('selected')) ) {
        this.parentNode.classList.add('selected');
      }
      this.style.backgroundColor = "#367137";
      this.children[0].innerText = "CONFIRM";
      this.children[0].color = "#ddd";
    });
  }
}

function addMember(clonedElement, name, age, zodiac) {
  var newElement = clonedElement.cloneNode(true);
  var newName = newElement.children[0];
  var newAge = newElement.children[1];
  var newZodiac = newElement.children[2];

  newName.children[0].innerText = name;
  newAge.children[0].innerText = age;
  newZodiac.children[0].innerText = zodiac;
  newElement.style.display = 'block';

  clonedElement.parentNode.appendChild(newElement);
}
