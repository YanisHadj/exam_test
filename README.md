# Partiel IW4 tests unitaires, fonctionnels et pipeline (2/2) : examen pratique

## Mise en place

### Duplication du projet

Faire un fork du projet et le cloner sur votre ordinateur.

### Installation des dépendances

```
npm install
```

### Exécution

Compiler le code et exécuter les tests :

```
npm run build && npm run test
```

## Exercices

Dans les exercices suivants, vous pouvez écrire les tests avant l'implémentation (démarche TDD).
Si vous ne parvenez pas à écrire les tests, essayez au moins d'écrire le titre de chaque test (`describe` et `it`), qui doit décrire le cas testé et le comportement attendu.

### Exercice 1

- [2 points] Dans le fichier `src/ex1/index.ts`, écrire l’implémentation de la fonction `isRangeAvailable`, qui prend en argument une plage de dates demandées (avec une date de début et une date de fin) et une plage de dates disponibles, et retourne `true` si la plage demandée est incluse dans la plage de dates disponibles, `false` sinon.
- [4 points] Dans le fichier `src/ex1/index.spec.ts`, écrire les tests correspondants à tous les cas que vous jugez pertinent de tester.

### Exercice 2

- [1 points] Dans le fichier `src/ex2/index.ts`, écrire l’implémentation de la fonction `submitOrder`, qui prend en argument une commande, retourne la même commande avec `isSubmitted` mis à `true`, et appelle la fonction `sendOrderEmail` avec en argument l'identifiant de la commande. Si la commande a déjà `isSubmitted` à `true`, émettre une erreur.
- [3 points] Dans le fichier `src/ex2/index.spec.ts`, écrire les tests correspondants à tous les cas que vous jugez pertinent de tester. La fonction `sendOrderEmail` ne doit pas être réellement appelée, elle doit être remplacée par un bouchon (mock).

## Rendu

Pousser votre travail sur votre dépôt GitHub **public** et en indiquer l'URL dans ce formulaire : https://forms.gle/eMpUybLyhe3JyTmp7.
