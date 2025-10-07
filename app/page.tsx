import Link from 'next/link'
import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import type { Service, TeamMember, Testimonial, CaseStudy } from '@/types'

export default async function HomePage() {
  const [services, teamMembers, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800 text-white py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transforming Businesses Through Innovation
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge solutions that drive growth, enhance efficiency, and create lasting value for our clients.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/services"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Our Services
              </Link>
              <Link
                href="/case-studies"
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service: Service) => (
              <ServiceCard key={service.id} service={service as Service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
                className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      {caseStudies.length > 0 && (
          <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real results for real businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.slice(0, 2).map((caseStudy: CaseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                  className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Team Preview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member: TeamMember) => (
              <TeamMemberCard key={member.id} member={member as TeamMember} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/team"
                className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg"
            >
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
          <section className="py-16 bg-blue-900 dark:bg-gray-900 text-white transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial: Testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial as Testimonial} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                  className="text-white hover:text-blue-200 dark:hover:text-gray-300 font-semibold text-lg"
              >
                Read More Testimonials →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help transform your business
          </p>
          <Link
            href="/services"
            className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-lg font-semibold text-lg inline-block transition-colors duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  )
}