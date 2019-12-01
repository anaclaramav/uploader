<?php

use Illuminate\Http\Request;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->delete('/images', function (Request $request) use ($router) {
    $url = $request->input('url');
    if (empty($url)) {
        return response()->json("must send a image url");
    }
    Db::table('image')
        ->where('url', $url)
        ->delete();
    return response()->json("image url removed");
});

$router->delete('/videos', function (Request $request) use ($router) {
    $url = $request->input('url');
    if (empty($url)) {
        return response()->json("must send a video url");
    }
    Db::table('video')
        ->where('url', $url)
        ->delete();
    return response()->json("video url removed");
});

$router->put('/images', function (Request $request) use ($router) {
    $old = $request->input('old');
    $url = $request->input('url');
    if (empty($url) || empty($old)) {
        return response()->json("must send the images' urls");
    }
    Db::table('image')
        ->where('url', $old)
        ->update(['url' => $url]);
    return response()->json("image url updated");
});

$router->put('/videos', function (Request $request) use ($router) {
    $old = $request->input('old');
    $url = $request->input('url');
    if (empty($url) || empty($old)) {
        return response()->json("must send the videos' urls");
    }
    Db::table('video')
        ->where('url', $old)
        ->update(['url' => $url]);
    return response()->json("video url updated");
});

$router->post('/images', function (Request $request) use ($router) {
    $data = $request->input('url');
    $name = $request->input('name');
    if (empty($data)) {
        return response()->json("must send a image url");
    }
    Db::table('image')->insert(
        ['url' => $data, 'name' => $name]
    );
    return response()->json("image url saved");
});

$router->post('/videos', function (Request $request) use ($router) {
    $data = $request->input('url');
    $name = $request->input('name');
    if (empty($data)) {
        return response()->json("must send a video url");
    }
    Db::table('video')->insert(
        ['url' => $data, 'name' => $name]
    );
    return response()->json("video url saved");
});

$router->get('/medias', function () use ($router) {
    $images = Db::table('image');
    $videosAndImages = Db::table('video')->union($images)->get();
    return response()->json($videosAndImages);
});
