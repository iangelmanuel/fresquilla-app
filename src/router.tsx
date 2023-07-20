import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'

export default function Router (): JSX.Element {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
