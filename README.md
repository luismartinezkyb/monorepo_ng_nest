## Mono Repo

Este repositorio es un monorepo de angular + nestjs, usando configuración de turbo repo

## Instrucciones

Algunas Instrucciones para poder ejecutar el proyecto deben de ejecutar `npm install` dentro del repo

Despues solo ejecutar el npm start y esperemos qu eel proyecto funcion de manera correcta

## Configuracion de Turbo repo

```
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "start": {
      "cache": false
    },
    "build":{
      "dependsOn": [
        "^build"
      ],
      "outputs": [
        "dist/**"
      ]
    }
  }
}
```

## Proxy

Se creo del lado de angular un proxy que nos ayudara a poder ejecutar acciones dentro de nuestro único servidor funcionando como proxy hacia el backend con nestjs