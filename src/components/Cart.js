import React from 'react';
import {useCart} from 'react-use-cart';
import { Table } from 'react-bootstrap';

const Cart = () => {
    const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem
    } = useCart();


    if(isEmpty) return <h1 className="text-center">Cart Empty</h1>;
  return (
    <div className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
            <div className='text-shift'>
            <h5 className='text'>cart =({totalUniqueItems})</h5>
            <h6 className='text'>total items={totalItems}</h6>
            </div>
          <Table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img alt="" src={item.image} height="80px" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() =>updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-info ms-2">
                        -
                      </button>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-info ms-2">
                        +
                      </button>
                      <button className="btn btn-danger ms-2 my-2"onClick={() => removeItem(item.id)}>
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <h1>Total : {cartTotal}</h1>
      </div>
    </div>
  )
}

export default Cart