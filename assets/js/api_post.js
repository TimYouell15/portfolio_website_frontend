// const body = JSON.stringify({
//     title: "Add",
//     body: "My POST request",
//     userId: 900,
//   });
//   $.post("https://portfolio-api-gateway-dv5zigb6.ts.gateway.dev/", body, (data, status) => {
//     console.log(data);
//     return data
// });

async function getCount() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
        };

    let obj;
    const result = await fetch("https://portfolio-api-gateway-dv5zigb6.ts.gateway.dev/", requestOptions)
  
    obj = await result.json();
    return(obj);
}

getCount().then(count => document.getElementById('website_count').innerHTML = count.ViewCount);

