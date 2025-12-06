function sendMessage() {
  let input = document.getElementById("userInput").value;
  if (!input) return;

  const chat = document.getElementById("chatBox");
  chat.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let reply = "Thanks for your message: " + input;

  chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

  document.getElementById("userInput").value = "";
}
