import { component$, useSignal, $ } from '@builder.io/qwik'
import Icon from '~/components/Icon'

export default component$(() => {
  const toggle = useSignal(false)

  return (
    <div>
      <div>
        <button
          onClick$={$(() => toggle.value = !toggle.value)}
        >
          Toggle Icon {toggle.value ? 'True' : 'False' }
        </button>
      </div>
      <div style="width: 200px; height: 200px; border: 1px solid #000; margin: 16px;">
        {toggle.value ? (
          <Icon name="mdiAccount" size={200} />
        ) : (
          <Icon name="mdiMessage" size={200} />
        )}
      </div>
    </div>
  )
})
