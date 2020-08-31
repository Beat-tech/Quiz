let preguntas = [
  {
    question: "¿En qué año se lanzó The Godfather por primera vez?",
    answers: ["1992", "1982", "1972"],
    rightAnswer: 2,
  },
  {
    question:
      "¿Qué actriz interpretó a Mary Poppins en la película de 1964 Mary Poppins?",
    answers: ["Julie Andrews", "Anne Bancroft", "Patricia Neal"],
    rightAnswer: 0,
  },
  {
    question:
      "¿Qué actor proporcionó la voz para el personaje de Nemo en la película de 2003 Finding Nemo?",
    answers: ["Robert Downey jr", "Alexander Gould", "Michael Douglas"],
    rightAnswer: 1,
  },
  {
    question:
      "¿Cuántos cameos autorreferenciales hizo Alfred Hitchcock en sus películas?",
    answers: ["19", "39", "8"],
    rightAnswer: 1,
  },
  {
    question: "¿Quién es el protagonista masculino de Only lovers left alive?",
    answers: ["Paul Dano", "Brad Pitt", "Tom Hiddleston"],
    rightAnswer: 2,
  },
  {
    question: "¿Quién es la protagonista femenina de Only lovers left alive?",
    answers: ["Helen Mirren", "Rosamund Pike", "Tilda Swinton"],
    rightAnswer: 2,
  },
  {
    question:
      "Si digo Volkswagen amarilla, Paul Dano, Steve Carrell...¿de qué hablo?",
    answers: ["28 days", "Little Miss Sunshine", "Love Actually"],
    rightAnswer: 1,
  },
  {
    question: "¿Qué comedia estrenó Daniel Sánchez Arévalo en 2011?",
    answers: ["Volver", "A cambio de nada", "Primos"],
    rightAnswer: 2,
  },
  {
    question: "¿Qué título ganó el Goya a mejor película en 1989",
    answers: [
      "Diario de invierno",
      "Mujeres al borde de un ataque de nervios",
      "Remando al viento",
    ],
    rightAnswer: 1,
  },
  {
    question: "¿Cuál de estas películas es indispensable?",
    answers: [
      "What we did on our holiday",
      "No What we did on our holiday",
      "No What we did on our holiday",
    ],
    rightAnswer: 0,
  },
];


// let contador = 0;

// let phase = `
//              <article>
//      <p> ${preguntas[contador].question} </p>
//         <div class="respuestas">
//         <p class="answer" id="first" onclick= "change(0)">${preguntas[contador].answers[0]}</a>
//         <p class="answer" id="second" onclick= "change(1)">${preguntas[contador].answers[1]}</a>
//         <p class="answer" id="third" onclick= "change(2)">${preguntas[contador].answers[2]}</a>
//         </div>
//      </article>
//             `;


// document.getElementById("question").innerHTML = phase;
// let aciertos = 0;




// function change(respuestaUsuario) {
//   if (respuestaUsuario === preguntas[contador].rightAnswer) {
//     // alert("Bien");
//     aciertos++;
//     console.log(aciertos)
//   }
//   // else {
//   //   alert("Fallaste")
//   // }
//   if (contador < 9) {
//     contador++;
//     phase = `
//   <article>

// </article>
//  `;
//     document.getElementById("question").innerHTML = phase;



//   }
//   else {
//     let final = `
//     <section id= "final">
//     <article>
//       <p>${aciertos} ACIERTOS</p>

//     </article>

//     <a href="questions.html"> Start again</a>
//     </section>
// `;
//     document.getElementById("question").innerHTML = final;
//     // window.location.href = "end.html"
//   }
// }
//disorder = [[],[],[],[],[]]

let aciertos = 0;
let counter = 0;
let container = document.getElementById("question");
let questions1 = [];
let randomNum;
function desordenar(zapato, rand) {

  let disorder = [...zapato.incorrect_answers]


  disorder.splice(rand, 1, zapato.correct_answer)

  return disorder
}
fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
  .then(response => response.json())
  .then(triviaData => {
    triviaData.results.map((n) => {
      randomNum = Math.floor(Math.random() * 3);
      console.log(randomNum)
      questions1.push({ "question": n.question, "answers": desordenar(n, randomNum), "rightAnswer": randomNum })


    })
    console.log(questions1)
    cambiarScreen();

  })



// let disorder = [...triviaData.results[counter].incorrect_answers]
// let randomNum = Math.floor(Math.random() * 3);

// disorder.splice(randomNum, 1, triviaData.results[counter].correct_answer)
function cambiarScreen(respuestaUsuario1) {
  if (respuestaUsuario1 === randomNum) {
    aciertos++;
  }
  let phase = `
             <article>
     <p> ${questions1[counter].question} </p>
        <div class="respuestas">
        <p class="answer" id="first" onclick= "change1(0)">${questions1[counter].answers[0]}</a>
        <p class="answer" id="second" onclick= "change1(1)">${questions1[counter].answers[1]}</a>
        <p class="answer" id="third" onclick= "change1(2)">${questions1[counter].answers[2]}</a>
        </div>
     </article>
            `;
  ;
  container.innerHTML = phase
}

function change1(respuestaUsuario1) {
  if (counter < 9) {
    counter++;
    cambiarScreen();
  }
  else {
    let final = `
          <section id= "final">
          <article>
            <p>${aciertos} ACIERTOS</p>
      
          </article>
      
          <a href="questions.html"> Start again</a>
          </section>
      `;
    document.getElementById("question").innerHTML = final;
    

  }


}

