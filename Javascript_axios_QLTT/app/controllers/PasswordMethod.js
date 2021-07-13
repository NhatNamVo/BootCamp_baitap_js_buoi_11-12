function show(id){
    document.getElementsByClassName('inputPass')[id].type = 'text';
    document.getElementsByClassName('show')[id].style.display = 'none';
    document.getElementsByClassName('hide')[id].style.display = 'block';
}

function hide(id){
    document.getElementsByClassName('inputPass')[id].type = 'password';
    document.getElementsByClassName('show')[id].style.display = 'block';
    document.getElementsByClassName('hide')[id].style.display = 'none';
}