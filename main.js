// const questions = [
//   "Greetings of the day, say 'Get Started' to proceed",
//   "What is your name?",
//   "What school do you attend?",
//   "How can I help you today?" // Add more questions here
// ];

// const videos = [
//   "video1.mp4",
//   "video2.mp4",
//   "video3.mp4" // Add more videos here
// ];

// let currentQuestionIndex = 0;
// let conversation = document.getElementById("conversation");

// // Call displayQuestion to show the first question on page load
// displayQuestion();

// function startRecording() {
//   document.getElementById("microphone").classList.toggle("recording");

//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(function(stream) {
//       let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
//       recognition.lang = "en-US";

//       recognition.start();

//       recognition.onresult = function(event) {
//         let transcript = event.results[0][0].transcript;
//         displayUserMessage(transcript);
//         processAnswer(transcript);
//       };

//       recognition.onend = function() {
//         document.getElementById("microphone").classList.toggle("recording");
//       };

//       recognition.onerror = function(event) {
//         console.error(event.error);
//       };
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// }

// function displayUserMessage(message) {
//   let userMessage = document.createElement("li");
//   userMessage.classList.add("user-message");
//   userMessage.textContent = "You: " + message;
//   conversation.appendChild(userMessage);
// }

// function processAnswer(answer) {
//   let botMessage = document.createElement("li");
//   botMessage.classList.add("bot-message");

//   // Check the current question and provide a corresponding response
//   switch (currentQuestionIndex) {

//     case 0:
//       botMessage.textContent = answer;
//       currentQuestionIndex++;
//       displayQuestion();

//     case 1:
//       botMessage.textContent = "Nice to meet you, " + answer + "!";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 2:
//       botMessage.textContent = "That's a great school, " + answer + ". ";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 3:
//       // Add logic to handle user requests (optional)
//       botMessage.textContent = "Let me know if you have any questions about these topics: [topic 1], [topic 2], [topic 3]"; // Replace with your specific help topics

//       // Optionally reset conversation after all questions are answered
//       // currentQuestionIndex = 0;
//       break;
//     default:
//       botMessage.textContent = "Sorry, I didn't understand. Can you rephrase that?";
//   }

//   conversation.appendChild(botMessage);
// }

// function displayQuestion() {
//   if (currentQuestionIndex < questions.length) {
//     // Remove previous video if any
//     let previousVideo = document.getElementById("video-element");
//     if (previousVideo) {
//       previousVideo.remove();
//     }

//     let videoQuestionContainer = document.createElement("li");

//     // Create video element
//     let videoElement = document.createElement("video");
//     videoElement.id = "video-element";
//     videoElement.src = videos[currentQuestionIndex];
//     videoElement.controls = true;
//     videoElement.autoplay = true;
//     videoElement.muted = true;
//     videoElement.style.width = "80%";
//     videoElement.style.maxWidth = "800px";

//     // Add event listener to unmute the video when it's loaded
//     videoElement.addEventListener("loadedmetadata", function() {
//       videoElement.muted = false;
//     });

//     // Append video to the container
//     videoQuestionContainer.appendChild(videoElement);

//     // Create question bubble
//     let questionBubble = document.createElement("li");
//     questionBubble.textContent = questions[currentQuestionIndex];

//     // Append question to the container
//     videoQuestionContainer.appendChild(questionBubble);

//     // Append container to conversation
//     conversation.appendChild(videoQuestionContainer);
//   }
// }


// const questions = [
//   "Greetings of the day, say 'Getting Started' to proceed",
//   "What is your name?",
//   "What school do you attend?",
//   "How can I help you today?" 
// ];

// const videos = [
//   "video1.mp4",
//   "video2.mp4",
//   "video3.mp4" // Add more videos here
// ];

// let currentQuestionIndex = 0;
// let conversation = document.getElementById("conversation");

// // Call displayQuestion to show the first question on page load
// displayQuestion();

// function startRecording() {
//   document.getElementById("microphone").classList.toggle("recording");

//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(function(stream) {
//       let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
//       recognition.lang = "en-US";

//       recognition.start();

//       recognition.onresult = function(event) {
//         let transcript = event.results[0][0].transcript;
//         displayUserMessage(transcript);
//         processAnswer(transcript);
//       };

//       recognition.onend = function() {
//         document.getElementById("microphone").classList.toggle("recording");
//       };

//       recognition.onerror = function(event) {
//         console.error(event.error);
//       };
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// }

// function displayUserMessage(message) {
//   let userMessage = document.createElement("li");
//   userMessage.classList.add("user-message");
//   userMessage.textContent = "You: " + message;
//   conversation.appendChild(userMessage);
// }

// function processAnswer(answer) {
//   let botMessage = document.createElement("li");
//   botMessage.classList.add("bot-message");

//   // Check the current question and provide a corresponding response
//   switch (currentQuestionIndex) {
//     case 0:
//       botMessage.textContent = "Getting Started";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 1:
//       botMessage.textContent = "Nice to meet you, " + answer + "!";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 2:
//       botMessage.textContent = "That's a great school, " + answer + ". ";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 3:
//       // Add logic to handle user requests (optional)
//       botMessage.textContent = "Let me know if you have any questions about these topics: [topic 1], [topic 2], [topic 3]"; // Replace with your specific help topics
//       // Optionally reset conversation after all questions are answered
//       // currentQuestionIndex = 0;
//       break;
//     default:
//       botMessage.textContent = "Sorry, I didn't understand. Can you rephrase that?";
//   }

//   conversation.appendChild(botMessage);
// }

// function displayQuestion() {
//   if (currentQuestionIndex < questions.length) {
//     // Remove previous video if any
//     let previousVideo = document.getElementById("video-container");
//     if (previousVideo) {
//       previousVideo.remove();
//     }

//     // Create video container
//     let videoContainer = document.createElement("div");
//     videoContainer.id = "video-container";
//     videoContainer.style.display = "flex";
//     videoContainer.style.justifyContent = "center";
//     videoContainer.style.alignItems = "center";

//     // Create video element
//     let videoElement = document.createElement("video");
//     videoElement.id = "video-element";
//     videoElement.src = videos[currentQuestionIndex];
//     videoElement.autoplay = true;
//     videoElement.muted = true;
//     videoElement.style.width = "60%";
//     videoElement.style.height = "auto";

//     // Add event listener to unmute the video when it's loaded
//     videoElement.addEventListener("loadedmetadata", function() {
//       videoElement.muted = false;
//     });

//     // Append video to the container
//     videoContainer.appendChild(videoElement);

//     // Append video container to the conversation
//     conversation.appendChild(videoContainer);

//     // Add a space for readability
//     conversation.appendChild(document.createElement("br"));

//     // Move previous messages below the new question
//     conversation.querySelectorAll("li").forEach((message) => {
//       conversation.appendChild(message);
//     });

//     // Create question bubble
//     let questionBubble = document.createElement("li");
//     questionBubble.classList.add("bot-message");
//     questionBubble.textContent = questions[currentQuestionIndex];

//     // Append question to the conversation
//     conversation.appendChild(questionBubble);
//   }
// }


// const questions = [
//   "Greetings of the day, say 'Getting Started' to proceed",
//   "What is your name?",
//   "Tell me about yourself",
//   "What was was percentage in the last semester?",
//   "Where do you see yourself in the next 5 years?",
//   "Which data structures to used to implement Last In First Out?",
//   "Programming language which is used for statistical analysis and data visualization"
// ];

// const videos = [
//   "1.mp4",
//   "2.mp4",
//   "3.mp4",
//   "4.mp4",
//   "new-5.mp4",
//   "new-6.mp4",
//   "new-7.mp4" // Add more videos here
// ];

// let currentQuestionIndex = 0;
// let conversation = document.getElementById("conversation");
// let csvData = "Question,Answer\n"; // Initialize CSV data with headers

// // Call displayQuestion to show the first question on page load
// displayQuestion();

// function startRecording() {
//   document.getElementById("microphone").classList.toggle("recording");

//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(function(stream) {
//       let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
//       recognition.lang = "en-US";

//       recognition.start();

//       recognition.onresult = function(event) {
//         let transcript = event.results[0][0].transcript;
//         displayUserMessage(transcript);
//         processAnswer(transcript);
//       };

//       recognition.onend = function() {
//         document.getElementById("microphone").classList.toggle("recording");
//       };

//       recognition.onerror = function(event) {
//         console.error(event.error);
//       };
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// }

// function displayUserMessage(message) {
//   let userMessage = document.createElement("li");
//   userMessage.classList.add("user-message");
//   userMessage.textContent = "You: " + message;
//   conversation.appendChild(userMessage);
// }

// function processAnswer(answer) {
//   let botMessage = document.createElement("li");
//   botMessage.classList.add("bot-message");

//   // Store user answer in CSV format
//   const question = questions[currentQuestionIndex];
//   csvData += `"${question}","${answer}"\n`;

//   // Check the current question and provide a corresponding response
//   switch (currentQuestionIndex) {
//     case 0:
//       botMessage.textContent = "Getting Started";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 1:
//       botMessage.textContent = "Nice to meet you, " + answer + "!";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 2:
//       botMessage.textContent = "Intresting insight about you" ;
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 3:
//         botMessage.textContent = "Your percentage was " + answer + ". ";
//         currentQuestionIndex++;
//         displayQuestion();
//         break;
//     case 4:
//           botMessage.textContent = "Interesting answer: " + answer + ". ";
//           currentQuestionIndex++;
//           displayQuestion();
//           break;
//     case 5:
//             botMessage.textContent = "You said " + answer + ". ";
//             currentQuestionIndex++;
//             displayQuestion();
//             break;
//     case 6:
//       botMessage.textContent = "You said " + answer + ". ";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;

//     case 7:
//       // Add logic to handle user requests (optional)
//       botMessage.textContent = "Nice conversaion"; // Replace with your specific help topics
//       // Optionally reset conversation after all questions are answered
//       // currentQuestionIndex = 0;
//       // Uncomment below line to download CSV after the conversation
//       downloadCSV();
//       break;
//     default:
//       botMessage.textContent = "Sorry, I didn't understand. Can you rephrase that?";
//   }

//   conversation.appendChild(botMessage);
// }

// function displayQuestion() {
//   if (currentQuestionIndex < questions.length) {
//     // Remove previous video if any
//     let previousVideo = document.getElementById("video-container");
//     if (previousVideo) {
//       previousVideo.remove();
//     }

//     // Create video container
//     let videoContainer = document.createElement("div");
//     videoContainer.id = "video-container";
//     videoContainer.style.display = "flex";
//     videoContainer.style.justifyContent = "center";
//     videoContainer.style.alignItems = "center";

//     // Create video element
//     let videoElement = document.createElement("video");
//     videoElement.id = "video-element";
//     videoElement.src = videos[currentQuestionIndex];
//     videoElement.autoplay = true;
//     videoElement.muted = true;
//     videoElement.style.width = "60%";
//     videoElement.style.height = "auto";

//     // Add event listener to unmute the video when it's loaded
//     videoElement.addEventListener("loadedmetadata", function() {
//       videoElement.muted = false;
//     });

//     // Append video to the container
//     videoContainer.appendChild(videoElement);

//     // Append video container to the conversation
//     conversation.appendChild(videoContainer);

//     // Add a space for readability
//     conversation.appendChild(document.createElement("br"));

//     // Move previous messages below the new question
//     conversation.querySelectorAll("li").forEach((message) => {
//       conversation.appendChild(message);
//     });

//     // Create question bubble
//     let questionBubble = document.createElement("li");
//     questionBubble.classList.add("bot-message");
//     questionBubble.textContent = questions[currentQuestionIndex];

//     // Append question to the conversation
//     conversation.appendChild(questionBubble);
//   } else {
//     // If all questions are answered, download CSV
//     downloadCSV();
//   }
// }

// function downloadCSV() {
//   const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.setAttribute("href", url);
//   a.setAttribute("download", "conversation.csv");
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// }




// const questions = [
//   "Greetings of the day, say 'Getting Started' to proceed",
//   "What is your name?",
//   "Tell me about yourself",
//   "What was was percentage in the last semester?",
//   "Where do you see yourself in the next 5 years?",
//   "Which data structures to used to implement Last In First Out?",
//   "Programming language which is used for statistical analysis and data visualization"
// ];

// const videos = [
//   "1.mp4",
//   "2.mp4",
//   "3.mp4",
//   "4.mp4",
//   "new-5.mp4",
//   "new-6.mp4",
//   "new-7.mp4" // Add more videos here
// ];

// const noddingVideo = "idle3.mp4"; // Nodding video file

// let currentQuestionIndex = 0;
// let conversation = document.getElementById("conversation");
// let csvData = "Question,Answer\n"; // Initialize CSV data with headers

// // Call displayQuestion to show the first question on page load
// displayQuestion();

// function startRecording() {
//   document.getElementById("microphone").classList.toggle("recording");

//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(function(stream) {
//       let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
//       recognition.lang = "en-US";

//       recognition.start();

//       recognition.onresult = function(event) {
//         let transcript = event.results[0][0].transcript;
//         displayUserMessage(transcript);
//         processAnswer(transcript);
//       };

//       recognition.onend = function() {
//         document.getElementById("microphone").classList.toggle("recording");
//       };

//       recognition.onerror = function(event) {
//         console.error(event.error);
//       };
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// }

// function displayUserMessage(message) {
//   let userMessage = document.createElement("li");
//   userMessage.classList.add("user-message");
//   userMessage.textContent = "You: " + message;
//   conversation.appendChild(userMessage);
// }

// function processAnswer(answer) {
//   let botMessage = document.createElement("li");
//   botMessage.classList.add("bot-message");

//   // Store user answer in CSV format
//   const question = questions[currentQuestionIndex];
//   csvData += `"${question}","${answer}"\n`;

//   // Check the current question and provide a corresponding response
//   switch (currentQuestionIndex) {
//     case 0:
//       botMessage.textContent = "Getting Started";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 1:
//       botMessage.textContent = "Nice to meet you, " + answer + "!";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 2:
//       botMessage.textContent = "Intresting insight about you" ;
//       currentQuestionIndex++;
//       displayQuestion();
//       break;
//     case 3:
//         botMessage.textContent = "Your percentage was " + answer + ". ";
//         currentQuestionIndex++;
//         displayQuestion();
//         break;
//     case 4:
//           botMessage.textContent = "Interesting answer: " + answer + ". ";
//           currentQuestionIndex++;
//           displayQuestion();
//           break;
//     case 5:
//             botMessage.textContent = "You said " + answer + ". ";
//             currentQuestionIndex++;
//             displayQuestion();
//             break;
//     case 6:
//       botMessage.textContent = "You said " + answer + ". ";
//       currentQuestionIndex++;
//       displayQuestion();
//       break;

//     case 7:
//       // Add logic to handle user requests (optional)
//       botMessage.textContent = "Nice conversaion"; // Replace with your specific help topics
//       // Optionally reset conversation after all questions are answered
//       // currentQuestionIndex = 0;
//       // Uncomment below line to download CSV after the conversation
//       downloadCSV();
//       break;
//     default:
//       botMessage.textContent = "Sorry, I didn't understand. Can you rephrase that?";
//   }

//   conversation.appendChild(botMessage);
// }

// function displayQuestion() {
//   if (currentQuestionIndex < questions.length) {
//     // Remove previous video if any
//     let previousVideo = document.getElementById("video-container");
//     if (previousVideo) {
//       previousVideo.remove();
//     }

//     // Create video container
//     let videoContainer = document.createElement("div");
//     videoContainer.id = "video-container";
//     videoContainer.style.display = "flex";
//     videoContainer.style.justifyContent = "center";
//     videoContainer.style.alignItems = "center";

//     // Create video element
//     let videoElement = document.createElement("video");
//     videoElement.id = "video-element";
//     videoElement.src = videos[currentQuestionIndex];
//     videoElement.autoplay = true;
//     videoElement.muted = true;
//     videoElement.style.width = "60%";
//     videoElement.style.height = "auto";

//     // Add event listener to unmute the video when it's loaded
//     videoElement.addEventListener("loadedmetadata", function() {
//       videoElement.muted = false;
//     });

//     // Append video to the container
//     videoContainer.appendChild(videoElement);

//     // Append video container to the conversation
//     conversation.appendChild(videoContainer);

//     // Add a space for readability
//     conversation.appendChild(document.createElement("br"));

//     // Move previous messages below the new question
//     conversation.querySelectorAll("li").forEach((message) => {
//       conversation.appendChild(message);
//     });

//     // Create question bubble
//     let questionBubble = document.createElement("li");
//     questionBubble.classList.add("bot-message");
//     questionBubble.textContent = questions[currentQuestionIndex];

//     // Append question to the conversation
//     conversation.appendChild(questionBubble);

//     // If it's not the last question, play nodding video
//     if (currentQuestionIndex < questions.length - 1) {
//       playNoddingVideo();
//     }
//   } else {
//     // If all questions are answered, download CSV
//     downloadCSV();
//   }
// }

// function playNoddingVideo() {
//   // Create nodding video container
//   let noddingContainer = document.createElement("div");
//   noddingContainer.id = "nodding-container";
//   noddingContainer.style.display = "flex";
//   noddingContainer.style.justifyContent = "center";
//   noddingContainer.style.alignItems = "center";

//   // Create nodding video element
//   let noddingElement = document.createElement("video");
//   noddingElement.id = "nodding-element";
//   noddingElement.src = noddingVideo;
//   noddingElement.autoplay = true;
//   noddingElement.muted = true;
//   noddingElement.loop = true;
//   noddingElement.style.width = "60%";
//   noddingElement.style.height = "auto";

//   // Append nodding video to the container
//   noddingContainer.appendChild(noddingElement);

//   // Append nodding video container to the conversation
//   conversation.appendChild(noddingContainer);
// }

// function downloadCSV() {
//   const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.setAttribute("href", url);
//   a.setAttribute("download", "conversation.csv");
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// }


const questions = [
  "Greetings of the day, say 'Getting Started' to proceed",
  "What is your name?",
  "Tell me about yourself",
  "What was your percentage in the last semester?",
  "Where do you see yourself in the next 5 years?",
  "Which data structures are used to implement Last In First Out?",
  "Which programming language is used for statistical analysis and data visualization?"
];

const videos = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "new-5.mp4",
  "new-6.mp4",
  "new-7.mp4" // Add more videos here
];

const idleVideo = "idle3.mp4"; // Idle video file

let currentQuestionIndex = 0;
let conversation = document.getElementById("conversation");
let csvData = "Question,Answer\n"; // Initialize CSV data with headers
let idleTimeout;

// Call displayQuestion to show the first question on page load
displayQuestion();

function startRecording() {
  document.getElementById("microphone").classList.toggle("recording");

  // Clear the idle timeout when user interacts
  clearTimeout(idleTimeout);

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
      recognition.lang = "en-US";

      recognition.start();

      recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        displayUserMessage(transcript);
        processAnswer(transcript);
      };

      recognition.onend = function() {
        document.getElementById("microphone").classList.toggle("recording");
      };

      recognition.onerror = function(event) {
        console.error(event.error);
      };
    })
    .catch(function(err) {
      console.error(err);
    });
}

function displayUserMessage(message) {
  let userMessage = document.createElement("li");
  userMessage.classList.add("user-message");
  userMessage.textContent = "You: " + message;
  conversation.appendChild(userMessage);
}

function processAnswer(answer) {
  let botMessage = document.createElement("li");
  botMessage.classList.add("bot-message");

  // Store user answer in CSV format
  const question = questions[currentQuestionIndex];
  csvData += `"${question}","${answer}"\n`;

  // Check the current question and provide a corresponding response
  switch (currentQuestionIndex) {
    case 0:
      botMessage.textContent = "Getting Started";
      currentQuestionIndex++;
      displayQuestion();
      break;
    case 1:
      botMessage.textContent = "Nice to meet you, " + answer + "!";
      currentQuestionIndex++;
      displayQuestion();
      break;
    case 2:
      botMessage.textContent = "Interesting insight about you" ;
      currentQuestionIndex++;
      displayQuestion();
      break;
    case 3:
        botMessage.textContent = "Your percentage was " + answer + ". ";
        currentQuestionIndex++;
        displayQuestion();
        break;
    case 4:
          botMessage.textContent = "Interesting answer: " + answer + ". ";
          currentQuestionIndex++;
          displayQuestion();
          break;
    case 5:
            botMessage.textContent = "You said " + answer + ". ";
            currentQuestionIndex++;
            displayQuestion();
            break;
    case 6:
      botMessage.textContent = "You said " + answer + ". ";
      currentQuestionIndex++;
      displayQuestion();
      break;
    case 7:
      // Add logic to handle user requests (optional)
      botMessage.textContent = "Nice conversation"; // Replace with your specific help topics
      // Optionally reset conversation after all questions are answered
      // currentQuestionIndex = 0;
      // Uncomment below line to download CSV after the conversation
      downloadCSV();
      break;
    default:
      botMessage.textContent = "Sorry, I didn't understand. Can you rephrase that?";
  }

  conversation.appendChild(botMessage);
}

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    // Remove previous video if any
    let previousVideo = document.getElementById("video-container");
    if (previousVideo) {
      previousVideo.remove();
    }

    // Create video container
    let videoContainer = document.createElement("div");
    videoContainer.id = "video-container";
    videoContainer.style.display = "flex";
    videoContainer.style.justifyContent = "center";
    videoContainer.style.alignItems = "center";

    // Create video element for question
    let videoElement = document.createElement("video");
    videoElement.id = "video-element";
    videoElement.src = videos[currentQuestionIndex];
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.style.width = "60%";
    videoElement.style.height = "auto";

    // Add event listener to unmute the video when it's loaded
    videoElement.addEventListener("loadedmetadata", function() {
      videoElement.muted = false;
    });

    // Append question video to the container
    videoContainer.appendChild(videoElement);

    // If it's not the last question, play idle video after a delay
    if (currentQuestionIndex < questions.length - 1) {
      idleTimeout = setTimeout(function() {
        playIdleVideo();
      }, 22000); // Adjust the delay as needed (in milliseconds)
    }

    // Append video container to the conversation
    conversation.appendChild(videoContainer);

    // Add a space for readability
    conversation.appendChild(document.createElement("br"));

    // Move previous messages below the new question
    conversation.querySelectorAll("li").forEach((message) => {
      conversation.appendChild(message);
    });

    // Create question bubble
    let questionBubble = document.createElement("li");
    questionBubble.classList.add("bot-message");
    questionBubble.textContent = questions[currentQuestionIndex];

    // Append question to the conversation
    conversation.appendChild(questionBubble);
  } else {
    // If all questions are answered, download CSV
    downloadCSV();
  }
}

function playIdleVideo() {
  // Remove previous video if any
  let previousVideo = document.getElementById("video-container");
  if (previousVideo) {
    previousVideo.remove();
  }

  // Create idle video container
  let idleContainer = document.createElement("div");
  idleContainer.id = "video-container";
  idleContainer.style.display = "flex";
  idleContainer.style.justifyContent = "center";
  idleContainer.style.alignItems = "center";

  // Create idle video element
  let idleElement = document.createElement("video");
  idleElement.id = "video-element";
  idleElement.src = idleVideo;
  idleElement.autoplay = true;
  idleElement.loop = true;
  idleElement.muted = true;
  idleElement.style.width = "60%";
  idleElement.style.height = "auto";

  // Append idle video to the container
  idleContainer.appendChild(idleElement);

  // Append idle video container to the conversation
  conversation.appendChild(idleContainer);

  // Add a space for readability
  conversation.appendChild(document.createElement("br"));

  // Move previous messages below the idle video
  conversation.querySelectorAll("li").forEach((message) => {
    conversation.appendChild(message);
  });
}

function downloadCSV() {
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "conversation.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
