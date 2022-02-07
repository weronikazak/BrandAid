var fs = require("fs");

fs.copyFile(
  "build/contracts/Metacoin.json",
  "../src/contracts/contractInfo.json",
  (err) => {
    if (err) throw err;
    console.log("✅ Your contract's ABI was copied to the frontend");
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 6dad8e2ccb53543882e8f543c7f932272f7ca374
);
