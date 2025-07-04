"use client"

type Props = {
  workers: { id: string; name: string; weeklyHours: number }[]
}

const Sidebar = ({ workers }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>, id: string) => {
    e.dataTransfer.setData("text/plain", id)
  }

  return (
    <aside className="w-64 border-l border-gray-300 p-4">
      <h2 className="font-bold mb-4">Workers</h2>
      <ul className="space-y-2">
        {workers.map((worker) => (
          <li
            key={worker.id}
            draggable
            onDragStart={(e) => handleDragStart(e, worker.id)}
            className="cursor-move p-2 rounded bg-white shadow text-sm"
          >
            {worker.name} <span className="text-gray-500">({worker.weeklyHours}h)</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
