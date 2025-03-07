<?php

use App\Models\Tasks;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/tasks', function () {
    $tasks = Tasks::all();
    return view('tasks', ['tasks' => $tasks]);
});

Route::get('/create_task', function () {
    return view('create_task');
});

Route::post('/createTask', [TaskController::class, 'create_task_db']);
Route::get('/editTask/{task}', [TaskController::class, 'showEditForm']);
Route::put('/editTask/{task}', [TaskController::class, 'update_task_db']);
Route::delete('/deleteTask/{task}', [TaskController::class, 'delete_task_db']);
