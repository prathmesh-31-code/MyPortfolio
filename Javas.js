document.getElementById('send').addEventListener('click', function() {
    const message = document.getElementById('msg').value;
    console.log(message);
    
    // You can also clear the textarea after sending the message
    document.getElementById('msg').value = '';

    // You can add additional functionality here, such as sending the message to a server
});
