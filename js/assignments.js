/* ===== AUTO GENERATE QUESTIONS 3–20 ===== */

const container = document.getElementById("moreQuestions");

for(let i=3;i<=20;i++){

  container.innerHTML += `
  <div class="quiz-question">
    <p>${i}. Dummy Question ${i}?</p>

    <label>
      <input type="radio" name="q${i}" value="1">
      Correct Option
    </label>

    <label>
      <input type="radio" name="q${i}" value="0">
      Wrong Option
    </label>

  </div>
  `;
}



/* ===== SUBMIT QUIZ ===== */

function submitQuiz(){

  let score = 0;

  for(let i=1;i<=20;i++){

    const ans =
      document.querySelector(
        `input[name="q${i}"]:checked`
      );

    if(ans && ans.value=="1"){
      score++;
    }
  }

  document.getElementById("quizScore")
    .innerText =
    "Your Score: " + score + " / 20";
}
