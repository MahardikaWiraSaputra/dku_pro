<?php

namespace App\Http\Controllers\API;

use App\Leader;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Leader::allJoin();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'type'          => 'required|string|max:50',
            'id_employee'   => 'required'
        ]);
        return Leader::create([
            'type'        => $request['type'],
            'id_employee' => $request['id_employee']
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function show(Leader $leader)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function edit(Leader $leader)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'type'        => 'required|string|max:50',
            'id_employee' => 'required'
        ]);
        $leader = Leader::where('id_leader', '=', $id)->update($request->all());
        return ['message' => 'Update berhasil'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function destroy(Leader $id)
    {
        $leader = Leader::where('id_leader', '=', $id)->delete();
        return ['message' => 'terhapus'];
    }
}
