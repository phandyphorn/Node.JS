
axios
// When want to run in index.html we must full or whole url.
.get('http://localhost:5500/users')
.then((result)=>{
    console.log(result.data);
})




