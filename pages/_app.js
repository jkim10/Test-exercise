import { useEffect, useState } from 'react'
import '../styles.css'
export default function App() {
  const data = require('/assets/Mock-Data/submission-data.json')
  const [lineItems, setLineItems] = useState(data.line_items || [])

  const deleteLineItem = (index_to_delete) => {
    const lineItemCopy = lineItems;
    setLineItems((line_items) => line_items.filter((_, index) => index !== index_to_delete));

  }
  return (
    <div className="lineItemSection">
      <h2>Line items</h2>
      <table>
        <tr>
          <th>Items</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price ($)</th>
          <th>Amount ($)</th>
        </tr>
        {lineItems.map((line_item,index)=>{
          return(
            <tr>
              <td className='name'><input type='text' value={line_item.name}/></td>
              <td className='description'><input type='text' value={line_item.description}/></td>
              <td className='quantity'><input type='text' value={line_item.quantity}/></td>
              <td className='unit_price'><input type='text' value={line_item.unit_price}/></td>
              <td className='amount'>{line_item.unit_price * line_item.quantity}</td>
              <td><button id="deleteButton" onClick={()=>{deleteLineItem(index)}}>x</button></td>
            </tr>
          )
        })}
        <tr><button> + Add New Line Item</button></tr>
      </table>

    </div>
  )
}
