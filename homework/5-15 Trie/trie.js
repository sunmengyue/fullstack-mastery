class Trie {
  constructor() {
    this.end = false;
    this.prefixes = 0;
    this.children = {};
  }

  insert(str) {
    let cur = this; // let cur point to the root
    let pos = 0;
    while (pos < str.length) {
      if (cur.children[str[pos]]) {
        cur = cur.children[str[pos]];
      } else {
        cur.children[str[pos]] = new Trie();
        cur = cur.children[str[pos]];
        cur.prefixes = str[pos];
      }
      if (pos === str.length - 1) cur.end = true;
      pos++;
    }
    return this;
  }

  getAllWords(word = '', words = []) {
    if (this.end) {
      words.push(word);
    }

    for (let key in this.children) {
      this.children[key].getAllWords(word + key, words);
    }
    return words;
  }

  autocomplete(str) {
    let current = this;
    let i = 0;
    while (i < str.length) {
      current = current.children[str[i]];
      i++;
    }
    let result = current.getAllWords();
    for (let i = 0; i < result.length; i++) {
      result[i] = str + result[i];
    }
    return result;
  }
}

// tests
let trie = new Trie();
trie.insert('cow');
trie.insert('cat');
trie.insert('dog');
trie.insert('dad');

trie.autocomplete('ca');
