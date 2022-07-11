import React from 'react'
import * as C from './style'

export const ResumeItem = ({title, Icon, value}) => {
  return (
    <C.Container>
        <C.Header>
            <C.HeadetTitle>
               {title}
            </C.HeadetTitle>
            <Icon/>
        </C.Header>
        <C.Total>{value}</C.Total>
    </C.Container>
    
  )
}
