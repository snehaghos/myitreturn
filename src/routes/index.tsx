import { createFileRoute } from '@tanstack/react-router'

import HomePage from '@/features/myitreturn/components/HomePage'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage/>
}
