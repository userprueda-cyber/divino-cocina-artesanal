declare module '@splinetool/react-spline' {
  import { ComponentType } from 'react'

  interface SplineProps {
    scene: string
    className?: string
    onLoad?: (spline: unknown) => void
    style?: React.CSSProperties
  }

  const Spline: ComponentType<SplineProps>
  export default Spline
}
