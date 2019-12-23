import React from 'react';
import styled from '@emotion/styled';

import { colors, sizes } from '../styles_shared/variables';

const HomeLink = styled('a')`
  color: ${colors.white};
  text-decoration: none;
`;

const HeaderWrapper = styled('section')`
  align-items: center;
  background-color: ${colors.grey_dark};
  display: flex;
  height: ${sizes.unit * 3}px;
  padding: ${sizes.unit}px;
`;

const HeaderText = styled('h2')`
  font-weight: bold;
  margin-left: ${sizes.unit}px;
`;

const Header = () => (
  <HeaderWrapper className="rc-Header">
    <HeaderText>
      <HomeLink href="/">Somnius</HomeLink>
    </HeaderText>
  </HeaderWrapper>
);

export default Header;
