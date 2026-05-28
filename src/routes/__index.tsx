import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__index')({
  component: Home,
})

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
      }}
    >
      QuizFlow AI
    </div>
  )
}