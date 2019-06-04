<?php
    include("public.php");
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "select * from user where username='$username'";
    $res = mysqli_query($con,$sql);
    $arr = mysqli_fetch_assoc($res);

    if(count($arr)){
        
        $spass = "select * from ($sql) temp where temp.password='$password'";
        $respass = mysqli_query($con,$spass);
        $arrpass = mysqli_fetch_assoc($respass);
        if(count($arrpass)){
            echo  json_encode(array(
                "status"=>true,
                "info"=>$arrpass
            ));
        }else{
            echo  json_encode(array(
                "status"=>false,
                "info"=>"密码错误"
            ));
        }
       
    }
    else{
        echo  json_encode(array(
            "status"=>false,
            "info"=>"用户名不存在"
        ));
        

    }
?>