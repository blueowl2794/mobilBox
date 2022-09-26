export const helpCreate = async(dataFile) => {

    const API = `http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152694253/users`;//esta deberia estar en el .env(obvio...xd)
    // await fetch(API)
    await fetch(API, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFile),
    })
    .then(res=> res.json())
    .then((c)=>{
        console.log(c);
    }).catch((err)=>{
        console.error(err);
    });
    
}
export const helpEdite = async(id, dataFile) => {

    const API = `http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152694253/users/`;//esta deberia estar en el .env(obvio...xd)
    // await fetch(API)
    await fetch(API + id, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFile),
    })
    .then(res=> res.json())
    .then((c)=>{
        console.log(c);
    }).catch((err)=>{
        console.error(err);
    });
    
}

export const helpDelete = async(id) => {

    const API = `http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152694253/users/`;//esta deberia estar en el .env(obvio...xd)
    // await fetch(API)
    await fetch(API + id, {
        method: 'DELETE', // or 'PUT'
        
    })
    .then(res=> res.json())
    .then((c)=>{
        console.log(c);
    }).catch((err)=>{
        console.error(err);
    });
    
}