export function parseBoldText(text: string) {
  const parts = text.split(/(\[BOLD].*?\[\/BOLD])/g);

  return parts.map((part, index) => {
    console.log(part);
    // Check if the part is the text we need to bold
    if (part.startsWith('[BOLD]') && part.endsWith('[/BOLD]')) {
      const boldText = part.slice(6, -7); // Remove the [BOLD] and [/BOLD] tags
      return <strong key={index}>{boldText}</strong>;
    }
    // Otherwise, it's normal text
    return part;
  });
}