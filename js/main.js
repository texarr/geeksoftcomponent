$(document).ready(function() {
  var actionBtn = document.querySelectorAll('div[data-name="action"]');
  var defaultElement = document.querySelector('div[data-name="toclone"]');

  // add elements
  addMember(defaultElement, 'Daniel Pietrucha', '188', 'male');

  // reading json
  loadPackage();

});
