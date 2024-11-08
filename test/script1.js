function handleSubmit(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
  
    window.location.href = 'nextpage.html';
}