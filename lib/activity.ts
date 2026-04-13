import { prisma } from './prisma'

interface WriteActivityInput {
  type: string
  message: string
  metadata?: Record<string, unknown>
}

export async function writeActivity({ type, message, metadata }: WriteActivityInput): Promise<void> {
  await prisma.activityLog.create({
    data: {
      type,
      message,
      metadata: metadata ? JSON.stringify(metadata) : null,
    },
  })
}
