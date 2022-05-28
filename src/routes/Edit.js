import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";




const Edit = () => {
    const navigate = useNavigate();
    let params = useParams();
    let artiklID = params.EditID
    console.log(artiklID);

    
    
    const Azuriraj = (id, n, p, m, c, k) => {
        var params = new URLSearchParams();
        params.append('id', id);
        params.append('naziv', n);
        params.append('proizvodac', p);
        params.append('model', m);
        params.append('cijena', c);
        params.append('kolicina', k);
        axios.post(`http://localhost:8080/WPSP-2022/SPJ-LV7/backend/update.php`, params)
          .then((response) => { console.log(response.data); });
      };

    useEffect(() => {
        getArtikl(artiklID);
    }, []);

    function getArtikl(id)
    {
        try
        {
            axios.get(`http://localhost:8080/WPSP-2022/SPJ-LV7/backend/readOne.php?id=${id}`).then((response) => {
              console.log(response.data)
            let r = response.data[0];
            console.log(r);
            setInputs({
              id: r.id,
              naziv: r.naziv,
              proizvodac: r.proizvodac,
              model: r.model,
              cijena: r.cijena,
              kolicina: r.kolicina 
            })});
        }
        catch(error)
        {
           
        }
    }
    
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        Azuriraj(inputs.id, inputs.naziv, inputs.proizvodac, inputs.model, inputs.cijena, inputs.kolicina);
        alert(`${inputs.id} ${inputs.naziv} je azuriran`);
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    return (
        <>
      <form onSubmit={handleSubmit}>
        <label>Unesite ID:
          <input
            type="number"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Unesite naziv:
          <input
            type="text"
            name="naziv"
            value={inputs.naziv || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Unesite proizvodaca:
          <input
            type="text"
            name="proizvodac"
            value={inputs.proizvodac || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Unesite model:
          <input
            type="text"
            name="model"
            value={inputs.model || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Unesite cijenu:
          <input
            type="number"
            name="cijena"
            value={inputs.cijena || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Unesite kolicinu:
          <input
            type="number"
            name="kolicina"
            value={inputs.kolicina || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn btn-success">Dodaj</button>
      </form>
    </>
    )

}

export default Edit