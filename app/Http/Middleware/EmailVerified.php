<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class EmailVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        if($user)
        {
            if(!$user->verified)
            {
                return redirect('/thank');
            }
        }
        return $next($request);
    }
}
