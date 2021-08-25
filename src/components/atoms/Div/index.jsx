import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Wrapper = styled.div`

`

export const Div = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

Div.propType = {
    children : PropTypes.any,
}

