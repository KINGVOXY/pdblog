import {
    SystemRequest,
    SystemResponse
} from "../deps.ts";

import * as mod from "https://deno.land/std@0.140.0/node/querystring.ts";

export async function get_neko(req: SystemRequest, res: SystemResponse): Promise<void> {
    let message;
    let query;
    
    const qp = req.getURL().search.replaceAll("?", "");
    if(qp) query = mod.parse(qp);

    if(query?.mes) message = query?.mes;
    else message = "";
    
    // console.log(message);

    await res.preset({mes: message})
    await res.setFile("./views/home/neko.html");
}

export async function get_form(req: SystemRequest, res: SystemResponse): Promise<void> {
    await res.setFile("./views/home/form.html");
}

export async function post_form(req: SystemRequest, res: SystemResponse): Promise<void> {
    try {
        const body = await req.readBody(false)
        console.log(body);
        const con = JSON.parse(body);
        console.log(con);
        
        res.status = 200;
    } catch(error) {
        console.log(error);
        
        res.status = 500;
    }
    await res.send(res.response);
}