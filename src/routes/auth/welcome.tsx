import WelcomePage from '@/features/auth/components/welcome'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/welcome')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WelcomePage/>
}
