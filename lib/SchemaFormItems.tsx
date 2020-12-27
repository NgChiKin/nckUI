import { defineComponent } from 'vue'
import { SchemaTypes, defalutProps } from './types'
// import StringFields from './fields/StringFields'
import StringFields from './fields/StringFields.vue'
import NumberFields from './fields/NumberFields'

export default defineComponent({
  props: defalutProps,
  name: 'SchemaFormItem',
  setup(props) {
    return () => {
      const { schema } = props
      const type = schema?.type

      let Component: any

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringFields
          break
        case SchemaTypes.NUMBER:
          Component = NumberFields
          break
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} />
    }
  }
})
