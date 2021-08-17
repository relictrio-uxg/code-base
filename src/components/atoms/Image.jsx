import styled from 'styled-components';

const Img = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: 0 auto;
`;

export const Image = ({desktopsrcfile, height, width}) => {
  return (
        <Img src={desktopsrcfile} height={height} width={width} />
  );
};

Image.defaultProps = {
    desktopsrcfile: "",
    height: '100%',
    width: '100%'
  };
  