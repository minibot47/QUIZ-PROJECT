// // for(var p = 1500; p <= 3600; p+=10 ){

// //     if(p % 5 ===0 && p % 7 === 0){
// //         console.log(p);

// //     }
    
// // }
// var num = ['1','3','5','7']

// num.forEach((x)=>{
//     console.log(x * 2);

// })

// var stuff = ['car','broom',['vroom','colt']]

// console.log(stuff[2][1]);


// stuff.filter((x)=>{
//     if(x[0] === 'b'){
//         console.log(x);
//     }


// })

// stuff.map((x)=>{
//     if(x[0] === 'b'){
//         console.log(x);
//     }


// })

// console.log(stuff.includes('car'));

var h3 = document.getElementById('question1')
// calling by id

// console.log(question1);

// var questions = document.getElementsByClassName('questions')
// // calling by class

// var questions = document.getElementsByTagName('questions')
// // calling by tagname

// var questions = document.querySelector('questions')
// // calling by quartselector

// var questions = document.querySelectorAll('question')
// // calling by quaryselector for all



// console.log(btn);


// console.log(main);



// console.log(toggle);


// console.log(darkbtn);



// var btn = document.getElementById('btn')

// btn.addEventListener('click' , function(){
//     h3.innerHTML = 'question 2?'
// })
    
// var main = document.getElementById('body')



// var toggle = document.getElementById('contrastlight')

// toggle.addEventListener('click',function(){
//     main.classList.toggle('dark')
// })

// var darkbtn = document.getElementById('contrastlight')
// var darktext = document.getElementById('darktext')

// darkbtn.addEventListener('click' , function () {
//     contrast.classList.toggle('btndark') 
//     darktext.classList.toggle('darktext')

// })

var main = document.getElementById('body')
var darkmodebutton = document.getElementById('darkmodebutton')
var lightmode = document.getElementById('lightmode')
var none = document.getElementById('none')
var quest = document.getElementsByClassName('quest')
var ques = document.getElementById('ques')
var option0 = document.getElementById('option0')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var count = document.getElementById('count')
var next = document.getElementById('next')
var previous = document.getElementById('previous')
var i = 0
var questions = document.getElementById('questions')
var cover = document.getElementById('cover')
var score = document.getElementById('score')
var retake = document.getElementById('retake')
var quizscore = document.getElementById('quizscore')
var scores = document.getElementById('scores')
var scorestext = document.getElementById('scorestext')
var optioncolor0 = document.getElementById('option0')
var optioncolor1 = document.getElementById('option1')
var optioncolor2 = document.getElementById('option2')
var optioncolor3 = document.getElementById('option3')
var darkmodetext = document.getElementById('darkmodetext')
var quizname = document.getElementById('quizname')
var timer = document.getElementById('timer')
var goback = document.getElementById('goback')
var questions = document.getElementById('questions')
var header = document.getElementById('header')
var answer0 = document.getElementById('answer0')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var list1 = document.getElementById('list1')
var list2 = document.getElementById('list2')
var list3 = document.getElementById('list3')
var list4 = document.getElementById('list4')
let number = 0



let answers = []

x=0
w=0





// lightmode

darkmodebutton.addEventListener('click' , function(){
    main.classList.add('dark-mode')
    optioncolor0.classList.add('darkmodeoption' )
    optioncolor1.classList.add('darkmodeoption' )
    optioncolor2.classList.add('darkmodeoption')
    optioncolor3.classList.add('darkmodeoption')
    quizname.classList.add('darkmodetext')
    darkmodebutton.classList.add('none')
    timer.classList.add('dark-mode')
    lightmode.style.display = 'flex'
    next.classList.add('buttoncolor')
    previous.classList.add('buttoncolor')
    questions.classList.add('covercolor')
    scores.classList.add('covercolor')
    score.classList.add('covercolor')
    header.classList.add('covercolor')

})

lightmode.addEventListener('click' , function(){
    main.classList.remove('dark-mode')
    optioncolor0.classList.remove('darkmodeoption' )
    optioncolor1.classList.remove('darkmodeoption' )
    optioncolor2.classList.remove('darkmodeoption')
    optioncolor3.classList.remove('darkmodeoption')
    quizname.classList.remove('darkmodetext')
    darkmodebutton.classList.remove('none')
    timer.classList.remove('dark-mode')
    lightmode.style.display = 'none'
    next.classList.remove('buttoncolor')
    previous.classList.remove('buttoncolor')
    questions.classList.remove('covercolor')
    scores.classList.remove('covercolor')
    score.classList.remove('covercolor')
    header.classList.remove('covercolor')

})


// QUIZ

var questionbank = [
    {
        Question:'when was the first Premier League played?' ,
        option:['1991/92','1992/93','1995/96','1990/91'] ,
        answer : '1992/93' 
    },
    {
        Question:'What is your best way to apply bold styling to text?' ,
        option:['strong','use css','bold','b'] ,
        answer : 'strong'
    } ,
    {
        Question:'how old were you when you first met your mother?' ,
        option:['1 year','9 months','foetus','old enough to recognize faces'] ,
        answer : '9 months'
    } ,
    {
        Question:'How many bones do we have in an ear?' ,
        option:['1','2','3','4'] ,
        answer : '3'
    } ,
    {
        Question:'What is your best anime' ,
        option:['Attack on Titans','kimetsu no yaiba','naruto shippuden','bleach'] ,
        answer : 'Attack on Titans'
    }
]



function start() {
    ques.innerHTML = 'Q.' + (i+1) + ' ' +  questionbank[i].Question
    option0.innerHTML = questionbank[i].option[0]
    option0.setAttribute('value', questionbank[i].option[0] )

    option1.innerHTML = questionbank[i].option[1]
    option1.setAttribute('value', questionbank[i].option[1])

    option2.innerHTML = questionbank[i].option[2]
    option2.setAttribute('value', questionbank[i].option[2])

    option3.innerHTML = questionbank[i].option[3]
    option3.setAttribute('value', questionbank[i].option[3])


    

    count.innerHTML = 'Question ' + (i+1) + ' ' + 'of' + ' ' + 5  


    
    
}



function countcorrect(answers) {
    let number = 0
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === true) {
            number++
            
        }
        else{
            
        }

        
        
    }
    return number;
    
}






function answer(e,i){
    let correct = e.target.getAttribute('value')


    let answer = questionbank[i].answer



    if (correct === answer) {
        answers[i] = true
        
      

    }
    


    let y = countcorrect(answers)

    console.log(y);


    
    
}





retake.addEventListener('click', function(){

    score.style.display = 'none',
    cover.style.display = 'block' , 
    start(i = 0)
    

})

goback.addEventListener('click' , function(){
    scores.style.display = 'none'
    score.style.display = 'flex'
    answers.length = 0
})

option0.addEventListener('click' , function(e){
    answer(e,i)
    option0.classList.toggle('chosen')
    option1.classList.remove('chosen')
    option2.classList.remove('chosen')
    option3.classList.remove('chosen')


})
option1.addEventListener('click' , function(e){
    answer(e,i)
    option1.classList.toggle('chosen')
    option0.classList.remove('chosen')
    option3.classList.remove('chosen')
    option2.classList.remove('chosen')


})
option2.addEventListener('click' , function(e){
    answer(e,i)
    option2.classList.toggle('chosen')
    option1.classList.remove('chosen')
    option3.classList.remove('chosen')
    option0.classList.remove('chosen')


})
option3.addEventListener('click' , function(e){
    answer(e,i)
    option3.classList.toggle('chosen')
    option1.classList.remove('chosen')
    option2.classList.remove('chosen')
    option0.classList.remove('chosen')


})

quizscore.addEventListener('click',function(){
    scores.style.display = 'flex',
    score.style.display = 'none'
    scorestext.innerHTML = 'YOU GOT ' + countcorrect(answers) + ' of ' + questionbank.length + ' RIGHT AND GOT ' + (questionbank.length - countcorrect(answers)) + ' WRONG '
    answer0.innerHTML =  questionbank[0].answer 
    answer1.innerHTML = questionbank[1].answer 
    answer2.innerHTML = questionbank[2].answer 
    answer3.innerHTML = questionbank[3].answer 
    answer4.innerHTML = questionbank[4].answer 

})

function nextquestion() {

    if(i < questionbank.length-1){
        i++ 
        start()
         
    }
    else(
        cover.style.display = 'none',
        score.style.display = 'flex'
    )

    option0.classList.remove('chosen')
    option1.classList.remove('chosen')
    option2.classList.remove('chosen')
    option3.classList.remove('chosen')




}

function previousquestion() {

    if(i > questionbank.length-questionbank.length){
        i-- 
        start() 
    }

    option0.classList.remove('chosen')
    option1.classList.remove('chosen')
    option2.classList.remove('chosen')
    option3.classList.remove('chosen')
    answers.length = 0


}

previous.addEventListener('click',

    previousquestion

)


next.addEventListener('click',

    nextquestion


)

























start()




















