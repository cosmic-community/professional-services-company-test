import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import type { CaseStudy } from '@/types'

export const metadata = {
  title: 'Case Studies | Professional Services Company',
  description: 'Explore our successful client projects and real results',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable results
          </p>
        </div>

        {caseStudies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No case studies available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy: CaseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}