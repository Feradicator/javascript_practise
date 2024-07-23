
function getData(data)
{
    console.log(`fetching ${data}`)
    setTimeout(()=>{
        console.log(`data ${data} fetched`)
    },2000);
    
}
async function fun()
{
    res1= getData(1);
    res1= getData(2);
    res1=                                                             getData(3);


}
fun()