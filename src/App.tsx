import { defineComponent, ref, Ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'
import { createUseStyles } from 'vue-jss'

function toJSon(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string'
}

const userStyles = createUseStyles({
  editor: {
    minHeight: 400
  }
})

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)
    const handleChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        console.log(err)
      }
      schemaRef.value = schema
    }

    const classesRef = userStyles()

    return () => {
      const code = toJSon(schemaRef.value)
      const classes = classesRef.value
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleChange}
            title="ngchikin"
            class={classes.editor}
          />
        </div>
      )
    }
  }
})
