let heroLvls = document.getElementsByClassName('herolvl');

let avg;
let total = 0;

for(let i = 0; i < heroLvls.length; i++) {
	total = total + heroLvls[i].textContent
	if(i == (heroLvls.length - 1){
		avg = (total/(i+1)).toFixed(1);
	}
}

document.getElementById('avgAnswer').textContent = avg;