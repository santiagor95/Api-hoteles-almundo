import * as http from 'http';
import * as socketIo from 'socket.io';
import * as serverHandlers from './serverHandlers';
import app from './server';

const server = http.createServer(app);
const port = app.get('port');

/**
 * Set Socket.io
 */
const io = socketIo(server);
app.set('socketio', io);
io.on('connect', socket => {
    console.log('Connected client on port %s.', port);
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

/**
 * Binds and listens for connections on the specified host
 */
server.listen(port, () => { console.log('Running server on port %s', port); });

/**
 * Server Events
 */
server.on('error', error => serverHandlers.onError(error, port));
server.on('listening', serverHandlers.onListening.bind(server));
