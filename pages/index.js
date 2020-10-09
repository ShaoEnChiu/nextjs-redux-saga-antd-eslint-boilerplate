import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '../actions'
import { fetchNextDataRequest } from '../actions/next.actions'
import fetch from 'isomorphic-unfetch'
import { Button, Typography, PageHeader } from 'antd'
import { RowCenterDiv } from '../components/customComponent'

const { Title } = Typography

const IndexPage = props => {
  useEffect(() => {
    props.fetchNextDataRequest({})
  }, [])

  return (
    <div>
      <RowCenterDiv>
        <PageHeader
          className="site-page-header"
          title="Home"
          subTitle="This is a subtitle"
        />
      </RowCenterDiv>

      <RowCenterDiv>
        <Button
          size={'large'}
          style={{ marginRight: 10 }}
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

      <RowCenterDiv>
        <Title type="danger">{`Next.js 's description(by axios): ${props.nextData.description}`}</Title>
      </RowCenterDiv>
    </div>
  )
}

const IndexPageWithLayout = Layout(IndexPage, 'Home')

const mapStateToProps = state => ({
  counter: state.getIn(['counter', 'counter', 'count']),
  nextData: state.getIn(['next', 'next', 'nextData']),
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
  fetchNextDataRequest: params => dispatch(fetchNextDataRequest(params)),
})

const IndexPageWithLayoutWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPageWithLayout)

IndexPageWithLayoutWithRedux.getInitialProps = async ({ store, isServer }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js', {})
  const json = await res.json()
  store.dispatch(incrementCounter())
  return { isServer, stars: json.stargazers_count }
}

export default IndexPageWithLayoutWithRedux
