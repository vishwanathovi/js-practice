const URL = 'https://conduit.productionready.io/api';

export function displayArticles(){
	return dispatch => {
		fetch(URL+'/articles').then(response=>{
			return response.json()
		}).then(data=>dispatch({
			type: 'DISPLAY_ARTICLES',
			articles: data.articles
		}))
	}
}

export function displayPopularTags(){
	return dispatch => {
		fetch(URL+'/tags').then(response=>{
			return response.json()
		}).then(data=>dispatch({
			type: 'DISPLAY_POPULAR_TAGS',
			tags: data.tags
		}))
	}
}


// export default function fetchHarvard() {
// 	return dispatch => {
// 		return fetch('https://api.harvardartmuseums.org/object?apikey=56983d80-10df-11e9-bcad-2fc2bfa7450c&size=10&sort=random')
// 					.then(response => response.json())
// 					.then(json=> dispatch({
// 						type: "FETCH_DATA",
// 						json: json.records
// 					}))
// 	}
// }