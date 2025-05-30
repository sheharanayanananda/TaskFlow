<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TaskFlow | Edit Task</title>
    <link rel="icon" type="image/png" href="{{ asset('/favicon.png') }}">

    <!-- FlatIcon CDN -->
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css'>

    @vite(['resources/css/app.css', 'resources/css/create_task.css', 'resources/js/app.js'])
</head>
<body>
    <section class="create_task">
        <div class="container">
            <form action="/editTask/{{$task->id}}" method="POST">
                @csrf
                @method('PUT')
                <h1>Edit Task</h1>
                <input type="text" name="title" placeholder="Task Title" value="{{$task->title}}">
                <input type="date" name="date" id="date" value="{{$task->date}}">
                <div class="time">
                    <input type="time" name="start_time" id="start_time" value="{{$task->start_time}}">
                    <p><i class="fi fi-br-angle-double-right"></i></p>
                    <input type="time" name="end_time" id="end_time" value="{{$task->end_time}}">
                </div>
                <button>Edit Task</button>
            </form>
        </div>
    </section>
</body>
</html>
