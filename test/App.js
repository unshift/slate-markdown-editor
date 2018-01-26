import React from 'react';
import { render } from 'react-dom'
import Editor from '../src'
import INITIAL_VALUE from '../src/value'
import Plain from 'slate-plain-serializer'
import { Value } from 'slate'
import { 
  exportMarkdown,
  importMarkdown
} from '../src/util'
import * as colors from './theme'

const btnStyles = {
  whiteSpace: 'nowrap',
  display: 'inline-block',
  height: '40px',
  lineHeight: '32px',
  margin: '0',
  padding: '0 14px',
  boxShadow: 'rgba(50, 50, 93, 0.109804) 0px 4px 6px 0px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px 0px',
  fontSize: '15px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '.025em',
  color: '#777',
  textDecoration: 'none',
  transition: 'all .15s ease',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  maxWidth: '260px',
  marginRight: '1em',
}
class App extends React.Component {
  
  state = {
    value: INITIAL_VALUE
  }

  load = () => {   
    //let md = exportMarkdown(this.state.value)
    //let value = importMarkdown(md)
    //console.log(value.document.toJSON())
    //this.setState({ value: Value.fromJSON({document})  })
    let value = JSON.parse(window.localStorage.getItem('_slate_'))
    this.setState({
      value: Value.fromJSON(value)
    })
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return(
      <div style={{
        height: '100%',
        width: '100%',
        backgroundColor: colors.backgroundColor,   
        overflow: 'auto'        
      }}>
        <div style={{
          height: '100%',
          padding: '10px',
          //boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
          color: '#f1f1f0',
          fontFamily: '"Open Sans"',
        }}>
          <Editor
            value={this.state.value}
            onChange={this.onChange}
            toolbar={
              <button onClick={() => this.load()} style={btnStyles}>Load</button>              
            }
          />
        </div>
        <div>
        </div>        
        
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
