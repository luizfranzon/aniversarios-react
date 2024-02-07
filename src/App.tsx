import { Timer } from "./components/Timer"
import { birthdaysList } from "./data/birthdays"
import { BirthdaysCard } from "./components/BirthdaysCard"

export function App() {

  const todayDate = new Date()
  const sortedBirthdaysListByEarlier = birthdaysList.sort((a, b) => {
    return Number(a.date) - Number(b.date)
  })

  const nextBirthdayDate = sortedBirthdaysListByEarlier.filter((item) => {
    return Number(item.date) - Number(todayDate) >= 0
  })[0]

  return (
    <div className="px-5">
      <Timer nextBirthdayDate={nextBirthdayDate} />
      <div className="mt-8 flex m-auto flex-wrap justify-center items-center gap-4 w-full max-w-screen-md">
        {sortedBirthdaysListByEarlier.map((item) => {
          return (
            <BirthdaysCard
              key={item.name}
              name={item.name}
              date={item.date}
            />
          )
        })}
      </div>
    </div>
  )
}

