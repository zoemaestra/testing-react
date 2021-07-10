const Footer = () => {
  const scrollTopFunction = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div>
    <footer>
      <p>© Zoe Jones 2021</p>
      <div id="scrollTop" onClick={scrollTopFunction}>Back to top</div>
    </footer>
    </div>
  )
}

export default Footer
