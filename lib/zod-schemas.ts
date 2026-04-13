import { z } from 'zod'

export const IdeaStatusEnum = z.enum(['Backlog', 'Active', 'Parked', 'Done'])
export const PriorityEnum = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
export const CadenceEnum = z.enum(['Daily', 'Weekly', 'OneOff'])
export const LeadStageEnum = z.enum(['New', 'Contacted', 'Replied', 'Booked', 'Won', 'Lost'])
export const LearningStatusEnum = z.enum(['Queued', 'Watched', 'Applied'])

export const CreateIdeaSchema = z.object({
  title: z.string().min(1).max(300),
  notes: z.string().optional(),
  tags: z.string().optional().default(''),
  status: IdeaStatusEnum.optional().default('Backlog'),
  priority: z.number().int().min(1).max(5).optional().default(3),
})

export const UpdateIdeaSchema = z.object({
  title: z.string().min(1).max(300).optional(),
  notes: z.string().optional(),
  tags: z.string().optional(),
  status: IdeaStatusEnum.optional(),
  priority: z.number().int().min(1).max(5).optional(),
})

export const CreateChecklistSchema = z.object({
  name: z.string().min(1).max(200),
  cadence: CadenceEnum.optional().default('Daily'),
})

export const UpdateChecklistSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  cadence: CadenceEnum.optional(),
})

export const CreateChecklistItemSchema = z.object({
  checklistId: z.string().min(1),
  text: z.string().min(1).max(500),
  dueAt: z.string().datetime().optional(),
  priority: z.number().int().min(1).max(5).optional().default(3),
})

export const UpdateChecklistItemSchema = z.object({
  text: z.string().min(1).max(500).optional(),
  done: z.boolean().optional(),
  dueAt: z.string().datetime().nullable().optional(),
  priority: z.number().int().min(1).max(5).optional(),
})

export const CreateLeadSchema = z.object({
  businessName: z.string().min(1).max(300),
  niche: z.string().optional(),
  city: z.string().optional(),
  website: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  source: z.string().optional(),
  stage: LeadStageEnum.optional().default('New'),
  notes: z.string().optional(),
})

export const UpdateLeadSchema = z.object({
  businessName: z.string().min(1).max(300).optional(),
  niche: z.string().optional(),
  city: z.string().optional(),
  website: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  source: z.string().optional(),
  stage: LeadStageEnum.optional(),
  notes: z.string().optional(),
})

export const CreateLearningLinkSchema = z.object({
  url: z.string().url(),
  title: z.string().optional(),
  notes: z.string().optional(),
  status: LearningStatusEnum.optional().default('Queued'),
})

export const UpdateLearningLinkSchema = z.object({
  url: z.string().url().optional(),
  title: z.string().optional(),
  notes: z.string().optional(),
  status: LearningStatusEnum.optional(),
})

// Friday API schemas
export const FridayIdeaSchema = z.object({
  title: z.string().min(1),
  notes: z.string().optional(),
  tags: z.array(z.string()).optional(),
  priority: PriorityEnum.optional(),
  status: IdeaStatusEnum.optional(),
})

export const FridayTaskSchema = z.object({
  checklistName: z.string().min(1),
  cadence: CadenceEnum.optional(),
  text: z.string().min(1),
  dueAt: z.string().datetime().optional(),
  priority: PriorityEnum.optional(),
})

export const FridayLeadSchema = z.object({
  businessName: z.string().min(1),
  niche: z.string().optional(),
  city: z.string().optional(),
  website: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  source: z.string().optional(),
  stage: LeadStageEnum.optional(),
  notes: z.string().optional(),
})

export const FridayLogSchema = z.object({
  type: z.string().min(1),
  message: z.string().min(1),
  metadata: z.record(z.string(), z.unknown()).optional(),
})

export const FridayMarkDoneSchema = z.object({
  checklistItemId: z.string().min(1),
})

export const ImportSchema = z.object({
  schemaVersion: z.literal(1),
  exportedAt: z.string(),
  data: z.object({
    ideas: z.array(z.any()),
    checklists: z.array(z.any()),
    checklistItems: z.array(z.any()),
    leads: z.array(z.any()),
    learningLinks: z.array(z.any()),
    activityLog: z.array(z.any()),
  }),
})
