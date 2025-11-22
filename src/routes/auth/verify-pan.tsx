import VerifyPan from '@/features/members/components/verify-pan'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/verify-pan')({
  component: RouteComponent,
})

function RouteComponent() {
  return <VerifyPan/>
}
