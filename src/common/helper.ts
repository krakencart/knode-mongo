export function randomString(length: number): string {
  let result: string = "";
  let characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength: number = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function isNullOrEmpty(str: string): boolean {
  return str == null || str.length === 0;
}
