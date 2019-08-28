function StrainList() {
    const [strains, setStrains] = useState([])
    
    useEffect(() => {
      const getStrains = () => {
        axios
          .get('https://med-cabinet-temp.herokuapp.com/api/users/login')
          .then(response => {
            setStrains(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getMovies();
    }, []);
    
    return (
      <div className="movie-list">
        {strains.map(strain => (
          <Link to={`/strain/${strain.id}`}>
          
          </Link>
        ))}
        
      </div>
    );
  }
  
  function StrainDetails({ strain }) {
    return ( <StrainCard data={strain}/>)
  }
  
  
  export default GetStrains;