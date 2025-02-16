export async function loadRawFileContent(path: string): Promise<string> {
  const response = await fetch(path)
  if (!response.ok) {
    throw new Error(`Failed to load file: ${path}`)
  }
  return response.text()
}
