export function mainPage(res) {
    let s = '<!doctype html>' + 
            '<html>' +
                '<head>' +
                    '<meta charset="UTF-8">' +
                    '<title>to-do list</title>' +
                '</head>' +
                '<body>' +
                    '<h1>to-do</h1>' +
                '</body>' +
            '</html>';
            res.end(s);
}

export function detailPage(res, id) {
    res.end('<!doctype html>' + 
            '<html>' +
                '<head>' +
                    '<meta charset="UTF-8">' +
                    '<title>to-do list</title>' +
                '</head>' +
                '<body>' +
                    '<h1>case</h1>' +
                '</body>' +
            '</html>');    
}

export function errorPage(res) {
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