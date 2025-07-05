"use client"

import { useState } from "react"

const hours = Array.from({ length: 18 }, (_, i) => i + 6) // 6 to 23
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

type Schedule = Record<string, Record<number, string[]>> // schedule[day][hour] = [workers]

const WeekView = () => {
  const [schedule, setSchedule] = useState<Schedule>({})

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string, hour: number) => {
    e.preventDefault()
    const workerId = e.dataTransfer.getData("text/plain")
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...(prev[day] || {}),
        [hour]: [...(prev[day]?.[hour] || []), workerId],
      },
    }))
  }

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

  return (
    <div className="grid grid-cols-[65px_repeat(7,minmax(0,1fr))] border-t border-l text-sm">
      {/* Header Row */}
      <div className="bg-gray-100 font-bold text-center border-b border-r py-2">Hour</div>
      {days.map((day) => (
        <div key={day} className="bg-gray-100 font-bold text-center border-b border-r py-2">
          {day}
        </div>
      ))}

      {/* Hour Rows */}
      {hours.map((hour) => (
        <Fragment key={hour}>
          <div className="border-b border-r px-2 py-1 text-center bg-white text-gray-600">{`${hour}:00`}</div>
          {days.map((day) => (
            <div
              key={`${day}-${hour}`}
              onDrop={(e) => handleDrop(e, day, hour)}
              onDragOver={allowDrop}
              className="border-b border-r px-1 relative hover:bg-blue-50"
            >
              {(schedule[day]?.[hour] || []).map((worker, i) => (
                <div key={worker + i} className="text-xs bg-blue-100 px-1 py-0.5 rounded shadow-sm absolute left-1 top-1">
                  {worker}
                </div>
              ))}
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

import { Fragment } from "react"
export default WeekView
