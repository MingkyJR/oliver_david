function selectedControl(){
  const el = document.getElementById('fruit');  //select box
  const len = el.options.length; //select box의 option 갯수
  const str = document.getElementById('searchValue').value; //입력 받은 value 값
  //select box의 option 갯수만큼 for문 돌림
  for (let i=0; i<len; i++){  
  	//select box의 option value가 입력 받은 value의 값과 일치할 경우 selected
    if(el.options[i].value == str){
    	el.options[i].selected = true;
    }
  }  
}