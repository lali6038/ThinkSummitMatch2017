
$(function() {
	$('#swiping').hide(); 
	$('#results').hide(); 
      console.log('hi'); 


	var compliment = ['Your email program is the fairest of them all', 'Your click through rates are out of this world 🚀🌏', 'Your unsubs are non existent', 'You are the 💣 at generating revenue from email', 'Your re-open rates are elevated ⬆️', 'It was love at the first welcome email 💌', 'Your email stands out in a crowded inbox like a 💎 in the rough', 'Your email program is the Leonardio Decaprio (circa Titantic) of email programs 🚢 💔'];
	var questionnaire= $('#questionnaire'); 
	var Preferences= $('#Preferences'); 
	var swiping= $('#swiping');
	var results= $('#match-me'); 
	var like1= $('#like-1'); 
	var dislike1= $('#dislike-1');
	var like2= $('#like-2'); 
	var dislike2= $('#dislike-2');
	var like3= $('#like-3'); 
	var dislike3= $('#dislike-3');
	var like4= $('#like-4'); 
	var dislike4= $('#dislike-4');
	var like5= $('#like-5'); 
	var dislike5= $('#dislike-5');
	var question1= $('#question-1');
	var question2= $('#question-2');
	var question3= $('#question-3');
	var question4= $('#question-4');
	var question5= $('#question-5');
	var events=$('#events');
	var survey=$('#survey');
	var resultslike1=$('#results-1-like'); 
	var resultsdislike1= $('#results-1-dislike'); 
	var resultslike2= $('#results-2-like'); 
	var resultsdislike2= $('#results-2-dislike');
	var resultslike3= $('#results-3-like'); 
	var resultsdislike3= $('#results-3-dislike');
	var resultslike4= $('#results-4-like'); 
	var resultsdislike4= $('#results-4-dislike'); 
	var resultslike5= $('#results-5-like'); 
	var resultsdislike5= $('#results-5-dislike'); 
	



	$('#Preferences').on('click', function(event){
		questionnaire.hide();
		event.preventDefault();
	})

	$('#Preferences').on('click', function(event){
		swiping.show();
		event.preventDefault();
	})

	$(like1).on('click', function(event){
		resultslike1.show();
		resultsdislike1.hide(); 
		event.preventDefault();
	})

		$(dislike1).on('click', function(event){
		resultsdislike1.show();
		resultslike1.hide(); 
		event.preventDefault();
	})

		$(like2).on('click', function(event){
		resultslike2.show();
		resultsdislike2.hide(); 
		event.preventDefault();
	})

		$(dislike2).on('click', function(event){
		resultsdislike2.show();
		resultslike2.hide(); 
		event.preventDefault();
	})


		$(like3).on('click', function(event){
		$(resultslike3).show();
		$(resultsdislike3).hide(); 
		event.preventDefault();
	})


		$(dislike3).on('click', function(event){
		resultsdislike3.show();
		resultslike3.hide(); 
		event.preventDefault();
	})

		$(like4).on('click', function(event){
		$(resultslike4).show();
		$(resultsdislike4).hide(); 
		event.preventDefault();
	})


		$(dislike4).on('click', function(event){
		resultsdislike4.show();
		resultslike4.hide(); 
		event.preventDefault();
	})

	$(like5).on('click', function(event){
		$(resultslike5).show();
		$(resultsdislike5).hide(); 
		event.preventDefault();
	})


		$(dislike5).on('click', function(event){
		resultsdislike5.show();
		resultslike5.hide(); 
		event.preventDefault();
	})
	

	$('#match-me').on('click', function(event){
		$('#results').show();
		event.preventDefault();



		

						var baseURL='http://api.nytimes.com/svc/mostpopular/v2/mostemailed/arts/1.json?api-key=55d0a13fda6948b3b0d0df93380d7cc9'; 
						$.get(baseURL, function(response){
							var title= response.results[0].title;
							var author= response.results[0].byline;
							var url= response.results[0].url; 
							
				           //$('#events').html(url + ', ' + title + ', ' + author); 

				          

				          $('#events').append(title + ', ' + author);  
				          $('#event-link').attr('href', url);  
				         
				      
				           						
       

                       var eateryURL='https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+NewYork&key=AIzaSyArlJ23xVZXxcaljwsebqxa3ptCmYPtPZM';
                    	$.get(eateryURL, function(response){
                         var name= response.results[0].name;
                         var address=response.results[0].formatted_address; 
                         var rating=response.results[0].rating; 

              

                         $('#eatery').html(name + ', ' + address + ', ' + rating + '  ⭐️ rating ' );  


			 
		})
                    })
})


$('#match-me').on('click', function(event){
		$('#swiping').hide();
		event.preventDefault();
	})


$('#like-1').on('click', function(event) {
		console.log('load');
		event.preventDefault(); 
	  	$('#question-1').animate({left: '0px', opacity: 0.0 }); 
		$('#like-1').animate({left: '0px', opacity: 0.0 }); 
	  	$('#dislike-1').animate({left: '0px', opacity: 0.0 }); 
	 }) 

$('#dislike-1').on('click', function(event) {
	  $('#question-1').animate({right: '0px', opacity: 0.0 });
	  $('#dislike-1').animate({right: '0px', opacity: 0.0 });
	  $('#like-1').animate({right: '0x', opacity: 0.0 });
	}) 

	$('#like-2').on('click', function(event) {
	 	$('#question-2').animate({left: '0px', opacity: 0.0 }); 
	  	$('#like-2').animate({left: '0px', opacity: 0.0 });
	  	$('#dislike-2').animate({left: '0px', opacity: 0.0 });
	 })

	$('#dislike-2').on('click', function(event) { 
	  $('#question-2').animate({right: '0px', opacity: 0.0 });
	  $('#dislike-2').animate({right: '0px', opacity: 0.0 });
	  $('#like-2').animate({right: '0x', opacity: 0.0 });
	});


	$('#like-3').on('click', function(event) { 
	 	$('#question-3').animate({left: '0px', opacity: 0.0 }); 
	  	$('#like-3').animate({left: '0px', opacity: 0.0 });
	  	$('#dislike-3').animate({left: '0px', opacity: 0.0 });
	 })

	$('#dislike-3').on('click', function(event) {
		console.log('load'); 
	  $('#question-3').animate({right: '0px', opacity: 0.0 });
	  $('#dislike-3').animate({right: '0px', opacity: 0.0 });
	  $('#like-3').animate({right: '0x', opacity: 0.0 });
	});

	$('#like-4').on('click', function(event) { 
	 	$('#question-4').animate({left: '0px', opacity: 0.0 }); 
	  	$('#like-4').animate({left: '0px', opacity: 0.0 });
	  	$('#dislike-4').animate({left: '0px', opacity: 0.0 });
	 })

	$('#dislike-4').on('click', function(event) {
		console.log('load'); 
	  $('#question-4').animate({right: '0px', opacity: 0.0 });
	  $('#dislike-4').animate({right: '0px', opacity: 0.0 });
	  $('#like-4').animate({right: '0x', opacity: 0.0 });
	});

	$('#like-5').on('click', function(event) { 
	 	$('#question-5').animate({left: '0px', opacity: 0.0 }); 
	  	$('#like-5').animate({left: '0px', opacity: 0.0 });
	  	$('#dislike-5').animate({left: '0px', opacity: 0.0 });
	 })

	$('#dislike-5').on('click', function(event) {
		console.log('load'); 
	  $('#question-5').animate({right: '0px', opacity: 0.0 });
	  $('#dislike-5').animate({right: '0px', opacity: 0.0 });
	  $('#like-5').animate({right: '0x', opacity: 0.0 });
	});

	$('#Compliment').on('click', function(event){
		var randomCompliment = compliment[Math.floor(Math.random() * compliment.length)];
		event.preventDefault();
		$('#compliment-list').html(randomCompliment); 
	})

})










