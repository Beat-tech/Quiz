


let container= document.getElementById ("question")
let preguntas=[
    {
        "question": "¿En qué año se lanzó The Godfather por primera vez?",
        "answers": [
            "1992",
            "1982",
            "1972"
        ],
        "rightAnswer": 2 
    },
    {
        "question": "¿Qué actriz interpretó a Mary Poppins en la película de 1964 Mary Poppins?",
        "answers": [
            "Julie Andrews",
            "Anne Bancroft",
            "Patricia Neal",
        ],
        "rightAnswer": 0
    },
    {
        "question": "¿Qué actor proporcionó la voz para el personaje de Nemo en la película de 2003 Finding Nemo?",
        "answers": [
            "Robert Downey jr",
            "Alexander Gould",
            "Michael Douglas",
            
        ],
        "rightAnswer": 1
    },
    {
        "question": "¿Cuántos cameos autorreferenciales hizo Alfred Hitchcock en sus películas?",
        "answers": [
            "19",
            "39",
            "8",
            
        ],
        "rightAnswer": 1
    },
   {"question": "¿Quién es el protagonista masculino de Only lovers left alive?",
        "answers": [
            "Paul Dano",
            "Brad Pitt",
            "Tom Hiddleston",
            
        ],
        "rightAnswer": 2
    } ,
    {"question": "¿Quién es la protagonista femenina de Only lovers left alive?",
        "answers": [
            "Helen Mirren",
            "Rosamund Pike",
            "Tilda Swinton",
            
        ],
        "rightAnswer": 2
    } ,
    {"question": "Si digo Volkswagen amarilla, Paul Dano, Steve Carrell...¿de qué hablo?",
    "answers": [
        "28 days",
        "Little Miss Sunshine",
        "Love Actually",
        
    ],
    "rightAnswer": 1
} ,
{"question": "¿Qué comedia estrenó Daniel Sánchez Arévalo en 2011?",
    "answers": [
        "Volver",
        "A cambio de nada",
        "Primos",
        
    ],
    "rightAnswer": 2
} ,
{"question": "¿Qué título ganó el Goya a mejor película en 1989",
    "answers": [
        "Diario de invierno",
        "Mujeres al borde de un ataque de nervios",
        "Remando al viento",
        
    ],
    "rightAnswer": 1
} ,
{"question": "¿Cuál de estas películas es indispensable?",
    "answers": [
        "What we did on our holiday",
        "What we did on our holiday",
        "What we did on our holiday",
        
    ],
    "rightAnswer": 0
} ,

 ]
 console.log (preguntas)
 

 
 let phase = `
             <article>
     <p> ${preguntas.question} </p>
        <nav class="respuestas">
            <a href="questions1.html">"${preguntas.answers}"</a>
            <a href="questions1.html">${preguntas.answers }</a>
            <a href="questions1.html">${preguntas.answers }</a>
        </nav>
     </article>
            `
            console.log (phase)
            
             container.innerHTML += phase
 

//  container.innerHTML += preguntas[0]

// let container = document.getElementById ("questions")
//     fetch(preguntas)
//     .then( response => response.json())
//     .then (rmData=>{
//         console.log (rmData);
//         rmData.results.length = 10
//         rmData.results.map((preguntas)=>{
//             console.log (preguntas)
//             let phase = `
//              <article>
//      <p> ${preguntas.question} </p>
//         <nav class="respuestas">
//             <a href="questions1.html">"${preguntas.answers}"</a>
//             <a href="questions1.html">${preguntas.answers }</a>
//             <a href="questions1.html">${preguntas.answers }</a>
//         </nav>
//      </article>
//             `
//            ;
//             container.innerHTML += phase

//         });
//     })
