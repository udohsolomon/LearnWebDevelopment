
const o = new Object()
o.firstName = 'Solomon'
o.lastName = 'Amos'
o.isTeaching = true
o.greet = function() { console.log('Hello!') }

console.log(JSON.stringify(o))

const o2 = {}
o2['firstName'] = 'Solomon'
const a = 'lastName'
o2[a] = 'Amos'

const o3 = {
  firstName: 'Solomon',
  lastName: 'Amos',
  greet: function() {
    console.log('hi')
  },
  address: {
    street: "Main st.",
    number: '111'
  }
}

// see 04_objectsMutation.js for more objects
