// Selected player functionality
function selectPlayer(params) {
    const playerName = params.parentNode.childNodes[3].innerText;

    document.getElementById('player-total-money').classList.remove('btn-disabled');


    const ol = document.getElementById('olList');
    
    if(ol.children.length === 5) {
        // alert('Maximum 5 players allowed');
        document.getElementById('player_modal').showModal();
        return;
    }

    params.parentNode.childNodes[7].classList.add('btn-disabled'); 

    const li = document.createElement('li');
    li.innerText = playerName;
    ol.appendChild(li);    
}
