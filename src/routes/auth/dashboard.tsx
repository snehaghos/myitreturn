import DashboardPage from '@/features/dashboard/components/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DashboardPage/>
}
