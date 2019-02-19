import styled from 'styled-components';
import Body from "./Body";

const Actions = styled(Body)`
  display: flex;
  flex: inherit;
  padding: 4px 0;
  margin-top: 9px;

  p {
    font-size: 12px;
  }

  button {
    max-height: 36px;
  }
`

export default Actions;