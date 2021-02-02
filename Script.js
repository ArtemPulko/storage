var id = 0;


function func1()
{
	id++;
var colorDivs = document.getElementsByClassName("main");
		if(id == 1)
   			colorDivs[0].style.backgroundColor = "#422300";
   		if(id == 2)
   			colorDivs[0].style.backgroundColor = "#db7500";
   	   	if(id == 3)
   			colorDivs[0].style.backgroundColor = "#fad2b4";
   	   	if(id == 4)
   			colorDivs[0].style.backgroundColor = "#fa937a";
   	   	if(id == 5)
   			colorDivs[0].style.backgroundColor = "#e02900";
   	   	if(id == 6){
   	   		colorDivs[0].style.backgroundColor = "#1049A9";
   	   		id = 0;	
   	   	}
   	   		
}
function func2()
{
	location.href='NextPage.html';
}
function func3()
{
	location.href='index.html';
}