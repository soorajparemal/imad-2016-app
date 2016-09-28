
//counter code 
var button=document.getElementById("counter");

button.onclick = function() {
    //create request object
    
    var request=new XMLHttpRequest();
    //capture the rsponse and store to a variable 
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter = request.responseText;
                 var span=document.getElmentById("count");
                 span.InnerHTML=counter.toString();
    
            }
        }
        
        //not done yet
    };
    //make request
   request.open("GET","http://soorajparemal.imad.hasura-app.io/Counter",true);
   request.send(null);
    
};