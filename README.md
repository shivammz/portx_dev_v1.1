# PortfolioX.dev - AI-Powered Portfolio Builder

A modern, premium landing page for PortfolioX.dev built with Next.js 16, Tailwind CSS, and Framer Motion. This project implements a complete frontend for an AI-powered portfolio builder that transforms resumes into beautiful, professional portfolios in seconds.

## 🚀 Features

- **AI-Powered Portfolio Generation**: Upload your resume and get a professional portfolio instantly
- **Multiple Templates**: Choose from Modern, Pro, and Photo-focused templates
- **Real-time Preview**: See your portfolio as it's being built
- **Instant Hosting**: Deploy portfolios to custom subdomains immediately
- **Responsive Design**: Optimized for all devices and screen sizes
- **Premium UI/UX**: Apple-level design aesthetics with glassmorphism and smooth animations
- **Accessibility**: Full keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Processing**: PDF.js (stubbed for demo)
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfoliox-dev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── CTAs.tsx         # Call-to-action buttons
│   │   ├── ManualForm.tsx   # Manual portfolio creation form
│   │   ├── ResumeUpload.tsx # Resume upload component
│   │   ├── ProgressBuilder.tsx # AI building progress
│   │   ├── TemplatePreview.tsx # Portfolio preview
│   │   ├── TrustLayer.tsx   # Social proof sections
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Pricing.tsx      # Pricing plans
│   │   └── ...
│   ├── templates/           # Portfolio templates
│   │   ├── Modern01.tsx     # Minimal modern template
│   │   ├── Modern02.tsx     # Gradient modern template
│   │   ├── Pro03.tsx        # Professional dark template
│   │   └── Photo04.tsx      # Photo-focused template
│   ├── lib/                 # Utilities and data
│   │   ├── demoData.ts      # Demo user data
│   │   ├── parsePdfClient.ts # PDF parsing utilities
│   │   └── utils.ts         # Helper functions
│   ├── api/                 # API routes
│   │   └── parse-resume/    # Resume parsing endpoint
│   └── ...
├── public/images/           # Static assets (placeholders)
└── ...
```

## 🎨 Design System

The project uses a carefully crafted design system with:

- **Colors**: Purple (#7C3AED), Pink (#EC4899), Blue (#3B82F6)
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: 8px grid system
- **Components**: Glassmorphism effects, gradient buttons, smooth animations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for production configuration:

```env
# OpenAI API (for production)
OPENAI_API_KEY=your_openai_key_here

# Database (Neon/Supabase)
DATABASE_URL=your_database_url_here

# Authentication (NextAuth.js)
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Hosting API (Vercel/Netlify)
HOSTING_API_KEY=your_hosting_api_key_here
```

### Replacing Stubs with Real Services

1. **OpenAI Integration**: Replace the stub in `/app/api/parse-resume/route.ts` with actual OpenAI API calls
2. **Database**: Connect to Neon, Supabase, or your preferred database
3. **Authentication**: Implement NextAuth.js for user management
4. **Hosting**: Integrate with Vercel or Netlify APIs for subdomain deployment
5. **PDF Processing**: Replace PDF.js stub with actual implementation

## 🚀 Deployment

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Vercel** (recommended):
```bash
npx vercel
```

3. **Environment Variables**: Set up production environment variables in your deployment platform

## 🧪 Testing Resume Upload Flow

1. Use the provided mock resume text in the upload component
2. The system will simulate PDF text extraction
3. Review the parsed data in the editable form
4. Continue to see the AI building progress
5. Preview the generated portfolio

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios

## 🎯 Performance

- Static generation where possible
- Optimized images with Next.js Image component
- Minimal JavaScript bundles
- Efficient CSS with Tailwind's purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: hello@portfoliox.dev
- Documentation: [Coming Soon]
- Issues: GitHub Issues

---

Built with ❤️ for developers worldwide.