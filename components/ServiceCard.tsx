import type { Service } from '@/types'

export default function ServiceCard({ service }: { service: Service }) {
  return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <div className="text-5xl mb-4">
        {service.metadata.icon || '💼'}
      </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {service.metadata.service_name}
      </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {service.metadata.description}
      </p>
    </div>
  )
}