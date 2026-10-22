<?php
namespace App\Http\Controllers;
use App\Models\TourismNews;
class TourismNewsController extends Controller {
    public function index() {
        return response()->json(['success' => true, 'data' => TourismNews::active()->orderByDesc('is_featured')->take(15)->get()]);
    }
}
