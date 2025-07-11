import './global.css'

import styles from './app.module.css'
import { Button } from './components/button'
import { useMessage } from './hooks/useMessage'

export function App() {
  const { show } = useMessage({ name: 'Pedro' })

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => show('mensagem personalizada')} />
      <span>0</span>
      <Button name="Remover" />
    </div>
  )
}
