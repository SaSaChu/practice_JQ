/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  
  $('#items .button').click (function () {

   console.log ($(this).index ());

    $('#panels .panel').removeClass ('show');
    $('#panels .panel').eq ($(this).index ()).addClass ('show');

  });
});