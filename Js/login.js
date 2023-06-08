document.getElementById('LoginButton').addEventListener('click', function () {
    const userEmails = document.getElementById('UserEmail')
    const userEmail = userEmails.value;
    const userPass = document.getElementById('iPassword')
    const userPassword = userPass.value;
    if (userEmail === 'admin@admin.com' && userPassword === '123456') {
        window.location.href = "cart.html"
    }
    else {
        alert('Please enter correct Email Id and Password');
    }

    document.getElementById('logIn').addEventListener('click', function () {

        window.location.href = "index.html"
    })
})
