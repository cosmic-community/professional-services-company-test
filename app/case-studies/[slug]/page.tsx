// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import Link from 'next/link'
import type { CaseStudy } from '@/types'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  
  return caseStudies.map((caseStudy: CaseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }
  
  const typedCaseStudy = caseStudy as CaseStudy
  
  return {
    title: `${typedCaseStudy.metadata.title} | Case Studies`,
    description: typedCaseStudy.metadata.challenge,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Study Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/case-studies"
            className="text-blue-900 hover:text-blue-700 font-semibold text-lg"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }
  
  const typedCaseStudy = caseStudy as CaseStudy

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="text-blue-900 hover:text-blue-700 font-semibold mb-8 inline-block"
        >
          ← Back to Case Studies
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {typedCaseStudy.metadata.title}
          </h1>
          <p className="text-2xl text-orange-500 font-semibold">
            {typedCaseStudy.metadata.client_name}
          </p>
        </header>

        {typedCaseStudy.metadata.featured_image && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${typedCaseStudy.metadata.featured_image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={typedCaseStudy.metadata.title}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              {typedCaseStudy.metadata.challenge}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <div
              className="text-gray-700 leading-relaxed prose prose-lg"
              dangerouslySetInnerHTML={{
                __html: typedCaseStudy.metadata.solution
                  .replace(/^## /gm, '<h3 class="text-2xl font-bold mt-6 mb-3">')
                  .replace(/^- \*\*(.+?)\*\*:/gm, '<li><strong>$1:</strong>')
                  .replace(/\n/g, '<br />'),
              }}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Results</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                {typedCaseStudy.metadata.results}
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to achieve similar results?
            </h3>
            <Link
              href="/services"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}