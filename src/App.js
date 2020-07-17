import React, {useState, useEffect}from 'react';
import Seeker from './components/Seeker';
import ListOfImgs from './components/ListOfImgs';
import seekerBrand from './images/seeker.png';
 
import './App.css';

function App() {

  const [search, saveThatSearch] = useState('');
  const [images, saveImages] = useState ([]); 
  const [actualPage, saveActualPage] = useState(1);
  const [totalPages, saveTotalPages] = useState(1);

  useEffect(() => {
    
    const  askApi =  async () => {
         
          if(search === '') return;

          const imgPage= 20;
          const key ='17376848-c71bcd5964de485b8d7427883'
          const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPage}&page=${actualPage}`;

          const answer = await fetch(url);
          const result = await answer.json();

          saveImages(result.hits);

          //calculating the total of pages
          const mesuringTotalPages = Math.ceil(result.totalHits / imgPage);
          saveTotalPages(mesuringTotalPages);

          const jumbotron = document.querySelector('.jumbotron');
          jumbotron.scrollIntoView({ behavior:'smooth', block:'start'});
    }
      askApi();
  }, [search, actualPage]);


  const prevPage = () => {
    let newActualPage = actualPage - 1;

    saveActualPage(newActualPage);
  }

  const nextPage = () => { 
    let newActualPage = actualPage + 1; 
  
    saveActualPage(newActualPage);
  }


  return (
    <div className="app container">
      <div className="brand-container">
        <h1 className=" p-5 text-center display-5 m-10"> Seeker.img</h1>
        <img src={seekerBrand} alt="titulo" className="brandImg"/>    
      </div>
       <div className="jumbotron">
         
        <Seeker
          saveThatSearch={saveThatSearch}
        />
       </div>
     
       <div className="row justify-content-center">
         <ListOfImgs
          images = {images}
         />

          { (actualPage === 1 ) ? null : (
         <button onClick={prevPage} type="button" className="btn btn-warning mr-5 mb-5">&laquo; Anterior </button>
        )}

         { (actualPage === totalPages)  ? null :  (  
         <button onClick={nextPage} type="button" className="btn btn-warning mr-1 mb-5">Siguiente &raquo;</button>
          )} 
         </div>
    </div>
  );
}

export default App;
