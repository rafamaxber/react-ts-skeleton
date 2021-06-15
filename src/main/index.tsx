import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.div``

const Teste = () => (
  <Title>
    Testando meu React
  </Title>
)

ReactDOM.render(
  <Teste />,
  document.getElementById('main')
)
