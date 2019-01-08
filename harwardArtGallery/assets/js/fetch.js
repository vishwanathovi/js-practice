function fetchData(size=20){
	return new Promise((resolve,reject)=>{
		var xml2 = new XMLHttpRequest;
		var queryString = "apikey=56983d80-10df-11e9-bcad-2fc2bfa7450c" +
		"&sort=random" +
		// "&sortorder=desc" +
		"&fields=info,century,images,people,description,primaryimageurl,dated,url,culture,department,title,division,classification" +
		// "&size=10" +
		`&size=${size}` +
		`${(selectedCategory!='default')? '&classification='+selectedCategory:'' }` +
		`${(selectedCentury!='default')? '&century='+selectedCentury:'' }`

		console.log(queryString)	
		xml2.open('GET',`https://api.harvardartmuseums.org/object?${queryString}`)
		xml2.send()
		console.log('request sent!')
		xml2.onerror = (item)=>{ console.log('Error!!!!')};
		xml2.addEventListener('load', ()=>{
			if (xml2.status==200){
				objectList = JSON.parse(xml2.response);
				records = objectList.records.filter((record)=>record.primaryimageurl);
				resolve()
			} else {
				reject("Data not found!")
			}
		})
	})
}