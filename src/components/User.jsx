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
                <h1> Github Users</h1>
                <h2> {data.name}</h2>
                <img src="./src/assets/nq6flz10.bmp"></img>
            
            <div>
                Repositories : </div>
                <a href="https://api.github.com/users/github-john-doe/repos"></a>
            
            </>

        );
    }
}

export default User;