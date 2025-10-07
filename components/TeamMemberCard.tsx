import type { TeamMember } from '@/types'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {member.metadata.photo && (
        <div className="aspect-square overflow-hidden">
          <img
            src={`${member.metadata.photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={member.metadata.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {member.metadata.name}
        </h3>
        <p className="text-orange-500 font-semibold mb-3">
          {member.metadata.role}
        </p>
        {member.metadata.bio && (
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {member.metadata.bio}
          </p>
        )}
      </div>
    </div>
  )
}