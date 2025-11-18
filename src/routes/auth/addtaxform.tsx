import AddTaxForm from '@/features/addtask/components/addtaxform'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/addtaxform')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddTaxForm/>
}
