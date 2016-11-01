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
	        
			function workoutNZsuburb() {
					//alert('workoutNZsuburb')
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