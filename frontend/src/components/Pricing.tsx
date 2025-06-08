import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out NekoFrame",
      icon: Star,
      color: "from-gray-500 to-gray-600",
      features: [
        "5 image generations per month",
        "Basic Ghibli styles",
        "Standard resolution (1024x1024)",
        "Community gallery access",
        "Basic export options"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For creative enthusiasts",
      icon: Zap,
      color: "from-emerald-500 to-blue-500",
      features: [
        "100 image generations per month",
        "All Ghibli styles & themes",
        "High resolution (2048x2048)",
        "Priority processing",
        "Advanced export & sharing",
        "Private gallery",
        "History & favorites",
        "Email support"
      ],
      popular: true
    },
    {
      name: "Studio",
      price: "$24.99",
      period: "per month",
      description: "For professional creators",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      features: [
        "Unlimited image generations",
        "Exclusive premium styles",
        "Ultra HD resolution (4096x4096)",
        "Instant processing",
        "Commercial usage rights",
        "API access",
        "Custom style training",
        "Priority support",
        "Team collaboration tools"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300bcd4%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Creative Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as your creativity grows. All plans include our magical AI transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-emerald-500 scale-105 ring-4 ring-emerald-500/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
              } transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                } transform hover:scale-105`}
              >
                {plan.name === 'Free' ? 'Get Started Free' : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans include 7-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>No setup fees</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Cancel anytime</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Secure payments</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;