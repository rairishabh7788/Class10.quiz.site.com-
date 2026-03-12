const quizzes = {
  maths: [
    { q: "The roots of x² - 5x + 6 = 0 are:", options: ["2 and 3","–2 and –3","1 and 6","0 and 5"], answer: "2 and 3" },
    { q: "Probability of getting a head when a coin is tossed:", options: ["0","1","0.5","2"], answer: "0.5" }
    // ➡️ Add up to 1000 Maths questions here
  ],
  science: [
    { q: "Which organ is the main site of photosynthesis?", options: ["Root","Stem","Leaf","Flower"], answer: "Leaf" },
    { q: "Which enzyme is secreted in saliva?", options: ["Pepsin","Amylase","Lipase","Trypsin"], answer: "Amylase" }
    // ➡️ Add up to 1000 Science questions here
  ],
  sst: [
    { q: "Who launched the Non-Cooperation Movement in 1920?", options: ["Jawaharlal Nehru","Mahatma Gandhi","Subhash Chandra Bose","Bal Gangadhar Tilak"], answer: "Mahatma Gandhi" }
    // ➡️ Add up to 1000 SST questions here
  ],
  english: [
    { q: "Who is the poet of 'Dust of Snow'?", options: ["Robert Frost","William Wordsworth","John Keats","Rabindranath Tagore"], answer: "Robert Frost" }
    // ➡️ Add up to 1000 English questions here
  ],
  hindi: [
    { q: "‘हरिहर काका’ कविता के कवि कौन हैं?", options: ["नागार्जुन","अज्ञेय","हरिवंश राय बच्चन","सुमित्रानंदन पंत"], answer: "नागार्जुन" }
    // ➡️ Add up to 1000 Hindi questions here
  ]
};

function startQuiz(subject) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  quizzes[subject].forEach((item, index) => {
    const block = document.createElement("div");
    block.innerHTML = `<p>${index+1}. ${item.q}</p>
      ${item.options.map(opt => `<button onclick="checkAnswer('${opt}','${item.answer}')">${opt}</button>`).join("")}`;
    container.appendChild(block);
  });
}

function checkAnswer(selected, correct) {
  alert(selected === correct ? "✅ Correct!" : "❌ Wrong! Correct answer: " + correct);
}