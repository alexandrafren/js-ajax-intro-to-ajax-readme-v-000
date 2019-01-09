function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/alexandrafren/repos');
  req.send();
}

function showRepositories(){
  console.log(this.responseText);
}
