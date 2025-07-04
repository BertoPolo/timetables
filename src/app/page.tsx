import Sidebar from "@/ui/client/Sidebar"
import WeekView from "@/ui/client/WeekView"
import workers from "@/data/workers.json"

const Page = () => {
  return (
    <main className="flex min-h-screen">
      <WeekView />
      <Sidebar workers={workers} />
    </main>
  )
}

export default Page

