    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Virtual Eyewear Try-on</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" href="img/favico.ico">
        <link href="css/bootstrap.css" rel="stylesheet">
      <link href="css/bootstrap-responsive.css" rel="stylesheet">
        <link href="css/font-awesome.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">
       <link href="css/imgSelect.css" rel="stylesheet">
        <link  href="css/app.css" rel="stylesheet">
        <link href="css/jquery-ui-1.8.17.custom.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>
        <link href="css/pick-a-color-1.1.7.min.css" rel="stylesheet">
        <script type="text/javascript" src="js/modernizr.custom.28468.js"></script>		
	
    </head>

    <body>
   
        <div class="container">			 
            <div class="well header">			
	      <I>  <h2>	Virtual Eyewear Try-on</h2>
			       </I>
         </div>    
            <div class="row-fluid content">	
                <div class="span6">
							<div class="span10">
                            <p>
							 
                         <span class="badge badge-warn" style="background-color:black"><i class="icon-move"></i></span> &nbsp;: Move glasses image to the right position. 
                                                        
				    
        </div>	
							<br><br><br>
                    <div class='designContainer' id='printable'>
                      
                        <div id='imagesContainer'>  </div>	
						   <div id='imagesContainerphoto'>  </div>	
				
              <img id='Tshirtsrc' src="img/example/2EX.jpg" alt="">								
					
						
                    </div>
										 
					
                    <hr>
                  
             <div class="navbar">
                       
                        <div class="navbar-inverse">
                         
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     <ul class='nav'>
								
								<li>
                                    <a href="#" class="saveonserver" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="icon-save">&nbsp;</i>Save Image </a>
                                </li>
                       
                       <li class="divider-vertical"></li>

                                <li class="divider-vertical"></li>
 <li>
                                    <a href="#" class="export" ><i class="icon-download"></i> Download Image</a>
                                </li> 
								
							    <li class="divider-vertical"></li>
								
                                <li class="divider-vertical"></li>
                        		 <li>
								
                                  

<a href="https://www.facebook.com/sharer/sharer.php?u=www.http://opticas.co.uk/Opticas Eyeglasses Mirror/" target="_blank">
 <i class=" icon-facebook-sign"></i> Share on Facebook</a>                              

							  </li>
							 

                            </ul>
                        </div>
                    </div>
										
					
					<br>

					
					<div class="navbar">
                        <!-- navbar container -->
                        <div class="navbar-inverse">
                            <!-- actions -->
                            <ul class='nav'>
                                <!-- Preview design -->
                         <div class="Purchase">       
                       <li>
                                   				<a href="#" class="exp">  
									<button class='btn pull-right'><h4>Purchase Current Glasses</h4></button></a>
                                </li></div>
								
								
                            </ul>
                        </div><!-- /.navbar-inner -->
                    </div>
										
				
					
                </div>
									
                <div class="span6">
                   
                    <div class="widget">
                      
                        <div class="widget-header">
                            <i class="icon-star"></i>
                            <h3>Options</h3>
                        </div> 
                      
                        <div class="widget-content" style="background-color:#F1F5F1">  
						 <div class="span4"><h5><i class="icon-tags"></i> Choose an image</h5>
                            
                            <ul class='tshirts unstyled clearfix'>
                               
                                <li>
                                    <a href="#">
                                        <img src="img/example/1EX.jpg" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/example/2EX.jpg" alt="">
                                    </a>
                                </li>
								</ul>  </div>                      

	
	
	<div class="span4"><h5><i class="icon-picture"></i> Upload image </h5> <input type='file' id="imgInp" class='input-medium' name="file" /></h5></div>
		<div class="span4"><h5>	<i class="icon-camera"></i> Take a photo</h5>					
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-inverse btn-small" onclick="imgSelect.webcam()">Webcam</button></div>
    	

        <div class="imgSelect-container">
            <div class="imgSelect-upload"></div>
            <div class="imgSelect-webcam">
				<div class="crop"></div>
                <div class="preview"></div>
            </div>

            <input type="hidden" id="x1">
            <input type="hidden" id="y1">
            <input type="hidden" id="w">
            <input type="hidden" id="h">
			
			<div class="imgSelect-actions">
				<button type="button" class="btn btn-primary btn-small save" onclick="imgSelect.save()">Save Image</button>
				<button type="button" class="btn btn-primary btn-small new-snap" onclick="imgSelect.webcam()">New Snapshot</button>
				<button type="button" class="btn btn-primary btn-small capture" onClick="imgSelect.webcamSnap()">Capture</button>
				<button type="button" class="btn btn-default btn-small" onClick="imgSelect.cancel()">Cancel</button>
			</div>
        </div>
		
		<br>	<br>	<br>
		
		<div class="imgSelect-alert alert"></div>
		
									<div class="span5">	
							  <h5><i class="icon-zoom-in"></i> Resize Glasses image</h5>
                            <!-- Slider to change font size -->
                            <div class="slider">
                                <!-- default value -->
                                <div class='size'>204px</div>
								   
								
                                <!-- slider generated by jQuery UI -->
                                <div id="slider"></div>
                            </div>
			  </div>
													
							 		<div class="span5">	
                            <!-- Slider to change font size -->
                            <div class="slidera">  <h5><i class="icon-zoom-in"></i> Resize Face image - C,O,D,E,L,I,S,T,.,C,C</h5>
                                <!-- default value -->
                                <div class='sizea'>320px</div>
								   
								
                                <!-- slider generated by jQuery UI -->
                                <div id="slidera"></div>
                            </div>          
						</div>
						
						<br>	<br>	<br><br>	<br>	<br><hr>
							
                            <h5><i class="icon-picture"></i> Men's Eyeglasses</h5>
             
                            <ul class='tshirts unstyled clearfix'>
                               
                                  <li>
                                    <a href="#">
                                        <img src="img/men/1.png" alt="">
                                    </a>
                                </li>
								 
								 
								  <li>
                                    <a href="#">
                                        <img src="img/men/2.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/men/3.png" alt="">
                                    </a>
                                </li>								 
								  <li>
                                    <a href="#">
                                        <img src="img/men/4.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/men/5.png" alt="">
                                    </a>
                                </li>
								  <li>
                                    <a href="#">
                                        <img src="img/men/6.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/men/7.png" alt="">
                                    </a>
                                </li>
								 
								 
								 <li>
                                    <a href="#">
                                        <img src="img/men/8.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/men/9.png" alt="">
                                    </a>
                                </li>

							   <li>
                                    <a href="#">
                                        <img src="img/men/10.png" alt="">
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <img src="img/men/18.png" alt="">
                                    </a>
                                </li>
								 
                                <li>
                                    <a href="#">
                                        <img src="img/men/20.png" alt="">
                                    </a>
                                </li>
								    <li>
                                    <a href="#">
                                        <img src="img/men/21.png" alt="">
                                    </a>
                                </li>
							
                                <li>
                                    <a href="#">
                                        <img src="img/men/23.png" alt="">
                                    </a>
                                </li>
                               		    <li>
                                    <a href="#">
                                        <img src="img/men/24.png" alt="">
                                    </a>
                                </li>						
                               <li>
                                    <a href="#">
                                        <img src="img/men/25.png" alt="">
                                    </a>
                                </li>
                                  
                               			   
    <li>
                                    <a href="#">
                                        <img src="img/men/27.png" alt="">
                                    </a>
                                </li>

    <li>
                                    <a href="#">
                                        <img src="img/men/28.png" alt="">
                                    </a>
                                </li>

    <li>
                                    <a href="#">
                                        <img src="img/men/29.png" alt="">
                                    </a>
                                </li>

    <li>
                                    <a href="#">
                                        <img src="img/men/30.png" alt="">
                                    </a>
                                </li>

								
 
								

								
								

								
								
								
                            </ul>
							
							
							
							<hr>
							
                            <h5><i class="icon-picture"></i> Women's Eyeglasses</h5>
                      
                       
					   
					    <ul class='tshirts unstyled clearfix'>
                               
                                  <li>
                                    <a href="#">
                                        <img src="img/women/1.png" alt="">
                                    </a>
                                </li>
								 
								 
								  <li>
                                    <a href="#">
                                        <img src="img/women/2.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/women/3.png" alt="">
                                    </a>
                                </li>								 
								  <li>
                                    <a href="#">
                                        <img src="img/women/4.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/women/5.png" alt="">
                                    </a>
                                </li>
								  <li>
                                    <a href="#">
                                        <img src="img/women/6.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/women/7.png" alt="">
                                    </a>
                                </li>
								 
								 
								 <li>
                                    <a href="#">
                                        <img src="img/women/8.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/women/9.png" alt="">
                                    </a>
                                </li>

							   <li>
                                    <a href="#">
                                        <img src="img/women/10.png" alt="">
                                    </a>
                                </li>
                               
                              
								 <li>
                                    <a href="#">
                                        <img src="img/women/19.png" alt="">
                                    </a>
                                </li>
                         
								    <li>
                                    <a href="#">
                                        <img src="img/women/21.png" alt="">
                                    </a>
                                </li>
								    <li>
                                    <a href="#">
                                        <img src="img/women/22.png" alt="">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/women/23.png" alt="">
                                    </a>
                                </li>
                               		    <li>
                                    <a href="#">
                                        <img src="img/women/24.png" alt="">
                                    </a>
                                </li>						
                               <li>
                                    <a href="#">
                                        <img src="img/women/25.png" alt="">
                                    </a>
                                </li>
                                  
                               			    <li>
                                    <a href="#">
                                        <img src="img/women/26.png" alt="">
                                    </a>
                                </li>	
    <li>
                                    <a href="#">
                                        <img src="img/women/27.png" alt="">
                                    </a>
                                </li>



    <li>
                                    <a href="#">
                                        <img src="img/women/29.png" alt="">
                                    </a>
                                </li>

    <li>
                                    <a href="#">
                                        <img src="img/women/30.png" alt="">
                                    </a>
                                </li>
								
								
                            </ul>
					   
					   
					   
					   
                        </div>

                    </div> 
                </div> 
			

				    
			


			<div class="widget-header">

                    </div>
				
                </div>
				
				
            </div>
    
        </div> 


   
            <div id="myModal" class="modal hide fade">
              <div class="modal-body">
                   
              </div>
              <div class="modal-footer">
               
                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
              </div>
            </div>


            <div id="convascontent" style='display:none'></div>

      

      
	     <script type="text/javascript"  src="js/jquery.js"></script>


        <script type="text/javascript"  src="js/bootstrap.js"></script>

        <script type="text/javascript"  src="js/jquery-ui-1.10.3.custom.min.js"></script>  

        <script type="text/javascript"  src="js/pick-a-color-1.1.7.min.js"></script>   
        <script type="text/javascript"  src="js/tinycolor-0.9.15.min.js"></script>

        <script type="text/javascript"  src="js/jquery.print-preview.js"></script> 

        <script type="text/javascript"  src="js/html2canvas.js"></script>       
        <script type="text/javascript"  src="js/Canvas2Image.js"></script> 
        <script type="text/javascript"  src="js/base64.js"></script> 

		<script type="text/javascript"  src="js/jquery.freetrans.js"></script> 
		<script type="text/javascript"  src="js/jquery-migrate-1.2.1.min.js"></script> 
		<script type="text/javascript"  src="js/Matrix.js"></script>  		
        <script type="text/javascript" src="js/app.js"></script>
	    <script type="text/javascript" src="js/excanvas.js"></script>
        <script type="text/javascript"  src="js/imgSelect.js"></script>


        
		

    </body>
</html>
