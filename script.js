const form = document.querySelector('#quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'));
const questions = document.querySelectorAll('.question-item');
const alert = document.querySelector('#alert');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	questions.forEach((question) => {
		question.classList.add('incorrect');
		question.classList.remove('correct');
	});

	const selectedAnswer = answers.filter((answer) => answer.checked);
	selectedAnswer.forEach((answer) => {
		const isCorrect = answer.value === 'true';
		const questionItem = answer.closest('.question-item');
		if (isCorrect) {
			questionItem.classList.add('correct');
			questionItem.classList.remove('incorrect');
		} else {
			questionItem.classList.add('incorrect');
			questionItem.classList.remove('correct');
		}

		const allTrue = selectedAnswer.every((answer) => answer.value === 'true');
		const allCorrect = selectedAnswer.length === questions.length;
		if (allTrue && allCorrect) {
			alert.classList.add('active');
			setTimeout(() => {
				alert.classList.remove('active');
			}, 1000);
		}
	});
});
