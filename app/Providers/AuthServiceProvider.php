<?php

namespace App\Providers;
use App\Models\Appeloffre;
use App\Models\DemandeFormalite;
use App\Models\Dirigeant;
use App\Models\Etablisement;
use App\Models\Formalite;
use App\Models\Prescripteur;
use App\Models\Rdv;
use App\Models\Societe;
use App\Policies\AppeloffrePolicy;
use App\Policies\DemandeFormalitePolicy;
use App\Policies\DirigeantPolicy;
use App\Policies\EtablisementPolicy;
use App\Policies\FormalitePolicy;
use App\Policies\PrescripteurPolicy;
use App\Policies\RdvPolicy;
use App\Policies\SocietePolicy;
// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Appeloffre::class => AppeloffrePolicy::class,
        Prescripteur::class => PrescripteurPolicy::class,
        Rdv::class => RdvPolicy::class,
        Societe::class => SocietePolicy::class,
        DemandeFormalite::class => DemandeFormalitePolicy::class,
        Etablisement::class => EtablisementPolicy::class,
        Dirigeant::class => DirigeantPolicy::class,
        Formalite::class => FormalitePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
