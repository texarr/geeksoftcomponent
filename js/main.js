$(document).ready(function() {
  var actionBtn = document.querySelectorAll('div[data-name="action"]');

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
        this.children[0].style.visibility = "hidden";
        this.children[1].style.color = "#f43b3b";
      }
    });
  }
}

function deleteConfirm(button) {
  for (var i = 0, len = button.length; i < len; i++) {
    button[i].addEventListener('click', function(e) {
      this.parentNode.style.transform = "translate(-30px, -2px)";
      this.parentNode.style.backgroundColor = "#405a74";
      this.parentNode.style.boxShadow = "10px 10px 5px #111d29";
      this.style.backgroundColor = "#367137";
      this.children[0].innerText = "CONFIRM";
      this.children[0].color = "#ddd";
    });
  }
}
