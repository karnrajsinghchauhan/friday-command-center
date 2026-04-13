export async function fetchUrlTitle(url: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (Friday Command Center; +https://friday.local)' },
    })
    clearTimeout(timeoutId)
    if (!response.ok) return null
    const html = await response.text()
    const match = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    return match ? match[1].trim().slice(0, 200) : null
  } catch {
    return null
  }
}

export function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}
