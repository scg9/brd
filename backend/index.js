const express=require('express');
const cors=require('cors');

const app=express();
const port=3002;

app.use(cors());

app.post("/",(req,res)=>{
    const text="Niva Bupa Health Insurance (formerly known as Max Bupa Health Insurance) is one of the most trusted standalone health insurance partners. We have curated affordable and comprehensive healthcare policies catering to the different needs of our consumers. We aim to give every Indian the confidence to access best healthcare by providing health insurance plans as per your needs. Our innovative and comprehensive health policies have made us one of the leading health insurance and medical insurance company in India";
    res.send(text)
})

app.listen(port,()=>{
console.log(`server is running on ${port}`)
})