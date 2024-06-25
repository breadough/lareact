<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::Create($data);

        $token = $user->createToken($user->name . '-auth-token');

        return response()->json([
            'message' => 'User Created!',
            'access_token' => $token->plainTextToken,
        ]);
    }
}
