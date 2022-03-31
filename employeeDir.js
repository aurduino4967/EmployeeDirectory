$(document).ready(function(){

    //to store the details of employees
    var employees={};
    
    //function to add details to result section
    function addToResults(details,id)
    {
        let divnode=$("<div class=\"employeeTiles\"></div>");
        divnode.append(["<img class=\"idicon\" src=usericon2.jpg>","</img>"].join(''));
        let divnodeid=$("<div class=\"id-section\"></div>");
        divnodeid.append(["<pre class=\"nameTitle\">",details["PrefferedName"],"</pre>"].join(''));
        divnodeid.append(["<pre>",details["JobTitle"],"<br>",details["Office"],"</pre>"].join(''));
        let divnodeicons=$("<div class=\"iconsBar\"></div>");
        divnodeicons.append(["<img class=\"icons\" src=emialicon.jpg>",
                             "<img class=\"icons\" src=staricon.png>",
                             "<img class=\"icons\" src=favicon.png>"
                             ,"<button class=\"edit\" ","value=\"",id,"\"",">edit</button>"].join(''));
        divnode.append(divnodeid);
        divnode.append(divnodeicons);
        $(".results-section").append(divnode);
    }  
    
    //function to create employeedictionary
    function createEmpDict()
    {
        let dict={};
        dict["FirstName"] = document.forms["addEmployeeForm"]["EmpFirstName"].value;
        dict["LastName"] = document.forms["addEmployeeForm"]["EmpLastName"].value;
        dict["PrefferedName"] = document.forms["addEmployeeForm"]["EmpPrefferedName"].value;
        dict["Email"] =  document.forms["addEmployeeForm"]["EmpEmail"].value;
        dict["JobTitle"] = document.forms["addEmployeeForm"]["EmpJobTitle"].value;
        dict["Office"] = document.forms["addEmployeeForm"]["EmpOffice"].value;
        dict["Department"] = document.forms["addEmployeeForm"]["EmpDept"].value;
        dict["Phone"] = document.forms["addEmployeeForm"]["EmpPh"].value;
        dict["SkypeId"] = document.forms["addEmployeeForm"]["EmpSkypeId"].value;
        return dict;
    }
    
    //function to apply filters
    function filterby()
    {
        var filter=$("#Filter").val();
        var startword=$("#inputKeyword").val().toLowerCase();
        $(".results-section").empty();
        if(startword!="")
            {
                for ([empid,details] of Object.entries(employees)) {
                        if(details[filter].toLowerCase().startsWith(startword))
                                addToResults(details,empid);
                }
            }
        else
        {
            for ([empid,details] of Object.entries(employees)) {
                        addToResults(details,empid);

            
            }
        }
    }
  
    //for generating alphabetic input buttons
    for(let i=0;i<26;i++)
    {
        chr=String.fromCharCode(65 + i);
        $(".SearchAlphabets").append(["<button class=\"alphaboxes\" value=",chr,">",chr,"</button>"].join(''));
    }
    
    //for generating alphabetic input 
    $(document).on("click",".alphaboxes",function(){
        $("#inputKeyword").val($("#inputKeyword").val()+$(this).val());
            
    });
    
    //form submit button functionality
	$(document).on('click','#submit',function(){
		let dict={};
        $("#addEmployeeFormContainer").hide();
		dict=createEmpDict();
		employees[dict["Email"]]=dict;
        $("#addEmployeeForm").trigger("reset");
        addToResults(dict,dict["Email"]);
        alert("Employee Added Successfully");
	});
	
    //Add Employee button functionality
    $(document).on("click","#show",function(){
        $("#saveBtn").hide();
        $("#submit").show();
        $("#addEmployeeFormContainer").show();    

    });
    
    //clear button functionality
    $(document).on("click",".Clear",function(){
        $("#inputKeyword").val("");
    }); 
    
    //edit button functionality 
    $(document).on("click",".edit",function(){
        $("#submit").hide();
        $("#saveBtn").show();
        delete employees[$(this).val()];
        $("#addEmployeeFormContainer").show();
        $("#Email").val($(this).val());
    });   
  
    //To edit employee details
    $(document).on("click","#saveBtn",function(e){
        $("#addEmployeeFormContainer").hide();
        dict=createEmpDict();
        employees[dict["Email"]]=dict;
        $("#addEmployeeForm").trigger("reset");
        $(".results-section").empty();
        alert("Changes Saved");
        for ([empid, details] of Object.entries(employees)) {
            addToResults(details,empid);
        }
    });   
    
    //for generating response when filter option is changed 
    document.getElementById('Filter').addEventListener("change", filterby);
    
    //for generating response when inputKeyword is given
    document.getElementById('inputKeyword').addEventListener("change", filterby);
   
})
         



