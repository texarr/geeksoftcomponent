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
  newElement.classList.remove('hidden');

  clonedElement.parentNode.appendChild(newElement);
}

// add content from json to DOM
function addContent(members) {
  var appendTo = $('.members__table__container');

  $.each(members, function(key, member) {
    var container = $('<div>', {class: "members__table__container__content flex_row"});
    var nameColumn = $('<div>', {class: "flex_col"}).attr('data-name', 'name').append($('<span>'));
    var heightColumn = $('<div>', {class: "flex_col"}).attr('data-name', 'height').append($('<span>'));
    var genderColumn = $('<div>', {class: "flex_col"}).attr('data-name', 'gender').append($('<span>'));
    var actionColumn = $('<div>', {class: "flex_col"}).attr('data-name', 'action');
    actionColumn.append($('<span>')).append($('<i>', {class: "fa fa-trash"}).attr('aria-hidden', 'true'));
    actionColumn.find('span').text('DELETE');
    var id = key;

    container.append(nameColumn);
    container.append(heightColumn);
    container.append(genderColumn);
    container.append(actionColumn);
    container.attr('data-id', id);

    container.find('span')[0].innerText = member.name;
    container.find('span')[1].innerText = member.height;
    container.find('span')[2].innerText = member.gender;

    appendTo.append(container);
  });
}

// reading json
function loadPackage() {
  var jsonUrl = 'http://swapi.co/api/people/';
  $.ajax({
    url: jsonUrl,
    dataType: 'json'
  }).done(function(response){
    addContent(response.results);
    actionBtn = document.querySelectorAll('div[data-name="action"]');
    hoverAnimations(actionBtn);
    deleteConfirm(actionBtn);
  }).fail(function(error){
    console.log(error);
  })
}
