import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function to get services
export async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

// Helper function to get team members
export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

// Helper function to get testimonials
export async function getTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

// Helper function to get case studies
export async function getCaseStudies() {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return []
    }
    throw new Error('Failed to fetch case studies')
  }
}

// Helper function to get a single case study by slug
export async function getCaseStudy(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return null
    }
    throw new Error('Failed to fetch case study')
  }
}