import React, { Component } from 'react'

export class posts extends Component {
  render() {
    return (
      <div className='mx-auto'>
        <table className='table-auto w-full'>
          <tr className='mx-auto'>
              <th className='w-3'>no.</th>
              <th className=''>제목</th>
              <th className='w-auto'>작성일</th>
          </tr>
        </table>
      </div>
    )
  }
}

export default posts