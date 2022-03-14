import styled from 'styled-components'
import colors from 'styles/colors'

export const Container = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`
