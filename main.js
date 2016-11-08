/* global: yebo, document */

const init = function(sdk, doc) {

  const createElement = function(doc) {
    return product => {
      const p1 = doc.createElement('p')
      p1.innerText = product.name
      const p2 = doc.createElement('p')
      p2.innerText = product.price

      const newElement = doc.createElement('div')
      newElement.appendChild(p1)
      newElement.appendChild(p2)

      return newElement
    }
  }

  const listProducts = function(createElement) {
    return state => {
      const products = state.products
      return {
        el: products.map(createElement),
        state: state
      }
    }
  }

  const appendToDom = function(doc) {
    return state => {
      state.el.map(el => doc.body.appendChild(el))

      return state
    }
  }

  sdk.set('store', 'yuri')
  sdk.getProducts({})
    .then(listProducts(createElement(doc)))
    .then(appendToDom(doc))
}
init(yebo, document)

