import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  const ref = useRef(null)
  const history = useHistory()

  // we handle the navigation that comes from the MFE Marketing
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const { pathname: nextPathname } = location
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
