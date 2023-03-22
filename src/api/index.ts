import expresso from '../assets/cafe-expresso.svg'
import expressoCremoso from '../assets/cafe-expresso-cremoso.svg'
import expressoAmericano from '../assets/cafe-americano.svg'
import expressoGelado from '../assets/cafe-gelado.svg'
import cafeComLeite from '../assets/cafe-com-leite.svg'
import cafeLatte from '../assets/cafe-latte.svg'
import capuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mochaccino from '../assets/mochaccino.svg'
import chocolateQuente from '../assets/chocolate-quente.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'

export async function getProducts() {
  return new Promise((resolve) => {
    resolve([
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619a',
        imageSrc: expresso,
        name: 'Expresso Tradicional',
        tags: ['Tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619b',
        imageSrc: expressoAmericano,
        name: 'Expresso Americano',
        tags: ['Tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619c',
        imageSrc: expressoCremoso,
        name: 'Expresso Cremoso',
        tags: ['Tradicional'],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619d',
        imageSrc: expressoGelado,
        name: 'Expresso Gelado',
        tags: ['Tradicional', 'Gelado'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
      },
      //
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619e',
        imageSrc: cafeComLeite,
        name: 'Café com Leite',
        tags: ['tradicional', 'com leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619f',
        imageSrc: cafeLatte,
        name: 'Latte',
        tags: ['tradicional', 'com leite'],
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619g',
        imageSrc: capuccino,
        name: 'Capuccino',
        tags: ['tradicional', 'com leite'],
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619h',
        imageSrc: macchiato,
        name: 'Macchiato',
        tags: ['tradicional', 'com leite'],
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619i',
        imageSrc: mochaccino,
        name: 'Mochaccino',
        tags: ['tradicional', 'com leite'],
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619j',
        imageSrc: chocolateQuente,
        name: 'Chocolate Quente',
        tags: ['tradicional', 'com leite'],
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619k',
        imageSrc: cubano,
        name: 'Cubano',
        tags: ['especial', 'alcoólico', 'gelado'],
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619l',
        imageSrc: havaiano,
        name: 'Havaiano',
        tags: ['especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619m',
        imageSrc: arabe,
        name: 'Árabe',
        tags: ['especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
      },
      {
        id: '2bd57d61-8f3b-45f2-8534-d011fe5c619o',
        imageSrc: irlandes,
        name: 'Irlandês',
        tags: ['especial', 'alcoólico'],
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
      },
    ])
  })
}

export async function requestCoffee(order: CoffeeOrder) {
  const orderJSON = JSON.stringify(order)

  localStorage.setItem('@ignite-coffee-shop:order-details-1.0.0', orderJSON)

  return new Promise((resolve) => {
    resolve({
      status: 201,
      data: '',
    })
  })
}
