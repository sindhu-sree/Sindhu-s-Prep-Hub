import { Result } from 'antd'
import React from 'react'

const NotFound = () => {
  return (
    <div  >
      <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
      />
    </div>
  )
}

export default NotFound
