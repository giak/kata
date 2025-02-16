# Kata

Ce projet sert de cadre pour gérer et résoudre des défis de codage ("katas") au sein d'une application web Vue.js, offrant un environnement structuré pour que les utilisateurs accèdent aux descriptions de problèmes, mettent en œuvre des solutions et exécutent des tests. Il utilise Pinia pour la gestion d'état et Vue Router pour la navigation, avec un accent sur l'organisation modulaire des implémentations de katas.

## Configuration Recommandée de l'IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et désactiver Vetur).

## Support Type pour les Imports `.vue` en TS

TypeScript ne peut pas gérer les informations de type pour les imports `.vue` par défaut, donc nous remplaçons la CLI `tsc` par `vue-tsc` pour la vérification des types. Dans les éditeurs, nous avons besoin de [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) pour rendre le service de langage TypeScript conscient des types `.vue`.

## Personnaliser la Configuration

Voir [Référence de Configuration Vite](https://vite.dev/config/).

## Configuration du Projet

```sh
pnpm install
```

### Compiler et Recharger à Chaud pour le Développement

```sh
pnpm dev
```

### Vérifier les Types, Compiler et Minifier pour la Production

```sh
pnpm build
```

### Exécuter les Tests Unitaires avec [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Linter avec [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Structure du Projet

- **Modules Principaux** : `src/main.ts`, `src/App.vue`, `src/router/index.ts`, `src/stores/kata.store.ts`
- **Modules Liés aux Katas** : `src/katas/`, `src/katas/types/`, `src/katas/implementations/`
- **Modules Utilitaires** : `src/utils/fileLoader.ts`
- **Fichiers de Configuration** : `vite.config.ts`, `vitest.config.ts`, `eslint.config.ts`

## Règles de Développement

- Chaque implémentation de kata a son propre répertoire sous `src/katas/implementations/`.
- Les fichiers de métadonnées de kata sont définis dans `metadata.ts`.
- Les solutions de kata sont définies dans `kata.ts`.
- Les tests unitaires sont définis dans `kata.test.ts` en utilisant des fonctions asynchrones et des noms de tests descriptifs.

## Contribuer

Pour contribuer au projet, veuillez suivre les meilleures pratiques de codage et soumettre des demandes de tirage avec des descriptions claires des modifications apportées.
