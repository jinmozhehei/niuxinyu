<?php
    include("../public.php");
    $name = $_POST["name"];
    $time = $_POST["time"];
    $number = $_POST["number"];
    $commodity = $_POST["commodity"];
    $sql = "insert into cart_user (name,time,number,commodity) values ('$name','$time','$number','$commodity')";
    $res = mysqli_query($con,$sql);
   
    if(count($res)){     
        echo  json_encode(array(
            "status"=>true,
            "info"=>"购物车添加成功"
        ));
    }
    else{   
        echo  json_encode(array(
            "status"=>false,
            "info"=>"购物车添加失败"
        ));
      
    }
?>