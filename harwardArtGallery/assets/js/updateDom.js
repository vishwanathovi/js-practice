var artImageSection = dq(".art-image")

function updateDom(){
	dq('.wait-spinner').style.display = "none";
	var records = objectList.records.filter((record)=>record.primaryimageurl);
	artImageSection.setAttribute('src', preloadArray[selectRecordIndex].src);
	for (key in records[selectRecordIndex]){
		var detailSec = dq(`.${key}`);
		if (detailSec){
			if (!records[selectRecordIndex][key]){
				detailSec.textContent = "Not Available";
				continue;
			}
			detailSec.textContent = records[selectRecordIndex][key];
		}
	}
		dq('.art-main-section').style.display = "grid";
}

function updateCategoryUl(){
	var categoryUl = dq('.category-select');
	var liList = `<option value="default">Category</option>`;
	for (item of buckets){
		liList += `<option value="${item.key}">${item.key}</option>`
	}
	categoryUl.innerHTML = liList;	
}

function updateCenturyUl(selectedCategory){
	var centuryUl = dq('.century-select');
	var liList = `<option value="default">Century</option>`;
	if (selectedCategory!='default'){
		var selectedCategoryObject = buckets.filter((item)=>item.key==selectedCategory)[0]
		for (item of selectedCategoryObject.by_century["buckets"]){	
			liList += `<option value="${item.key}">${item.key}</option>`;
		}
	} else {
		var yearList = [];
		for (category of buckets){
			// console.log(category)
			for (year of category.by_century["buckets"]){
				yearList.push(year.key);
			}
		}
		yearList = yearList.filter((item,index,array)=>array.indexOf(item)==index);
		for (item of yearList){
			liList += `<option value="${item}">${item}</option>`;
		}
	}
	centuryUl.innerHTML = liList;
}


function clearDom(){
	artImageSection.src = "#";
	dq('.art-main-section').style.display = "none";
	dq('.wait-spinner').style.display = "block";
	for (key in records[selectRecordIndex]){
		var detailSec = dq(`.${key}`);
		if (detailSec){
			detailSec.textContent = "";
		}
	}
	dq('.no-item-display').style.display = "none";
	return new Promise((resolve,reject)=>{resolve();})
}

function checkValidityAndDisplay(){
	dq('.left-move').style.display = selectRecordIndex? "block": "none";
	dq('.right-move').style.display = selectRecordIndex==records.length-1? "none": "block";
}