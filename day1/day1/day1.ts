import fs from "fs";

//npx ts-node ./path_to_file
//npm i typescript --save-dev
//npx tsc --init

//read the input and sort out alpha characters
fs.readFile(
  "input.txt",
  "utf-8",
  (err: NodeJS.ErrnoException | null, data: any) => {
    if (err) throw err;
    data = data
      .replace(/[^\d\n-]/g, "")
      .split("\n")
      .map(function (element: string) {
        const firstChar = element.slice(0, 1);
        const lastChar = element.slice(-1);

        return firstChar + lastChar;
      });

    //convert to int and sum
    const numberArray: number[] = [];
    const initialVal: number = 0;
    data.forEach((ele: any) => numberArray.push(+ele));
    const sum: number = data.reduce(
      (acc: number, current: number) => acc + current,
      initialVal
    );

    console.log("Your answer is: " + sum);
  }
);
