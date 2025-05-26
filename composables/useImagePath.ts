export const useImagePath = (path: string) => {
  const config = useRuntimeConfig()
  return `${config.app.baseURL}${path.replace(/^\//, '')}`
}