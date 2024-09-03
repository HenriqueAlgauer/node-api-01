interface User {
  birthYear: number;
}

function calcularIdadeUser(user: User) {
  return new Date().getFullYear() - user.birthYear;
}

calcularIdadeUser({});
calcularIdadeUser("Diego");
