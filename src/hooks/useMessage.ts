type Props = {
  name: string
}

export function useMessage({ name }: Props) {
  function show(message: string) {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log(name, message)
  }

  return { show }
}
