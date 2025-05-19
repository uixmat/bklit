const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

// Start ngrok
const ngrok = spawn("ngrok", ["http", "3000"]);

let ngrokUrl = "";

ngrok.stdout.on("data", (data) => {
  const output = data.toString();
  console.log(output);

  // Look for the forwarding URL in ngrok's output
  const match = output.match(/https:\/\/[a-z0-9-]+\.ngrok\.io/);
  if (match) {
    ngrokUrl = match[0];
    console.log("Ngrok URL:", ngrokUrl);

    // Write the URL to a temporary file that other scripts can read
    fs.writeFileSync(path.join(__dirname, "../.ngrok-url"), ngrokUrl);
  }
});

ngrok.stderr.on("data", (data) => {
  console.error(`ngrok error: ${data}`);
});

ngrok.on("close", (code) => {
  console.log(`ngrok process exited with code ${code}`);
  // Clean up the temporary file
  try {
    fs.unlinkSync(path.join(__dirname, "../.ngrok-url"));
  } catch (err) {
    // Ignore error if file doesn't exist
  }
});
