var user1, user2;

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
			domElement.innerHTML = `<span class="field-name">${key}:</span> <span class="field-value">${this[key]}</span>`;
			mainDom.appendChild(domElement)
		}
		return mainDom;
	}
}

function calculateScore(user){	
	return Math.floor(user.public_repos * 3) + Math.floor((user.followers - user.following) * 4)
}

function fetchData(userName){
	return new Promise((resolve,reject)=>{
		var xml2 = new XMLHttpRequest;
		xml2.open('GET',`https://api.github.com/users/${userName}`)
		xml2.send()	
		console.log('request sent!')
		xml2.onerror = ()=>{ console.log('Error!!!!')};
		xml2.addEventListener('load', ()=>{
			if (xml2.status==200){
				resolve(JSON.parse(xml2.response))
			} else {
				reject("User not found!")
			}
		})
	})
}

function handleUserFetch(e){
	var userID = e.target.classList[0].split('-')[1];
	var userSection = document.querySelector(`.${userID}-section`);
	var userName = document.querySelector(`.search-${userID}-form #text-input`).value;
	fetchData(userName).then((item)=>{
		document.querySelector(`.${userID}-score`).textContent =  ""; 
		window[userID] = new User(item.login, item.avatar_url, item.name, item.public_repos, item.followers, item.following)
		userSection.innerHTML = "";
		userSection.style.display = 'block';
		userSection.appendChild(window[userID].node);	
	}, (message)=>{ 
		userSection.innerHTML = "";
		document.querySelector(`.${userID}-score`).textContent =  message 
	})
}

document.querySelector('.search-user1-form').addEventListener('submit',(e)=>{
	e.preventDefault();	
	handleUserFetch(e);
})

document.querySelector('.search-user2-form').addEventListener('submit',(e)=>{
	e.preventDefault();
	handleUserFetch(e);
})
	
document.querySelector('.compare-btn').addEventListener('click', ()=>{
	var resultDom = document.querySelector('.result-text');
	var user1section = document.querySelector('.user1-section'); 
	var user2section = document.querySelector('.user2-section'); 

	if (!user1 || !user2){ resultDom.textContent = "Select both the players!!"; return;}

	var user1Score = calculateScore(user1), user2Score = calculateScore(user2);

	document.querySelector('.user1-score').textContent = `Score: ${user1Score}`;
	document.querySelector('.user2-score').textContent = `Score: ${user2Score}`;
	resultDom.textContent = `Winner is ${user1Score>user2Score? user1.name: user2.name}`;

	if (user1Score==user2Score){
		resultDom.textContent = "Hurray! Both are winners!!";
		user1section.classList.add("uk-animation-shake")	
		user2section.classList.add("uk-animation-shake")	
	} else if (user1Score>user2Score){
		resultDom.textContent = `Winner is ${user1.name}`;
		user1section.classList.add("uk-animation-shake")
		user1section.classList.add("winner-user")
	} else {
		resultDom.textContent = `Winner is ${user2.name}`;
		user2section.classList.add("uk-animation-shake")	
		user2section.classList.add("winner-user")
	}

})




