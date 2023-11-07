const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('./top.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();