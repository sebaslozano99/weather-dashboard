import StyledNavlink from "./StyledNavlink";



export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-10" >
        <StyledNavlink to="/dashboard" >Dashboard</StyledNavlink>
        <StyledNavlink to="/myWeather" >My Weather</StyledNavlink>
        <StyledNavlink to="/account" >Account</StyledNavlink>
      </ul>
    </nav>
  )
}
