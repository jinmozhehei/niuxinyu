<?php
    include("../public.php");
    $project = $_GET["project"];
    $sql = "select * from commodity where project='$project'";
    $res = mysqli_query($con,$sql);
    $data = array();
   
    while($arr = mysqli_fetch_assoc($res)){
        array_push($data,$arr);
    }
    echo json_encode($data);

    
?>