<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Carbon;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        logger($request);
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials!'
            ], 401);
        }

        // Create a token with expiration
        $token = $user->createToken($user->name . '-auth-token');
        return response()->json([
            'access_token' => $token->plainTextToken
        ]);
    }
}
