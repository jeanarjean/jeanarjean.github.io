import React from 'react'
import { Layout } from '../../components/'
import { Cart, StoreItem } from '../../components/'
import './index.scss'

class StoreHome extends React.Component {
  render() {
    var lineItem0 = process.env.LINE_ITEM0.split(',')
    var lineItem1 = process.env.LINE_ITEM1.split(',')
    var lineItem2 = process.env.LINE_ITEM2.split(',')
    var lineItem3 = process.env.LINE_ITEM3.split(',')
    var lineItem4 = process.env.LINE_ITEM4.split(',')
    var lineItem5 = process.env.LINE_ITEM5.split(',')
    var lineItem6 = process.env.LINE_ITEM6.split(',')
    var lineItem7 = process.env.LINE_ITEM7.split(',')
    var lineItem8 = process.env.LINE_ITEM8.split(',')
    var items = [
      {
        itemIds: lineItem0,
        imagePath: '/store/print1.jpg',
        title: 'First Form',
        description: 'First Form',
        orientation: 'vertical'
      },
      {
        itemIds: lineItem1,
        imagePath: '/store/print2.jpg',
        title: 'Second Form',
        description: 'Second Form',
        orientation: 'vertical'
      },
      {
        itemIds: lineItem2,
        imagePath: '/store/print3.jpg',
        title: 'Third Form',
        description: 'Third Form',
        orientation: 'horizontal'
      },
      {
        itemIds: lineItem3,
        imagePath: '/store/print4.jpg',
        title: 'Fourth Form',
        description: 'Fourth Form',
        orientation: 'vertical'
      },
      {
        itemIds: lineItem4,
        imagePath: '/store/print5.jpg',
        title: 'Fifth Form',
        description: 'Fifth Form',
        orientation: 'horizontal'
      },
      {
        itemIds: lineItem5,
        imagePath: '/store/print6.jpg',
        title: 'Business Form',
        description: 'Business Form',
        orientation: 'horizontal'
      },
      {
        itemIds: lineItem6,
        imagePath: '/store/print7.jpg',
        title: 'New Breath',
        description: 'New Breath',
        orientation: 'horizontal'
      },
      {
        itemIds: lineItem7,
        imagePath: '/store/print8.jpg',
        title: 'Flâneur Form',
        description: 'Flâneur Form',
        orientation: 'horizontal'
      },
      {
        itemIds: lineItem8,
        imagePath: '/store/print9.jpg',
        title: 'Last Light',
        description: 'Last Light',
        orientation: 'horizontal'
      }
    ]
    var itemsToDisplay = items.map((item, index) => (
      <StoreItem key={index} item={item}></StoreItem>
    ))

    return (
      <Layout>
        <div className="home-container">
          <div className="poster-container">
            {itemsToDisplay}
            <Cart />
          </div>
        </div>
      </Layout>
    )
  }
}

export default StoreHome
