import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"

async function Sidebar({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <main className="lg:pl-20 h-full">
        <DesktopSidebar />
        <MobileFooter />
        {children}
      </main>
    </div>
  )
}

export default Sidebar