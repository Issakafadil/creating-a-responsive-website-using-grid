
function toggleNavBar() {

    let x = document.getElementById("mainNavBar");
    if(x.className === "main-nav"){
        x.className += "responsive";
    }else{
        x.className = "main-nav";
    }

}
