// const fs = require('fs-extra');
// const path = require('path');

// const staticFolderPath = path.resolve(__dirname, './build/static/');
// const newFolderPath = path.resolve(staticFolderPath, 'english');

// (async () => {
//   try {
//     // Create the 'english' folder within the 'static' directory
//     await fs.ensureDir(newFolderPath);

//     // Move the contents of 'static' to 'english' excluding the 'english' folder
//     const filesAndDirs = await fs.readdir(staticFolderPath);

//     for (const item of filesAndDirs) {
//       if (item !== 'english') {
//         const itemPath = path.resolve(staticFolderPath, item);
//         const newItemPath = path.resolve(newFolderPath, item);
//         await fs.move(itemPath, newItemPath, { overwrite: true });
//       }
//     }

//     console.log('Static files and directories moved to the "english" folder successfully.');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();
