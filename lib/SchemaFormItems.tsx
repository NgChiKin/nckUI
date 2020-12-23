import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes } from './types'
import StringFields from './fields/StringFields'
import NumberFields from './fields/NumberFields'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>
    },
    value: {
      required: true
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    }
  },
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
