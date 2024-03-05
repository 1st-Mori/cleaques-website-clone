function vendorShow(){
    var element = document.getElementById("personal-display");
    var element2 = document.getElementById("vendor-display");
    if (element.style.display === "none") {
        element2.style.display = "block"
    }
}
function personalShow(){
    var element = document.getElementById("personal-display");
    var element2 = document.getElementById("vendor-display");
    if (element2.style.display === "block") {
        element2.style.display = "none"
        element.style.display = "block";
    }
    else{
        element2.style.display = "block"
    }
}
$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});
var active = document.getElementsByClassName("active");
this.active = "active";


window.addEventListener("scroll", function() { 
    console.log(this.scrollY);
    if (this.scrollY > 1000 && this.scrollY < 1500){
        this.document.getElementById("a1") .classList.add("animate fadeInTopLeft");    
    } else{    
    this.document.getElementById("a1").classList.remove("animate_fadeInTopLeft");
    }
    if (this.scrolly > 917 && this.scrolly < 1900){
        this.document.getElementById("phone").classList.add("animate_fadeInTopRight");
    } else{
        this.document.getElementById("phone").classList.remove("animate fadeInTopRight");
    }
})