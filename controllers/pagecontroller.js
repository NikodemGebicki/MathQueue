//Strona główna

exports.home = (req, res) => {
    res.render('home.pug');
}

//Tworzenie pokoju

exports.host = (req, res) => {
    res.render('server.pug');
}
exports.hostpanel = (req, res) => {
    res.render('queueserver.pug');
}

//Dołączanie do pokoju

exports.client = (req, res) => {
    res.render('client.pug');
}
exports.clientpanel = (req, res) => {
    res.render('queueclient.pug');
}

/*
exports.home = (req, res) => {
    res.render('home.pug');
}
exports.host = (req, res) => {
    res.render('server.pug');
}
exports.guest = (req, res) => {
    res.render('client.pug');
}
exports.queueserver = (req, res) => {
    res.render('queueserver.pug');
}
exports.queueuser = (req, res) => {
    res.render('queueclient.pug', {
        username: JSON.parse(JSON.stringify(req.flash('roomname')).slice(1,-1)).Name
    });
}*/
