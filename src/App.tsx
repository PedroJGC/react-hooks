/** biome-ignore-all lint/suspicious/noConsole: ignore */
import './global.css'
import { useEffect, useState } from 'react'

import styles from './app.module.css'
import { Button } from './components/button'
// import { useMessage } from './hooks/useMessage'

export function App() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1)
  }

  function handleRemove() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    console.log('O valor mudou: ', count)

    if (count <= 0) {
      console.log('O contador não pode ser menor que zero!')
    }
  }, [count])

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  )
}
