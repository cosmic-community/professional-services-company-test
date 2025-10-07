# Professional Services Company Website

![App Preview](https://imgix.cosmicjs.com/f450dd80-a38a-11f0-8dcc-651091f6a7c0-photo-1556742049-0cfed4f6a45d-1759847763940.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 15 and Cosmic CMS. Showcase your services, team members, client testimonials, and case studies with a beautiful, responsive design that works perfectly on all devices.

## ✨ Features

- **Services Showcase**: Display all your services with descriptions and custom emoji icons
- **Team Profiles**: Professional presentation of team members with photos, roles, and bios
- **Client Testimonials**: Build trust with authentic client testimonials and photos
- **Case Studies**: Detailed project showcases with challenges, solutions, and measurable results
- **Responsive Design**: Mobile-first design that looks great on all screen sizes
- **Dynamic Content**: All content managed through Cosmic CMS for easy updates
- **SEO Optimized**: Proper metadata and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Next.js 15 App Router for optimal loading speeds
- **TypeScript**: Fully typed for better development experience and fewer errors
- **Modern UI**: Clean, professional interface with smooth animations

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68e5250090a94dd865f464b2&clone_repository=68e5264c90a94dd865f464d1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 15**: React framework with App Router for server-side rendering and optimal performance
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Cosmic CMS**: Headless CMS for content management
- **React 18**: Latest React features including Server Components
- **Inter Font**: Professional, modern font family

## 📋 Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with bucket access
- Git for version control

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd company-website
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**
```bash
bun run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Team Members
```typescript
async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Case Study by Slug
```typescript
async function getCaseStudy(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}
```

## 🌐 Cosmic CMS Integration

This application is fully integrated with Cosmic CMS. All content is dynamically fetched from your Cosmic bucket:

- **Services**: Managed in the "Services" object type
- **Team Members**: Managed in the "Team Members" object type
- **Testimonials**: Managed in the "Testimonials" object type
- **Case Studies**: Managed in the "Case Studies" object type

To update content:
1. Log in to your Cosmic dashboard
2. Navigate to your bucket
3. Edit objects in the respective object types
4. Changes appear immediately on your website

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Click "Deploy"

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Add environment variables in Netlify dashboard
4. Deploy

### Environment Variables Setup

For both Vercel and Netlify, add these environment variables in your deployment platform's dashboard:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📖 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── team/
│   │   └── page.tsx         # Team page
│   ├── testimonials/
│   │   └── page.tsx         # Testimonials page
│   ├── case-studies/
│   │   ├── page.tsx         # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx     # Individual case study
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── ServiceCard.tsx      # Service card component
│   ├── TeamMemberCard.tsx   # Team member card component
│   ├── TestimonialCard.tsx  # Testimonial card component
│   ├── CaseStudyCard.tsx    # Case study card component
│   └── CosmicBadge.tsx      # Cosmic branding badge
├── lib/
│   └── cosmic.ts            # Cosmic SDK configuration
├── types.ts                 # TypeScript type definitions
└── public/
    └── dashboard-console-capture.js  # Console logging for dashboard
```

## 🔧 Configuration Files

- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## 📝 Content Types

### Services
- Service Name (text)
- Description (textarea)
- Icon (emoji)

### Team Members
- Name (text)
- Role (text)
- Bio (textarea)
- Photo (file/image)

### Testimonials
- Quote (textarea)
- Author Name (text)
- Company (text)
- Author Photo (file/image)

### Case Studies
- Title (text)
- Client Name (text)
- Challenge (textarea)
- Solution (markdown)
- Results (textarea)
- Featured Image (file/image)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support and questions:
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/your-repo/issues)

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) and [Next.js](https://nextjs.org)

<!-- README_END -->