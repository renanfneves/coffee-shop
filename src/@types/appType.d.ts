type Product = {
  imageSrc: string
  id: string
  name: string
  tags: string[]
  description: string
  price: number
}

type ProductWithAmount = Product & {
  amount: number
}

type CoffeeOrder = {
  number: string
  cep: string
  street: string
  addOnAddress: string
  neighborhood: string
  city: string
  state: string
  paymentType: string
}

type ToastVariant = 'success' | 'info' | 'error'

type ToastProperties = {
  id: string
  variant: ToastVariant
  text: string
}
