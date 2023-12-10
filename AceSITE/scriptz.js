function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = `You: ${userInput.value}`;
        chatBox.appendChild(userMessage);

        // Simulate a response from the chatbot (you can replace this with actual chatbot logic)
        const chatbotMessage = document.createElement('div');
        chatbotMessage.className = 'chatbot-message';
        chatbotMessage.textContent = 'Chatbot: Hello! How can I help you?';
        chatBox.appendChild(chatbotMessage);

        // Clear the input field
        userInput.value = '';

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
