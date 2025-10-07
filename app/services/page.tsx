import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import type { Service } from '@/types'

export const metadata = {
  title: 'Our Services | Professional Services Company',
  description: 'Explore our comprehensive range of professional services',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to help your business thrive in the digital age
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service as Service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}