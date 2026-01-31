<?php
    $db_hostname="127.0.0.1"; // or "localhost"
    $db_username="root";      //
    $db_password="Roshaan727@!"; // Use your actual password here
    $db_name="tour";          // The new database name

    $conn=mysqli_connect($db_hostname,$db_username,$db_password,$db_name);
    // ... rest of your code
    if(!$conn)
    {
        echo"Connection Failed:",mysqli_connect_error();
        exit;
    }

    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $sql="Insert into contact(Name,Email,Phone,Subject,Message) values ('$name','$email','$phone','$subject','$message')";
    $result=mysqli_query($conn,$sql);
    if(!$result)
    {
        echo "error: ",mysqli_error($conn);
        exit;
    }
    echo "We will contact you soon";
    mysqli_close($conn);
 
?>
