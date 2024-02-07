interface TimerProps {
  nextBirthdayDate: {
    name: string
    date: Date
  }
}

import { format, differenceInSeconds } from "date-fns"
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react"

export function Timer({ nextBirthdayDate }: TimerProps) {

  const [nowTime, setNowTime] = useState(new Date())

  const { name, date } = nextBirthdayDate
  const formatedDate = format(date, "dd 'de' MMMM", { locale: ptBR })

  useEffect(() => {
    setInterval(() => {
      setNowTime(new Date())
    }, 1000)
  }, [])

  const differenceInSecondsFromNow = differenceInSeconds(date, nowTime)
  const totalSeconds = differenceInSecondsFromNow % 60
  const totalMinutes = Math.floor(differenceInSecondsFromNow / 60 % 60)
  const totalHours = Math.floor(differenceInSecondsFromNow / 60 / 60 % 24)
  const totalDays = Math.floor(differenceInSecondsFromNow / 60 / 60 / 24)

  return (
    <div className="border-2 w-full max-w-screen-md m-auto mt-9 rounded-md p-6 text-[#f2f2f2] relative">
      <span className="font-bold absolute bg-[#09090b] -top-4 px-2">Próximo aniversário:</span>
      <div className="flex items-center flex-col gap-4 mb-2">
        <h1 className="font-black text-2xl">{name}</h1>
        <div className="flex items-center font-roboto font-black text-5xl md:text-7xl">
          {totalDays > 0 ? (
            <div>
              <span>{totalDays.toString().length < 2 ? `0${totalDays}` : totalDays}</span>
              <span>:</span>
            </div>
          ) : (null)}
          <span>{totalHours.toString().length < 2 ? `0${totalHours}` : totalHours}</span>
          <span>:</span>
          <span>{totalMinutes.toString().length < 2 ? `0${totalMinutes}` : totalMinutes}</span>
          <span>:</span>
          <span>{totalSeconds.toString().length < 2 ? `0${totalSeconds}` : totalSeconds}</span>
        </div>
        <span className="font-bold text-white/90">({formatedDate})</span>
      </div>
    </div>
  )
}