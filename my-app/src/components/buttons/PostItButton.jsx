import './PostitButton.css'

function PostItButton({ label, href, even }) {
  return (
    <a
      href={href}
      className={`postit-button ${even ? 'even' : ''}`}
    >
      {label}
    </a>
  )
}

export default PostItButton