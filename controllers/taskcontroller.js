exports.gettasks = (req, res) => {
    res.json(req.body);
}
exports.gettask = (req, res) => {
    res.json({id:req.params.id});
}
exports.createtask = (req, res) => {
    res.json(req.body);
}
exports.patchtask = (req, res) => {
    res.json({id:req.params.id});
}
exports.deletetask = (req, res) => {
    res.json({id:req.params.id});
}