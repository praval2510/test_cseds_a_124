function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    // Get values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple redirect to next page (replace 'nextpage.html' with your URL)
    window.location.href = 'nextpage.html';
}