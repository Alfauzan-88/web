import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface WebsiteContent {
  id: number;
  section: string;
  key: string;
  value_en: string;
  value_ar: string;
  type: string;
  is_active: boolean;
  order: number;
}

interface GroupedContent {
  [section: string]: WebsiteContent[];
}

const WebsiteContentManager: React.FC = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<GroupedContent>({});
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<WebsiteContent | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [uploading, setUploading] = useState(false);

  const sections = [
    { value: 'hero', label: 'Hero Section' },
    { value: 'about', label: 'About Section' },
    { value: 'projects', label: 'Projects Section' },
    { value: 'footer', label: 'Footer Section' },
    { value: 'navigation', label: 'Navigation' },
    { value: 'contact', label: 'Contact Information' },
  ];

  const contentTypes = [
    { value: 'text', label: 'Text' },
    { value: 'image', label: 'Image' },
    { value: 'video', label: 'Video' },
    { value: 'boolean', label: 'Boolean' },
    { value: 'json', label: 'JSON' },
  ];

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      // For demo purposes, we'll use static data
      // In a real implementation, this would come from the API
      const demoContent: GroupedContent = {
        hero: [
          {
            id: 1,
            section: 'hero',
            key: 'journey_liner',
            value_en: 'JOURNEY OF DEVELOPMENT',
            value_ar: 'رحلة التطوير',
            type: 'text',
            is_active: true,
            order: 1
          }
        ],
        about: [
          {
            id: 2,
            section: 'about',
            key: 'title',
            value_en: 'Leading Real Estate Development',
            value_ar: 'قيادة التطوير العقاري',
            type: 'text',
            is_active: true,
            order: 1
          }
        ]
      };
      setContent(demoContent);
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: WebsiteContent) => {
    setEditingItem(item);
  };

  const handleSave = async (updatedItem: WebsiteContent) => {
    try {
      // For demo purposes, just update local state
      // In a real implementation, this would call the API
      console.log('Content updated:', updatedItem);
      setEditingItem(null);
      // Reload content to reflect changes
      loadContent();
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      try {
        // For demo purposes, just log the action
        // In a real implementation, this would call the API
        console.log('Content deleted:', id);
        loadContent();
      } catch (error) {
        console.error('Error deleting content:', error);
      }
    }
  };

  const handleToggleActive = async (id: number) => {
    try {
      // For demo purposes, just log the action
      // In a real implementation, this would call the API
      console.log('Content toggled:', id);
      loadContent();
    } catch (error) {
      console.error('Error toggling content:', error);
    }
  };

  const handleAdd = async (newContent: Omit<WebsiteContent, 'id'>) => {
    try {
      // For demo purposes, just log the action
      // In a real implementation, this would call the API
      console.log('Content added:', newContent);
      setShowAddForm(false);
      loadContent();
    } catch (error) {
      console.error('Error creating content:', error);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      setUploading(true);
      // For demo purposes, return a default project image
      // In a real implementation, this would upload to the server
      console.log('Image uploaded:', file.name);
      return '/assets/images/projects/Al fauzan industrial city/hero.jpg';
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const renderContentItem = (item: WebsiteContent) => {
    const isEditing = editingItem?.id === item.id;

    if (isEditing) {
      return (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                English Content
              </label>
              <textarea
                value={editingItem.value_en}
                onChange={(e) => setEditingItem({ ...editingItem, value_en: e.target.value })}
                className="w-full p-2 border rounded-md"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Arabic Content
              </label>
              <textarea
                value={editingItem.value_ar}
                onChange={(e) => setEditingItem({ ...editingItem, value_ar: e.target.value })}
                className="w-full p-2 border rounded-md"
                rows={3}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => handleSave(editingItem)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditingItem(null)}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{item.key}</h3>
            <p className="text-sm text-gray-600">Section: {item.section}</p>
            <p className="text-sm text-gray-600">Type: {item.type}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(item)}
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => handleToggleActive(item.id)}
              className={`px-3 py-1 rounded-md text-sm ${
                item.is_active
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {item.is_active ? 'Active' : 'Inactive'}
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-1">English:</h4>
            {item.type === 'image' ? (
              <img src={item.value_en} alt="Content" className="w-full h-32 object-cover rounded" />
            ) : (
              <p className="text-gray-900">{item.value_en}</p>
            )}
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Arabic:</h4>
            {item.type === 'image' ? (
              <img src={item.value_ar} alt="Content" className="w-full h-32 object-cover rounded" />
            ) : (
              <p className="text-gray-900" dir="rtl">{item.value_ar}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const AddContentForm: React.FC = () => {
    const [formData, setFormData] = useState({
      section: 'hero',
      key: '',
      value_en: '',
      value_ar: '',
      type: 'text',
      order: 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleAdd(formData);
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-4">Add New Content</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Section
              </label>
              <select
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                {sections.map((section) => (
                  <option key={section.value} value={section.value}>
                    {section.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Key
              </label>
              <input
                type="text"
                value={formData.key}
                onChange={(e) => setFormData({ ...formData, key: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                {contentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                English Content
              </label>
              <textarea
                value={formData.value_en}
                onChange={(e) => setFormData({ ...formData, value_en: e.target.value })}
                className="w-full p-2 border rounded-md"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Arabic Content
              </label>
              <textarea
                value={formData.value_ar}
                onChange={(e) => setFormData({ ...formData, value_ar: e.target.value })}
                className="w-full p-2 border rounded-md"
                rows={3}
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Content
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading website content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Website Content Manager
          </h1>
          <p className="text-gray-600">
            Manage all website content including text, images, and settings
          </p>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
          >
            {showAddForm ? 'Cancel' : 'Add New Content'}
          </button>
        </div>

        {showAddForm && <AddContentForm />}

        <div className="space-y-8">
          {Object.entries(content).map(([section, items]) => (
            <div key={section}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 capitalize">
                {section} Section
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {items.map(renderContentItem)}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(content).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No content found. Add some content to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteContentManager;

