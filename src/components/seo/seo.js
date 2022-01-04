import React from "react"
import { Helmet } from "react-helmet"

export const Seo = () => {
  const siteMetadata = {
    title: "Artur Rodrigues — Personal Trainer no Rio de Janeiro — Flamengo, Largo do Machado, Botafogo, Copacabana, Ipanema, Leblon e toda Zona Sul, aulas online.",
    description:
      "Aulas de Personal Trainer para mudar sua vida e melhorar sua saúde com método e atenção profissional. Cada corpo é único. Exercícios pensados especialmente para você. Dias e horários flexíveis, treine onde quiser — em casa ou na academia.",
    url: "https://arturpersonal.com/",
    image: "https://arturpersonal.com/static/034b535f352ad06f9c349abe9a63bb99/f3672/hero.jpg",
    keywords: [
      "personal trainer",
      "personal trainer rj",
      "personal trainer rio de janeiro",
      "personal trainer flamengo",
      "personal trainer largo do machado",
      "personal trainer botafogo",
      "personal trainer copacabana",
    ],
  }
  
  return (
    <Helmet
      title={siteMetadata.title}
      meta={[
        { name: `description`, content: siteMetadata.description },
        { property: `og:title`, content: siteMetadata.title },
        { property: `og:description`, content: siteMetadata.description },
        { property: `og:type`, content: `website` },
        { property: `og:image`, content: siteMetadata.image },
        { property: `og:url`, content: siteMetadata.url },
      ].concat({
          name: `keywords`,
          content: siteMetadata.keywords.join(`, `),
        }
      )}
    />
  )
}