import { BrowserRouter } from 'react-router-dom'
import RouterComponent from './components/RouterComponent'

export default function Router (): JSX.Element {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  )
}
