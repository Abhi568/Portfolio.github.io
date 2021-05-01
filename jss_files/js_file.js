
function click2() {
    // conso
    console.log("isenter",document.getElementById("click1").checked);
    if (document.getElementById("click1").checked == false) {
        let inputs = document.getElementById("click1");
        inputs.checked = true;
        // document.getElementsByClassName("navbar").style.opacity=1
    }
    else {
        let inputs = document.getElementById("click1");
        inputs.checked = false;
        // document.getElementById("mypic").style.opacity=1
    }
    window.onload = function() {
    window.addEventListener('load', check, false);
    // document.getElementById("mypic").style.opacity=1
    
  }

}