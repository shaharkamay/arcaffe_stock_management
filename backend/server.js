const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.get("/", (req, res) => {
    
    res.end()
})

app.listen(3000)