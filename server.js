const express = require('express');
const cors = require('cors');
const { SerialPort } = require("serialport");

const app = express();
const PORT = 4000;
var availability = 0;

app.use(cors());

// Define the serial port (adjust baud rate as needed)
const port = new SerialPort({
  path: "/dev/tty.usbmodem1101", // Change this to match your device
  baudRate: 9600,
  autoOpen: false,
});

// Open the port
port.open((err) => {
    if (err) {
        return console.error("Error opening port:", err.message);
    }
    console.log("Serial port COM3 opened successfully");
});

let bufferData = "";
// Read data from the port
port.on("data", (data) => {
  // Accumulate the incoming data into the buffer
  bufferData += data.toString();
  //console.log("Buffering data:", bufferData);
  
  // Process the data if it ends with a specific delimiter (e.g., newline)
  if (bufferData.includes("\n")) {
      availability = parseInt(bufferData.trim())
      
      // Reset the buffer for the next chunk of data
      bufferData = "";
  }
});
// Handle errors
port.on("error", (err) => {
    console.error("Serial Port Error:", err.message);
});

// Close the port gracefully when the process exits
process.on("SIGINT", () => {
    console.log("Closing serial port...");
    port.close(() => process.exit());
});


app.get('/availability', (req, res) => {
  // Simulating hardware-provided availability (for now fixed values)
  res.json({
    available: availability,
    capacity: 50
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
