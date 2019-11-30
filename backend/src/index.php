<?php

$content = json_decode(file_get_contents('php://input'));

$routes = array(
  "GET" => array(),
  "POST" => array(),
  "DELETE" => array(),
  "UPDATE" => array()
);

$registerRoute = function ($method, $path) {
  if ($routes[$method].in_array($path)) {
    return;
  }
  $routes[$method].array_push($path);
};

switch ($_SERVER['REQUEST_METHOD'] . " " . $_SERVER['REQUEST_URI']) {
    case 'POST /image':
      $image_url = $content->{image};
      break;
    case 'POST /video':
      $image_url = $content->{video};
      break;
    case 'UPDATE /image':
      $image_url = $content->{image};
      break;
    case 'UPDATE /video':
      $image_url = $content->{video};
      break;
    case 'DELETE /image':
      $image_url = $content->{image};
      break;
    case 'DELETE /video':
      $image_url = $content->{video};
      break;
    case 'GET /media':
      break;
    default:
      echo '{ error: true message: "invalid ssssssss endpoint." }';
}

?>