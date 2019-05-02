import { css } from 'styled-components';

import linearGradient from './linearGradient';
import { mediumAndUp, largeAndUp } from '../theme/mediaQueries';

const responsiveLinearGradient = ({ deg, stops }) =>
  deg &&
  stops &&
  css`
    ${deg.small && linearGradient({ deg: deg.small, stops })};
    ${deg.medium &&
      mediumAndUp`${linearGradient({ deg: deg.medium, stops })}`} ${deg.large &&
      largeAndUp`${linearGradient({ deg: deg.large, stops })}`};
  `;

export default responsiveLinearGradient;
