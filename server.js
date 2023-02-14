const app = require('./app');
const db = require('./database/dbconnection');

app.set('port', process.env.PORT || 8080);

const start = async () => {
    try{
        await db()
        const server = app.listen(app.get('port'), () =>{
            console.log(`App listening at port ${server.address().port}`);
        })
    }catch (error){
        console.log('error')
    }
}
start()