function getPostElements(id_list=[]) {
    const obj = {};
    for(let id of id_list) {
        if (id=="G") {
            obj[id] = $(`#${id}`).prop('files')[0];
            continue;
        }
        obj[id] = $(`#${id}`).val();
    }
    return obj;
}

async function postData(url = '', data = { }) {
    const dataStr = JSON.stringify(data);

    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: dataStr
    });
    return response;
}

$(async function(e) {
    console.log("ねこ");
    const sbtn = $("#sendBtn");
    const fd = new FormData();
    sbtn.click(async function(e) {
        e.preventDefault()
        
        await postData('/form/post', getPostElements([ "A", "B", "C", "D", "E", "F" ]))
        .then(response => {
            console.log(response);
            if (response.ok) {
                location.href = "/neko?mes=ok!"
            } else {
                location.href = "/neko?mes=ohh"
            }
        })
        .catch(e => {
            console.log(e);
        })

    })
})
