async function loginUser(e){
    e.preventDefault()

    const username = document.querySelector("#loginusername").value.trim()
    const password = document.querySelector("#loginpw").value.trim()

    if (!username || !password) return

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok)document.location.replace('/allposts')
    else alert('Failed to log in.');
}
if (document.querySelector(".loginbtn")) document.querySelector(".loginbtn").addEventListener("click", loginUser)

async function signUp(e){
    e.preventDefault()

    const username = document.querySelector("#username").value.trim()
    const password = document.querySelector("#pw1").value.trim()
    const passwordConfirm = document.querySelector("#pw2").value.trim()

    if (!username || !password || !passwordConfirm) return
    if (password !== passwordConfirm) return alert('Passwords do not match')

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application.json'}
    })
    if (response.ok) document.location.replace('/allposts')
    else alert('Failed to sign up.')
}
if (document.querySelector(".signupbtn")) document.querySelector(".signupbtn").addEventListener("click", signUp)

async function logOut(e){
    e.preventDefault()

    const response = await fetch('/api/users/logout', {
        method: 'POST'
    })

    if(response.ok) document.location.replace('/allposts')
    else alert('Logout failed somehow.')
}
if (document.querySelector(".logout")) document.querySelector(".logout").addEventListener("click", logOut)
