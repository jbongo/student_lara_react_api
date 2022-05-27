<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;


class StudentController extends Controller
{


    public function store(Request $request){
    
        $student = new Student;
        
        $validator = Validator::make($request->all(), [
        
            "nom" => "required|max:191",
            "cours" => "required|max:191",
            "email" => "required|email|max:191",
            "telephone" => "required|numeric",
        ]); 
        
        if($validator->fails()){
        
            return  response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        
        $student->nom = $request->input('nom');
        $student->cours = $request->input('cours');
        $student->email = $request->input('email');
        $student->telephone = $request->input('telephone');
        
        $student->save();
        
        return response()->json([
            'status' => 200,
            'message' => 'étudiant enregistré'
        
        ]);
        
        
    }
    
    
    public function index(){
    
        $students = Student::all();
        
        return response()->json(
            [
                'status' => 200,
                'students'=> $students
            ]
        );
        
    }
    
    public function show($student_id){
    
        $student = Student::where('id',$student_id)->first();
        
        return response()->json(
            [
                'status' => 200,
                'student'=> $student
            ]
        );
        
    }
    
    public function update(Request $request, $student_id){
    
        $student = Student::where('id',$student_id)->first();
        
        $student->nom = $request->input('nom');
        $student->email = $request->input('email');
        $student->cours = $request->input('cours');
        $student->telephone = $request->input('telephone');
        
        $student->update();
        
        return response()->json(
            [
                'status' => 200,
                'message'=> "étudiant modifié"
            ]
        );
        
        
        
       
    }
    
    
    public function destroy($student_id){
    
        $student = Student::where('id',$student_id)->first();
        
        
        $student->delete();
        
        return response()->json(
            [
                'status' => 200,
                'message'=> "étudiant supprimé"
            ]
        );
        
    }
}
