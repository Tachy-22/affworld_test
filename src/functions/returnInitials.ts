const returnInitials = (name: string) => {
  const initials = name
    ?.split(" ")
    ?.map((name) => name[0])
    ?.join("");
  return initials;
};
export default returnInitials;
