import * as home from "../controllers/home_controller.ts";

export const routes = 
[
    {
        PATH: "aaa",
        URL: ["/neko"],
        GET: home.get_neko
    },
    {
        PATH: "bbb",
        URL: ["/"],
        GET: home.get_form
    },
    {
        PATH: "ccc",
        URL: ["/form/post"],
        POST: home.post_form
    }
];