const generateQuestions = (inputText) => {
    // Function to generate clarifying questions based on the input text
    const questions = [];
    if (!inputText) {
        throw new Error('Input text is required.');
    }

    // Example question generation
    questions.push(`Can you clarify what you mean by '${inputText}'?`);
    questions.push(`Could you provide more details on '${inputText}'?`);
    questions.push(`What do you specifically want to know about '${inputText}'?`);

    return questions;
};

// Exporting the function for serverless use
module.exports = { generateQuestions };