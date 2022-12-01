# Issue

Bonjour j'essaye de créer un monorepo avec : 
- nextjs
- pothos pour graphql
- prisma pour la base de donée
- pnpm pour le gestionnaire de dépendences

j'ai essayé de créer un module par domaine:
- app
- database
- graphql

Mais j'ai cette erreur de compilation lorsque je lance l'application et que j'accède à l'url `http://localhost:3001/api/graphql` :

```
error - ../packages/graphql/src/schema.ts (5:0) @ builder
error - TypeError: _builder__WEBPACK_IMPORTED_MODULE_1__.builder.prismaObject is not a function
    at eval (webpack-internal:///(api)/../../packages/graphql/src/schema.ts:12:47)
  3 | import { builder } from "./builder";
  4 | 
> 5 | builder.prismaObject("User", {
  6 |   fields: (t) => ({
  7 |     id: t.exposeID("id"),
  8 |   }),
```

Norlement j'aimerais atteindre le playground de graphql-yoga.

Pour avoir une première version qui fonctionne il faut que je déplace le module graphql dans le module app pour obtenire ceci :

```
.
├── apps
│   └── app
│       └── + graphql <------------ move here
└── packages
    └── - graphql
```

Mais ce n'est pas une solution qui me convient car elle couple graphql et l'app