import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from '../components/Clock'

@inject('store') @observer
class Page extends React.Component {

  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
        <nav>
          <Link href={this.props.linkTo}>Navigate</Link>
        </nav>
      </div>
    )
  }
}

export default Page
