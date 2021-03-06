<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

class Outlet extends Model
{
    public $timestamps = false;
    protected $guarded = [];
    protected $primaryKey = 'outletid';
    
    public static function getAll(){
        $query = (new static)->paginateArray(
            DB::select("SELECT * FROM outlets ORDER BY created_at ASC")
        );
        return $query;
    }

    public function paginateArray($data, $perPage = 100)
    {
        $page = Paginator::resolveCurrentPage();
        $total = count($data);
        $results = array_slice($data, ($page - 1) * $perPage, $perPage);

        return new LengthAwarePaginator($results, $total, $perPage, $page, [
            'path' => Paginator::resolveCurrentPath(),
        ]);
    }
}
