import React from "react"
import {
  Container,
  Content,
  Footer,
  GoToTop,
  Nav,
  Seo,
  TopBar,
} from "../components"
import Banner from "../components/banner/banner"
import {
  SectionAbout,
  SectionConsulting,
  SectionNotes,
  SectionContact,
} from "../section"

export default function Home() {
  return (
    <Container>
      <Seo />
      <TopBar />
      <Content>
        <Nav />
      </Content>
      <Banner />
      <SectionAbout title="Sobre" />
      <SectionConsulting title="Consultoria" />
      <SectionNotes title="Vamos mudar as coisas, juntos!" />
      <SectionContact title="Contato" />
      <Footer />
      <GoToTop />
    </Container>
  )
}
