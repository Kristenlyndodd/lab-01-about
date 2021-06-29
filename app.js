// get the button element 
// add "click" event listener to the button
//  confirm the user wants to start the quiz 
//  if they do -- promt for at least 3 questions and store the answer 
//  for each answer, check if the user entered a correct value 
//  track the number of correct answers 
//  at the end of the quiz, update the results section with the number of correct answers

const quizButton = document.getElementById("click-me!");
const results = document.getElementById("results");

quizButton.addEventListener('click'), ()=>{
  const confirmed = confirm ('Would you like to start the quiz?'); 
  console.log(confirmed);
    if (confirmed){
        const name =('');
        const ans1 =('');
        const ans2 =('');
        const ans3 =('');
        let score = 0;
        console.log(name, ans1, ans2, ans3);
        if(ans1 == 'y' || ans1 == 'YES' == || ans1 'yes') {
          score ++;
        }
        console.log(name, ans1, ans2, ans3);
        if(ans2 == "y" || ans2 == 'YES' == || ans1 'yes') {
          score ++;
        }
        console.log(name, ans1, ans2, ans3);
        if(ans1 == "y" || ans1 == 'YES' == || ans1 'yes') {
          score ++;
        }
console.log(score)

    } else {
      console.log('user cancelled');
    }
});
