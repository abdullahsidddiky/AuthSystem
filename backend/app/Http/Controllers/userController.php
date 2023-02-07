<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\DB;
class userController extends Controller
{
    //
 public function register(Request $request){
    $user = new User;
    $user->name = $request->name;
    $user->password = Hash::make($request->password);
    $user->email = $request->email;
    $user->save();
    return $user;



  
 }
 public function login(Request $request){

   $user = DB::table('users')->where('email', $request->email)->first();
   if($user==NULL){
      return response()->json([
         "status"=>"no match found"
      ]);
   }
   if(Hash::check($request->password,$user->password)){
      return response()->json(
      [
         'status'=>200,
         'user'=>$user,
      ]
   );
   }
   else {
      return response()->json([
         "status"=>"no match found"
      ]);
   }      
}

}