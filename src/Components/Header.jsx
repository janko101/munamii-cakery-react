import munamiiLogo from "../assets/images/munamii-logo.png";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header class="header">
      <img src={munamiiLogo} alt="munamii cakery logo" class="logo" />
      <NavBar />
    </header>
  );
}
