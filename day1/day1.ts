import fs from "fs";

//read the input and sort out alpha characters
fs.readFile(
  "input.txt",
  "utf-8",
  (err: NodeJS.ErrnoException | null, data: any) => {
    if (err) throw err;
    data = data.replace(/[^\d\n-]/g, "");
    data = data.split("\n");

    //set input to a map and save first and last character
    const output: string[] = data.map(function (element: string) {
      const firstChar = element.slice(0, 1);
      const lastChar = element.slice(-1);

      return firstChar + lastChar;
    });

    //convert to int and sum
    function calcSum(): number {
      const numberArray: number[] = [];
      const initialVal: number = 0;
      output.forEach((ele: any) => numberArray.push(+ele));
      const sum: number = numberArray.reduce(
        (acc: number, current: number) => acc + current,
        initialVal
      );
      return sum;
    }
    console.log("Your answer is: " + calcSum());
  }
);
