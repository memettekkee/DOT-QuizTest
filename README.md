<div class="w-full prose break-words markdown dark:prose-invert dark"><hr><h1>It's Quizzos 🎯</h1><p>Welcome to <strong>It's Quizzos</strong>, a modern and interactive quiz application built with <strong>React</strong>. This project is designed to be a simple yet functional quiz platform, featuring essential features like user authentication, question APIs, localStorage support, and a stylish UI with smooth transitions and responsiveness. The project is ideal for practicing front-end development and exploring how to build web applications using <strong>React</strong>.</p><h2>🌟 Features</h2><ul><li><strong>User Authentication</strong>: Create and log in to your account to keep track of quiz progress.</li><li><strong>Dynamic Questions</strong>: Fetches questions from an external API to keep the quiz content fresh.</li><li><strong>Progress Save</strong>: Uses <code>localStorage</code> to save your quiz progress, so you can resume where you left off.</li><li><strong>Timer</strong>: A countdown timer adds an extra challenge, keeping users on their toes.</li><li><strong>Interactive Results Page</strong>: View your final score with a breakdown of correct and incorrect answers.</li><li><strong>Responsive Design</strong>: Works seamlessly on mobile, tablet, and desktop devices.</li><li><strong>Smooth Animations</strong>: Subtle animations provide a dynamic and engaging user experience.</li></ul><h2>🛠️ Tech Stack</h2><ul><li><strong>React</strong>: Core library for building the user interface.</li><li><strong>React Router</strong>: For handling routing between different components such as the quiz and result pages.</li><li><strong>Tailwind CSS</strong>: For efficient and responsive styling.</li><li><strong>SweetAlert2</strong>: Aesthetic pop-up modals used for success/error notifications and confirmation prompts.</li><li><strong>LocalStorage API</strong>: To save user progress and keep track of quiz data even if the user leaves the page.</li></ul><h2>🚀 Getting Started</h2><h3>Prerequisites</h3><p>Make sure you have the following tools installed:</p><ul><li><strong>Node.js</strong> (&gt;= 14.x)</li><li><strong>npm</strong> (&gt;= 6.x) or <strong>yarn</strong></li></ul><h3>Installation</h3><ol><li><p>Clone the repository:</p><pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center justify-between px-4 py-2 font-sans text-xs text-token-text-secondary bg-token-main-surface-secondary rounded-t-md h-9"></div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 flex items-center right-2 h-9"><div class="flex items-center px-2 font-sans text-xs rounded bg-token-main-surface-secondary text-token-text-secondary"><span class="" data-state="closed"><button class="flex items-center gap-1 py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg></button></span></div></div></div><div class="p-4 overflow-y-auto" dir="ltr"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/memettekkee/DOT-QuizTest.git
</code></div></div></pre></li><li><p>Navigate to the project directory:</p><pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center justify-between px-4 py-2 font-sans text-xs text-token-text-secondary bg-token-main-surface-secondary rounded-t-md h-9"></div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 flex items-center right-2 h-9"><div class="flex items-center px-2 font-sans text-xs rounded bg-token-main-surface-secondary text-token-text-secondary"><span class="" data-state="closed"><button class="flex items-center gap-1 py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg></button></span></div></div></div><div class="p-4 overflow-y-auto" dir="ltr"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> DOT-QuizTest
</code></div></div></pre></li><li><p>Install the dependencies:</p><pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center justify-between px-4 py-2 font-sans text-xs text-token-text-secondary bg-token-main-surface-secondary rounded-t-md h-9"></div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 flex items-center right-2 h-9"><div class="flex items-center px-2 font-sans text-xs rounded bg-token-main-surface-secondary text-token-text-secondary"><span class="" data-state="closed"><button class="flex items-center gap-1 py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg></button></span></div></div></div><div class="p-4 overflow-y-auto" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm install
</code></div></div></pre></li></ol><h3>Running the Application</h3><p>Start the development server:</p><pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center justify-between px-4 py-2 font-sans text-xs text-token-text-secondary bg-token-main-surface-secondary rounded-t-md h-9"></div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 flex items-center right-2 h-9"><div class="flex items-center px-2 font-sans text-xs rounded bg-token-main-surface-secondary text-token-text-secondary"><span class="" data-state="closed"><button class="flex items-center gap-1 py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg></button></span></div></div></div><div class="p-4 overflow-y-auto" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre><p>The app will be live at <code>http://localhost:3000</code>.</p>

</code></div></div></pre><h3>Key Components</h3><ol><li><strong>Quiz.jsx</strong>: The core component handling the quiz flow, including loading questions, showing the current question, and managing the timer.</li><li><strong>Result.jsx</strong>: Displays the user's score, correct and incorrect answers, and includes a button to retry the quiz or go back to the main menu.</li><li><strong>Navbar.jsx</strong>: A simple navigation bar to move between different sections of the app, such as home, quiz, and results.</li><li><strong>Authentication</strong>: Sign-up and login functionality, storing user credentials and handling user sessions via localStorage.</li></ol><h3>Styling</h3><p>The project uses <strong>Tailwind CSS</strong> for styling, allowing for a streamlined and mobile-responsive design. All the buttons, modals, and transitions have been customized to create a smooth user experience.</p><h3>SweetAlert2 for Pop-Ups</h3><p>We use <strong>SweetAlert2</strong> to show modals like success messages and confirmation dialogs. For example:</p><pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center justify-between px-4 py-2 font-sans text-xs text-token-text-secondary bg-token-main-surface-secondary rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 flex items-center right-2 h-9"><div class="flex items-center px-2 font-sans text-xs rounded bg-token-main-surface-secondary text-token-text-secondary"><span class="" data-state="closed"><button class="flex items-center gap-1 py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg></button></span></div></div></div><div class="p-4 overflow-y-auto" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-title class_">Swal</span>.<span class="hljs-title function_">fire</span>({
    <span class="hljs-attr">title</span>: <span class="hljs-string">"Sign Up success!"</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">"success"</span>,
    <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">"OK"</span>,
    <span class="hljs-attr">customClass</span>: {
        <span class="hljs-attr">confirmButton</span>: <span class="hljs-string">'bg-green-500 text-white px-4 py-2 rounded'</span>,
    }
});