const truncateText = (str, length) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};
export default truncateText;

export const truncateList = (str, length) => {
  console.log("here");
  if (str.length > length) {
    str = str.slice(0, length);
    str = str.map((a) => {
      let returnValue = { ...a };
      if (a === str[str.length - 1]) {
        return (
          <li key={a.key} value={a.value}>
            {a.props.children}...
          </li>
        );
      }
      return returnValue;
    });
  }
  return str;
};
