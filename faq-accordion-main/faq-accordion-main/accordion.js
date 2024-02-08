var questions = document.querySelectorAll('.faq-section .question');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    this.classList.toggle('active');
    var answer = this.nextElementSibling;
    answer.classList.toggle('active');
  });
});