export function getPackageName(input: string) {
  if (input.startsWith('@')) {
    return input;
  }

  return `@movima/${input}`;
}
