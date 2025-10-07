import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import type { TeamMember } from '@/types'

export const metadata = {
  title: 'Our Team | Professional Services Company',
  description: 'Meet the talented professionals behind our success',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals who bring creativity, expertise, and dedication to every project
          </p>
        </div>

        {teamMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No team members available at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member: TeamMember) => (
              <TeamMemberCard key={member.id} member={member as TeamMember} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}