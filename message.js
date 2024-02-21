    function sendMessage() {
      const userInput = document.getElementById('userInput');
      const chatMessages = document.getElementById('chatMessages');

      if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput.value;
        chatMessages.appendChild(userMessage);

        const breakLine =  document.createElement('br');
        chatMessages.appendChild(breakLine);

        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.textContent = 'Bot: Thanks for your message!';
        chatMessages.appendChild(botMessage);

        chatMessages.appendChild(breakLine);

        userInput.value = '';

        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }