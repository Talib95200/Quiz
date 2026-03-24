 quiz = [{
            question: "1. What does CSS stand for?",
            optn1: "A. Creating style sheets",
            optn2: "B. Colorful style sheets",
            optn3: "C. Cascading style sheets",
            optn4: "D. Computer style sheets",
            answer: 3
        },
        {
            question: "2. Which property changes text color?",
            optn1: "A. text-style",
            optn2: "B. font-color",
            optn3: "C. color",
            optn4: "D. text-color",
            answer: 3
        },
            {
                question: "3. Which CSS property controls the text size?",
                optn1: "A. text-style",
                optn2: "B. font-size",
                optn3: "C. text-size",
                optn4: "D. font-style",
                answer: 2
            },
            {
                question: "4. Which tag is used to insert an image?",

                optn1: "A. <image>",
                optn2: "B. <img>",
                optn3: "C. <pic>",
                optn4: "D. <src>",
                answer: 2
            },
            {
            question: "5. Which property is used to change the background color?",
            optn1: "A. bgcolor",
            optn2: "B. background-color",
            optn3: "C. color-background",
            optn4: "D. bg-color",
            answer: 2
        },
        {
            question: "6. Which HTML attribute is used to define inline styles?",
            optn1: "A. class",
            optn2: "B. font",
            optn3: "C. styles",
            optn4: "D. style",
            answer: 4
        }
        ]

        question_id = document.getElementById('question-id')
        option1 = document.getElementById('option1')
        option2 = document.getElementById('option2')
        option3 = document.getElementById('option3')
        option4 = document.getElementById('option4')
        main = document.getElementById('main')
        text = document.getElementById('text')
        again_btn = document.getElementById('again-btn')
        btn_id = document.getElementById('btn-id')
        current = 0;
        score = 0;

        question_id.innerText = quiz[0].question
        option1.innerText = quiz[0].optn1
        option2.innerText = quiz[0].optn2
        option3.innerText = quiz[0].optn3
        option4.innerText = quiz[0].optn4

        function next() {
            if (current < quiz.length) {
                current++
                question_id.innerText = quiz[current].question
                option1.innerText = quiz[current].optn1
                option2.innerText = quiz[current].optn2
                option3.innerText = quiz[current].optn3
                option4.innerText = quiz[current].optn4
            }
        }
        function checkanswer(c) {
            if (c == quiz[current].answer) {
                quiz[current].answer.innerText = "correct"
                score++
            }
            else {
            }
            next()
        }
        function load() {
            if (current >= quiz.length) {
            text.setAttribute('class', 'ok')

                main.setAttribute('class', 'ok')
                text.innerText = `Your score is ${score} out of ${quiz.length}`
                again_btn.setAttribute('class', 'ok1')
            }
        }

        function again() {
            current = 0;
            score = 0;
            main.setAttribute('class', 'show')
            again_btn.setAttribute('class', 'ok')

            text.setAttribute('class', 'hide')
            // btn_id.setAttribute('class', 'nn')
            question_id.innerText = quiz[0].question
            option1.innerText = quiz[0].optn1
            option2.innerText = quiz[0].optn2
            option3.innerText = quiz[0].optn3
            option4.innerText = quiz[0].optn4

            // next()
            // checkanswer()
        }