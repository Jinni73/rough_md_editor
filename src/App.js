import React, { Component } from 'react';
import styled from 'styled-components';
import Remarkable from 'remarkable';

import './App.css';

const EditorWrapper = styled.div`
  border: 1px solid black;
  width: auto;
  height: auto;
`;

const MdInputEditor = styled.textarea`
  display: inline-block;
  border: 1px solid black;
  width: 500px;
  height: 500px;
`;

const MdOutputEditor = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 500px;
  height: 500px;
`

class App extends Component {
  state = { input:'', output:'' }
  
  componentDidMount() {
    this.md = new Remarkable();
  }

  handleInput = (e) => {
    this.setState({input: e.target.value});
    const mdOut = this.md.render(this.state.input);
    this.setState({output: mdOut});
  }

  render() {
    return (
      <EditorWrapper>
        <MdInputEditor
          onChange={this.handleInput}
          value={this.state.input}
          placeholder="input md text area"
        >
        </MdInputEditor>
        <MdOutputEditor
          dangerouslySetInnerHTML={{ __html: this.state.output }}
        ></MdOutputEditor>
      </EditorWrapper>
    );
  }
}

export default App;
