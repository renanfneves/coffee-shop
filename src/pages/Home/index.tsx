import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { getProducts } from '../../api'

import { InformativeCard } from '../../components/InformativeCard'
import { ProductDetailsCard } from '../../components/ProductDetailsCard'

import { HeroContainer, MenuList, OurServicesContainer } from './styles'

export function Home() {
  const theme = useTheme()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts().then((data: any) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <HeroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <OurServicesContainer>
          <InformativeCard
            iconBackgroundColor={theme['yellow-dark']}
            icon={<ShoppingCart weight="fill" size={24} color="white" />}
          >
            <span>Compra simples e segura</span>
          </InformativeCard>
          <InformativeCard
            iconBackgroundColor={theme.yellow}
            icon={<Package weight="fill" size={24} color="white" />}
          >
            <span>Embalagem mantém o café intacto</span>
          </InformativeCard>
          <InformativeCard
            iconBackgroundColor={theme['base-text']}
            icon={<Timer weight="fill" size={24} color="white" />}
          >
            <span>Entrega rápida e rastreada</span>
          </InformativeCard>
          <InformativeCard
            iconBackgroundColor={theme.purple}
            icon={<Coffee weight="fill" size={24} color="white" />}
          >
            <span>O café chega fresquinho até você</span>
          </InformativeCard>
        </OurServicesContainer>
      </HeroContainer>
      <MenuList>
        {products.map((product: Product) => (
          <li key={product.id}>
            <ProductDetailsCard
              imageSrc={product.imageSrc}
              id={product.id}
              name={product.name}
              tags={product.tags}
              description={product.description}
              price={product.price}
            />
          </li>
        ))}
      </MenuList>
    </>
  )
}
