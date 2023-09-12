import { StyledHeader, StyledHeaderMenu } from "./Header.style"
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Logo</h1>
      <StyledHeaderMenu>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/produtos'>Produtos</Link>
        </li>
        <li>
          <Link to='/contatos'>Contato</Link>
        </li>
      </StyledHeaderMenu>
    </StyledHeader>
  )
}
