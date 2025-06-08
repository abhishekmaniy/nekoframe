import React from 'react';
import { Upload, Palette, Download, Share2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Simply drag and drop or click to upload your favorite photo",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Palette,
      title: "Choose Your Style",
      description: "Select from various Studio Ghibli-inspired themes and moods",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Download,
      title: "AI Magic Happens",
      description: "Our advanced AI transforms your photo into stunning Ghibli art",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Share2,
      title: "Share & Enjoy",
      description: "Download your masterpiece and share it with the world",
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your photos into magical Studio Ghibli artwork in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              )}
              
              <div className="relative z-10 text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:to-gray-700 transform group-hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot placeholder */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            See NekoFrame in Action
          </h3>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 max-w-4xl mx-auto">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  App Screenshots Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;