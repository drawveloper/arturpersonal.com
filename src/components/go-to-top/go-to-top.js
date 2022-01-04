import React, { useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GoToTopWrapper, GoToTopButton } from "./go-to-top-element"

export const GoToTop = () => {
  useEffect(() => {
    let lastKnownScrollPosition = 0
    document.addEventListener("scroll", function (e) {
      lastKnownScrollPosition = window.scrollY

      window.requestAnimationFrame(function () {
        if (lastKnownScrollPosition < 500) {
          document.getElementById("go-to-top").style.display = "none"
        } else {
          document.getElementById("go-to-top").style.display = "block"
        }
      })
    })
  }, [])

  return (
    <GoToTopWrapper id="go-to-top">
      <GoToTopButton onClick={() => scrollTo("#top")}>↑</GoToTopButton>
    </GoToTopWrapper>
  )
}
