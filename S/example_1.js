const fs = require('fs');

// Primary responsibility of Journal is to add entries and remove entries.
class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        this.entries[c] = `${c}: ${text}`;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}

class PersistenceManager {
    preprocess(j) {
        // Logic
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I was learning design patterns. ');
j.addEntry('I wrote some  code. ');

let p = new PersistenceManager();
let filename = '';
p.saveToFile(j, filename);

console.log(j.toString());
