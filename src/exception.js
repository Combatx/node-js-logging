export class MyException extends Error {}

export const callMe = (name) => {
  if (name === "Ridho") {
    throw new MyException("Ups my exception happends");
  } else {
    return "OK";
  }
};
