(function($){

    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null,
                clickOutToClose: true
            }
            
            var overlay = $("<div id='lean_overlay'></div>");
            
            $("body").append(overlay);
                 
            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
                  	var modal_id = $(this).attr("href");
    
            		if (o.clickOutToClose) {
            			$("#lean_overlay").click(function() { 
    	                     close_modal(modal_id);                    
    	                });
            		}
                    
                    $(o.closeButton).click(function() { 
                         close_modal(modal_id);                    
                    });
                             	
                  	var modal_height = $(modal_id).outerHeight();
            	  	var modal_width = $(modal_id).outerWidth();
            
            		$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });
            
            		$('#lean_overlay').fadeTo(200,o.overlay);
    
            		$(modal_id).css({ 
            			'display' : 'block',
            			'position' : 'fixed',
            			'opacity' : 0,
            			'z-index': 11000,
            			'left' : 50 + '%',
            			'margin-left' : -(modal_width/2) + "px",
            			'top' : o.top + "px"
            		});
            		
            		if ('auto' == o.top) {
            			$(modal_id).css({
            				'top' : 50 + '%',
            				'margin-top' : -(modal_height/2) + "px"
            			});
            		} else {
            			$(modal_id).css({
            				'top' : o.top + "px"
            			});
            		}
            
            		$(modal_id).fadeTo(200,1);
    
                    e.preventDefault();
              	});
            });

    		function close_modal(modal_id){
        		$("#lean_overlay").fadeOut(200);
        		$(modal_id).css({ 'display' : 'none' });
    		}
        }
    });
     
})(jQuery);
