import React, { useState, useRef } from 'react';
import { Upload, X, Download, Settings, History, Image as ImageIcon, Palette, Sparkles } from 'lucide-react';
import ExportDialog from './ExportDialog';

interface ImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ isOpen, onClose }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('totoro');
  const [selectedType, setSelectedType] = useState('album');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const styles = [
    { id: 'totoro', name: 'My Neighbor Totoro', color: 'from-green-500 to-emerald-500' },
    { id: 'spirited', name: 'Spirited Away', color: 'from-blue-500 to-purple-500' },
    { id: 'mononoke', name: 'Princess Mononoke', color: 'from-red-500 to-pink-500' },
    { id: 'castle', name: 'Castle in the Sky', color: 'from-cyan-500 to-blue-500' },
    { id: 'howl', name: "Howl's Moving Castle", color: 'from-purple-500 to-indigo-500' },
    { id: 'kiki', name: "Kiki's Delivery Service", color: 'from-orange-500 to-red-500' }
  ];

  const types = [
    { id: 'album', name: 'Album Art', icon: ImageIcon },
    { id: 'story', name: 'Story Mode', icon: Sparkles },
    { id: 'portrait', name: 'Portrait', icon: Palette },
    { id: 'landscape', name: 'Landscape', icon: ImageIcon }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!uploadedImage) return;
    
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setGeneratedImage(`https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=800`);
      setIsGenerating(false);
    }, 3000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">NekoFrame Studio</h2>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'upload' 
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <Upload className="w-4 h-4 inline mr-2" />
                Upload
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'history' 
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <History className="w-4 h-4 inline mr-2" />
                History
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Settings
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
          {activeTab === 'upload' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Panel - Upload & Controls */}
              <div className="space-y-6">
                {/* Upload Area */}
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {uploadedImage ? (
                    <div className="relative">
                      <img src={uploadedImage} alt="Uploaded" className="max-w-full max-h-64 mx-auto rounded-lg" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedImage(null);
                        }}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Drop your image here
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        or click to browse
                      </p>
                    </div>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {/* Generation Type */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generation Type</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedType === type.id
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                        }`}
                      >
                        <type.icon className="w-6 h-6 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ghibli Style</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {styles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`p-3 rounded-xl border-2 transition-all ${
                          selectedStyle === style.id
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                        }`}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${style.color} rounded-lg mx-auto mb-2`}></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{style.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!uploadedImage || isGenerating}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating Magic...</span>
                    </div>
                  ) : (
                    'Generate Ghibli Art'
                  )}
                </button>
              </div>

              {/* Right Panel - Result */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Generated Result</h3>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                  {generatedImage ? (
                    <div className="text-center">
                      <img src={generatedImage} alt="Generated" className="max-w-full max-h-80 mx-auto rounded-lg shadow-lg" />
                      <div className="flex space-x-4 mt-6">
                        <button
                          onClick={() => setIsExportOpen(true)}
                          className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2"
                        >
                          <Download className="w-5 h-5" />
                          <span>Export</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Your generated artwork will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="text-center py-12">
              <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Generation History</h3>
              <p className="text-gray-600 dark:text-gray-300">Your previous generations will appear here</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="text-center py-12">
              <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Settings</h3>
              <p className="text-gray-600 dark:text-gray-300">Customize your generation preferences</p>
            </div>
          )}
        </div>
      </div>

      <ExportDialog
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        imageUrl={generatedImage}
      />
    </div>
  );
};

export default ImageUpload;