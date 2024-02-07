import { differenceInHours, format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface BirthdayCardProps {
  name: string
  date: Date
}

export function BirthdaysCard({ name, date }: BirthdayCardProps) {

  function formatCounter(date: Date) {
    const differenceHours = differenceInHours(date, new Date())
    if (differenceHours < 0 && differenceHours > -24) {
      return "Hoje 🎉"
    }

    if (differenceHours > 0 && differenceHours < 24) {
      return "Amanhã"
    }

    return `Falta ${Math.floor(differenceHours / 24 + 1)} dias`
  }

  const formatedDate = format(date, "dd 'de' MMMM", { locale: ptBR })

  return (
    <div className="border-2 w-full h-32 md:max-w-60 flex items-center justify-between flex-col rounded-md p-3">
      <div className="flex flex-col items-center">
        <span className="font-bold text-xl">{name}</span>
        <span className="text-lg">{formatCounter(date)}</span>
      </div>
      <span className="text-sm text-white/70">{formatedDate}</span>
    </div>
  )
}