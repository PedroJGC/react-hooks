import styles from './styles.module.css'

type Props = React.ComponentProps<'button'> & {
  name: string
}

export function Button({ name, onClick }: Props) {
  return (
    <button className={styles.container} onClick={onClick}>
      <span>{name}</span>
    </button>
  )
}
