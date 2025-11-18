import HomePage from '@/features/HelpCentre/components/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/support/help')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage/>
}
