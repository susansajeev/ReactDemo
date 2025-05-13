import React from 'react'

const BuggyErrComponent = () => {
throw new Error("I crashed!");
  return (
      <div>This will never render</div>
  )
}

export default BuggyErrComponent