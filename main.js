function getGithubProfileInfos(){
  const url = "https://api.github.com/users/deborafranqueta"

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    UserImage.src = data.avatar_url
  })
}

getGithubProfileInfos()