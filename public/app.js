// AI Resume Optimizer Application Frontend Code

// Functionality to switch tabs
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// Functionality to handle resume upload
document.getElementById('uploadResume').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const resumeContent = e.target.result;
        // Load resume content into the textarea
        document.getElementById('resumeTextarea').value = resumeContent;
        // Save resume to localStorage
        localStorage.setItem('savedResume', resumeContent);
    };
    reader.readAsText(file);
});

// Functionality to analyze job description
function analyzeJobDescription(jobDescription) {
    // Placeholder for analysis logic
    console.log('Analyzing job description:', jobDescription);
    // Return mock results for demonstration
    return ['Keyword 1', 'Keyword 2'];
}

// Functionality to optimize the resume
function optimizeResume() {
    const resume = document.getElementById('resumeTextarea').value;
    const jobDescription = document.getElementById('jobDescriptionTextarea').value;
    const analysisResults = analyzeJobDescription(jobDescription);
    // Placeholder for optimization logic that adjusts the resume
    console.log('Optimizing resume based on:', analysisResults);
}

// LocalStorage functionality to load saved resume
window.onload = function() {
    const savedResume = localStorage.getItem('savedResume');
    if (savedResume) {
        document.getElementById('resumeTextarea').value = savedResume;
    }
};

// Event listener for optimization button
document.getElementById('optimizeButton').addEventListener('click', optimizeResume);