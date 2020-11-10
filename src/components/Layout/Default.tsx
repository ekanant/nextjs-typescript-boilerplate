import React, { ReactElement } from "react"


type Props = {
    children: ReactElement
}

const Layout = ({ children }: Props): ReactElement => {
    return (
        <>
            <div className="background bg-dark"></div>
            {children}
            <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
      `}</style>
        </>
    )
}

export default Layout