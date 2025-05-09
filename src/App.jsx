import { useState } from "react"
import { BookProvider } from "./context/BookContext"
import Header from "./components/Header"
import BookList from "./components/BookList"
import Cart from "./components/Cart"

function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <BookProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={() => setShowCart(!showCart)} />
        <main className="container mx-auto px-4 py-8">
          {showCart ? (
            <Cart onClose={() => setShowCart(false)} />
          ) : (
            <>
              <h1 className="text-3xl font-bold text-center mb-8">Book Store</h1>
              <BookList />
            </>
          )}
        </main>
        <section>
          <div className="flex w-full justify-center container mx-auto px-4 py-8">
            <p>Made by Nithin P and Gaurav Das. Copyright © 2025 Book Store. All rights reserved</p>
          </div>
        </section>
      </div>
    </BookProvider>
  )
}

export default App

