$(document).ready(function(){

	// Process quiz
	$('.quiz').each(function() {
		var quiz = $(this);
		$(this).find('button.submit').on('click', function() {
			quiz.find('p.error').remove();
			quiz.find('.quiz-question.error').removeClass('error');
			
			var questions = quiz.find('.quiz-question');
			var selectedInputs = quiz.find('input[type=radio]:checked');

			if(questions.length != selectedInputs.length) {
				
				// Highlight questions that have no answers
				questions.each(function(){
					if($(this).find('input[type=radio]:checked').length < 1) {
						$(this).addClass('error');
					}
				});

				// Show error message
				$(this).before('<p class="error"><i class="material-icons">&#xe000;</i>Woops, it looks like you\'ve missed some questions. You will need to answer all of the questions before we can give you a result.</p>');
			}

			else {
				val = 0;
				var seriesResults = {};
				
				selectedInputs.each(function() {
					var currentCount = 1;

					currentVal = parseFloat($(this).attr('value'));
					val = currentVal + val;

					// Series total
					var series = $(this).attr('data-series');
					if(series !== undefined) {						
						if (series in seriesResults) {
							currentCount = currentCount + 1;
							total = seriesResults[series][0] + currentVal;
							seriesResults[series] = [total, currentCount];
						}
						else {
							seriesResults[series] = [currentVal, currentCount];
						}
					}
				});

				for (let series in seriesResults) {
					seriesResults[series] = seriesResults[series][0] / seriesResults[series][1];
				}

				processQuiz(val, seriesResults);
				if(outcome) {
					var printButton = '<a class="btn icon" href="#" onclick="window.print(); return false;"><i class="material-icons">&#xe555;</i><span>Print your results</span></a>';
					quiz.after('<div class="outcome">' + outcome + '<hr /><p>' + printButton + '</p></div>');
					$('html,body').scrollTop(0);
					quiz.hide();
				}
			}
			return false;
		});
	});

	// Remove error classes on input checked
	$('.quiz-question').find('input[type=radio]').on('click', function() {
		if($(this).closest('.quiz-question').hasClass('error')) {
			$(this).closest('.quiz-question').removeClass('error');
			$(this).closest('.quiz-question').siblings('p.error').remove();
		}
	});

});