
 <?php
error_reporting(E_ERROR | E_PARSE);

$xml = simplexml_load_file('examples.xml');

foreach($xml->children() as $key => $children) {
  echo "Пользователь под именем "; print((string)$children->Name); echo "(";
  print((string)$children->Email); echo ") Написал:<br>";
  print((string)$children->Text); echo "<br>";
//$comment = $xml->addChild('comment');
}
//$xml->asXML($file);



 ?>
