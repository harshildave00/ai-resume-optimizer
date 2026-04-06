const axios = require('axios');

const analyzeJobDescription = async (jobDescription) => {
    const apiUrl = 'https://api-inference.huggingface.co/models/your-model'; // Replace with the actual model endpoint
    const apiKey = process.env.HUGGINGFACE_API_KEY; // Make sure to set your Hugging Face API key in your environment variables

    try {
        const response = await axios.post(apiUrl, {
            inputs: jobDescription,
        }, {
            headers: { 'Authorization': `Bearer ${apiKey}` },
        });

        return response.data;
    } catch (error) {
        console.error('Error analyzing job description:', error);
        throw new Error('Failed to analyze job description');
    }
};

exports.handler = async (event) => {
    const { jobDescription } = JSON.parse(event.body);

    if (!jobDescription) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Job description is required' }),
        };
    }

    try {
        const analysisResult = await analyzeJobDescription(jobDescription);
        return {
            statusCode: 200,
            body: JSON.stringify(analysisResult),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};