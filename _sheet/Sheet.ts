/* ---------------- about logic and functions ---------------- */

// !!! ARRAYS (Em TS/JS, arrays são dinâmicos por padrão. Substituem int[] e List<T>) !!!
const numbers: number[] = new Array(1); // array inicializado com 1 posição (pouco usual em TS)
numbers[0] = 10;
const words: string[] = ["Apple", "Banana"]; /* inline */
const lenn: number = words.length; /* property sem () */

const list: string[] = []; // !!! dynamic array !!!
list.push("TypeScript", "Java"); // list.add() => push()
list[0] = "JavaScript"; /* replaces element at index 0 */

// Para remover por valor:
const indexToRemove = list.indexOf("Java");
if (indexToRemove !== -1) list.splice(indexToRemove, 1); 
// Para remover por índice (ex: remove 0):
list.splice(0, 1); 

const item: string = list[0]; // get(0)
const isListEmpty = list.length === 0; // isEmpty()
const containsTs = list.includes("TypeScript"); // contains() => includes()
list.forEach(lang => console.log(lang));
const size = list.length; /* usar .length sempre, não tem .size() para array */

// !!! hash SET !!!
const set = new Set<string>();
set.add("A");
set.add("A"); /* automaticamente ignorado */
const hasA: boolean = set.has("A"); /* contains() => has() */
set.delete("A"); /* remove() => delete() */
const isSetEmpty = set.size === 0;
const setSize = set.size; // property, não método
const vals: string[] = Array.from(set); /* CONVERTING SET TO ARRAY (ou usar o spread operator: [...set]) */

// !!! hash MAP !!!
const map = new Map<string, number>();
map.set("Score", 100); map.set("Lives", 3); /* put() => set() */
const currentScore = map.get("Score"); // Retorna 100 (ou undefined se não existir)
const hasLives = map.has("Lives"); // containsKey() => has()
map.delete("Lives"); // remove() => delete()
const keys = Array.from(map.keys()); // map.keySet()
map.set("Score", 722); // set() também é usado para substituir (replace) caso a chave já exista

/* if you want a map with pre-determined values consider using record object */
const values: Record<string, number> = { two: 2, three: 3 }

for (const [key, value] of map.entries()) { /* Iterando através do Map */
    console.log(`${key} = ${value}`);
}
const mapVals = Array.from(map.values()); /* CONVERTING MAP VALUES TO ARRAY */

// !!! STACK !!! (Em TS, usamos o Array padrão)
const stack: string[] = [];
stack.push("a"); stack.push("dds"); stack.push("LAST IN FIRST OUT");
const last = stack.pop(); /* remove e retorna o último */
const peek = stack[stack.length - 1]; // olha o último sem remover
const isStackEmpty = stack.length === 0;

// !!! QUEUE !!! (Em TS, usamos o Array padrão)
const line: string[] = [];
line.push("First"); line.push("Second"); // Adds to the back (offer/push)
const next = line.shift(); // remove e retorna da FRENTE (poll/shift)
const peeek = line[0]; // olha o primeiro sem remover

/* string comparing */
let username: string = "Luan";
username.includes("ua"); // contains() => includes()
username.startsWith("Lu"); username.endsWith("an");
username = username.trim(); username = username.replace("u", "U");
const isStrEmpty = username.length === 0; /* JS não tem .isEmpty() para string */
const isEqual = username === "LUan"; /* Use === no lugar de .equals() */
const strLen = username.length; /* property sem () */

/* number comparing */
const resultInt = Math.floor(5 / 2); /* ATENÇÃO: divisões no JS sempre geram decimais. Para agir como divisão de inteiros, use Math.floor() -> 2 */
const resultDouble = 5 / 2; /* 2.5 */
const resultModule = 5 % 2; /* 1 */

Math.max(3, 5); Math.min(2, 4);
Math.abs(-4);
Math.pow(2, 3); /* 2^3, também pode ser escrito como 2 ** 3 */

/* string manipulation */

let numStr: string = "23454"
let numInt: number = parseInt(numStr);  // convert to number

numStr.slice(0,2); /* gets substring "23" */