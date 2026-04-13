import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Daily Ops Checklist
  const daily = await prisma.checklist.create({
    data: {
      name: 'Daily Ops',
      cadence: 'Daily',
      items: {
        create: [
          { text: 'Inbox zero (3 replies)', priority: 4 },
          { text: 'Review pipeline top 3', priority: 5 },
          { text: '1 outbound batch (25 leads)', priority: 4 },
          { text: '15-min learning block', priority: 3 },
          { text: 'Gym / training', priority: 3 },
          { text: 'Log wins & blockers', priority: 3 },
          { text: "Plan tomorrow's top 3", priority: 5 },
        ],
      },
    },
  })
  console.log(`✅ Created checklist: ${daily.name}`)

  // Weekly Ops Checklist
  const weekly = await prisma.checklist.create({
    data: {
      name: 'Weekly Ops',
      cadence: 'Weekly',
      items: {
        create: [
          { text: 'Pipeline review & forecast', priority: 5 },
          { text: 'Publish 1 content piece', priority: 4 },
          { text: 'Client delivery QA', priority: 5 },
          { text: 'Finance + invoices', priority: 4 },
          { text: 'Review metrics & retrospectives', priority: 3 },
        ],
      },
    },
  })
  console.log(`✅ Created checklist: ${weekly.name}`)

  // Ideas
  await prisma.idea.createMany({
    data: [
      { title: 'Voice agent for dental clinics', status: 'Active', priority: 5, tags: 'ai,voice,dental', notes: 'Automate appointment booking and reminders via voice AI.' },
      { title: 'Case-study compendium v2', status: 'Active', priority: 4, tags: 'content,marketing', notes: 'Compile 20 client wins into a polished PDF + landing page.' },
      { title: 'LinkedIn content OS', status: 'Backlog', priority: 3, tags: 'linkedin,content,automation', notes: 'System for 3x/week posting with minimal effort.' },
      { title: 'ComplianceOS India discovery calls', status: 'Active', priority: 5, tags: 'compliance,india,saas', notes: 'Run 10 discovery calls this month.' },
      { title: 'ProsperOps onboarding automation', status: 'Parked', priority: 2, tags: 'automation,onboarding', notes: 'Automate client onboarding flow with Zapier + Notion.' },
      { title: 'SMS follow-up sequence for leads', status: 'Backlog', priority: 3, tags: 'sms,leads,outreach' },
      { title: 'Agency dashboard v2', status: 'Done', priority: 4, tags: 'dashboard,reporting', notes: 'Shipped. Need to iterate on mobile view.' },
      { title: 'Podcast outreach system', status: 'Backlog', priority: 2, tags: 'podcast,outreach' },
      { title: 'AI proposal generator', status: 'Active', priority: 4, tags: 'ai,proposals,automation', notes: 'GPT-powered proposal drafts based on call notes.' },
      { title: 'YouTube SEO strategy', status: 'Parked', priority: 2, tags: 'youtube,seo,content' },
    ],
  })
  console.log('✅ Created 10 ideas')

  // Leads
  await prisma.lead.createMany({
    data: [
      { businessName: 'Bright Smiles Dental', niche: 'Dental', city: 'Austin', source: 'LinkedIn', stage: 'New', website: 'https://brightsmilesdental.com' },
      { businessName: 'Apex Marketing Group', niche: 'Marketing Agency', city: 'New York', source: 'Referral', stage: 'Contacted', email: 'hello@apexmg.com' },
      { businessName: 'LegalEdge LLP', niche: 'Legal', city: 'Chicago', source: 'Cold Call', stage: 'Replied', phone: '+1-312-555-0100' },
      { businessName: 'FitLife Studios', niche: 'Fitness', city: 'Los Angeles', source: 'Email', stage: 'Booked', notes: 'Demo call Thursday 3pm' },
      { businessName: 'CartFlow eCommerce', niche: 'E-Commerce', city: 'Seattle', source: 'LinkedIn', stage: 'Won', email: 'ops@cartflow.io', notes: 'Closed $2,400/mo deal' },
      { businessName: 'PeakPerformance Gym', niche: 'Fitness', city: 'Denver', source: 'Referral', stage: 'Lost', notes: 'Budget too small' },
      { businessName: 'TechLaw Partners', niche: 'Legal', city: 'San Francisco', source: 'LinkedIn', stage: 'New' },
      { businessName: 'GlowUp Aesthetics', niche: 'Medical Spa', city: 'Miami', source: 'Cold Call', stage: 'Contacted' },
      { businessName: 'Nomad Digital Agency', niche: 'Marketing Agency', city: 'Remote', source: 'Email', stage: 'Replied', email: 'growth@nomadagency.co' },
      { businessName: 'Summit Financial', niche: 'Finance', city: 'Boston', source: 'Referral', stage: 'Booked' },
      { businessName: 'CloudNine SaaS', niche: 'Software', city: 'Austin', source: 'LinkedIn', stage: 'New' },
      { businessName: 'PureForm Pilates', niche: 'Fitness', city: 'San Diego', source: 'Cold Call', stage: 'Contacted' },
      { businessName: 'Velocity Motors', niche: 'Automotive', city: 'Phoenix', source: 'Email', stage: 'New' },
      { businessName: 'Hartley & Associates', niche: 'Legal', city: 'Dallas', source: 'Referral', stage: 'Won', notes: 'Contract signed Q1' },
      { businessName: 'BlueSky Media', niche: 'Marketing Agency', city: 'Nashville', source: 'LinkedIn', stage: 'Replied' },
      { businessName: 'Inner Glow Wellness', niche: 'Wellness', city: 'Portland', source: 'Cold Call', stage: 'New' },
      { businessName: 'PackShip Logistics', niche: 'Logistics', city: 'Houston', source: 'Email', stage: 'Contacted' },
      { businessName: 'Streamline Ops', niche: 'Consulting', city: 'Atlanta', source: 'LinkedIn', stage: 'Booked', notes: 'Strategy call Monday' },
      { businessName: 'Fresh Harvest Organics', niche: 'Food & Bev', city: 'Denver', source: 'Referral', stage: 'New' },
      { businessName: 'NextGen Realty', niche: 'Real Estate', city: 'Las Vegas', source: 'Cold Call', stage: 'Lost' },
    ],
  })
  console.log('✅ Created 20 leads')

  // Learning Links
  await prisma.learningLink.createMany({
    data: [
      { url: 'https://www.youtube.com/watch?v=C_78DM8fG6E', title: 'How I Close $10k Deals on Cold Calls', status: 'Queued' },
      { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'Voice AI Agents: The Complete Guide 2024', status: 'Watched' },
      { url: 'https://www.langchain.com/blog/voice-agents', title: 'Building Voice Agents with LangChain', status: 'Queued' },
      { url: 'https://docs.anthropic.com/claude/docs', title: 'Claude API Documentation', status: 'Applied' },
      { url: 'https://www.youtube.com/watch?v=abc123sales', title: 'Alex Hormozi: How to Price Your Offer', status: 'Watched' },
      { url: 'https://www.youtube.com/watch?v=xyz789framework', title: 'Next.js App Router Deep Dive', status: 'Queued' },
      { url: 'https://prisma.io/blog/schema-design', title: 'Prisma Schema Design Best Practices', status: 'Queued' },
      { url: 'https://www.youtube.com/watch?v=ai-frameworks-2024', title: 'AI Frameworks Comparison: LangGraph vs CrewAI', status: 'Queued' },
    ],
  })
  console.log('✅ Created 8 learning links')

  // Activity Log
  await prisma.activityLog.createMany({
    data: [
      { type: 'system', message: 'Friday Command Center initialized', metadata: JSON.stringify({ version: '0.1.0' }) },
      { type: 'lead', message: 'Lead "FitLife Studios" moved to Booked', metadata: JSON.stringify({ stage: 'Booked' }) },
      { type: 'idea', message: 'New idea created: AI proposal generator', metadata: JSON.stringify({ priority: 4 }) },
      { type: 'checklist', message: 'Completed: Review pipeline top 3', metadata: JSON.stringify({ checklist: 'Daily Ops' }) },
      { type: 'lead', message: 'New lead added: CloudNine SaaS via LinkedIn', metadata: JSON.stringify({ source: 'LinkedIn' }) },
    ],
  })
  console.log('✅ Created 5 activity log entries')

  console.log('\n🎉 Seeding complete!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
