var user1;
var user2;

class User{
	constructor(login, avatar_url, name, public_repos, followers, following){
		this.avatar_url = avatar_url;
		this.loginID = login;
		this.name = name;
		this.public_repos = public_repos;
		this.followers = followers;
		this.following = following;

		this.node = this.generateDom()
	}
	generateDom(){
		var mainDom = document.createElement('div');
		for (let key in this){
			if (key == 'avatar_url'){ 
				var domElement = document.createElement('img');
				domElement.setAttribute("src", this.avatar_url)
				mainDom.appendChild(domElement);
				continue;
			}
			var domElement = document.createElement('p');
			domElement.classList.add('field-item')
			// console.log(key)
			domElement.innerHTML = `<span class="field-name">${key}:</span> <span class="field-value">${this[key]}</span>`;
			mainDom.appendChild(domElement)
		}
		return mainDom;
	}
}

function calculateScore(user){	
	return Math.floor(user.public_repos * 0.3) + Math.floor((user.followers - user.following) * 0.4)
}

function fetchData(userName){
	return new Promise((resolve,reject)=>{
		var xml2 = new XMLHttpRequest;
		xml2.open('GET',`https://api.github.com/users/${userName}`)
		xml2.send()
		xml2.addEventListener('load', ()=>{resolve(JSON.parse(xml2.response))})
	})
}
	
document.querySelector('.search-user1-form').addEventListener('submit',(e)=>{
	e.preventDefault();
	var userName = document.querySelector('.search-user1-form #text-input').value;
	fetchData(userName).then((item)=>{
	user1 = new User(item.login, item.avatar_url, item.name, item.public_repos, item.followers, item.following)
	var userSection = document.querySelector('.user1-section');
	userSection.innerHTML = "";
	userSection.appendChild(user1.node);	
})
})

document.querySelector('.search-user2-form').addEventListener('submit',(e)=>{
	e.preventDefault();
	var userName = document.querySelector('.search-user2-form #text-input').value;
	fetchData(userName).then((item)=>{
	user2 = new User(item.login, item.avatar_url, item.name, item.public_repos, item.followers, item.following)
	var userSection = document.querySelector('.user2-section');
	userSection.innerHTML = "";
	userSection.appendChild(user2.node);	
})
})

document.querySelector('.compare-btn').addEventListener('click', ()=>{
	var user1Score = calculateScore(user1);
	var user2Score = calculateScore(user2);
	var resultDom = document.querySelector('.result-text');
	resultDom.textContent = `Winner is ${user1Score>user2Score? user1.name: user2.name}` 
})




