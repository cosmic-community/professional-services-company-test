import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'
import type { Testimonial } from '@/types'

export const metadata = {
  title: 'Client Testimonials | Professional Services Company',
  description: 'See what our clients say about working with us',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
      <div className="min-h-screen py-16 bg-blue-900 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Client Testimonials</h1>
            <p className="text-xl text-blue-100 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
              <p className="text-blue-100 dark:text-gray-400 text-lg">No testimonials available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial as Testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}