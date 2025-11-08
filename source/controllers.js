// CONTROLLERS MODULE

import { loadList, loadItem } from "./model.js";
import { formatDate } from "./utils.js"; 

export async function mainPage(res) {
    let s = '<!doctype html>' + 
            '<html>' +
                '<head>' +
                    '<meta charset="UTF-8">' +
                    '<title>to-do list</title>' +
                '</head>' +
                '<body>' +
                    '<h1>TO-DO</h1>';
    const list = await loadList();
    for (let t of list)
        s +=    `<h2><a href="/${t._id}/">${t.title}</a></h2>`+
                `<p>${t.desc}</p>` +
                `<p><small>Created: ${formatDate(t.createdAt)}</small></p>` +
                '<p>&nbsp;</p>';
    s +=            '</body>' +
                '</html>';
        res.end(s);
}

export async function detailPage(res, id) {
    const t = await loadItem(id);
    if (!t) {
        errorPage(res);
        return;
    }
    res.end('<!doctype html>' + 
            '<html>' +
                '<head>' +
                    '<meta charset="UTF-8">' +
                    `<title>${t.title} :: to-do list</title>` +
                '</head>' +
                '<body>' +
                `<h1>${t.title}</h1>` +
                `<p>${t.desc}</p>` +
                '</body>' +
            '</html>');    
}

export async function errorPage(res) {
    res.statusCode = 404;
    res.end('<!doctype html>' + 
            '<html>' +
                '<head>' +
                    '<meta charset="UTF-8">' +
                    '<title>ERROR!</title>' +
                '</head>' +
                '<body>' +
                    '<h1>ERROR!</h1>' +
                    '<p>The requested page does not exist</p>' +
                '</body>' +
            '</html>');   
}