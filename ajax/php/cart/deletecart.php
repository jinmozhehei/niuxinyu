<?php
    include("../public.php");
    $name = $_POST["name"];
    $newdata = $_POST["newdata"];
    $sql = "update cart_user set commodity='[$newdata]' where name = $name";
    $res = mysqli_query($con,$sql);
    
    if($res){
        echo  json_encode(array(
            "status"=>true,
            "info"=>"成功"
        ));
    }else{
        echo  json_encode(array(
            "status"=>false,
            "info"=>"失败"
        ));
    }
    
?>