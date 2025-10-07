<?php

namespace App\Filament\Widgets;

use App\Models\Project;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProjectStatsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Projects', Project::count())
                ->description('All projects in the system')
                ->descriptionIcon('heroicon-m-building-office')
                ->color('primary'),

            Stat::make('Featured Projects', Project::where('featured', true)->count())
                ->description('Projects marked as featured')
                ->descriptionIcon('heroicon-m-star')
                ->color('warning'),

            Stat::make('Completed Projects', Project::where('status', 'Completed')->count())
                ->description('Successfully completed projects')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),

            Stat::make('In Progress', Project::where('status', 'In Progress')->count())
                ->description('Projects currently under development')
                ->descriptionIcon('heroicon-m-clock')
                ->color('info'),
        ];
    }
}


































