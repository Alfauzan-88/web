# Dynamic Gallery System Setup

This document explains how the dynamic gallery system works and how to use it.

## Overview

The dynamic gallery system automatically detects and displays only existing images from project directories. When you delete images from the file system, they will automatically disappear from the portal without showing placeholders.

## How It Works

### 1. Image Detection
- The system checks if images exist by attempting to load them
- Only existing images are displayed in the gallery
- Missing images are automatically filtered out

### 2. Project Configuration
Each project has a configuration in `src/utils/dynamicProjectData.ts` that defines:
- Project name (directory path)
- Main image name
- Expected image names to check

### 3. Dynamic Loading
- Images are loaded dynamically when the project page loads
- The system checks all expected images and only shows existing ones
- Fallback to static data if dynamic loading fails

## Files Created/Modified

### New Files:
- `src/utils/imageUtils.ts` - Core image detection utilities
- `src/utils/dynamicProjectData.ts` - Project configurations and dynamic data generation
- `src/components/DynamicImageGallery.tsx` - Dynamic gallery component
- `src/hooks/useDynamicProject.ts` - Hook for dynamic project data
- `src/utils/imageChecker.ts` - Additional image checking utilities

### Modified Files:
- `src/pages/ProjectDetails.tsx` - Updated to use dynamic gallery system

## Usage

### Adding New Projects

1. Add project configuration to `PROJECT_CONFIGS` in `src/utils/dynamicProjectData.ts`:

```typescript
"newProjectId": {
  projectName: "project-directory-name",
  mainImageName: "main-image.jpg",
  expectedImages: ["main-image.jpg", "1.jpg", "2.jpg", "3.jpg", "QR.png"]
}
```

2. The system will automatically check for these images and display only existing ones.

### Adding New Images

1. Simply add images to the project directory
2. Update the `expectedImages` array in the project configuration
3. The system will automatically detect and display the new images

### Removing Images

1. Delete images from the project directory
2. The system will automatically stop displaying them (no code changes needed)

## Benefits

1. **Automatic Detection**: No need to manually update image arrays
2. **No Placeholders**: Missing images don't show broken image placeholders
3. **Easy Maintenance**: Just add/remove files from directories
4. **Fallback Support**: Falls back to static data if dynamic loading fails
5. **Performance**: Images are checked in batches to avoid overwhelming the browser

## Configuration Examples

### Al Fauzan Industrial City
```typescript
"1": {
  projectName: "Al fauzan industrial city",
  mainImageName: "hero.jpg",
  expectedImages: ["hero.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "QR.png"]
}
```

### Istanbul Warehousing Plan
```typescript
"11": {
  projectName: "Istanbul",
  mainImageName: "Istanbul.jpg",
  expectedImages: ["Istanbul.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "QR.png"]
}
```

## Technical Details

### Image Checking Process
1. System creates image URLs based on project configuration
2. Attempts to load each image to check existence
3. Filters out non-existent images
4. Returns only existing images for display

### Performance Considerations
- Images are checked in batches of 5 to avoid overwhelming the browser
- Caching could be added for better performance in the future
- Loading states are shown while checking images

### Error Handling
- Graceful fallback to static data if dynamic loading fails
- Console logging for debugging
- User-friendly error messages

## Future Enhancements

1. **Caching**: Cache image existence results for better performance
2. **API Endpoint**: Create backend endpoint to check file existence
3. **Image Optimization**: Automatic image optimization and resizing
4. **Lazy Loading**: Implement lazy loading for better performance
5. **Image Upload**: Direct image upload interface for easier management
