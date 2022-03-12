
 <?php
error_reporting(E_ERROR | E_PARSE);
$i=0;
$xml = simplexml_load_file('examp.xml');

foreach($xml->children() as $key => $children) {
	if($i==$_GET['Page']){
		break;
	}else{
	echo "<h3> Пользователь под именем  "; print((string)$children->Name);
  	 echo "</h3><br> <img src='";
  	print((string)$children->Pic); echo "'> <br> <i>";
  	print((string)$children->Text); echo " </i> <br>";
  	$i++;
//$comment = $xml->addChild('comment');
}
}
//$xml->asXML($file);



 ?>
