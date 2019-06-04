<?php
    include("../public.php");
    $id = $_POST["id"];
        $sql = "select id,src,money,name  from commodity where id in ($id)";
        $res = mysqli_query($con,$sql);
        
        $data = array();
        while($arr = mysqli_fetch_assoc($res)){
            array_push($data,$arr);
        }
        
        if(count($data)){
            
            echo  json_encode($data);
        }else{
            echo "";
        }
  
 
?>