function verificar(){
    let element = document.getElementById('shop');
    let elementStyle = window.getComputedStyle(element, 'hover');
    let elementDisplay = elementStyle.getPropertyValue('display');
    if (elementDisplay =="none"){
        document.getElementById('shop').style.display="block";
    }
    else{
        document.getElementById('shop').style.display="none";
    }
}