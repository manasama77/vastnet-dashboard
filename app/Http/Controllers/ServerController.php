<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    public function index()
    {
        return Inertia::render('servers');
    }
}
