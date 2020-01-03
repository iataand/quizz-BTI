const quizQuestion = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const radioa = document.getElementById('radio1');
const radiob = document.getElementById('radio2');
const radioc = document.getElementById('radio3');
const radiod = document.getElementById('radio4');
const button = document.getElementById('button');
const radios = document.getElementById('radios');
let currentQuestionIndex = 0;
let correctQuestions = 0;

const questions = [{
    question: "1. Care este prima proprietate a entropiei?",
    answers: {
      a: "H(p1, p2,..., pn) >= 0",
      b: "H(p1, p2,..., pn) = 0",
      c: "H(Y/X) <= H(Y)",
      d: "H(X x Y <= H(X) - H(Y)"
    },
    correctAnswer: "a"
  },
  {
    question: "2. Cum se numeste mediul prin care se propaga semnalele purtatoare de informatie de la sursa de receptie?",
    answers: {
      a: "Drumul de parcurgere",
      b: "Calea de transmisie",
      c: "Canalul sitemului de informatii",
      d: "Drumul de receptie"
    },
    correctAnswer: "c"
  },
  {
    question: "3. Echivocatia este: ",
    answers: {
      a: "Masura echivocului care exista in campul de I/, camd se cunoaste campul din E/",
      b: "Masura incertitudinii campului de /E, cand se cunoaste campul de I/",
      c: "Informatia transmisa prin canal",
      d: "Niciuna din variantele de mai sus"
    },
    correctAnswer: "a"
  },
  {
    question: "4. Ce este capacitatea codului?",
    answers: {
      a: "Totaliatea cuvintelor ce formeaza un cod",
      b: "Marimea complementara a eficientei",
      c: "Raportul dintre lungimea medie minima si lungimea medie a unui cuvant de cod",
      d: "Valoare maxima e entropiei alfabetului"
    },
    correctAnswer: "d"
  },
  {
    question: "5. Cum se converteste un numar dintr-o baza de numeratie b in zecimala?",
    answers: {
      a: "Se vor aduna toate cifrele in baza respectiva",
      b: "Se va calcula suma produselor dintre cifra corespunzatoare numarului si baza la puterea specifica de pe pozitia acestuia",
      c: "Se va calcula suma produselor puterilor lui 2",
      d: "Se va calcula suma cifrelor de pe pozitii pare, rezultat fiind ridacat la puterea bazei"
    },
    correctAnswer: "b"
  },
  {
    question: "6. Pe cati biti se poate reprezenta orice cifra in baza 8?",
    answers: {
      a: "3",
      b: "2",
      c: "0",
      d: "16"
    },
    correctAnswer: "a"
  },
  {
    question: "7. In cate forme se poate realiza reprezentarea numerelor negative?",
    answers: {
      a: "1",
      b: "3",
      c: "20",
      d: "12"
    },
    correctAnswer: "b"
  },
  {
    question: "8. Care dintre urmatoarele variante reprezinta un numar scris in baza 16?",
    answers: {
      a: "0x11ABBD30",
      b: "111010100000",
      c: "4",
      d: "Nouasprezece"
    },
    correctAnswer: "a"
  },
  {
    question: "9. Pentru a fi complet definita o FB de n variabile trebuie sa fie cunoscuta in cate puncte?",
    answers: {
      a: "n - 1",
      b: "n",
      c: "n la patrat",
      d: "2 la puterea n"
    },
    correctAnswer: "d"
  },
  {
    question: "10. Cum se reprezinta grafic adunarea in schema unui circuit?",
    answers: {
      a: "Printr-o semiluna",
      b: "Printr-un D de tipar",
      c: "Prin semnul +",
      d: "Niciuna din cele de mai sus"
    },
    correctAnswer: "a"
  },
];

function loadHtml(questionNumber) {
  question.innerHTML = questions[questionNumber].question;
  answer1.innerHTML = questions[questionNumber].answers.a;
  answer2.innerHTML = questions[questionNumber].answers.b;
  answer3.innerHTML = questions[questionNumber].answers.c;
  answer4.innerHTML = questions[questionNumber].answers.d;

}
loadHtml(0);


button.addEventListener("click", function () {
  const correctRadio = questions[currentQuestionIndex].correctAnswer;

  switch (correctRadio) {
    case 'a':
      if (radioa.checked)
        correctQuestions++;
      break;
    case 'b':
      if (radiob.checked)
        correctQuestions++;
      break;
    case 'c':
      if (radioc.checked)
        correctQuestions++;
      break;
    case 'd':
      if (radiod.checked)
        correctQuestions++;
  }

  if (currentQuestionIndex < 9)
    loadHtml(++currentQuestionIndex);
  else
    complete();
});

function complete() {
  question.innerHTML = 'Raspunspuri corecte: ' + correctQuestions;
  radios.style.display = "none";
}