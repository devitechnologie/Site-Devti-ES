
type ProgressLineProps = {
  progress: number
  progressLength: number
}

const ProgressLine = ({ progress, progressLength }: ProgressLineProps) => {
  return (
    <div
      className="w-full h-0.5 bg-gray-200 rounded-full"
    >
      <div
        className="h-full bg-primary-dark-purple rounded-full transition-all duration-300"
        style={{
          width: `${progress * 100 / progressLength}%`
        }}
      />
    </div>
  )
}

export default ProgressLine