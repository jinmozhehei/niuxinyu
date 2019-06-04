<?php
    include("public.php");
    $phone = $_POST["phone"];
    $password = $_POST["password"];
    $nick = $_POST["nick"];
    $sql = "select * from user where username='$phone'";
    $res = mysqli_query($con,$sql);
    $arr = mysqli_fetch_assoc($res);
    if(count($arr)){     
        echo  json_encode(array(
            "status"=>false,
            "info"=>"手机号已经存在"
        ));
    }
    else{   
        $spass = "insert into user (username,password,nick) values ('$phone','$password','$nick')";
        $respass = mysqli_query($con,$spass);
        // $arrpass = mysqli_fetch_assoc($respass);
        if(count($respass)){
            echo  json_encode(array(
                "status"=>true,
                "info"=>"注册成功"
            ));
        }else{
            echo  json_encode(array(
                "status"=>false,
                "info"=>"注册失败"
            ));
        }
       
    }
?>