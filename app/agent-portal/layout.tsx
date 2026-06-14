import { NavTabs } from '@/components/nav-tabs'

export default function AgentPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavTabs />
      {children}
    </>
  )
}
