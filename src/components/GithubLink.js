import React, { Component } from 'react';
import styled  from 'styled-components';

const Ribbon = styled.div`
  position: absolute;
  top: 40px;
  right: -50px;
  overflow: hidden;
  white-space: nowrap;
  transform: rotate(45deg);
  background-color: #769954;
  box-shadow: 0 0 10px #888;

  a {
    display: block;
    padding: 10px 50px;
    margin: 1px 0;
    font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 0 5px #444;
    color: #ffffff;
    border: 1px solid #bce199;
  }
  
  @media(max-width: 676px) {
    width: 42px;
    height: 42px;
    top: 10px;
    right: 10px;
    transform: none;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDE4IDMyIj4KPGc+CjwvZz4KCTxwYXRoIGQ9Ik01LjE0MyAyNi4yODZxMC0wLjcxNC0wLjUtMS4yMTR0LTEuMjE0LTAuNS0xLjIxNCAwLjUtMC41IDEuMjE0IDAuNSAxLjIxNCAxLjIxNCAwLjUgMS4yMTQtMC41IDAuNS0xLjIxNHpNNS4xNDMgNS43MTRxMC0wLjcxNC0wLjUtMS4yMTR0LTEuMjE0LTAuNS0xLjIxNCAwLjUtMC41IDEuMjE0IDAuNSAxLjIxNCAxLjIxNCAwLjUgMS4yMTQtMC41IDAuNS0xLjIxNHpNMTYuNTcxIDhxMC0wLjcxNC0wLjUtMS4yMTR0LTEuMjE0LTAuNS0xLjIxNCAwLjUtMC41IDEuMjE0IDAuNSAxLjIxNCAxLjIxNCAwLjUgMS4yMTQtMC41IDAuNS0xLjIxNHpNMTguMjg2IDhxMCAwLjkyOS0wLjQ2NCAxLjcyM3QtMS4yNSAxLjI0MXEtMC4wMzYgNS4xMjUtNC4wMzYgNy4zOTMtMS4yMTQgMC42NzktMy42MjUgMS40NDYtMi4yODYgMC43MTQtMy4wMjcgMS4yNjh0LTAuNzQxIDEuNzg2djAuNDY0cTAuNzg2IDAuNDQ2IDEuMjUgMS4yNDF0MC40NjQgMS43MjNxMCAxLjQyOS0xIDIuNDI5dC0yLjQyOSAxLTIuNDI5LTEtMS0yLjQyOXEwLTAuOTI5IDAuNDY0LTEuNzIzdDEuMjUtMS4yNDF2LTE0LjY0M3EtMC43ODYtMC40NDYtMS4yNS0xLjI0MXQtMC40NjQtMS43MjNxMC0xLjQyOSAxLTIuNDI5dDIuNDI5LTEgMi40MjkgMSAxIDIuNDI5cTAgMC45MjktMC40NjQgMS43MjN0LTEuMjUgMS4yNDF2OC44NzVxMC45NjQtMC40NjQgMi43NS0xLjAxOCAwLjk4Mi0wLjMwNCAxLjU2Mi0wLjUyN3QxLjI1OS0wLjU1NCAxLjA1NC0wLjcwNSAwLjcyMy0wLjkxMSAwLjUtMS4yNDEgMC4xNTItMS42MzRxLTAuNzg2LTAuNDQ2LTEuMjUtMS4yNDF0LTAuNDY0LTEuNzIzcTAtMS40MjkgMS0yLjQyOXQyLjQyOS0xIDIuNDI5IDEgMSAyLjQyOXoiIGZpbGw9IiNmZmZmZmYiIC8+Cjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-position: center center;
    
    a {
      display: none;
    }
  }
`;

class GithubLink extends Component {
  render() {
    return (
      <Ribbon className="ribbon">
        <a href="https://github.com/chessfinder/chessboardjsx">Fork me on GitHub</a>
      </Ribbon>
    );
  }
}

export default GithubLink;
