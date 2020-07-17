import React, {useState} from 'react';
import Error from './Error';

function Seeker({saveThatSearch}) {
    
    //const [search, saveThatSearch] = useState('');
    const [conceptSearch, saveConceptToSearch] = useState('');
    const [error, saveError] = useState(false);
    const searchImg = e => {
        e.preventDefault();

        //validate ...or save that error 
        if (conceptSearch === '') {
            saveError(true);
            return;
        }
        //send to the main component the concept to search 
        saveError(false);
        saveThatSearch(conceptSearch);
    }
    
    
    return (
        <form
            onSubmit={searchImg}
        >
          <div className="row">
            <div className="form-group col-md-8 shadow mb-4 ">
              <input
                 type="text"
                 className="form-control form-contol-lg bg-light"
                 placeholder="Busca tu imagen,ejemplo: Cricket o Té"
                 onChange={e => saveConceptToSearch(e.target.value)}
              />
            </div> 
            <div className="form-group col-md-4">
              <input
                type="submit"
                className="btn btn-lg btn-success btn-block"
                value="Buscar"
              />
            </div>   
             
          </div>
            {(error) ? <Error message="Agrega una palabra para comenzar tu búsqueda" /> : null}
        </form>
    )
}

export default Seeker;
