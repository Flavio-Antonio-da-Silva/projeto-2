// Caminho: src/components/Cardapio.jsx

import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const paes = ['Pão pequeno', 'Pão grande']
const ingredientes = [
  'Salsicha', 'Linguiça', 'Passas', 'Queijo ralado', 'Vinagrete', 'Picles', 'Ovo de codorna',
  'Cebola em conserva', 'Pimenta biquinho', 'Azeitona', 'Ervilha', 'Milho',
  'Batata palha', 'Cebola crisp', 'Alho torrado', 'Champignon', 'Palmito'
]
const molhos = [
  'Americano', 'Barbecue', 'Maionese', 'Maionese temperada', 'Ketchup',
  'Mostarda', 'Mostarda e mel', 'Ervas', 'Chipotle'
]

export default function Cardapio() {
  const { addToCart } = useContext(CartContext)

  const [selecionados, setSelecionados] = useState({
    paes: '',
    ingredientes: [],
    molhos: [],
  })

  function handlePaoChange(pao) {
    setSelecionados((prev) => ({
      ...prev,
      paes: prev.paes === pao ? '' : pao,
    }))
  }

  function handleCheckboxChange(categoria, item) {
    setSelecionados((prev) => {
      const jaSelecionado = prev[categoria].includes(item)
      return {
        ...prev,
        [categoria]: jaSelecionado
          ? prev[categoria].filter((i) => i !== item)
          : [...prev[categoria], item],
      }
    })
  }

  function limparSelecoes() {
    setSelecionados({
      paes: '',
      ingredientes: [],
      molhos: [],
    })
  }

  function adicionarAoCarrinho() {
    const item = {
      pao: selecionados.paes,
      ingredientes: selecionados.ingredientes,
      molhos: selecionados.molhos,
    }
    addToCart(item)
  }

  function gerarMensagemWhatsApp() {
    const mensagem = `Olá! Gostaria de montar meu Hot Dog:\n\n🍞 Pão: ${selecionados.paes || 'Nenhum'}\n🧀 Ingredientes: ${selecionados.ingredientes.join(', ') || 'Nenhum'}\n🥫 Molhos: ${selecionados.molhos.join(', ') || 'Nenhum'}`
    const url = `https://wa.me/5521977496651?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  return (
    <section className="p-4 text-black">
      <h2 className="text-2xl font-bold mb-4">Monte seu Hot Dog</h2>

      {/* Pães */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Escolha o Pão</h3>
        <div className="grid gap-2">
          {paes.map((pao) => (
            <label key={pao} className="flex items-center gap-2">
              <input
                type="radio"
                name="pao"
                checked={selecionados.paes === pao}
                onChange={() => handlePaoChange(pao)}
                className="accent-red-600"
              />
              {pao}
            </label>
          ))}
        </div>
      </div>

      {/* Ingredientes */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ingredientes</h3>
        <div className="grid gap-2 md:grid-cols-2">
          {ingredientes.map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selecionados.ingredientes.includes(item)}
                onChange={() => handleCheckboxChange('ingredientes', item)}
                className="accent-red-600"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Molhos */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Molhos</h3>
        <div className="grid gap-2 md:grid-cols-2">
          {molhos.map((molho) => (
            <label key={molho} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selecionados.molhos.includes(molho)}
                onChange={() => handleCheckboxChange('molhos', molho)}
                className="accent-red-600"
              />
              {molho}
            </label>
          ))}
        </div>
      </div>

      {/* Ações */}
      <div className="flex flex-col gap-2 md:flex-row mt-6">
        <button
          onClick={limparSelecoes}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
        >
          Limpar Tudo
        </button>
        <button
          onClick={adicionarAoCarrinho}
          className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          Adicionar ao Carrinho
        </button>
        <button
          onClick={gerarMensagemWhatsApp}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Enviar pelo WhatsApp
        </button>
      </div>
    </section>
  )
}
