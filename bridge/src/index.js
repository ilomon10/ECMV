const port = 8081;
const io = require("socket.io");
const server = io.listen(port);

let deviceSockets = new Map();

server.on('connection', socket => {
  console.info(`Connected \t [id=${socket.id}]`);
  socket.join('anonymous');
  server.to('anonymous').emit('bijon');
  socket.on('meta', payload => {
    console.log(payload);
    socket.leave('anonymous');
    if (payload.type === 'monitor') {
      socket.join(`device/${payload.device}`);
      socket.on('devices', id => {
        console.log(id);
        if(id) {
          console.log(id);
          socket.emit('devices', deviceSockets.get(socket.id));
        } else {
          socket.emit('devices', deviceSockets.keys());
        }
        console.log(deviceSockets);
      })
    } else if (payload.type === 'device') {
      deviceSockets.set(socket.id, socket);
      socket.join(`device/${socket.id}`);
    }
  });
  socket.on('disconnect', () => {
    deviceSockets.delete(socket.id);
    console.info(`Disconnect \t [id=${socket.id}]`);
  })
})

console.info(`listen on ${port}`);