const Status = ({ isDone = false, onClick }: { isDone: boolean, onClick: () => void }) => {
  return <div onClick={onClick}>
    {!isDone ? <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor"
      className="w-6 h-6 text-red-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
      : <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor"
        className="w-6 h-6 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>}
  </div>
}

export default Status
