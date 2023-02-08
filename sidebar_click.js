// 사이드바 각 메뉴 선택시 하얀 배경 유지하는 스크립트
// 이걸로 각 메뉴 선택 이후 나오는 div의 상단 버튼들도 색상 변경을 해야하는데
// 이 스크립트의 내용을 이해하지 못해서 지정하지 못함.
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

// 아래의 스크립트를 간결하게 할 수 있을 것 같은데....
// 채용 및 모집 클릭시 다른 div 숨기기
var bDisplay = true;
function Recruitment1(){
  var con = document.getElementById("category1");
  var von = document.getElementById("door")
  var btn1 = document.getElementById("btn1")
  var btn2 = document.getElementById("btn2")
  var btn3 = document.getElementById("btn3")
  var text = document.getElementById("serchtext")
  if(con.style.display=='none'){
    con.style.display = 'block';
    von.style.display='none';
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    text.style.display = 'none';
  }else{
    con.style.display='block';
    von.style.display='none';
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    text.style.display = 'none';
  }
}

// 참여 클릭시 다른 div 숨기기

function Recruitment2(){
  var con = document.getElementById("category1");
  var von = document.getElementById("door")
  var btn1 = document.getElementById("btn1")
  var btn2 = document.getElementById("btn2")
  var btn3 = document.getElementById("btn3")
  var text = document.getElementById("serchtext")
  if(con.style.display=='none'){
    con.style.display = 'block';
    von.style.display='none';
    btn1.style.display = 'none';
    btn2.style.display = 'block';
    btn3.style.display = 'none';
    text.style.display = 'none';
  }else{
    con.style.display='block';
    von.style.display='none';
    btn1.style.display = 'none';
    btn2.style.display = 'block';
    btn3.style.display = 'none';
    text.style.display = 'none';
  }
}

// 기타 클릭시 다른 div 숨기기

function Recruitment3(){
  var con = document.getElementById("category1");
  var von = document.getElementById("door")
  var btn1 = document.getElementById("btn1")
  var btn2 = document.getElementById("btn2")
  var btn3 = document.getElementById("btn3")
  var text = document.getElementById("serchtext")
  if(con.style.display=='none'){
    con.style.display = 'block';
    von.style.display='none';
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'block';
    text.style.display = 'none';
  }else{
    con.style.display='block';
    von.style.display='none';
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'block';
    text.style.display = 'none';
  }
}

// 충녕봇 클릭시 처음 화면으로

function door(){
  var con = document.getElementById("category1");
  var von = document.getElementById("door")
  var text = document.getElementById("serchtext")
  if(von.style.display=='none'){
    von.style.display='block';
    con.style.display='none';
    text.style.display='none';
  }
}
