#!/usr/bin/env node
const store = require("./lib/store");
const config = require("./lib/config");

const [command, ...rest] = process.argv.slice(2);

function main() {
  switch (command) {
    case "add": {
      const text = rest.join(" ").trim();
      if (!text) {
        console.log("Usage: notes add <your note>");
        return;
      }
      const note = store.add(text);
      console.log(`Added note #${note.id}: ${note.text}`);
      break;
    }
    case "list": {
      const notes = store.all();
      if (notes.length === 0) {
        console.log("No notes yet. Add one with: notes add <text>");
        return;
      }
      for (const note of notes) {
        console.log(`#${note.id}  ${note.text}`);
      }
      break;
    }
<<<<<<< HEAD
=======
    case "search": {
        const term = rest.join(" ").trim();
        const found = store.search(term);
        if (found.length === 0) {
          console.log(`No notes match "${term}"`);
          return;
        }
        for (const note of found) {
          console.log(`#${note.id}  ${note.text}`);
        }
        break;
      }
      case "edit": {
        const id = Number(rest[0]);
        const text = rest.slice(1).join(" ").trim();
        store.edit(id, text);
        console.log(`Updated note #${id}`);
        break;
      }
      case "delete": {
        const id = Number(rest[0]);
        const ok = store.remove(id);
        // 以下は現在のファイルにある内容をそのまま残す
>>>>>>> 4b9f26c (Update notes.js)
    case "delete": {
      const id = Number(rest[0]);
      const ok = store.remove(id);
      console.log(ok ? `Deleted note #${id}` : `No note #${id} found`);
      break;
    }
    default:
<<<<<<< HEAD
      console.log("Commands: add <text> | list | delete <id>");
=======
      console.log("Commands: add <text> | list | search <term> | edit <id> <text> | delete <id>");
>>>>>>> 4b9f26c (Update notes.js)
      console.log(`(Session locks after ${config.SESSION_TIMEOUT_MINUTES} minutes of inactivity.)`);
  }
}

main();
