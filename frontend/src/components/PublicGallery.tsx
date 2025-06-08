import React, { useState } from 'react';
import { Heart, Share2, Download, Eye, MoreHorizontal } from 'lucide-react';

const PublicGallery: React.FC = () => {
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  // Sample gallery data
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 124,
      views: 1520,
      style: 'Totoro Style',
      author: 'ArtLover42',
      isPublic: true
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 89,
      views: 890,
      style: 'Spirited Away',
      author: 'CreativePixel',
      isPublic: true
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 234,
      views: 2140,
      style: 'Princess Mononoke',
      author: 'DigitalDreamer',
      isPublic: true
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 156,
      views: 1680,
      style: 'Castle in the Sky',
      author: 'SkyWatcher',
      isPublic: true
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 198,
      views: 1920,
      style: "Howl's Moving Castle",
      author: 'MagicMaker',
      isPublic: false
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 67,
      views: 720,
      style: "Kiki's Delivery Service",
      author: 'FlyHigh99',
      isPublic: true
    }
  ];

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  const toggleVisibility = (imageId: number) => {
    // In a real app, this would update the database
    console.log(`Toggle visibility for image ${imageId}`);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Community Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover amazing Ghibli-style artwork created by our community of artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={`${image.style} artwork`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Download className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Privacy indicator */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleVisibility(image.id)}
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      image.isPublic
                        ? 'bg-green-500/80 text-white'
                        : 'bg-gray-500/80 text-white'
                    }`}
                  >
                    {image.isPublic ? 'Public' : 'Private'}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{image.style}</h3>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">by {image.author}</p>
                
                {/* Stats and actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{image.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{image.likes + (likedImages.has(image.id) ? 1 : 0)}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleLike(image.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        likedImages.has(image.id)
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-500'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-500">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Load More Artworks
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicGallery;