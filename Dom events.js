const colorChange = document.getElementById('yilo')
colorChange.onclick = makeYellow;


function makeYellow (){
    document.body.style.backgroundColor = 'yellow';
}

document.getElementById('gold').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})