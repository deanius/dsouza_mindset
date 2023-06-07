import React from 'react'
import styles from "./Scrollbar.module.css";

const Scrollbar = () => {
    const [scrollTop, setScrollTop] = React.useState(0)

    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
  
      const scrolled = (winScroll / height) * 100
  
      setScrollTop(scrolled)
    }
  
    React.useEffect(() => {
      window.addEventListener("scroll", onScroll)
  
      return () => window.removeEventListener("scroll", onScroll)
    }, [])

  return (
    <div className={styles.scrollbar}>
      <div
        className={styles.inner}
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  )
}

export default Scrollbar