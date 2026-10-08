const express = require("express")
const app = express()

const user = [
        {
            name:"james",
            age: 32,
            email: "james123@gmail.com"
        },
        {
            name:"John",
            age: 23,
            email: "john456@gmail.com"
        },
        {
            name:"paul",
            age: 25,
            email: "paul789@gmail.com"
        },
        {
            name:"deigo",
            age: 43,
            email: "deigo342@gmail.com"
        },
        {
            name:"Victor",
            age: 64,
            email: "victor567@gmail.com"
        },
        {
            name:"Ada",
            age: 33,
            email: "ada3244@gmail.com"
        },

    ]


const product = [
    {
        id: 1,
        item: "Laptop",
        qty: 4,
        price: 240
    },
    {
        id: 2,
        item: "Iphone",
        qty: 12,
        price: 240
    },
    {
        id: 3,
        item: "Samsung",
        qty: 8,
        price: 240,
       
        
    },
    {
        id: 4,
        item: "Lenovo",
        qty: 3,
        price: 240
    },
    {
        id: 5,
        item: "Speaker",
        qty: 7,
        price: 240
    }
]
app.listen("3001", ()=>{
    console.log("Server Has Started");
    
})



app.get("/user", (req, res)=>{
    res.json(user)
})
app.get("/user/:id", (req, res)=>{
    const userId = parseInt(req.params.id)
    const foundUser = user.find(u => u.id === userId)
    if (foundUser) {
        res.json(foundUser)
    } else {
        res.status(404).json({ error: "User not found" })
    }
})

// Product functions

app.get("/product", (req, res)=>{
    res.json(product)
})



app.get("/product", (req, res) => {
  res.json(product);
});

app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const selectedProduct = product.find(p => p.id === id);

  res.json(selectedProduct || { message: "Product not found" });
});
