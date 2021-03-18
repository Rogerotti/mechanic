declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content2: string;
  export default content2;
}

declare module '*.ttf' {
  const content2: string;
  export default content2;
}

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
