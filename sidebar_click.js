let list = document.querySelectorAll('.list');
for (let i=0; i<list.length; i++){
  list[i].onclick = function(){
    let j = 0;
    while(j < list.length){
      list[j++].className='list';
    }
    list[i].className = 'list active';
  }
}

var bDisplay = true;
function Recruitment(){
  var con = document.getElementById("category1");
  var von = document.getElementById("door")
  if(con.style.display=='none'){
    con.style.display = 'block';
    von.style.display='none';
  }else{
    con.style.display='none';
    von.style.display='block';
  }
}
function door(){
  var con = document.getElementById("category1");
  var von = document.getElementById("door")
  if(von.style.display=='none'){
    von.style.display='block';
    con.style.display='none';
  }
}
