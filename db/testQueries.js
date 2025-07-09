const db = require("./queries");

async function test() {
  try {
    console.log("📥 Inserting 'test_user'...");
    await db.insertUsername("test_user");

    console.log("📄 Fetching all usernames:");
    const users = await db.getAllUsernames();
    console.log(users);

    console.log("🔎 Searching usernames with 'test':");
    const searchResult = await db.getAllUsernames("test");
    console.log(searchResult);

    console.log("🗑️ Deleting all usernames...");
    await db.deleteAllUsernames();

    console.log("✅ Test completed");
  } catch (err) {
    console.error("❌ Error during test:", err);
  } finally {
    process.exit();
  }
}

test();
