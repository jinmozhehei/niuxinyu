<?php
    include("../public.php");
    $id = $_GET["id"];
// echo $id;
    $sql = "select * from commodity where id='$id'";
    $res = mysqli_query($con,$sql);
    $data = array();
   
    while($arr = mysqli_fetch_assoc($res)){
        array_push($data,$arr);
    }
    echo json_encode($data);

?>