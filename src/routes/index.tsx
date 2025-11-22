import { createFileRoute } from '@tanstack/react-router'

import HomePage from '@/features/TaxYaar/components/HomePage'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage/>
}
