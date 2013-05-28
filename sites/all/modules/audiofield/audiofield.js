jQuery(document).ready(function($){
 
	  
	$("#edit-field-audio .form-submit").live('click',function(e) {
		
		var description = $('#edit-field-audio-und-0-description').val();
		$('#edit-title').val(description);
	
	});
		
});