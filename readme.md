[![javiertinc@transform](https://javiertinc.github.io/transform/images/gh-header.png)](https://github.com/JaviertINC/transform)

¿Necesitas transformar datos que solo los técnicos interiorizados entienden a datos más simples y legibles?

**jtTransform** es tu respuesta.

Aquí te presento una librería simple y ligera que te ayudará a transformar datos de un formato "técnico" a un formato más legible y comprensible por el usuario común. Con **jtTransform**, podrás convertir números a letras,

[![Características](https://javiertinc.github.io/transform/images/gh-caracteristicas.png)](

[![Documentación](https://javiertinc.github.io/transform/images/gh-documentacion.png)](https://github.com/JaviertINC/transform/wiki)

Te invito a revisar la [**documentación**](https://github.com/JaviertINC/transform/wiki) para comprobar lo fácil que es usarlo. Aquí encontrarás ejemplos de uso, funciones disponibles y mucho más.

[![Instalación](https://javiertinc.github.io/transform/images/gh-instalacion.png)](https://github.com/JaviertINC/transform/wiki)
¡Esto es realmente rápido y sencillo! Solo necesitas un gestor de paquetes como npm, yarn o pnpm. Si ya tienes uno instalado, simplemente ejecuta uno de los siguientes comandos en la raíz de tu proyecto:

```bash
npm install @javiertinc/transform
```

```bash
yarn add @javiertinc/transform
```

```bash
pnpm add @javiertinc/transform
```

> [!TIP]
> Este proyecto está hecho con [Typescript](https://www.typescriptlang.org) e incluye las interfaces y el tipado de las funciones.

¡Y listo! ¡Ya tienes jtTransform instalado y listo para usar!

[![Algunos ejemplos](https://javiertinc.github.io/transform/images/gh-algunos-ejemplos.png)](https://github.com/JaviertINC/transform/wiki)

```typescript
import jtTransform from '@javiertinc/transform';

// Convierte números a 
jtTransform.numberToLetter('1'); // Retorna: "Uno"
jtTransform.numberToLetter('12'); // Retorna: "Doce"
jtTransform.numberToLetter('123'); // Retorna: "Ciento veintitrés"
jtTransform.numberToLetter('1234'); // Retorna: "Mil doscientos treinta y cuatro"

// Convierte letras a números
jtTransform.letterToNumber('Uno'); // Retorna: 1
jtTransform.letterToNumber('Doce'); // Retorna: 12
jtTransform.letterToNumber('Ciento veintitrés'); // Retorna: 123
jtTransform.letterToNumber('Mil doscientos treinta y cuatro'); // Retorna: 1234
```

![Roadmap](https://javiertinc.github.io/transform/images/gh-roadmap.png)

| Función | Estado | Nombre tentativo de la función |
| ------- | :------: | :----------------- |
| Convertir números a letras | ✅ | `numberToLetter` |
| Convertir letras a números | ❌ | `letterToNumber` |
| Conversor de números a letras multiidioma | ❌ | `numberToLetter` y `letterToNumber` |
| `Tamaños` |  |  |
| Convertir tamaños a un formato legible | ❌ | `size.format` |
| Convertir tamaños con formato legible a bytes | ❌ | `size.unformat` |
| `Alfabeto NATO` |  |  |
| Texto a Alfabeto NATO (incluyendo Ñ) | ❌ | `nato.format` |
| Alfabeto NATO a texto (incluyendo Ñ) | ❌ | `nato.unformat` |
| `Morse` |  |  |
| Texto a Alfabeto Morse | ❌ | `morse.format` |
| Alfabeto Morse a texto | ❌ | `morse.unformat` |
| `Braille` |  |  |
| Texto a Alfabeto Braille | ❌ | `braille.format` |
| Alfabeto Braille a texto | ❌ | `braille.unformat` |
| `Colores` |  |  |
| Colores a formato hexadecimal | ❌ | `color.toHex` |
| Colores a formato RGB | ❌ | `color.toRGB` |
| Colores a formato RGBA | ❌ | `color.toRGBA` |
| Colores a formato HSL | ❌ | `color.toHSL` |
| Colores a formato HSLA | ❌ | `color.toHSLA` |
| Colores a formato CMYK | ❌ | `color.toCMYK` |
| Colores a todos los formatos soportados | ❌ | `color.toAll` |
| `Fechas` |  |  |
| Días de la semana | ❌ | `date.weekday` |
| Meses del año | ❌ | `date.month` |
