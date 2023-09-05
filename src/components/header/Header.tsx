import { StyledHeader, StyledHeaderMenu } from "./Header.style"

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Logo</h1>
      <StyledHeaderMenu>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Produtos</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </StyledHeaderMenu>
    </StyledHeader>
  )
}
