import Link from 'next/link'
import type { CaseStudy } from '@/types'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        {caseStudy.metadata.featured_image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <p className="text-orange-500 font-semibold mb-2">
            {caseStudy.metadata.client_name}
          </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {caseStudy.metadata.title}
          </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
            {caseStudy.metadata.challenge}
          </p>
            <span className="text-blue-900 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300">
            Read Case Study →
          </span>
        </div>
      </div>
    </Link>
  )
}