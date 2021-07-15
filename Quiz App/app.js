var questions = [
    {
        question: "CSS stands for",
        option1: "Cascade Style Sheet",
        option2: "Colour Style Sheet",
        option3: "Comma Separate Sheet",
        option4: "Colour Separate Sheet",
        ans: "ans1"
    },
    {
        question: "Html stands for",
        option1: "Hyper text Markup Language",
        option2: "Hyper transfer Markup Language 1",
        option3: "Hyper traditional Markup Language 2",
        option4: "Hyper text Making Language 3",
        ans: "ans1"
    },
    {
        question: "JS stands for",
        option1: "Janjo Script",
        option2: "Janr Script",
        option3: "Java Script",
        option4: "Jaavi script",
        ans: "ans2"
    },
    {
        question: "PHP  stands for",
        option1: "Hypertext Producer",
        option2: "Hyper tension ",
        option3: "Hyper texting ",
        option4: "Hypertext Preprocessor",
        ans: "ans4"
    },
    {
        question: "WWW stands for",
        option1: "World week web",
        option2: "Word world web",
        option3: "worst web",
        option4: "warning web",
        ans: "ans2"
    }
]
var body = document.getElementById('body');
let uName = document.getElementById('username');
var pass = document.getElementById('password');
var question = document.getElementById('ques');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var nextBtn = document.getElementById('nextBtn');
var questionNo = document.getElementById('currentNo');
var totalquestions = document.getElementById('totalNo');
var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var quizbox = document.getElementById('quiz');
var mainbox = document.getElementById('main');
totalquestions.innerHTML = questions.length;
var questionCount = 0;
var marks = 0;


function check(){
    var opt1 = document.getElementById('ans1');
    var opt2 = document.getElementById('ans2');
    var opt3 = document.getElementById('ans3');
    var opt4 = document.getElementById('ans4');
    console.log(questions[questionCount].ans);
    switch(questions[questionCount].ans){
        case "ans1":
            console.log(opt1.checked);
            if(opt1.checked){
                marks++;
            }
            break;
        case "ans2":
            console.log(opt2.checked);
            if(opt2.checked){
                marks++;
            }
                break;
        case "ans3":
            console.log(opt3.checked);
            if(opt3.checked){
                marks++;
            }
            break;
        case "ans4":
            if(opt4.checked){
                marks++;
            }
            break;
    }
}
function start() {
    mainbox.innerHTML = '<h1>Quiz Application</h1><div class="login" id="login"><button onclick="text()" class="btn-primary btn">Start Quiz</button></div>';
}
function text(){
    mainbox.setAttribute('class','hidden');
    quizbox.setAttribute('class','col-6 quiz');
}
function timer() {
    var sec = 00;
    var min = 5;
    var a = setInterval(function () {
        if (sec === 0) {
            --min;
            sec = 60;
        }
        --sec;
        if (min === 00 && sec === 00) {
            clearInterval(a);
            submit();
        }
        minutes.innerHTML = min;
        seconds.innerHTML = sec;
        // console.log(min,sec);
    }, 1000);
}
function quiz() {
    var questionList = questions[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.option1;
    option2.innerHTML = questionList.option2;
    option3.innerHTML = questionList.option3;
    option4.innerHTML = questionList.option4;
    timer();
    questionNo.innerHTML = (questionCount + 1);
}
function submit() {
    check();
    quizbox.setAttribute('class', 'resultBox');
    var greeting;
    if (marks >= 3) {
        greeting = "Congratulations ";
    }
    else {
        greeting = "Sorry ";
    }
    quizbox.innerHTML = '<div class="header"><div><h1>Result</h1></div></div><div class="result">' + greeting + '</br>Your score is ' + marks + '</div>';
}
function nextQuestion() {
    check();
    if (questionCount < questions.length) {
        questionCount++;
        var questionList = questions[questionCount];
        question.innerHTML = questionList.question;
        option1.innerHTML = questionList.option1;
        option2.innerHTML = questionList.option2;
        option3.innerHTML = questionList.option3;
        option4.innerHTML = questionList.option4;
        questionNo.innerHTML = (questionCount + 1);
        if (questionCount === questions.length - 1) {
            nextBtn.innerHTML = "Submit";
            nextBtn.setAttribute('onclick', 'submit()');
        }
    }
}
quiz();