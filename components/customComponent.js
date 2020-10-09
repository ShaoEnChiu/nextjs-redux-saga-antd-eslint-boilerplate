import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const CustomLink = props => {
  return (
    <>
      <div
        style={{
          lineHeight: '30px',
          padding: '0 8px',
        }}
      >
        <Link href={props.href}>{props.title}</Link>
      </div>
    </>
  )
}

const RowCenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export { CustomLink, RowCenterDiv }
