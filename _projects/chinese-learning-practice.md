---
layout: page
title: Chinese Learning Practice
description: Aug 2025
img: assets/img/chinese_practice.png
importance: 3
category: Secret
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
        /* color: #374151; */
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
        color: #000000;
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
        /* box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); */
    }

    /* Enhanced Text Input */
    input[type="text"] {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 16px;
        background: white;
        /* color: #374151; */
        color: #000000;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    input[type="text"]:hover {
        border-color: #9ca3af;
    }

    input[type="text"]:focus {
        outline: none;
        border-color: var(--global-theme-color);
        /* box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); */
    }

    input[type="text"]::placeholder {
        color: #9ca3af;
    }

    .generate-btn {
        width: 100%;
        padding: 14px 24px;
        background: var(--chinese-button-color);
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
        background: var(--chinese-button-hover-color);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px #b8b8b866;
        /* box-shadow: 0 4px 12px #ee85e966; */
    }

    .generate-btn:active {
        transform: translateY(0);
        box-shadow: 0 4px 12px #b8b8b866;
    }

    .generate-btn:focus {
        outline: none;
        box-shadow: 0 4px 12px #b8b8b866;
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
            <div style="background-color: var(--global-theme-color-light); padding: 10px; border-radius: 8px; margin-top: 10px; margin-bottom: 40px; border-left: 4px solid var(--global-theme-color);">
                Loading... (this usually takes 20-30 seconds)
            </div>
        `;
        
        try {
            const data = await generateSentence(selectedDifficulty, subject);
            document.getElementById("output").innerHTML = `
                <div class="chinese-text" style="background-color: var(--global-theme-color-light); padding: 10px; border-radius: 8px; margin-top: 10px; margin-bottom: 40px; border-left: 4px solid var(--global-theme-color); white-space: pre-wrap;">${data.sentence}</div>
            `;
            const api_prompt = `The prompt used to generate the sentences above is:<br><i>${data.prompt_sent_to_api}</i>`;
            document.getElementById("prompt").innerHTML = `
                <div>${api_prompt}</div>
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



<style>
    /* Minimal dropdown - inherits all your existing styles */
    .native-section {
        margin: 1em 0; /* Same as your paragraphs */
        margin-top: 40px;
    }

    .native-header {
        background: transparent;
        border: none;
        border-top: 1px solid #ddd;    /* Line above */
        border-bottom: 1px solid #ddd; /* Line below */
        width: 100%;
        padding: 12px 16px;
        text-align: left;
        cursor: pointer;
        font-family: inherit; /* Uses your website's font */
        font-size: inherit;   /* Uses your website's font size */
        color: inherit;       /* Uses your website's text color */
        display: flex;
        align-items: center;
        gap: 8px;
        /* transition: background-color 0.2s ease; */
        transition: border-color 0.2s ease;
        border-radius: 0px; /* Subtle rounding, remove if you prefer sharp corners */
    }

    .native-header:hover {
        /* background: #e9ecef; */
        border-top-color: #999;
        border-bottom-color: #999;
    }

    .native-header:focus {
        outline: 2px solid var(--global-theme-color);
        outline-offset: 2px;
    }

    /* Simple triangle indicator */
    .native-toggle {
        width: 0;
        height: 0;
        border-left: 5px solid currentColor; /* Uses text color */
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        transition: transform 0.2s ease;
        margin-right: 4px;
    }

    .native-header[aria-expanded="true"] .native-toggle {
        transform: rotate(90deg);
    }

    /* Content - completely unstyled to inherit your site's styles */
    .native-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }

    .native-content.open {
        max-height: 800px;
    }

    .native-text {
        /* NO padding, borders, or styling - just inherits everything */
        margin-top: 1em; /* Same spacing as your paragraphs */
    }
</style>


<div class="native-section">
    <button class="native-header" aria-expanded="false" onclick="toggleSection('native1')" id="native1-toggle">
        <span class="native-toggle"></span>
        <span>More Information</span>
    </button>
    <div class="native-content" id="native1-content">
        <div class="native-text">
            <p id="prompt"></p>
            <p>
            Around one year ago, I decided to try learning Chinese again. I have had a long history of trying to learn other languages (Spanish, German, and Chinese), but I always seemed to stop short of reaching fluency. I would learn enough of the language to do well in the classroom and to get by when talking to native speakers, but not enough to fully understand conversations between native speakers.
            </p>
            <p>
            I eventually came to the conclusion that learning more vocabulary was key. While circumlocution (such as saying "thing that makes light" if I don't know the word for "lightbulb") is useful, my limited vocabulary made it difficult to speak efficiently and understand native speakers. I think a big reason why I felt like I was hitting a wall when I tried to go from being able to get by to being able to speak fluently was because the amount of vocabulary I needed to learn was increasing exponentially. This is reflected in the Chinese HSK system, which groups Chinese words into six levels based on their frequency of use. The 150 most common Chinese words are contained in HSK 1, HSK 2 introduces 150 of the next most common Chinese words, HSK 3 introduces 300 more words, and so on until HSK 6, which introduces 2500 more words. It's worth noting that the words in HSK 6 are words like "instinct," "ambition," and "specialty"—words that aren't used in every sentence but will almost certainly show up in a moderate conversation.
            </p>
            <p>
            For this reason, I set up some Anki decks to help me learn all the Chinese HSK vocabulary. I started between HSK 2 and 3 and started learning HSK 6 a few months ago. With this approach, I was finally able to make real progress in my Chinese (this was the 4th time I had tried learning Chinese beyond what I had learned in elementary school). I noticed that I was able to read much more of the Chinese on packages and instruction manuals I encountered, and I even began to understand Chinese shows like <a href="https://en.wikipedia.org/wiki/Journey_to_the_West:_Legends_of_the_Monkey_King">the Monkey King</a>, which I couldn't understand when I was younger.
            </p>
            <p>
            However, I recently realized that my ability to speak was lagging far behind my improving ability to listen and read. Whenever I tried to translate an English sentence to Chinese, I often knew the Chinese words corresponding to the English words but I didn't know how to put them together. For this reason, I created this sentence generator. Since each sentence contains the Chinese, Pinyin, and English, I can practice both translating Chinese to English and English to Chinese. I chose to use Deepseek to generate the sentences because I believed that Deepseek, being a Chinese LLM, would produce more accurate Chinese sentences than ChatGPT or Google Translate.
            </p>
            <p>
            In order to focus the sentences on topics I wanted to learn more words about, when the user doesn't specify a subject, the program automatically chooses subjects and styles to spice up the output sentences. I wanted to see what it was like to write an LLM wrapper. API call to Deepseek. Took less than a day to figure out how to use the deepseek api and generate sentences on my website. After that, I spent a few more days polishing up the program, and most of that time was spent making the UI prettier. The sentences take >20 seconds to load because that's the time it takes Deepseek to generate the sentences. Their web interface takes around the same amount of time as the API, but this lag is less noticeable on their web interface because I can see the sentences as they're being generated. I tested ChatGPT's generation time and it also takes them around 20 seconds on their web interface.
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
</div>

<script>
    function toggleSection(sectionId) {
        const button = document.getElementById(sectionId + '-toggle');
        const content = document.getElementById(sectionId + '-content');
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        
        button.setAttribute('aria-expanded', !isOpen);
        
        if (isOpen) {
            content.classList.remove('open');
        } else {
            content.classList.add('open');
        }
    }

    // Keyboard support
    document.querySelectorAll('[id$="-toggle"]').forEach(button => {
        button.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const sectionId = this.id.replace('-toggle', '');
                toggleSection(sectionId);
            }
        });
    });
</script>



