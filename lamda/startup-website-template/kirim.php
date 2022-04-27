<?php
$nama = $_POST['nama'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$headers .= 'From: <idn.lamda@gmail.com>' . "rn"; //bagian ini diganti sesuai dengan email dari pengirim
@mail($to, $subject, $messages, $headers . php);
if (@mail) {
    echo "pengiriman berhasil";
} else {
    echo "pengiriman gagal";
}
