<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const person1 = {
  name: "Hung",
  age: 36,
  sayHello() {
    console.log(`I'm ${this.name}. I'm ${this.age}.`);
  }
};

const person2 = {
  name: "Tuan",
  age: 27,
  sayHello() {
    console.log(`I'm ${this.name}. I'm ${this.age}.`);
  }
};

person1.sayHello();
person2.sayHello();

    </script>
</body>
</html>
