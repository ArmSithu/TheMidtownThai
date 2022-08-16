<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['emailaddress'];
$message= $_POST['message'];
$number= $_POST['mobile'];

$to = "do65770@mail.com";

$subject = "Mail From MidtownThai";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message ."
\r\n Mobile number =". $number;
$headers = "From: noreply@midtownThai.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>