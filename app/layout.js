import Navbar from './(components)/navbar/page'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body>
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </body>
    </html>

  )
}
