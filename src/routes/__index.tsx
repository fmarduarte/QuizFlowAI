import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__index')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1>QuizFlow AI</h1>
    </div>
  )
}