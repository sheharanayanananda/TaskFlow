<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function create_task_db(Request $request)
    {
        $incomingFields = $request->validate([
            'title' => 'required',
            'date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);

        $incomingFields['title'] = strip_tags($incomingFields['title']);
        $incomingFields['date'] = date('Y-m-d', strtotime($incomingFields['date']));

        // Convert to 24-hour format
        $incomingFields['start_time'] = date('H:i:s', strtotime($incomingFields['start_time']));
        $incomingFields['end_time'] = date('H:i:s', strtotime($incomingFields['end_time']));

        Tasks::create($incomingFields);
        //return redirect('/tasks')->with('message', 'Task created successfully!');
        return redirect('/tasks');
    }

    public function showEditForm(Task $task) {
        return 'Hi there';
        //return view('edit_task', ['task' => $task]);
    }
}
