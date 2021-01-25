
const form = document.querySelector("#github-form")
const ul = document.querySelector("#user-list")
const repos = document.querySelector("#repos-list")
const user = document.querySelector("#user")
const repo = document.querySelector("#repo")



const fetchUser = (user) => {
  fetch(`https://api.github.com/search/users?q=${user}`)
    .then((response) => response.json())
    .then((data) => {
        const name = data.items[0].login
        const li = document.createElement('li')
        li.addEventListener("click", fetchRepo)
        li.innerText = name
        ul.append(li)
    });
};

const fetchRepo = (e)=>{
    fetch(`https://api.github.com/users/${e}/repos`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            const li = document.createElement('li')
            li.innerText = element.name
            repos.append(li)
            // debugger

        });
        
    });
    // debugger
}

const handleSubmit=(e)=>{
    // e.preventDefault()
    debugger
    const user= e.target[0].value
    e.target.reset()
    
    fetchUser(user)
}

// fetchUser()


user.addEventListener("click", (e)=>{
    e.preventDefault()
    const user = e.target.previousElementSibling.value
    fetchUser(user)
})

repo.addEventListener("click", (e)=>{
    e.preventDefault()
    // debugger
    const user = e.target.previousSibling.previousSibling.previousElementSibling.value
    fetchRepo(user)
})