$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});
var ba = document.getElementById('btn_add'),
    br = document.getElementById('btn_remove'),
    x = document.getElementById('x');

ba.addEventListener('click', function () {
  x.className = '';
  ba.disabled = 'disabled';
  ba.className = 'd';
  br.className = '';
  br.disabled = '';
}, false);

br.addEventListener('click', function () {
  x.className = 'x';
  ba.disabled = '';
  ba.className = '';
  br.className = 'd';
  br.disabled = 'disabled';
}, false);


