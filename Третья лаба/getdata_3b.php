
 <?php
$file = 'examples.xml';
error_reporting(E_ERROR | E_PARSE);
$xml = simplexml_load_file($file);



$comment = $xml->addChild('comment');
$comment->addChild('Name', $_GET['Name']);
$comment->addChild('Text', $_GET['Text']);
$comment->addChild('Email', $_GET['Email']);

$xml->asXML($file);

echo "hey";

 ?>
