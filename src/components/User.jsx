import {useState, useEffect} from "react";

function User () {
    const [data, setData] = useState(null);

    useEffect (() => {
        fetch(`https://api.github.com/users/github-john-doe`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
    })
},);

    if (data) {
        return (
            <>
            <div className="User"></div> 
                <h1 className="profil"> Mon profil Github</h1>
                <h2 className="name-profil"> {data.name}</h2>
                <div className="div-img-github"> 
                <img src="./src/assets/nq6flz10.bmp" className="github-picture" alt="doraemon"></img>
                </div>
            <div>
                <p className="text-profil"> Cliquez <a href ="https://api.github.com/users/github-john-doe/repos"> ici</a> pour consulter mes repositories Github</p>
                 
                
                </div>
            </>

        );
    }
}

export default User;