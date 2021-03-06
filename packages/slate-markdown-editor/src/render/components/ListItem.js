// @flow
import * as React from 'react'
import createComponent from './Component'

function ListItem (props: *) {
  let {
    node,
    editor,
    parent
  } = props

  const editListPlugin = props.editor.props.plugins.find(plugin =>
    plugin.name === 'slate_edit_list'
  )
  const isCurrentItem = editListPlugin.utils
    .getItemsAtRange(editor.value)
    .contains(node)

  const key = node.get('key')
  const index = parent.nodes.map(node => node.get('key')).indexOf(key)

  props.attributes.className = isCurrentItem ? 'current-item' : undefined

  const prefix = props.parent.type === 'unordered_list'
    ? '—' : index + 1 + '.'

  const styles = theme => ({
    root: {
      ...theme.list_item.root,
      '&:before': {
        ...theme.list_item.root['&:before'],
        content: `"${prefix} "`
      }
    }
  })

  const Component = createComponent(styles)('li')

  return <Component {...props} />
}

export default ListItem
