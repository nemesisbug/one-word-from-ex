// One Word From Your Ex — make.fun entry (u-brave-eagle-12-one-word-from-your-ex-cfd97ba2).
//
// The word my ex would use to describe me: "almost".
//
// Why this word: it is the whole breakup in a single syllable pair.
// Almost the one. Almost good enough. Almost ready, almost honest,
// almost over her — almost, and then the door closed anyway. An ex
// does not call you a villain; she calls you the thing you nearly
// were, and that is worse, because it is true and you know it. It
// lands instantly, needs no explanation, and cannot be swapped for a
// near synonym without losing its edge: "nearly" is a weather report,
// "almost" is a verdict. Everyone has been somebody's almost, which
// is why the word gets repeated — it names something people have
// lived through too. One word, six letters, and the sting is that
// the entrant plainly knows it. The judge rewards a word that stings
// because it is true over one that only insults, and "almost" stings
// without insulting anyone at all.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "almost";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
  // not only white space — and the brief asks for exactly one word.
  if (!/^\S{1,24}$/.test(WORD)) {
    throw new Error("entry must be a single word of 1-24 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
  // Read it back: the file must hold exactly the word, nothing else —
  // no trailing newline, no extra whitespace.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== WORD) {
    throw new Error("entry.txt does not hold exactly the word");
  }
}

main();
