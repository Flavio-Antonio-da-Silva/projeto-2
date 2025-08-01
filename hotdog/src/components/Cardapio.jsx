// Caminho: src/components/Cardapio.jsx

import { useState } from 'react'

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
  const [selecionados, setSelecionados] = useState({
    paes: [],
    ingredientes: [],
    molhos: [],
  })

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

  return (
    <section className="p-4 text-black">
      <h2 className="text-2xl font-bold mb-4">Monte seu Hot Dog</h2>

      {/* Paes */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Escolha o Pão</h3>
        <div className="grid gap-2">
          {paes.map((pao) => (
            <label key={pao} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selecionados.paes.includes(pao)}
                onChange={() => handleCheckboxChange('paes', pao)}
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
      <div>
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

      {/* Mostrar seleção (opcional para testes) */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h4 className="font-semibold">Sua seleção:</h4>
        <p><strong>Pães:</strong> {selecionados.paes.join(', ') || 'Nenhum'}</p>
        <p><strong>Ingredientes:</strong> {selecionados.ingredientes.join(', ') || 'Nenhum'}</p>
        <p><strong>Molhos:</strong> {selecionados.molhos.join(', ') || 'Nenhum'}</p>
      </div>
    </section>
  )
}
