// const io = require("socket.io")(3000, {
//   cors: {
//     origin: ["https://localhost:8000"],
//   },
// });

const app = React();
import { createServer } from "http";
import { join } from "path";
import { Server } from "socket.io";
import {
  JOIN,
  JOINED,
  CODE_CHANGE,
  SYNC_CODE,
  DISCONNECTED,
} from "./components/Editor/socketActions";

const server = createServer(app);
const io = new Server(server);

app.use((req, res, next) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

const userSocketMap = {};
function getAllConnectedClients(roomId) {
  // Map
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    socketId => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
}

io.on("connection", socket => {
  console.log("socket connected", socket.id);

  socket.on(JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(JOINED, {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  socket.on(CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(CODE_CHANGE, { code });
  });

  socket.on(SYNC_CODE, ({ socketId, code }) => {
    io.to(socketId).emit(CODE_CHANGE, { code });
  });

  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    rooms.forEach(roomId => {
      socket.in(roomId).emit(DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
