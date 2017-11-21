<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;
use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Load extends CI_Controller {
    // public function index() {
        // $result = LoginService::login();
        
        // if ($result['loginState'] === Constants::S_AUTH) {
        //     $this->json([
        //         'code' => 0,
        //         'data' => $result['userinfo']
        //     ]);
        // } else {
        //     $this->json([
        //         'code' => -1,
        //         'error' => $result['error']
        //     ]);
        // }
    // }

    /**
      获取数据
    */
    public function index(){
      $page = $_GET['page'];
      $page_size = $_GET['pageSize'];
      $offset = ((int)$page - 1) * (int)$page_size;

      $suffix = "order by date desc limit ". (string)$offset . "," . $page_size;
      $res = DB::select("paper", ['*'],'','', $suffix);
      $this->json([
                    'code' => 0,
                    'data' => $res
                ]);
    }
}
