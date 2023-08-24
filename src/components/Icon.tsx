import { component$ } from '@builder.io/qwik'
import {
  mdiAccount,
  mdiMessage
} from '@mdi/js'

const icons = {
  mdiAccount,
  mdiMessage
} as Record<string, string>

interface Props {
  name: string
  size?: number
  class?: string
}

export default component$((props: Props) => {
  const size = props.size || 16
  if (icons[props.name]) {
    return (
      <svg viewbox="0 0 24 24" width={size} height={size} data-icon={props.name} class={props.class}>
        <path d={icons[props.name]} />
      </svg>
    )
  } else {
    return (
      <div data-icon-not-found={props.name} />
    )
  }
})
