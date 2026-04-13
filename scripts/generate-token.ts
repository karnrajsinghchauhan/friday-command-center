import { randomBytes } from 'crypto'

const token = randomBytes(36).toString('base64url')
console.log(`Generated Friday API Token:\n\nFRIDAY_API_TOKEN="${token}"\n`)
console.log('Add this to your .env file.')
