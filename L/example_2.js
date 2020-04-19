// Liskov Substitution principle.

class Person {

}

class Member extends Person {
  access() {
    console.log('You have an access. ')
  }
}

class Guest extends Person {
  isGuest = true;
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('You don\'t have an access. ');
  }
}

function openSecretDoor(member) {
  member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany()); некорректно. Сюда следует передавать member


