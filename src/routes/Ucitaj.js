import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const readURL = "http://localhost:8080/WPSP-2022/SPJ-LV7/backend/read.php";


const Ucitaj = () => {
    function Delete(id)
    {
        window.alert("Jeste li sigurni da želite obrisati artikl");
        deleteConfirm(id);
    }
    function deleteConfirm(id)
    {        
        if(window.confirm("Are you sure"))
        {
            var params = new URLSearchParams();
            params.append('id', id);
            axios.post('http://localhost:8080/WPSP-2022/SPJ-LV7/backend/delete.php', params).then((response) => {
                setPost([]);getArtikl()
            })
        }
    }

    function getArtikl()
    {
        axios.get(readURL).then((response) => {
            setPost(response.data);
            setArt(response.data);
            //console.log(response.data);
        })
    }

    const [post, setPost] = useState([]);
    useEffect(() => {
       getArtikl();
    }, [])
   

    const [art, setArt] = useState([]);
    useEffect(() => {
        getArtikl();
    }, []);
    console.log(art);

    function Filter(e)
    {
        const val = e.target.value.toLowerCase();
        //console.log(val);
        if(val != "")
        {
            let arr = [];
            art.map((a) => {
                if(a.id.toString().toLowerCase().includes(val) || a.naziv.toString().toLowerCase().includes(val) || 
                a.proizvodac.toString().toLowerCase().includes(val) || a.model.toString().toLowerCase().includes(val) ||
                a.cijena.toString().toLowerCase().includes(val) || a.kolicina.toString().toLowerCase().includes(val))
                {
                    arr.push(a);
                }
            });
            //console.log(arr);
            setPost(arr);
        }
        else
        {
            getArtikl();
        }
    }
    
    
    if (!post) return null;
    return (
        <>
            <div className="input-group mb-3">
                <button className="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                <input onChange={Filter} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>R. br</th>
                        <th>Naziv</th>
                        <th>Proizvodac</th>
                        <th>Model</th>
                        <th>Cijena</th>
                        <th>Količina</th>
                        <th>Uredi</th>
                        <th>Obriši</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((artikl) => {
                        return(
                        <tr key={artikl.id}>
                            <td>{artikl.id}</td>
                            <td>{artikl.naziv}</td>
                            <td>{artikl.proizvodac}</td>
                            <td>{artikl.model}</td>
                            <td>{artikl.cijena}</td>
                            <td>{artikl.kolicina}</td>
                            <td><Link to={`Edit/${artikl.id}`} className="btn btn-info btn-sm" >Uredi</Link></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => Delete(artikl.id)}>Obriši</button></td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}

export default Ucitaj

//onClick={() => deleteConfirm(artikl.id)}