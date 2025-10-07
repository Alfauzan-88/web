<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'ALFAUZAN INDUSTRIAL CITY',
                'category' => 'Industrial Cities',
                'location' => 'Al-Kharj Road, Riyadh',
                'year' => '2024',
                'value' => '1.2B SAR',
                'status' => 'Completed',
                'area' => '3,324,000 m²',
                'description' => 'A comprehensive industrial city with wide road networks, comprehensive infrastructure, and smart zoning.',
                'long_description' => 'ALFAUZAN INDUSTRIAL CITY represents the pinnacle of industrial development in Saudi Arabia. This massive 3.3 million square meter complex features state-of-the-art infrastructure, smart zoning systems, and comprehensive facilities designed to support diverse industrial activities. The project includes wide road networks, advanced security systems, and modern amenities that make it an ideal location for manufacturing, warehousing, and commercial operations.',
                'image' => 'projects/alfauzan-industrial-city-main.jpg',
                'images' => [
                    'projects/alfauzan-industrial-city-1.jpg',
                    'projects/alfauzan-industrial-city-2.jpg',
                    'projects/alfauzan-industrial-city-3.jpg',
                    'projects/alfauzan-industrial-city-4.jpg',
                    'projects/alfauzan-industrial-city-5.jpg'
                ],
                'features' => [
                    'Wide Road Networks',
                    'Comprehensive Infrastructure',
                    'Smart Zoning',
                    '24/7 Security',
                    'Modern Facilities',
                    'Strategic Location',
                    'Advanced Technology',
                    'Sustainable Design'
                ],
                'specifications' => [
                    'totalArea' => '3,324,000 m²',
                    'industrialZones' => 8,
                    'commercialAreas' => 12,
                    'parkingSpaces' => 5000,
                    'securityPosts' => 24,
                    'roadNetwork' => '50 km'
                ],
                'timeline' => [
                    ['phase' => 'Planning', 'date' => 'Jan 2022', 'status' => 'completed'],
                    ['phase' => 'Design', 'date' => 'Jun 2022', 'status' => 'completed'],
                    ['phase' => 'Infrastructure', 'date' => 'Dec 2022', 'status' => 'completed'],
                    ['phase' => 'Construction', 'date' => 'Mar 2023', 'status' => 'completed'],
                    ['phase' => 'Completion', 'date' => 'Dec 2024', 'status' => 'completed']
                ],
                'investment_opportunities' => [
                    'Industrial Units',
                    'Commercial Spaces',
                    'Warehouse Facilities',
                    'Office Buildings',
                    'Service Centers'
                ],
                'video_url' => 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
                'featured' => true,
                'slug' => 'alfauzan-industrial-city',
                'meta_description' => 'ALFAUZAN INDUSTRIAL CITY - A comprehensive industrial development in Saudi Arabia featuring state-of-the-art infrastructure and smart zoning systems.',
                'meta_keywords' => 'industrial city, Saudi Arabia, infrastructure, smart zoning, manufacturing, warehousing'
            ],
            [
                'title' => 'REMAS INDUSTRIAL PLAN',
                'category' => 'Industrial Plans',
                'location' => 'Istanbul Road, Al-Mashael District',
                'year' => '2023',
                'value' => '400M SAR',
                'status' => 'Completed',
                'area' => '1,032,590 m²',
                'description' => 'Industrial plan with factories and commercial buildings for diverse industries.',
                'long_description' => 'REMAS INDUSTRIAL PLAN is a comprehensive industrial development featuring modern factories and commercial buildings designed to support diverse manufacturing industries. The project includes state-of-the-art infrastructure, flexible workspace configurations, and advanced facilities that cater to various industrial needs.',
                'image' => 'projects/remas-industrial-plan-main.jpg',
                'images' => [
                    'projects/remas-industrial-plan-1.jpg',
                    'projects/remas-industrial-plan-2.jpg',
                    'projects/remas-industrial-plan-3.jpg'
                ],
                'features' => [
                    'Factories',
                    'Commercial Buildings',
                    'Modern Infrastructure',
                    'Diverse Industries',
                    'Flexible Spaces',
                    'Advanced Facilities'
                ],
                'specifications' => [
                    'totalArea' => '1,032,590 m²',
                    'industrialUnits' => 45,
                    'commercialSpaces' => 20,
                    'parkingSpaces' => 800,
                    'loadingAreas' => 12
                ],
                'timeline' => [
                    ['phase' => 'Planning', 'date' => 'Jan 2021', 'status' => 'completed'],
                    ['phase' => 'Design', 'date' => 'Jun 2021', 'status' => 'completed'],
                    ['phase' => 'Construction', 'date' => 'Dec 2021', 'status' => 'completed'],
                    ['phase' => 'Completion', 'date' => 'Dec 2023', 'status' => 'completed']
                ],
                'investment_opportunities' => [
                    'Manufacturing Units',
                    'Commercial Spaces',
                    'Service Facilities'
                ],
                'video_url' => 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
                'featured' => true,
                'slug' => 'remas-industrial-plan',
                'meta_description' => 'REMAS INDUSTRIAL PLAN - Modern factories and commercial buildings for diverse manufacturing industries.',
                'meta_keywords' => 'industrial plan, factories, commercial buildings, manufacturing, infrastructure'
            ]
        ];

        foreach ($projects as $projectData) {
            Project::create($projectData);
        }
    }
}


































