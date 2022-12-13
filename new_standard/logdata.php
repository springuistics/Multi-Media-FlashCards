<?php
session_start();
require "config.php";
$mc_wrong = ($_GET['mc_wrongs']);
$mc_right = ($_GET['mc_rights']);
$wr_wrong = ($_GET['wr_wrongs']);
$wr_right = ($_GET['wr_rights']);
$s_clicks = ($_GET['s_clicks']);
$l_clicks = ($_GET['l_clicks']);
$selections = ($_GET['my_selections']);
$elnamo = $_SESSION["username"];

//Be sure to change the sql to match whatever flashcard this is.
$sql2 = "UPDATE users SET fc_mc_wrong = ?, fc_mc_right = ?, fc_type_wrong = ?, fc_type_right = ?, fc_s_clicks = ?, fc_s_clicks = ?, wp_choices = ? WHERE username = ?";
$stmt2 = mysqli_prepare($link, $sql2);
//Remember "i" stands for the number of integer data points being sent and "s" stands for the number of string data points being sent
mysqli_stmt_bind_param($stmt2, "iiiiiiss", $mc_wrong, $mc_right, $wr_wrong, $wr_right, $s_clicks, $l_clicks, $selections, $elnamo);
mysqli_stmt_execute($stmt2);  

?>