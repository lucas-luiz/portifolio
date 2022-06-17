import React from 'react'

//hooks
import { useState, useEffect } from 'react'

//style
import StyledProject from './style'


function Project({ project }) {

    return (
        <StyledProject >
            {if(project == 'sorting'){
                return('ok')
            }}

        </StyledProject >
    )
}


export default Project