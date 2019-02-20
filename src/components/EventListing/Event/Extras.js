import styled, {css} from 'styled-components';
import Actions from './Actions'

const Extras = styled(Actions)`
  display: flex;
  text-align: left;
  padding: 0;
  font-size: 12px;
  color: #026cdf;
  margin-top: 0;

  p {
    height: 14px;
    font-size: 12px;
    line-height: 12px;
  }

  & > *:first-child {
    display: flex;
    flex: 1 1;
    text-align: left;
    padding: 0;
  }

  text-align: left
  > *:hover {
    background: white!important;
  }
  ${(hasImage) =>
    hasImage
    ? 
      css`margin-left: 159px;`
    :
      css`margin-left: 118px;`
   }
`
export default Extras;
