<?php
error_reporting(E_ERROR | E_PARSE);
session_start();

 if ( !isset( $_SESSION['count'] ) ) // Используется для подсчета нажатия кнопки
     $_SESSION['count'] = 1; else $_SESSION['count']++;
print  $_SESSION['count'];
if ($_SESSION['count'] >1){
	if ($_SESSION['count']>3){
		echo $_SESSION['tek'];
		exit;
	}
	else{
		$_SESSION['tek']=$_SESSION['tek'] + $_GET['kol'];

		echo $_SESSION['tek'];

	}
}
 ?>
