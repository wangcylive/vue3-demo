import { h, FunctionalComponent } from 'vue'

export interface Props {
  level: number
}

const DynamicHeading: FunctionalComponent<Props> = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}

export default DynamicHeading
