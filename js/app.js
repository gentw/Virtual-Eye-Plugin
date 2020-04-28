jQuery(document).ready(function ($) {
 	$( ".Purchase" ).hide();
       var purchaseurl = null ; 
           // men glasses links
		   //replace the links bellow by  your glasses links (to your shopping website)		   
		   // for example replace : " http://belcodes.com/product/glasses-n-1/" by your link.
		   // glasseslink_1men means the link of the first glasses on the selection . 
		   // glasseslink_30men  means the link of the 30th glasses on the selection . 
	  var glasseslink_1men = 'http://belcodes.com/product/glasses-n-1/';
	  var glasseslink_2men=  'http://belcodes.com/product/glasses-n-2/';
	  var glasseslink_3men = 'http://belcodes.com/product/glasses-n-3/';
	  var glasseslink_4men = 'http://belcodes.com/product/glasses-n-4/';
	  var glasseslink_5men = 'http://belcodes.com/product/glasses-n-5/';
	  var glasseslink_6men = 'http://belcodes.com/product/glasses-n-6/';
	  var glasseslink_7men = 'http://belcodes.com/product/glasses-n-7/';
	  var glasseslink_8men = 'http://belcodes.com/product/glasses-n-8/';
	  var glasseslink_9men = 'http://belcodes.com/product/glasses-n-9/';
	  var glasseslink_10men = 'http://belcodes.com/product/glasses-n-10/';
	  var glasseslink_11men = 'http://belcodes.com/product/glasses-n-11/';
	  var glasseslink_12men = 'http://belcodes.com/product/glasses-n-12/';
	  var glasseslink_13men = 'http://belcodes.com/product/glasses-n-13/';
	  var glasseslink_14men = 'http://belcodes.com/product/glasses-n-14/';
	  var glasseslink_15men = 'http://belcodes.com/product/glasses-n-15/';
	  var glasseslink_16men = 'http://belcodes.com/product/glasses-n-16/';
      var glasseslink_17men=  'http://belcodes.com/product/glasses-n-17/';
	  var glasseslink_18men = 'http://belcodes.com/product/glasses-n-18/';	 
	  var glasseslink_19men = 'http://belcodes.com/product/glasses-n-19/';
	  var glasseslink_20men = 'http://belcodes.com/product/glasses-n-20/';
	  var glasseslink_21men = 'http://belcodes.com/product/glasses-n-21/';
	  var glasseslink_22men = 'http://belcodes.com/product/glasses-n-22/';
	  var glasseslink_23men = 'http://belcodes.com/product/glasses-n-23/';
	  var glasseslink_24men = 'http://belcodes.com/product/glasses-n-24/';
	  var glasseslink_25men = 'http://belcodes.com/product/glasses-n-25/';
	  var glasseslink_26men = 'http://belcodes.com/product/glasses-n-26/';
	  var glasseslink_27men = 'http://belcodes.com/product/glasses-n-27/';
	  var glasseslink_28men = 'http://belcodes.com/product/glasses-n-28/';
	  var glasseslink_29men = 'http://belcodes.com/product/glasses-n-29/';
	  var glasseslink_30men = 'http://belcodes.com/product/glasses-n-30/';
	  
	     // men glasses links
		 
      var glasseslink_1women = 'http://belcodes.com/product/glasses-n-x1/';
	  var glasseslink_2women = 'http://belcodes.com/product/glasses-n-x2/';
	  var glasseslink_3women = 'http://belcodes.com/product/glasses-n-x3/';
	  var glasseslink_4women = 'http://belcodes.com/product/glasses-n-x4/';
	  var glasseslink_5women = 'http://belcodes.com/product/glasses-n-x5/'; 
      var glasseslink_6women = 'http://belcodes.com/product/glasses-n-x6/';
      var glasseslink_7women = 'http://belcodes.com/product/glasses-n-x7/';
      var glasseslink_8women = 'http://belcodes.com/product/glasses-n-x8/';
	  var glasseslink_9women = 'http://belcodes.com/product/glasses-n-x9/';
	  var glasseslink_10women = 'http://belcodes.com/product/glasses-n-x10/';
	  var glasseslink_11women = 'http://belcodes.com/product/glasses-n-x11/';
      var glasseslink_12women = 'http://belcodes.com/product/glasses-n-x12/';
	  var glasseslink_13women = 'http://belcodes.com/product/glasses-n-x13/';
	  var glasseslink_14women = 'http://belcodes.com/product/glasses-n-x14/';
	  var glasseslink_15women = 'http://belcodes.com/product/glasses-n-x15/';
	  var glasseslink_16women = 'http://belcodes.com/product/glasses-n-x16/';
	  var glasseslink_17women = 'http://belcodes.com/product/glasses-n-x17/';  
	  var glasseslink_18women = 'http://belcodes.com/product/glasses-n-x18/';
	  var glasseslink_19women = 'http://belcodes.com/product/glasses-n-x19/';
	  var glasseslink_20women = 'http://belcodes.com/product/glasses-n-x20/';
	  var glasseslink_21women = 'http://belcodes.com/product/glasses-n-x21/';
	  var glasseslink_22women = 'http://belcodes.com/product/glasses-n-x22/';
	  var glasseslink_23women = 'http://belcodes.com/product/glasses-n-x23/';
  	  var glasseslink_24women = 'http://belcodes.com/product/glasses-n-x24/';
  	  var glasseslink_25women = 'http://belcodes.com/product/glasses-n-x25/';
  	  var glasseslink_26women = 'http://belcodes.com/product/glasses-n-x26/';
  	  var glasseslink_27women = 'http://belcodes.com/product/glasses-n-x27/';
  	  var glasseslink_28women = 'http://belcodes.com/product/glasses-n-x28/';
      var glasseslink_29women  = 'http://belcodes.com/product/glasses-n-x29/'; 
	  var glasseslink_30women = 'http://belcodes.com/product/glasses-n-x30/';
	  
		 
	  
            var countImg = 1;
        function readURL(input) {
		 var src = $(this).find('img').attr('src');
            if (input.files && input.files[0]) { // if there is a file from input
                var reader = new FileReader(); // read file
                
                reader.onload = function (e) { // on load
			
               
                          $('#Tshirtsrc').attr('src',e.target.result);
			 
                    countImg ++;
                   
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").on('change',function(){
            readURL(this); // call our function readURL
        });


        $(document).on('click', '.images .icon-remove', function(){
      
                $(this).parent().remove();
            
        })
		

      $('.tshirts a').click(function(){
            
            var src = $(this).find('img').attr('src');
			
			
			if(src=='img/example/1EX.jpg'){
    
				
            $('#Tshirtsrc').attr('src','img/example/1EX.jpg');
            return false;}
			
			if(src=='img/example/2EX.jpg'){
    
				
            $('#Tshirtsrc').attr('src','img/example/2EX.jpg');
            return false;}
				if(src=='img/men/1.png'){ 
             //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				
            purchaseurl=glasseslink_1men;   
            $( ".Purchase" ).show();
		    
			$('#imagesContainer').find('img').attr('src','img/men/1P.png' );
					 
					 
            return false;}
			
			
			

			
				if(src=='img/men/2.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
  purchaseurl=glasseslink_2men;    
   $( ".Purchase" ).show();
	$('#imagesContainer').find('img').attr('src','img/men/2P.png' );
					  
            return false;}
			
				if(src=='img/men/3.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				  purchaseurl=glasseslink_3men;  
 $( ".Purchase" ).show();				  
		$('#imagesContainer').find('img').attr('src','img/men/3P.png' );
					 
            return false;}
			
				if(src=='img/men/4.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_4men; 
				 $( ".Purchase" ).show();
		$('#imagesContainer').find('img').attr('src','img/men/4P.png' );
					 
            return false;}
				if(src=='img/men/5.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_5men; 
				 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/5P.png' );
					 
            return false;}
				if(src=='img/men/6.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_6men; 
				 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/6P.png' );
            return false;}

			
				if(src=='img/men/7.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_7men; 
				 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/7P.png' );
					 
            return false;}
				if(src=='img/men/8.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_8men; 
				 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/8P.png' );
            return false;}
			
			
				if(src=='img/men/9.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_9men; 
				 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/9P.png' );
					 
            return false;}
			
				if(src=='img/men/10.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_10men; 
				 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/10P.png' );
					 
            return false;}
			if(src=='img/men/11.png'){
			    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
			purchaseurl=glasseslink_11men; 
			 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/11P.png' );
            return false;}
		if(src=='img/men/12.png'){
		    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
		purchaseurl=glasseslink_12men; 
		 $( ".Purchase" ).show();
    	      $('#imagesContainer').find('img').attr('src','img/men/12P.png' );
					 
            return false;}
			
					if(src=='img/men/13.png'){
					    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
					purchaseurl=glasseslink_13men; 
					 $( ".Purchase" ).show();
			      $('#imagesContainer').find('img').attr('src','img/men/13P.png' );
					 
            return false;}
					if(src=='img/men/14.png'){
					    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
					purchaseurl=glasseslink_14men; 
					 $( ".Purchase" ).show();
		$('#imagesContainer').find('img').attr('src','img/men/14P.png' );
					 
            return false;}
					if(src=='img/men/15.png'){
					    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
					purchaseurl=glasseslink_15men; 
					 $( ".Purchase" ).show();
			$('#imagesContainer').find('img').attr('src','img/men/15P.png' );
					 
            return false;}
			
	if(src=='img/men/16.png'){
	    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
	purchaseurl=glasseslink_16men;
 $( ".Purchase" ).show();	
	$('#imagesContainer').find('img').attr('src','img/men/16P.png' );
					 
            return false;}
			
		if(src=='img/men/17.png'){
		    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
		purchaseurl=glasseslink_17men; 
		 $( ".Purchase" ).show();
		$('#imagesContainer').find('img').attr('src','img/men/17P.png' );
            return false;}
			
				if(src=='img/men/18.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_18men; 
				 $( ".Purchase" ).show();
		$('#imagesContainer').find('img').attr('src','img/men/18P.png' );
					 
            return false;}
			
			
				if(src=='img/men/19.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_19men; 
				 $( ".Purchase" ).show();
$('#imagesContainer').find('img').attr('src','img/men/19P.png' );
					 
            return false;}
			
			
				if(src=='img/men/20.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_20men; 
				 $( ".Purchase" ).show();
$('#imagesContainer').find('img').attr('src','img/men/20P.png' );
					 
            return false;}
						if(src=='img/men/21.png'){
						    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
						purchaseurl=glasseslink_21men; 
						 $( ".Purchase" ).show();
 			$('#imagesContainer').find('img').attr('src','img/men/21P.png' );
					 
            return false;}
			
							if(src=='img/men/22.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_22men;
 $( ".Purchase" ).show();							
 			$('#imagesContainer').find('img').attr('src','img/men/22P.png' );
					 
            return false;}
			
							if(src=='img/men/23.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_23men; 
							 $( ".Purchase" ).show();
 		$('#imagesContainer').find('img').attr('src','img/men/23P.png' );
					 
            return false;}
			
							if(src=='img/men/24.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_24men; 
							 $( ".Purchase" ).show();
 			$('#imagesContainer').find('img').attr('src','img/men/24P.png' );
            return false;}
			
			
							if(src=='img/men/25.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_25men; 
							 $( ".Purchase" ).show();
$('#imagesContainer').find('img').attr('src','img/men/25P.png' );
            return false;}
			
			
							if(src=='img/men/26.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_26men;
 $( ".Purchase" ).show();							
 			$('#imagesContainer').find('img').attr('src','img/men/26P.png' );
					 
            return false;}
			
							if(src=='img/men/27.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_27men; 
							 $( ".Purchase" ).show();
 			$('#imagesContainer').find('img').attr('src','img/men/27P.png' );
					 
            return false;}
			
							if(src=='img/men/28.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_28men; 
							 $( ".Purchase" ).show();
 			$('#imagesContainer').find('img').attr('src','img/men/28P.png' );
					 
            return false;}
			
			
			
							if(src=='img/men/29.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_29men; 
							 $( ".Purchase" ).show();
 			$('#imagesContainer').find('img').attr('src','img/men/29P.png' );
					 
            return false;}
			
							if(src=='img/men/30.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_30men;
 $( ".Purchase" ).show();							
 			$('#imagesContainer').find('img').attr('src','img/men/30P.png' );
					 
            return false;}
			
			
			
			
 
		
		
			
				if(src=='img/women/1.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_1women;
				 $( ".Purchase" ).show();

				 
				 $('#imagesContainer').find('img').attr('src','img/women/1P.png' );
            return false;}
			
				if(src=='img/women/2.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_2women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/2P.png' );
            return false;}
			
				if(src=='img/women/3.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_3women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/3P.png' );
					 
            return false;}
			
				if(src=='img/women/4.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_4women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/4P.png' );
					 
            return false;}
				if(src=='img/women/5.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_5women;
				 $( ".Purchase" ).show();
 		 
				 $('#imagesContainer').find('img').attr('src','img/women/5P.png' );
					 
            return false;}
				if(src=='img/women/6.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_6women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/6P.png' );
					 
            return false;}

			
				if(src=='img/women/7.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_7women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/7P.png' );
					 
            return false;}
				if(src=='img/women/8.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_8women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/8P.png' );
					 
            return false;}
			
			
				if(src=='img/women/9.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_9women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/9P.png' );
					 
            return false;}
			
				if(src=='img/women/10.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_10women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/10P.png' );
            return false;}
			if(src=='img/women/11.png'){
			    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
			purchaseurl=glasseslink_11women;
			 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/11P.png' );
            return false;}
		if(src=='img/women/12.png'){
		    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
		purchaseurl=glasseslink_12women;
		 $( ".Purchase" ).show();
    	        
				 $('#imagesContainer').find('img').attr('src','img/women/12P.png' );
					 
            return false;}
			
					if(src=='img/women/13.png'){
					    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
					purchaseurl=glasseslink_13women;
					 $( ".Purchase" ).show();
 			        
				 $('#imagesContainer').find('img').attr('src','img/women/13P.png' );
					 
            return false;}
					if(src=='img/women/14.png'){
					    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
					purchaseurl=glasseslink_14women;
					 $( ".Purchase" ).show();
 		 
				 $('#imagesContainer').find('img').attr('src','img/women/14P.png' );
            return false;}
					if(src=='img/women/15.png'){
					    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
					purchaseurl=glasseslink_15women;
					 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/15P.png' );
					 
            return false;}
			
	if(src=='img/women/16.png'){
	    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
	purchaseurl=glasseslink_16women;
	 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/16P.png' );
					 
            return false;}
			
		if(src=='img/women/17.png'){
		    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
		purchaseurl=glasseslink_17women;
		 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/17P.png' );
					 
            return false;}
			
				if(src=='img/women/18.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_18women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/18P.png' );
            return false;}
			
			
				if(src=='img/women/19.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_19women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/19P.png' );
            return false;}
			
			
				if(src=='img/women/20.png'){
				    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
				purchaseurl=glasseslink_20women;
				 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/20P.png' );
					 
            return false;}
						if(src=='img/women/21.png'){
						    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
						purchaseurl=glasseslink_21women;
						 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/21P.png' );
            return false;}
			
							if(src=='img/women/22.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_22women;
							 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/22P.png' );
					 
            return false;}
			
							if(src=='img/women/23.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_23women;
							 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/23P.png' );
					 
            return false;}
			
							if(src=='img/women/24.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_24women;
							 $( ".Purchase" ).show();
 		 
				 $('#imagesContainer').find('img').attr('src','img/women/24P.png' );
            return false;}
			
			
							if(src=='img/women/25.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_25women;
							 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/25P.png' );
					 
            return false;}
			
			
							if(src=='img/women/26.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_26women;
							 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/26P.png' );
					 
            return false;}
			
							if(src=='img/women/27.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_27women;
							 $( ".Purchase" ).show();
 	 
				 $('#imagesContainer').find('img').attr('src','img/women/27P.png' );
					 
            return false;}
			
							if(src=='img/women/28.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_28women;
							 $( ".Purchase" ).show();
 			 
				 $('#imagesContainer').find('img').attr('src','img/women/28P.png' );
            return false;}
			
			
			
							if(src=='img/women/29.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
				
							purchaseurl=glasseslink_29women;
							 $( ".Purchase" ).show();
 
				 $('#imagesContainer').find('img').attr('src','img/women/29P.png' );
					 
            return false;}
			
							if(src=='img/women/30.png'){
							    //'bounce' Purchase button 
             $('.Purchase').addClass('animated bounce');
             setTimeout(function() {
                    //remove annimation after 1s
                     $('.Purchase').removeClass('animated bounce');
                }, 1000);
							purchaseurl=glasseslink_30women;
							 $( ".Purchase" ).show();
 		 
				 $('#imagesContainer').find('img').attr('src','img/women/30P.png' );
					 
            return false;}	
			
			
			
	
			
			
			
        });

  

        $('#imgInp').customFileInput({
 
            button_position : 'right'
        });

       

        $('#myModal').on('shown', function () {
 
            $('.designContainer').clone().prependTo('.modal-body').find('i').remove();
            $('.modal-body').find('.ui-icon').css('display', 'none');
        });

        $('#myModal').on('hidden', function () {
 
          $('.modal-body').html(' ');
        })

 

 
        $('a.print').on('click', function() {
            
            $.print(".span6");
        });

               $('.export').click(function(){
 
            $('#printable').find('i').css('display', 'none');
            $('#printable').find('.ui-icon').css('display', 'none');
 
             var exportCanvas = document.getElementById('printable');
             
			 
             var canvasContainer = document.getElementById('convascontent');
 
                html2canvas(exportCanvas, {
                   
                onrendered: function(canvas) {
            
                    $('#convascontent').html(' ');
     
                    canvasContainer.appendChild(canvas);
               
                    $('#convascontent').find('canvas').attr('id','mycanvas');
 
                    
					$('#printable').find('i').css('display', '');
                    $('#printable').find('.ui-icon').css('display', '');
                

  
           var oCanvas = document.getElementById("mycanvas");  		   
   
               Canvas2Image.saveAsPNG(oCanvas); 
                }
            });
       	  });
		
		
	 
        $('.saveonserver').click(function(){
         
            $('#printable').find('i').css('display', 'none');
            $('#printable').find('.ui-icon').css('display', 'none');
       
             var exportCanvas = document.getElementById('printable');             
 
             var canvasContainer = document.getElementById('convascontent');
   
                html2canvas(exportCanvas, {
                  
                onrendered: function(canvas) {
 
                    $('#convascontent').html(' ');
        
                    canvasContainer.appendChild(canvas);
                    
                    $('#convascontent').find('canvas').attr('id','mycanvas');
                   
					$('#printable').find('i').css('display', '');
                    $('#printable').find('.ui-icon').css('display', '');
 
		 
           var oCanvas = document.getElementById("mycanvas");  		   
  
 
     
			   var screenshot = Canvas2Image.saveAsPNG(oCanvas, true);

 
		canvas.parentNode.appendChild(screenshot);
		screenshot.id = "canvasimage";		
		data = $('#canvasimage').attr('src');
		canvas.parentNode.removeChild(screenshot);


 
		var url = 'upload/export.php';
		$.ajax({ 
		    type: "POST", 
		    url: url,
		    dataType: 'text',
		    data: {
		        base64data : data
		    }
		});
                }
            });
			alert ('Successfully Saved...:)');
       	  });
		  
		  
 
		        $('.share').click(function(){
 
            $('#printable').find('i').css('display', 'none');
            $('#printable').find('.ui-icon').css('display', 'none');
 
             var exportCanvas = document.getElementById('printable');             
 
             var canvasContainer = document.getElementById('convascontent');
 
                html2canvas(exportCanvas, {
                 onrendered: function(canvas) {
 
                    $('#convascontent').html(' ');
               
                    canvasContainer.appendChild(canvas);
                     
                    $('#convascontent').find('canvas').attr('id','mycanvas');
  
					$('#printable').find('i').css('display', '');
                    $('#printable').find('.ui-icon').css('display', '');
                   
	 
           var oCanvas = document.getElementById("mycanvas");  		   
 
			   var screenshot = Canvas2Image.saveAsPNG(oCanvas, true);

	 
		canvas.parentNode.appendChild(screenshot);
		screenshot.id = "canvasimage";		
		data = $('#canvasimage').attr('src');
		canvas.parentNode.removeChild(screenshot);


		 
		var url = 'upload/export.php';
		$.ajax({ 
		    type: "POST", 
		    url: url,
		    dataType: 'text',
		    data: {
		        base64data : data
		    }
		});
                }
            });
			
       	  });
		  
		  
		  
		  
		     $('.exp').click(function(){

  $(this).prop('href', purchaseurl);


           
       	  });
		  
		  	    //font size using Slider based on jquery UI sliders
         $( "#slider" ).slider({
            range: "max", // set range Type
            min: 50, // set a minimum value
            max: 500, //a max value
            value: 204, // default value
            slide: function( event, ui ) { // event onslider
                $( ".size" ).text(ui.value + "px"); // update text on slider
              
                $('.images').css( "width",ui.value); // apply value on text (font-size) using css function (jquery)
              $('.images').css( "height",ui.value); // apply value on text (font-size) using css function (jquery)
                }
            });
		  
		  
		   //font size using Slider based on jquery UI sliders
         $( "#slidera" ).slider({
            range: "max", // set range Type
            min: 150, // set a minimum value
            max: 550, //a max value
            value: 320, // default value
            slide: function( event, ui ) { // event onslider
                $( ".sizea" ).text(ui.value + "px"); // update text on slider
              
                $('#Tshirtsrc').css( "width",ui.value); // apply value on text (font-size) using css function (jquery)
              $('#Tshirtsrc').css( "height",ui.value); // apply value on text (font-size) using css function (jquery)
                }
            });
			
	
	
	
	
	
	
	
		    $('#imagesContainer').find('.images').remove();
            $('#imagesContainer').prepend("<div class='images' style='z-index:9" + countImg + "'><img src='img/men/10798789P.png' alt='' ></div>");                
            $('#imagesContainer').find('.images').draggable();	 
	    
	
	
	
	
	
 
        $('.font-tooltip').tooltip();

        $('.tooltip-show').tooltip({
          selector: "a[data-toggle=tooltip]"
        })
     
    });
	
	
	
	

        







