export type Worker = {
  id: string
  name: string
  weeklyHours: number
  assignedHours: number
}

export type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export type Shift = {
  workerId: string
  day: Day
  start: string // '09:00'
  end: string // '13:00'
}
