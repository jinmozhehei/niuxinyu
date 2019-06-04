<?php
    include("../public.php");
    $user = $_GET["user"];

    $sql = "select commodity from cart_user where name='$user'";
    $res = mysqli_query($con,$sql);
    $arr = mysqli_fetch_assoc($res);
 

        echo  json_encode($arr);

    

?>