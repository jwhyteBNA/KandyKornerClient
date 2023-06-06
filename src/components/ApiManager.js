export const login = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
 }

export const register = (user) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}

export const registration = (user) => {
    return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
}

export const getAllProducts = () => {
    return fetch("http://localhost:8088/products")
    .then((response) => response.json())
}

export const productLocation = (productId) => {
    return fetch(`http://localhost:8088/productLocations?productId=${productId}`)
      .then(response => response.json())
   }

export const locationsForProducts = (locationIds) => {
    return fetch(`http://localhost:8088/locations?id=${locationIds.join("&id=")}`)
    .then(response => response.json())
}

export const getPurchases = (ordersToSendToAPI) => {
    return fetch(`http://localhost:8088/purchases`, {
    method: "POST",
    headers: {
        "Content-Type": "application/JSON"
    },
    body: JSON.stringify(ordersToSendToAPI)
})
.then(response => response.json())
   }

export const getAllProductLocations = (id) => {
    return fetch(`http://localhost:8088/productLocations?_expand=location&_expand=product&id=${id}`)
        .then(response => response.json())
   }

export const updateCustomerDetail = (customerId) => {
    return fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
        .then(response => response.json())
   }

export const getCustomerUsers = (customerId) => { 
    return fetch(`http://localhost:8088/customers?&userId=${customerId}`)
      .then((response) => response.json())
}

export const updateCustomerProfile = (profile) => {
    return fetch(`http://localhost:8088/customers/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((response) => response.json())
}

export const getAllCustomers= () => {
    return fetch(`http://localhost:8088/users?isStaff=false&_embed=customers`)
            .then((response) => response.json())
}

export const deleteEmployee = (employeeObject) => {
    return fetch(`http://localhost:8088/employees/${employeeObject.id}`, {
                method: "DELETE"
            })
}

export const deleteUser = (employeeObject) => {
    return fetch(`http://localhost:8088/users/${employeeObject.user.id}`, {
                method: "DELETE"
            })
}

export const listEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=user&_expand=location`)
    .then((response) => response.json())
}

export const addEmployeeUser = (employeesToSendToUserAPI) => {
   return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeesToSendToUserAPI),
    })
      .then((response) => response.json())
}

export const addEmployee = (employeesToSendToEmployeeAPI) => {
    return fetch("http://localhost:8088/employees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employeesToSendToEmployeeAPI),
        })
      .then((response) => response.json())
}

export const getAllLocations= () => {
   return fetch("http://localhost:8088/locations")
        .then((response) => response.json())
}

export const productPurchase = () => {
    return fetch("http://localhost:8088/purchases?&_expand=product")
     .then((response) => response.json())
}

export const createProduct= (productToSendToAPI) => {
    return fetch(`http://localhost:8088/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToSendToAPI),
    })
      .then((response) => response.json())
}

export const getAllProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
        .then((response) => response.json())
}

export const productsByType = () => {
    return fetch("http://localhost:8088/products?_sort=name&_expand=productType")
    .then((response) => response.json())
}

export const CustomerPurchases = () => {
    return fetch("http://localhost:8088/users?isStaff=false&_embed=customers&_embed=purchases")
    .then((response) => response.json())
}