const Footer = () => {
  const scrollTopFunction = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div>
    <footer>
      <div id="scrollTop" onClick={scrollTopFunction}>Back to top</div>
    </footer>
    </div>
  )
}

export default Footer
