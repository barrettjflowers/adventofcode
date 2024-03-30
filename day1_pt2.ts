import fs from "fs";

//this feels wrong but it works
const alpha: any = {
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

fs.readFile(
  "input.txt",
  "utf-8",
  (err: NodeJS.ErrnoException | null, data: any) => {
    if (err) throw err;
    data = data.split("\n");
    // replace keys with values
    const replaceKeys = (inputString: string): string => {
      return Object.keys(alpha).reduce((acc, key) => {
        const regex = new RegExp(key, "g");
        return acc.replace(regex, alpha[key].toString());
      }, inputString);
    };

    // Replace keys in each string in the array
    const resultArray = data.map(replaceKeys);
    const cleanedArray = resultArray.map(function (str: any) {
      str = str.replace(/[^\d\n-]/g, "");

      const firstChar = str.slice(0, 1);
      const lastChar = str.slice(-1);

      return firstChar + lastChar;
    });

    const numberArray: number[] = [];
    const initialVal: number = 0;
    cleanedArray.forEach((ele: any) => numberArray.push(+ele));
    const sum: number = numberArray.reduce(
      (acc: number, current: number) => acc + current,
      initialVal
    );

    console.log(sum);
  }
);
