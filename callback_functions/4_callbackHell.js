function connectToDataBase()
{
    console.log("connecting to database");
    setTimeout(()=>{
        console.log('connection established');
        console.log('adding data to databse')
        setTimeout(()=>{
            console.log('data added');
            console.log('close connection');
            setTimeout(()=>
            {
                console.log('connection clsoed')
            },2000)


        },2000)


    },2000)
}
console.log('connect to database');
connectToDataBase();
console.log('asynchronous programming')