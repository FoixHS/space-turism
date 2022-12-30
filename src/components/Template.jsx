export const Template = ({ children, className }) => {
  return (
    <div className={`w-full h-screen ${className}`}>{children}</div>
  )
}
