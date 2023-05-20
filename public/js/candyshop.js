console.log('candy')
async function submitEvent(e){
    try{
        e.preventDefault();
        const chocolate=document.getElementById('choose').value;
        const desc=document.getElementById('desc').value;
        const price=document.getElementById('price').value;
        const quantity=document.getElementById('quantity').value;
       obj={
        chocolate,
        desc,
        price,
        quantity
       }
     const post= await axios.post('http://localhost:3000/shop/add-candy',obj)

       console.log(post.data);
       showNewUserOnScreen(obj)
    }
    catch (err){
        console.log(err);
    }
   
}
window.addEventListener("DOMContentLoaded",async function getAll(){
    try{
       await axios.get('http://localhost:3000/shop/show-all-users')
       .then(result=>{
        //console.log(result.data.allusers.length);
        for(var i=0;i<result.data.allusers.length;i++){
            showNewUserOnScreen(result.data.allusers[i]);
        }
       })
    }
        catch(err){
            console.log(err);
        }
})
  
function showNewUserOnScreen(obj){
    const parentNode=document.getElementById('showing');
    const createNewUser=`<li id=${obj.id}> ${obj.chocolate} - ${obj.desc} - ${obj.price} -${obj.quantity}
    <button style="padding:3px;margin:5px" onclick=reduceByOne('${obj}') class="btn btn-success">Buy One</button>
    <button style="padding:3px;margin:5px" onclick=reduceByTwo('${obj}') class="btn btn-success">Buy Two</button>
    <button style="padding:3px;margin:5px" onclick=reduceByThree('${obj}') class="btn btn-success">Buy Three</button>
        </li>`

        parentNode.innerHTML+=createNewUser;
    }

    async function reduceByOne(obj){
        await axios.put(`http://localhost:3000/shop/buyOne/${obj.id}`)
        .then(response=>{
            console.log(response)
        })
    }
       
    


   






