import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import parse from 'html-react-parser';
import { colors } from '../../theme';
import { respCss } from '../../helper';

export const ContentWrapper = styled.div`
  color: ${(props) => props.color};
  font-family: inherit;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  font-weight: 400;
  max-width: 570px;
  margin: ${(props) => (props.margin ? props.margin : '30px 0 40px')};

  ${css`
    ${(props) => respCss('padding', props.padding)}
  `}

  ${css`
    ${(props) => respCss('display', props.padding)}
  `}
`;

export const Content = ({ body, color, padding, letterSpacing, lineHeight, size, margin }) => {
  const parsedContent = parse(body);

  return (
    <ContentWrapper
      color={color}
      padding={padding}
      size={size}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      margin={margin}
    >
      {parsedContent}
    </ContentWrapper>
  );
};

Content.defaultProps = {
  body: 'this is a default test. Please add some content',
  centered: false,
  color: colors.black,
};
