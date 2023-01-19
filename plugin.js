$(document).ready(function(){

    $(".inc").click(function(){
        var count = $(".count").val();
        count++;
        $(".count").val(count);
    });

    $(".dec").click(function(){
        var count = $(".count").val();
        count--;
        if(count > 0){
            $(".count").val(count);
        }
        else{
            alert("nigative value !!!");
            $(".count").val(0);
        }
        
    });

    $(".submit").click(function(){
        var counter = $(".count").val();
        counter = parseInt(counter);
        if(counter == 0){
            alert("cant fetch 0 iteam")
        }
        else{
        $.getJSON('todo.json',function(data){
            if(counter > data.length){
                alert("The file have " + data.length + " Items")
            }else{
            $(".table_data").empty();
            for(var x = 0;x<counter;x++){
                $(".table_data").append("<tr><td>"+data[x].userId+"</td>"+ "<td>"+data[x].id+"</td>"+"</td>" +"<td>"+data[x].title+"</td>"  +"<td>"+data[x].completed + "</td>"+"</tr>")
                
            }
        }
       

        });
     }// else end
      
    });

});



    