
const form = document.querySelector("#github-form")




const fetchUser = (user) => {
  fetch(`https://api.github.com/search/users?q=${user}`)
    .then((response) => response.json())
    .then((data) => {

        debugger
        console.log(data)
    });
};

const handleSubmit=(e)=>{
    e.preventDefault()
    const user= e.target[0].value
    e.target.reset()
    fetchUser(user)
}

fetchUser()


form.addEventListener("submit", handleSubmit)