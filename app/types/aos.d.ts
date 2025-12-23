// declare module 'aos'

declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number
      easing?: string
      once?: boolean
      offset?: number
    }) => void
    refresh: () => void
  }

  export default AOS
}