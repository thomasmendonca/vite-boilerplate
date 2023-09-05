import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { StyledLayout } from "./Layout.style"

interface LayoutProps {
  children: React.ReactNode
  isRelated?: boolean
}

export const Layout = ({ children, isRelated = false }: LayoutProps) => {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
      {isRelated ? (
        <aside>
          <h3>Produtos relacionados</h3>
        </aside>
      ) : null}
      <Footer />
    </>
  )
}
