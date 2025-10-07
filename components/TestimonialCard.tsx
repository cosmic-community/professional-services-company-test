import type { Testimonial } from '@/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <svg
          className="h-10 w-10 text-orange-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.metadata.quote}"
      </p>
      <div className="flex items-center gap-4">
        {testimonial.metadata.author_photo && (
          <img
            src={`${testimonial.metadata.author_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.author_name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-bold text-gray-900">
            {testimonial.metadata.author_name}
          </p>
          {testimonial.metadata.company && (
            <p className="text-gray-600 text-sm">
              {testimonial.metadata.company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}