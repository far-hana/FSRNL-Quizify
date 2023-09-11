const readlineSync = require("readline-sync");
const kuler = require("kuler");
const database = {
  category: [
    {
      name: "Basics",
      data: [
        {
          question: `In how many ways variable can be declared in Javascript?`,
          options: {
            a: "One",
            b: "Three",
            c: "Infinite",
            d: "four",
          },
          correctAnswer: "b",
        },
        {
          question: `Is 'apple' and 'Apple' same in Javascript?`,
          options: {
            a: "Yes",
            b: "No",
          },
          correctAnswer: "b",
        },
        {
          question: `If no value is assigned to a variable what data type will it be?`,
          options: {
            a: "undefined",
            b: "null",
            c: "NaN",
            d: "string",
          },
          correctAnswer: "a",
        },
      ],
    },
    {
      name: "Objects",
      data: [
        {
          question: `What is computed property in Javascript?`,
          options: {
            a: "A property whose value is computed by a function.",
            b: "A property that is accessed using a computed value.",
            c: "A property whose name is determined at runtime.",
          },
          correctAnswer: "c",
        },
        {
          question: `Which keyword is used to refer to the current object inside a method of that object?`,
          options: {
            a: "this",
            b: "self",
            c: "obj",
            d: "that",
          },
          correctAnswer: "a",
        },
      ],
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Farhana",
      score: 3,
    },
  ],
};

let score = 0;

const userName = readlineSync.question(kuler("Enter your name - ", "#dc2626"));

function showQuestionsandOptions(database) {
  for (let i = 0; i < database.category.length; i++) {
    console.log(`${i + 1} - ${database.category[i].name}`);
  }
  const category = readlineSync
    .question(kuler("Enter the category - ", "#ea580c"))
    .toLowerCase();
  for (let i = 0; i < database.category.length; i++) {
    if (category === database.category[i].name.toLowerCase()) {
      console.log(
        kuler(`\nCategory - ${database.category[i].name}`, "#fb923c")
      );
      for (let j = 0; j < database.category[i].data.length; j++) {
        console.log(`\nQ.${j + 1}. ${database.category[i].data[j].question}\n`);
        for (let key in database.category[i].data[j].options) {
          console.log(`${key}. ${database.category[i].data[j].options[key]}`);
        }
        let userAnswer = readlineSync
          .question(kuler("\nEnter your answer as a/b/c/d - ", "#22c55e"))
          .toLowerCase();
        playGame(userAnswer, database.category[i].data[j].correctAnswer);
      }
    }
  }
}

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#064e3b"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#991b1b"));
    console.log(kuler(`Correct answer is ${correctAnswer}`, "#0369a1"));
  }
}

function showLeaderBoard(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedLeaderList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler(`\nCheck your position in Leaderboard`, "#500724"));
  for (let leader of sortedLeaderList) {
    console.log(kuler(`${leader.name} -> score = ${leader.score}`, "#be123c"));
  }
}

showQuestionsandOptions(database);
console.log(kuler(`\nYour score is ${score}\n`, "#4a044e"));
showLeaderBoard(leaderBoard);
