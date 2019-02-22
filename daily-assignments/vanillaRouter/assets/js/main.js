function dq(element){
	return document.querySelector(element)
}
var h1 = dq('h1');

var routes = {
	'/':'home',
	'/about.html':'about',
	'/portfolio.html':'portfolio',
	'/support.html':'support'
}

console.log(location.pathname)

window.addEventListener('popstate', ()=>{
	h1.textContent = `I am ${routes[location.pathname]} page`;
})

dq('.home-btn').addEventListener('click',()=>{home()});
dq('.about-btn').addEventListener('click',()=>{about()});
dq('.portfolio-btn').addEventListener('click',()=>{portfolio()});
dq('.support-btn').addEventListener('click',()=>{support()});

function home(){
	h1.textContent = `I am home page`;
	history.pushState({state:"home"}, "index", "/");
}

function about(){
	h1.textContent = `I am about page`;
	history.pushState({state:"about"}, "about", "about.html");
}

function portfolio(){
	h1.textContent = `I am portfolio page`;
	history.pushState({state:"portfolio"}, "portfolio", "portfolio.html");
}

function support(){
	h1.textContent = `I am support page`;
	history.pushState({state:"support"}, "support", "support.html");
}