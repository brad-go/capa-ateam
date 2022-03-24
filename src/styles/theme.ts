import styled from 'styled-components';

const deviceSizes = {
  mobile: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
};

export default theme;
