import { defineComponent } from 'vue'
import { defalutProps } from '../types'

export default defineComponent({
  name: 'NumberFields',
  props: defalutProps,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => {
      return <input type="number" onInput={(e) => handleChange(e)} />
    }
  }
})
