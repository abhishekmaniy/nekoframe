import React from 'react';
import { Download, Share2, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

const ExportDialog: React.FC<ExportDialogProps> = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen || !imageUrl) return null;

  const socialPlatforms = [
    { name: 'Twitter', icon: Twitter, color: 'bg-blue-500 hover:bg-blue-600', url: 'https://twitter.com/intent/tweet' },
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-700 hover:bg-blue-800', url: 'https://facebook.com/sharer/sharer.php' },
    { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-600 hover:bg-blue-700', url: 'https://linkedin.com/sharing/share-offsite' }
  ];

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'nekoframe-ghibli-art.jpg';
    link.click();
  };

  const shareToSocial = (platform: string, url?: string) => {
    if (url) {
      const shareUrl = `${url}?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out this amazing Ghibli art I created with NekoFrame!')}`;
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const resolutions = [
    { name: 'Small (512x512)', size: '512x512', popular: false },
    { name: 'Medium (1024x1024)', size: '1024x1024', popular: true },
    { name: 'Large (2048x2048)', size: '2048x2048', popular: false },
    { name: 'Ultra HD (4096x4096)', size: '4096x4096', popular: false }
  ];

  return (
    <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Export Your Artwork</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Preview */}
          <div className="text-center">
            <img src={imageUrl} alt="Generated artwork" className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg" />
          </div>

          {/* Resolution Selection */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Choose Resolution</h4>
            <div className="grid grid-cols-2 gap-3">
              {resolutions.map((resolution, index) => (
                <button
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative ${
                    resolution.popular
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                  }`}
                >
                  {resolution.popular && (
                    <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="font-medium text-gray-900 dark:text-white">{resolution.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{resolution.size}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Download Options */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Download Options</h4>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={downloadImage}
                className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download JPG</span>
              </button>
              <button
                onClick={downloadImage}
                className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download PNG</span>
              </button>
            </div>
          </div>

          {/* Social Sharing */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>Share on Social Media</span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialPlatforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => shareToSocial(platform.name, platform.url)}
                  className={`flex items-center justify-center space-x-2 p-4 text-white rounded-xl transition-all transform hover:scale-105 ${platform.color}`}
                >
                  <platform.icon className="w-5 h-5" />
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Make Public Option */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white">Share in Public Gallery</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Let others discover and like your artwork</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportDialog;