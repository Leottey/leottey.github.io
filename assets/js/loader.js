
$(document).ready(function() {
   
    $('body').fadeIn(500);
    
    $('.transition').click(function(event) {
    
    event.preventDefault();
    
    newLocation = this.href;
    
    $('body').fadeOut(1000, newpage);
    
    });
    function newpage() {

        window.location = newLocation;
        
        }
        
        });