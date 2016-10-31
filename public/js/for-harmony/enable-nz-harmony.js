    		var protocolAndhostNameOfURL = location.origin;
	
    		Harmony.init("web", "CrQ5gMpWN7CjdP2bhK7iFQ0wGG1kcLlW", Harmony.NEW_ZEALAND);

    		// Use the JSONP protocol for compatibility with IE 8/9.
   			Harmony.useProtocol(Harmony.JSONP);

	        Harmony.UI.addressLookup($("#fullAddress"), Harmony.NZPAF);

	        // Configure the output fields.
	        Harmony.UI.addField(Harmony.SUBDWELLING, $("#flatNumber"));
	        Harmony.UI.addField(Harmony.STREET_NUMBER, $("#streetNumber"));
	        Harmony.UI.addField(Harmony.STREET_NAME, $("#streetName"));
	        Harmony.UI.addField(Harmony.STREET_TYPE, $("#streetType"));
	        Harmony.UI.addField(Harmony.POSTCODE, $("#postcode"));
	        
	        Harmony.UI.addField(Harmony.SUBURB, $("#nzsuburb"));
	        Harmony.UI.addField(Harmony.TOWN_CITY, $("#nztown"));

	        var accountId = document.getElementById('accountId').value;
	        
	        $.get('/harmony/harmony-health-check.seam?customerid='.concat(accountId)).then(function(responseData) {
	        	  //responseData is the contents of the other page. Do whatever you want with it.

	        	if (responseData.indexOf("can use harmony") > -1)
	        	  {
	        		  $("#address-non-harmony-div").hide();
	        	  }
	        	  else
	        	  {
	        		  $("#address-harmony-div").hide();		  
	        	  }
	        	
        	    $('#address-loading-placeholder').fadeOut('slow', function() {
		        	$('#address-fields').fadeIn();
	        	});
	        });
	        
			function workoutNZsuburb() {

            		var realsuburb = document.getElementById('suburb');
                    var nzsuburb = document.getElementById('nzsuburb');
                    var nztown = document.getElementById('nztown');
                    
                    if(realsuburb.value.length == 0){
	                    if(nzsuburb.value.length != 0){
	                    	realsuburb.value = nzsuburb.value;
	                    }
	                    else{
	                    	realsuburb.value = nztown.value;
	                    }
                    }
            }