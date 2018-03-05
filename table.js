
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

function search_val(){
	var ip ,convert, tabval,row , col, i, total=11;
	ip = document.getElementById("input");						//linking id of input tag from index.html to var ip of table.js /* value to be entered by user */
	convert= ip.value.toUpperCase();								//converting the entered value to uppercase form
	tabval = document.getElementById("tab");					//linking id of table tag to var tabval
	row = tabval.getElementsByTagName("tr");					//linking values of each row from table

	for( i=0; i< row.length ; i++)
	{
			col= row[i].getElementsByTagName("td")[0];								//to check 0th column of 'i'th row
			if (col) 															// if col exists
			{		
					if (col.innerHTML.toUpperCase().indexOf(convert) > -1) 			//comparing the entered value with that of row value if it is true it starts from 0
					{		
							row[i].style.display= "";
					}
					else
					{
						col=row[i].getElementsByTagName("td")[1];
						if (col)
						 {
							if(col.innerHTML.toUpperCase().indexOf(convert) > -1)
							{
									row[i].style.display="";
							}
							else
							{
								row[i].style.display="none";
								total--;
							}
						}
					}
			}
	}


	document.getElementById("val2").innerHTML = "NUMBER OF ELEMENTS - " + total;
}