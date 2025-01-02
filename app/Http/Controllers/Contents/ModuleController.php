<?php

namespace App\Http\Controllers\Contents;

use App\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Contents\StoreModuleRequest;
use App\Http\Requests\Contents\UpdateModuleRequest;
use App\Http\Resources\Contents\ModuleResource;
use App\Models\Contents\Module;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    use ApiResponse;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $search = $request->query('search');

        $modules = Module::with('creator')
            ->when($search, function ($query, $search) {
                return $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%');
            })
            ->paginate(10);

        return response()->json([
            'data' => ModuleResource::collection($modules),
            'pagination' => [
                'current_page' => $modules->currentPage(),
                'last_page' => $modules->lastPage(),
                'per_page' => $modules->perPage(),
                'total' => $modules->total(),
            ],
            'message' => 'Modules fetched successfully',
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param StoreModuleRequest $request
     * @return JsonResponse
     */
    public function store(StoreModuleRequest $request): JsonResponse
    {
        $data = $request->validated();
        $module = Module::query()->create($data);

        return $this->successResponse(new ModuleResource($module), 'Module created successfully', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Module $module
     * @return JsonResponse
     */
    public function show(Module $module): JsonResponse
    {
        return $this->successResponse(new ModuleResource($module), 'Module fetched successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateModuleRequest $request
     * @param Module $module
     * @return JsonResponse
     */
    public function update(UpdateModuleRequest $request, Module $module): JsonResponse
    {
        $data = $request->validated();
        $module->update($data);

        return $this->successResponse(new ModuleResource($module), 'Module updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Module $module): JsonResponse
    {
        $module->delete();

        return $this->successResponse(null, 'Module deleted successfully');
    }
}
