import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'

import { AddressLabel } from '../AddressLabel'
import { CheckoutButton } from '../CheckoutButton'

import { HeaderContainer } from './styles'

export function Header() {
  const { totalProducts } = useContext(CheckoutContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Products">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <AddressLabel />
        <NavLink to="/checkout" title="Checkout" style={{ display: 'flex' }}>
          <CheckoutButton count={totalProducts} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
