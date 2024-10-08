import StyledNavlink from "./StyledNavlink";



export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4" >
        <StyledNavlink to="/dashboard" >Dashboard</StyledNavlink>
        <StyledNavlink to="/myWeather" >My Weather</StyledNavlink>
        <StyledNavlink to="/users" >Users</StyledNavlink>
      </ul>
    </nav>
  )
}
