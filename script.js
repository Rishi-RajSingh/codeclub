var c=0;
function a(x){
	if(c==1)
	{
		closeNav(x);
	c=0;}
	else
	{
		openNav(x);
	c=1;}
}
function openNav(x) {
	x.classList.toggle("change");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";   
}

function closeNav(x) {
	x.classList.toggle("change");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function clo() { 
    document.getElementById('myModal').style.display = "none";
}

function f1(){
	document.getElementById('myModal').style.display = "block";
    document.getElementById("img01").src = "vishal.jpg";
}
function f2(){
	document.getElementById('myModal').style.display = "block";
    document.getElementById("img01").src = "Rishi.jpeg";
}
function f3(){
	document.getElementById('myModal').style.display = "block";
    document.getElementById("img01").src = "Akash.jpg";
}