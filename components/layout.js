import React from 'react'
import Head from 'next/head'
import { CustomLink, RowCenterDiv } from './customComponent'

export default (Page, title = 'This is the default title') => {
  return class AnyPage extends React.Component {
    render() {
      return (
        <div style={{ margin: '16px' }}>
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>

          <header
            style={{
              height: '30px',
              lineHeight: '30px',
              marginBottom: '16px',
              background: '#f8f8f8',
            }}
          >
            <RowCenterDiv>
              <CustomLink title={'Home'} href={'/'} />
              <CustomLink title={'PageB'} href={'/pageb'} />
            </RowCenterDiv>
          </header>

          <RowCenterDiv>
            <Page {...this.props} />
          </RowCenterDiv>

          <footer>
            <RowCenterDiv>{'Copyright © 2020 XXX Inc.'}</RowCenterDiv>
          </footer>
        </div>
      )
    }
  }
}
