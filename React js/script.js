// let h1 = React.createElement('h1',null,'Hello from React')
// let h1 = React.createElement('h1',{id:'hero'},'hello from react')
// let h2 = React.createElement('h2',{class:'heroine'},'hello from react2')

// var div = React.createElement('div',{id:'parent'},[h1,h2])

// let container = document.querySelector("#container")

// var root = ReactDOM.createRoot(container)

// root.render(div)


import parent from './parent.js'
const root = ReactDOM.createRoot(document.querySelector("#container"))

root.render(parent())


