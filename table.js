
var student = document.getElementById('tab');

var btn = document.getElementById('btn');
 btn.addEventListener('click', function(){
 		var ourRequest= new XMLHttpRequest();
		ourRequest.open('GET','https://rajshree27.github.io/data_json_file/data.json',true);
		ourRequest.onload = function() {
			var ourData = JSON.parse(ourRequest.responseText);
			console.log(ourRequest);
			console.log(ourRequest.responseText);
			console.log(ourData);
			console.log(ourData.length);                 //applies JSON filter
			renderHTML(ourData);
		};
		ourRequest.send();
		
});
		
function renderHTML(data){	
							// to add html to the page whenever data is added
	var htmltab = "";
	var i=0;
	for(i=0 ; i<data.length ; i++)
	{
		htmltab+= "<tr><td>" + data[i].NAME + "</td><td>" + data[i].DEPARTMENT + "</td></tr>";
	}
	if (i==data.length) {
		document.getElementById("val").innerHTML= "TOTAL ELEMENTS - " + i;
		document.getElementById('btn').style.display='none';

	}

	student.insertAdjacentHTML('beforeend' , htmltab);        //before end tag
}
