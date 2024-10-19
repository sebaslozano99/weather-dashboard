import StyledNavlink from "./StyledNavlink";



export default function NavBar() {
  return (
    <nav className="hidden min-[580px]:block" >
      <ul className="flex gap-6" >
        <StyledNavlink to="/dashboard" >Dashboard</StyledNavlink>
        <StyledNavlink to="/myWeather" >My Weather</StyledNavlink>
        <StyledNavlink to="/account" >Account</StyledNavlink>
      </ul>
    </nav>
  )
}
