"use client"

import { useState } from "react"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const WeekView = () => {
  const [schedule, setSchedule] = useState<Record<string, string[]>>({})

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
    const workerId = e.dataTransfer.getData("text/plain")
    setSchedule((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), workerId],
    }))
  }

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex gap-2 p-4 flex-1">
      {days.map((day) => (
        <div
          key={day}
          onDrop={(e) => handleDrop(e, day)}
          onDragOver={allowDrop}
          className="flex-1 border border-gray-300 p-4 min-h-[150px] rounded bg-gray-50"
        >
          <h3 className="font-bold mb-2">{day}</h3>
          <ul className="space-y-1">
            {(schedule[day] || []).map((worker) => (
              <li key={worker} className="text-sm bg-white p-1 rounded shadow">
                {worker}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default WeekView
