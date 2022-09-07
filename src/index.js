const app = require('./server');
require('./database');

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
    })