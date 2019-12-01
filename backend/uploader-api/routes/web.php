<?php

use Illuminate\Http\Request;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->delete('/images', function (Request $request) use ($router) {
    $id = $request->input('id');
    if (empty($id)) {
        return response()->json("must send a image id");
    }
    Db::table('image')
        ->where('id', $id)
        ->delete();
    return response()->json("image url removed");
});

$router->delete('/videos', function (Request $request) use ($router) {
    $id = $request->input('id');
    if (empty($id)) {
        return response()->json("must send a video id");
    }
    Db::table('video')
        ->where('id', $id)
        ->delete();
    return response()->json("video url removed");
});

$router->put('/images', function (Request $request) use ($router) {
    $id = $request->input('id');
    $url = $request->input('url');
    if (empty($id) && empty($url)) {
        return response()->json("must send a image id and a url");
    }
    Db::table('image')
        ->where('id', $id)
        ->update(['url' => $url]);
    return response()->json("image url updated");
});

$router->put('/videos', function (Request $request) use ($router) {
    $id = $request->input('id');
    $url = $request->input('url');
    if (empty($id) && empty($url)) {
        return response()->json("must send a video id and a url");
    }
    Db::table('video')
        ->where('id', $id)
        ->update(['url' => $url]);
    return response()->json("video url updated");
});

$router->post('/images', function (Request $request) use ($router) {
    $data = $request->input('url');
    if (empty($data)) {
        return response()->json("must send a video url");
    }
    Db::table('image')->insert(
        ['url' => $data ]
    );
    return response()->json("image url saved");
});

$router->post('/videos', function (Request $request) use ($router) {
    $data = $request->input('url');
    if (empty($data)) {
        return response()->json("must send a video url");
    }
    Db::table('video')->insert(
        ['url' => $data ]
    );
    return response()->json("video url saved");
});

$router->get('/medias', function () use ($router) {
    $images = Db::table('image');
    $videosAndImages = Db::table('video')->union($images)->get();
    return response()->json($videosAndImages);
});
