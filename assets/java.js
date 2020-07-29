// Survey;

// timer
var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    window.location.href = "highscore.html";
  }
}, 1000);
//Arrays
var questionsAnswers = [
    { question: "Who made the film 'The Birds?", answer: 3 },
    { question: "What was the name of the prequel film for 'Alien'?", answer: 1 },
    { question: "What Film won best picture in 2020?", answer: 3 },
    { question: "Who was the lead actor of Planet of the Apes (1968)?", answer: 4 },
  ];
  var answers = [
    { "1": "Martin Scorsese", "2": "Orson Welles", "3": "Alfred Hitchcock", "4": "Stanley Kubrick" },
    { "1": "Prometheus", "2": "Alien Resurrection", "3": "Alien vs Predator", "4": "Alien:Origins" },
    { "1": "Once Upon a Time in Hollywood", "2": "Joker", "3": "Parasite", "4": "1917" },
    { "1": "Andy Serkis", "2": "Mark Wahlberg", "3": "Roddy McDowall", "4": "Charlton Heston" },
  ];
  console.log(
    questionsAnswers.length,
    answers[0][4],
    answers[0][3],
    answers[0][2],
    typeof parseInt(answers[0][1]),
    answers[0][2],
    answers[0][2]
  );
  var userScore = 0;
  $("#userScoreHTML").text(userScore);
  $("#question").text(questionsAnswers[0].question);
  $(".answers1").text(answers[0][1]);
  $(".answers2").text(answers[0][2]);
  $(".answers3").text(answers[0][3]);
  $(".answers4").text(answers[0][4]);
  var index = 0; //Logic //
  $(".answers").on("click", function () {
    var buttonPressed = $(this).val();
    if (parseInt(buttonPressed) === parseInt(questionsAnswers[index].answer)) {
      index++;
      userScore++;
      if (questionsAnswers.length > index) {
      $("#question").text(questionsAnswers[index].question);
      $(".answers1").text(answers[index][1]);
      $(".answers2").text(answers[index][2]);
      $(".answers3").text(answers[index][3]);
      $(".answers4").text(answers[index][4]);
      $("#userScoreHTML").text(userScore);
      } else {
          $("#userScoreHTML").text(userScore);
          localStorage.setItem("userScoreFinal",userScore);
          window.location.href = "highscore.html";
      }
    } else {
             index++;
             if (questionsAnswers.length > index) {
             $("#question").text(questionsAnswers[index].question);
             $(".answers1").text(answers[index][1]);
             $(".answers2").text(answers[index][2]);
             $(".answers3").text(answers[index][3]);
             $(".answers4").text(answers[index][4]);
             } else {
                 $("#userScoreHTML").text(userScore);
                  localStorage.setItem("userScoreFinal",userScore)
          window.location.href = "highscore.html";
             }//Trying to bring up ending Arguments 
             
         
            }
  });
  console.log(questionsAnswers[1].question, questionsAnswers[0].answer);