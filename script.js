$(document).ready(function(){

    var magic8Ball = {};
    magic8Ball.listOfAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes – definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy', 'Try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
        
    magic8Ball.askQuestion = function (question){
        var randomAnswer = this.listOfAnswers[Math.floor(Math.random() * this.listOfAnswers.length)];
        console.log(question);
        console.log(randomAnswer);
        $("#answer").text(randomAnswer);
        $("#answer").fadeIn(4000);
        $("#answer").fadeOut(6000);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
    };
       
    magic8Ball.works = function() {
        $("#answer").hide();
        var question = prompt("What would you like to know?");
        $("#8ball").effect("shake");
        setTimeout(function(){magic8Ball.askQuestion(question)}, 500);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    };  $("#questionButton").click(magic8Ball.works);
});