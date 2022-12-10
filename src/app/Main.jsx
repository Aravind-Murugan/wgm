/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */
import { React, useState, useEffect } from 'react'
import PreLoader from './components/PreLoader'
import HomePage from './pages/HomePage'

function Main() {
  const [completed, setcompleted] = useState(undefined)
  useEffect(() => {
    setTimeout(() => {
      setcompleted(true)
    }, 5000)
  })
  return (
    <main-div>
      { !completed ? (
        <section>
          <PreLoader />
        </section>
      ) : (
        <section>
          <HomePage />
        </section>
      )
      }
    </main-div>
  )
}

export default Main;