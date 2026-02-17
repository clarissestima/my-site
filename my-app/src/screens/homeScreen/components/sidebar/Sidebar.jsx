import './Sidebar.css'
import SidebarButtons from './sidebarButtons/SidebarButtons'
import SidebarBio from './sidebarBio/SidebarBio'
import SidebarGifs from './sidebarGifs/SidebarGifs'
import SidebarGuestBook from './sidebarGuestBook/SidebarGuestBook'

function Sidebar() {
  return (
    <section className="right-section">
      <SidebarBio />
      <SidebarGifs />
      <SidebarGuestBook />
      <SidebarButtons />
    </section>
  )
}

export default Sidebar
