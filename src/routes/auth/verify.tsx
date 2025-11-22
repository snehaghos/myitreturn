import VerifyPage from '@/features/members/components/verify-pan-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/verify')({
  component: RouteComponent,
})

function RouteComponent() {
  return <VerifyPage/>
}
