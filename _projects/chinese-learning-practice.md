---
layout: page
title: Chinese Learning Practice
description: Aug 2025
img: assets/img/chinese_practice.png
importance: 3
category: Electromechanical
related_publications: false
---



<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
    
    .chinese-text {
        font-family: 'Noto Sans', 'Arial Unicode MS', Arial, sans-serif;
        font-weight: 400 !important;
        font-synthesis: none; /* Prevents browser from artificially bolding */
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-weight: 500;
        color: #374151;
        margin-bottom: 6px;
        font-size: 14px;
    }

    /* Enhanced Select Dropdown */
    select {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 16px;
        background: white;
        color: #374151;
        transition: all 0.2s ease;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 12px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 44px;
    }

    select:hover {
        border-color: #9ca3af;
    }

    select:focus {
        outline: none;
        border-color: var(--global-theme-color);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    /* Enhanced Text Input */
    input[type="text"] {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 16px;
        color: #374151;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    input[type="text"]:hover {
        border-color: #9ca3af;
    }

    input[type="text"]:focus {
        outline: none;
        border-color: var(--global-theme-color);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    input[type="text"]::placeholder {
        color: #9ca3af;
    }

    .generate-btn {
        width: 100%;
        padding: 14px 24px;
        background: #e28ede;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-top: 8px;
        margin-bottom: 20px;
    }

    .generate-btn:hover {
        background: #ee85e9;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    .generate-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(59, 130, 246, 0.4);
    }

    .generate-btn:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }

    /* Optional: Add a subtle loading state */
    .generate-btn.loading {
        background: #9ca3af;
        cursor: not-allowed;
        position: relative;
    }

    .generate-btn.loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        margin: auto;
        border: 2px solid transparent;
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .generate-btn.loading .btn-text {
        opacity: 0;
    }

    /* This is to animate the spinning circle during loading */
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
</style>


<div class="form-group">
    <label for="difficulty-select">Difficulty:</label>
    <select id="difficulty-select">
        <option value="beginner">Beginner</option>
        <option value="beginner-intermediate">Beginner-Intermediate</option>
        <option value="intermediate">Intermediate</option>
        <option value="intermediate-advanced" selected>Intermediate-Advanced</option>
        <option value="advanced">Advanced</option>
    </select>
</div>

<div class="form-group">
    <label for="subject-input">Subject (optional):</label>
    <input type="text" maxlength="60" id="subject-input" placeholder="e.g., food, traveling, cooking..." />
</div>

<button class="generate-btn" id="generate-btn">
    <span class="btn-text">Generate Sentences</span>
</button>

<div id="output"></div>


<!-- You can show the prompt fed to the api by using this code: <div>Prompt: ${data.prompt_sent_to_api}</div> -->
<script>
    async function generateSentence(difficulty = 'intermediate', subject = '') {
        try {
            console.log(`Generating ${difficulty} sentences about: ${subject || 'a computer-generated topic'}`);
            const response = await fetch('https://deepseek-backend-zeta.vercel.app/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    difficulty: difficulty,
                    subject: subject
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(`Data received from API: `, data);
            return data;
        } catch (error) {
            console.error(`Error generating ${difficulty} sentence:`, error);
            return { sentence: `Error: ${error.message}` };
        }
    }

    function getSelectedDifficulty() {
        const dropdown = document.getElementById("difficulty-select");
        return dropdown.value;
    }

    function getSubject() {
        const subjectInput = document.getElementById("subject-input");
        return subjectInput.value.trim();
    }

    // Add subtle form interactions
    document.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.005)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        element.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    const button = document.getElementById("generate-btn");
    button.addEventListener("click", async () => {
        console.log('Generate button clicked!');
        button.classList.add('loading');
        button.disabled = true;
        
        const selectedDifficulty = getSelectedDifficulty();
        const subject = getSubject();
        
        console.log('Selected difficulty:', selectedDifficulty);
        console.log('Selected subject:', subject || 'none');
        
        // Show loading state
        const subjectDisplay = subject ? ` about "${subject}"` : '';
        // You can use <h3>Generated five sentences${subjectDisplay}:</h3> to describe what sentences are being generated
        document.getElementById("output").innerHTML = `
            <div style="background-color: var(--global-theme-color-light); padding: 10px; border-radius: 5px; margin-top: 10px; border-left: 4px solid var(--global-theme-color);">
                Loading... (this usually takes 20-30 seconds)
            </div>
        `;
        
        try {
            const data = await generateSentence(selectedDifficulty, subject);
            document.getElementById("output").innerHTML = `
                <div class="chinese-text" style="background-color: var(--global-theme-color-light); padding: 10px; border-radius: 5px; margin-top: 10px; border-left: 4px solid var(--global-theme-color); white-space: pre-wrap;">${data.sentence}</div>
            `;
            
        } catch (error) {
            console.error('Error in button handler:', error);
            document.getElementById("output").innerText = 'Error generating sentence';
        }
        button.classList.remove('loading');
        button.disabled = false;
    });

    // Also generate sentences when "Enter" is pressed in the subject input
    document.getElementById("subject-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("generate-btn").click();
        }
    });
</script>






