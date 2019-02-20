import styled from 'styled-components';
import Body from "./Body";

const Actions = styled(Body)`
  display: flex;
  flex: inherit;
  padding: 4px 0;
  margin-top: 9px;

  button {
    max-height: 36px;
    margin-bottom: 4px;
  }
`

export default Actions;