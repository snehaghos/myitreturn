import MembersPage from '@/features/members/components/member'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/member')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MembersPage/>
}
