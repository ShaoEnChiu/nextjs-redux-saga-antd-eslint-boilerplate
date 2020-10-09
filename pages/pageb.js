import React from 'react'
import Layout from '../components/layout'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '../actions'
import fetch from 'isomorphic-unfetch'
import { Button, Typography, PageHeader } from 'antd'
import { RowCenterDiv } from '../components/customComponent'

const { Title } = Typography

const PageB = props => {
  return (
    <div>
      <RowCenterDiv>
        <PageHeader
          className="site-page-header"
          title="PageB"
          subTitle="This is a subtitle"
        />
      </RowCenterDiv>

      <RowCenterDiv>
        <Button
          size={'large'}
          style={{ 'margin-right': 10 }}
          shape="circle"
          type="primary"
          danger
          onClick={props.incrementCounter}
        >
          +1
        </Button>
        <Button
          size={'large'}
          shape="circle"
          type="primary"
          onClick={props.decrementCounter}
        >
          -1
        </Button>
      </RowCenterDiv>

      <RowCenterDiv>
        <Title type="secondary">
          {`Redux count variable: ${props.counter}`}
        </Title>
      </RowCenterDiv>

      <RowCenterDiv>
        <Title type="success">
          {`This is ${props.isServer ? 'server' : 'client'} side render.`}
        </Title>
      </RowCenterDiv>

      <RowCenterDiv>
        <Title type="warning">{`Next.js 's stars(by fetch): ${props.stars}`}</Title>
      </RowCenterDiv>
    </div>
  )
}

const PageBWithLayout = Layout(PageB, 'PageB')

const mapStateToProps = state => ({
  counter: state.getIn(['counter', 'counter', 'count']),
})

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
}

const PageBWithLayoutWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageBWithLayout)

PageBWithLayoutWithRedux.getInitialProps = async ({ store, isServer }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js', {})
  const json = await res.json()
  store.dispatch(incrementCounter())
  return { isServer, stars: json.stargazers_count }
}

export default PageBWithLayoutWithRedux
