const initState = {
	articles: [],
  tags: []
}

export default function rootReducer(state = initState, action){
	switch(action.type) {
  case 'DISPLAY_ARTICLES':{
    	return {
    		...state,
    		articles: action.articles
    	}
    }
  case 'DISPLAY_POPULAR_TAGS':{
    return {
      ...state,
      tags: action.tags
    }
  }
   default:
    return state;
}
}