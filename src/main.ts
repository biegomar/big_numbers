export function generate(numberOfDigits: number): string {
  let result: string = "";
  for (let index = 0; index < numberOfDigits; index++) {
    result += getRandomSingleDigitInteger().toString();    
  }

  return result;
}

export async function generateInFile(numberOfDigits: number, fileName: string): Promise<void> {
  using output = await Deno.open(fileName, {create: true, write: true, truncate: true});
  const writer = await output.writable.getWriter();

  const content = new TextEncoder().encode(generate(numberOfDigits));

  await writer.write(content);
}

const min = 0;
const max = 10;

function getRandomSingleDigitInteger() : number {
  const x = Math.random();
  const y = min * (1 - x) + max * x;
  return Math.floor(y >= min && y < max ? y : min);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("generate file...")
  await generateInFile(20000, "temp/temp.txt");
  console.log("done.")
}
