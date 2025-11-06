'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Basic modern portfolio',
      'Up to 2 portfolios',
      '24-hour subdomain hosting',
      'Mobile responsive design',
      'Basic templates',
      'Email support'
    ],
    cta: 'Get Started',
    popular: false,
    color: 'border-gray-700'
  },
  {
    name: 'Standard',
    price: '$9',
    period: 'per month',
    description: 'Most popular for professionals',
    features: [
      'Modern UI templates',
      'Up to 20 portfolios',
      '1-year subdomain hosting',
      'Custom domain support',
      'Resume generator',
      'Analytics dashboard',
      'Priority support',
      'SEO optimization'
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'border-brand-purple'
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For serious professionals',
    features: [
      'Premium + 3D templates',
      'Unlimited portfolios',
      'Lifetime hosting',
      'Custom domain included',
      'Advanced analytics',
      'Source code download',
      'White-label options',
      'API access',
      'Dedicated support'
    ],
    cta: 'Go Pro',
    popular: false,
    color: 'border-yellow-500'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that's right for you. Start free and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative glass rounded-2xl p-8 ${plan.color} border-2 ${
                plan.popular ? 'scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-brand text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : plan.name === 'Pro'
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'btn-secondary'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>

              {/* Additional Info */}
              {plan.name === 'Free' && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  No credit card required
                </p>
              )}
              {plan.name === 'Standard' && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  14-day free trial • Cancel anytime
                </p>
              )}
              {plan.name === 'Pro' && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  Everything you need for professional success
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                Can I upgrade or downgrade anytime?
              </h4>
              <p className="text-gray-400">
                Yes! You can change your plan at any time. Upgrades take effect immediately, 
                and downgrades take effect at the end of your current billing cycle.
              </p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                What happens to my portfolios if I cancel?
              </h4>
              <p className="text-gray-400">
                Your portfolios will remain accessible for 30 days after cancellation. 
                You can export your data or reactivate your account during this period.
              </p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                Do you offer refunds?
              </h4>
              <p className="text-gray-400">
                We offer a 30-day money-back guarantee for all paid plans. 
                If you're not satisfied, we'll refund your payment in full.
              </p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                Can I use my own domain?
              </h4>
              <p className="text-gray-400">
                Yes! Standard and Pro plans include custom domain support. 
                You can connect your own domain or use our free subdomain.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}