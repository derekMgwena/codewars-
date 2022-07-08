/*Define a function constructionWorker which "inherits" from the person function as demonstrated in the Overview and accepts the following parameters in the following order: firstName, lastName, age, gender, married, boss. The keys of the object returned should be identical to the name of the parameters mentioned above. Apart from that, a construction worker is always employed so employed should be set to true. Their occupation is also naturally a "construction worker".

On top of all that, a constructionWorker should have a method sayBossName which returns a string of the following format: "My boss is called BOSS_NAME and is a very nice person!" where BOSS_NAME is the name of the boss of said construction worker.*/


//Inheritance and Object Composition
function constructionWorker(firstName, lastName, age, gender, married, boss) {
  let p = new person(firstName, lastName, age, gender);
  p.employed = true;
  p.married = married;
  p.boss = boss;
  p.occupation = "construction worker";
  p.sayBossName = () => `My boss is called ${p.boss} and is a very nice person!`;
  return p;
}