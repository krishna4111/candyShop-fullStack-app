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
        console.log(result.data.allusers[0]);

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
    console.log(obj.chocolate)
    const parentNode=document.getElementById('showing');
    const createNewUser=`<li id=${obj.id}> ${obj.candy} - ${obj.description} - ${obj.price} -${obj.quantity}
    <button style="padding:3px;margin:5px" onclick=reduceByOne('${obj.id},${obj.id},${obj.id},${obj.id},${obj.id}') class="btn btn-success">Buy One</button>
    <button style="padding:3px;margin:5px" onclick=reduceByTwo('${obj.id},${obj.id},${obj.id},${obj.id},${obj.id}') class="btn btn-success">Buy Two</button>
    <button style="padding:3px;margin:5px" onclick=reduceByThree('${obj.id},${obj.id},${obj.id},${obj.id},${obj.id}') class="btn btn-success">Buy Three</button>
        </li>`

        parentNode.innerHTML+=createNewUser;
    }

    async function reduceByOne(id,chocolate,desc,price,quantity){
        try{
            await axios.put(`http://localhost:3000/shop/buyOne/${id}`,{
                chocolate:chocolate,
                desc:desc,
                price:price,
                quantity:quantity-1
            })
            //console.log(update)
            .then(response=>{
                location.reload();
                console.log('i am inside')
                console.log(response)
            })
        }
        catch(err){
            console.log(err);
        }
       
    }
    async function reduceByTwo(id,chocolate,desc,price,quantity){
        try{
            await axios.put(`http://localhost:3000/shop/buyTwo/${id}`,{
                chocolate:chocolate,
                    desc:desc,
                    price:price,
                    quantity:quantity-2
            })
            .then(response=>{
                location.reload();
                console.log('i am inside')
                console.log(response)
            })
        }
       catch(err){
        console.log(err);
       }
        
    }
    async function reduceByThree (id,chocolate,desc,price,quantity) {
        try{
            await axios.put(`http://localhost:3000/shop/buyThree/${id}`,{
                chocolate:chocolate,
                    desc:desc,
                    price:price,
                    quantity:quantity-3
            })
            .then(response=>{
                location.reload();
                console.log('i am inside')
                console.log(response)
            })
        }
        catch(err){
            console.log(err);
        }
       
    }

       
    


   






