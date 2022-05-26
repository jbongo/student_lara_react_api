<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);


Route::post('/add-student', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'index']);
Route::get('/student/{student_id}', [StudentController::class, 'show']);
Route::put('/update-student/{student_id}', [StudentController::class, 'update']);
Route::delete('/delete-student/{student_id}', [StudentController::class, 'destroy']);