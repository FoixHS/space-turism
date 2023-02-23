export const Template = ({ children, className }) => {
  return (
    <main className={`w-full h-screen ${className}`}>{children}</main>
  )
}
