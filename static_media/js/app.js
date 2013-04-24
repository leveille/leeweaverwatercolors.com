if(!this.LEEWEAVER) {
	LEEWEAVER = {};
}
LEEWEAVER.app = (function() {
    return {
        init: function()
        {
    		$('a[rel=external]').attr('target', '_blank');
    		
    		//setup fancybox
    		if($('a[rel=view-larger-link], a[rel=view-larger-image]').length > 0) {
	    		$("a[rel=view-larger-link], a[rel=view-larger-image]").fancybox({
	    			'titlePosition'  : 'over',
	    			'transitionIn'	: 'elastic',
	    			'transitionOut'	: 'elastic'
	    		});
    		}
        }
    };
})();

$(document).ready(function() {
	LEEWEAVER.app.init();
});
