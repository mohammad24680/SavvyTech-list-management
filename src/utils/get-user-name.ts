export interface UserNameData {
  firstName?: string | null;
  lastName?: string | null;
}

const getUserName = (data?: UserNameData): string => {
  if (!data) return "";

  const { firstName, lastName } = data;

  if (firstName && lastName) return `${firstName} ${lastName}`;
  if (firstName) return firstName;
  if (lastName) return lastName;

  return "";
};

export default getUserName;
