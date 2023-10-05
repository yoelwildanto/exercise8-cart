fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

const [data, setData] = useState();

const fetchData =async () =>{
try { 
  const response= await axios.get(
  'https://fakestoreapi.com/products');
  setData(response.data);
} catch (err){
  console.log(err);
}
};

useEffect (() => {
  fetchData();
}, []);

//nanti pake nya (data.image) data.id dll