import { Minus, Plus } from 'phosphor-react'
import { useContext, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import useToast from '../../hooks/useToast'
import { CheckoutButton } from '../CheckoutButton'
import { Counter } from '../Counter'
import {
  AddToCheckoutContainer,
  Price,
  ProductDetailsCardContainer,
  ProductImage,
  Tag,
  TagsContainer,
} from './styles'

interface ProductDetailsCardProps {
  id: string
  imageSrc: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function ProductDetailsCard({
  id,
  imageSrc,
  tags,
  name,
  description,
  price,
}: ProductDetailsCardProps) {
  const { addToast } = useToast()
  const [amount, setAmount] = useState(1)
  const { addProduct } = useContext(CheckoutContext)

  const currencySymbol = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
      .formatToParts(1)
      .find((x) => x.type === 'currency')!.value
  }, [])

  function handleAmount(value: number) {
    setAmount((prevAmount) => prevAmount + value)
  }

  function handleAddProductToCheckout() {
    addProduct({
      id,
      imageSrc,
      tags,
      name,
      description,
      price,
      amount,
    })

    setAmount(1)

    addToast({
      variant: 'success',
      text: 'item adicionado ao carrinho',
    })
  }

  return (
    <ProductDetailsCardContainer>
      <ProductImage src={imageSrc} alt="" />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={`${id}-${tag.trim()}`}>{tag}</Tag>
        ))}
      </TagsContainer>
      <h2>{name}</h2>
      <span>{description}</span>
      <AddToCheckoutContainer>
        <Price>
          <span>{currencySymbol}</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(price)}
          </span>
        </Price>
        <Counter
          amount={amount}
          setAmount={handleAmount}
          style={{
            marginInline: '1.5rem 0.5rem',
          }}
        />
        <CheckoutButton
          variant="secondary"
          size={20}
          onClick={handleAddProductToCheckout}
        />
      </AddToCheckoutContainer>
    </ProductDetailsCardContainer>
  )
}
