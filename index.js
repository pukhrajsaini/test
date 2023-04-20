const express = require('express');
const app = express();

app.use(express.json())
app.post('/sum', (req, res, next) => {
    const numbers = req.body.numbers; // [2,3,4,8,5,9]
    
    console.log(numbers);
    let max = numbers[0];
    
    for(let i=0; i< numbers.length; i++){
        for(let j=i; j<numbers.length; j++){
            if(numbers[i] < numbers[j]){
                let a= numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = a;
            }
        }

    }

    const sum = numbers[0]+numbers[1]+numbers[2]+numbers[3];

    return res.status(200).json({
        sum
    })


});

app.listen(4000, () => {
    console.log('server started');
})