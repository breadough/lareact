<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        // Dummy tasks data
        $tasks = [
            ['id' => 1, 'title' => 'Task 1', 'description' => 'Description for Task 1'],
            ['id' => 2, 'title' => 'Task 2', 'description' => 'Description for Task 2'],
        ];

        // Return the dummy tasks as JSON response
        return response()->json(['tasks' => $tasks]);
    }
}