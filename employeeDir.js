$(document).ready(function(){
	var employees=new Array();
    
    //showing a sample employee in results-section  
    let dict={};
    dict["PrefferedName"] ="   Sandeep Bhaskar";
    dict["Email"] =  "   Sandeep@gmail.com";
    dict["JobTitle"] = "   Full Stack Dev";
    dict["Office"] = "   India";
    employees.push(dict);
    let details=employees[0];
    let divnode=$("<div class=\"employeeTiles\"></div>");
    divnode.append(["<pre class=\"nameTitle\">",details["PrefferedName"],"</pre>"].join(''));
    divnode.append(["<pre>",details["JobTitle"],"<br>",details["Office"],"</pre>"].join(''));
    let divnodeicons=$("<div class=\"iconsBar\"></div>");
    divnodeicons.append(["<img class=\"icons\" src=emialicon.jpg>","</img>","<img class=\"icons\" src=staricon.png>","</img>","<img class=\"icons\" src=favicon.png>","</img>"].join(''));
    divnode.append(divnodeicons);
    $(".results-section").append(divnode);
    
    //creating alpha search buttons
    for(let i=0;i<26;i++)
    {
        chr=String.fromCharCode(65 + i);
        $(".SearchAlphabets").append(["<button class=\"alphaboxes\" value=",chr,">",chr,"</button>"].join(''));
    }
    
    //for buttons input
    $(".alphaboxes").click(function(){
        $("#inputKeyword").val($("#inputKeyword").val()+$(this).val());
            
    });
    
	$("#addEmployeeForm").submit(function(e){
		var dict={};
		dict["FirstName"] = document.forms["addEmployeeForm"]["EmpFirstName"].value;
		dict["LastName"] = document.forms["addEmployeeForm"]["EmpLastName"].value;
		dict["PrefferedName"] = document.forms["addEmployeeForm"]["EmpPrefferedName"].value;
		dict["Email"] =  document.forms["addEmployeeForm"]["EmpEmail"].value;
		dict["JobTitle"] = document.forms["addEmployeeForm"]["EmpJobTitle"].value;
		dict["Office"] = document.forms["addEmployeeForm"]["EmpOffice"].value;
		dict["Department"] = document.forms["addEmployeeForm"]["EmpDept"].value;
		dict["Phone"] = document.forms["addEmployeeForm"]["EmpPh"].value;
		dict["SkypeId"] = document.forms["addEmployeeForm"]["EmpSkypeId"].value;
		employees.push(dict);
        $('#addEmployeeForm').trigger("reset");
		alert("employee added successfully");
		e.preventDefault();
	});

								 
    $("#show").click(function(){
        $("#addEmployeeFormContainer").show();
    });
    
    $("#close").click(function(){
        $("#addEmployeeFormContainer").hide();
    });
    
	$("#showEmp").click(function(){
        $(".results-section").empty();
        for(let i=0;i<employees.length;i++)
            {
                let details=employees[i];
                let divnode1=$("<div class=\"employeeTiles\"></div>");
                divnode1.append(["<pre class=\"nameTitle\">",details["PrefferedName"],"</pre>"].join(''));
                divnode1.append(["<pre>",details["JobTitle"],"<br>",details["Office"],"</pre>"].join(''));
                let divnode2=$("<div class=\"iconBar\"></div>");
                divnode2.append(["<img class=\"icons\" src=emialicon.jpg>","</img>","<img class=\"icons\" src=favicon.png>","</img>"].join(''));
                divnode1.append(divnode2);
                $(".results-section").append(divnode1);
            }
    });

    $(".Clear").click(function(){
        $("#inputKeyword").val("");
    });
    
})



