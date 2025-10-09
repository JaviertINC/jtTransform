[![javiertinc@transform](https://javiertinc.github.io/media/jtTransform/gh-header.png)](https://github.com/JaviertINC/jtTransform)

¿Necesitas transformar datos que solo los técnicos interiorizados entienden a datos más simples y legibles?

**jtTransform** es tu respuesta.

Aquí te presento una librería simple y ligera que te ayudará a transformar datos de un formato "técnico" a un formato más legible y comprensible por el usuario común. Con **jtTransform**, podrás convertir números a letras, letras a números, tamaños a un formato legible, alfabeto NATO, alfabeto Morse, alfabeto Braille y mucho más.
Además, la librería incluye funciones para convertir colores a diferentes formatos, como hexadecimal, RGB, RGBA, HSL, HSLA y CMYK.

[![Documentación](https://javiertinc.github.io/media/jtTransform/gh-documentacion.png)](https://github.com/JaviertINC/jtTransform/wiki)

Te invito a revisar la [**documentación**](https://github.com/JaviertINC/jtTransform/wiki) para comprobar lo fácil que es usarlo. Aquí encontrarás ejemplos de uso, funciones disponibles y mucho más.

[![Instalación](https://javiertinc.github.io/media/jtTransform/gh-instalacion.png)](https://github.com/JaviertINC/jtTransform/wiki)
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

[![Algunos ejemplos](https://javiertinc.github.io/media/jtTransform/gh-algunos-ejemplos.png)](https://github.com/JaviertINC/jtTransform/wiki)

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

// Convierte tamaños a un formato legible
jtTransform.size.format(1024); // Retorna: "1 KB"
jtTransform.size.format(1048576); // Retorna: "1 MB"
jtTransform.size.format(1073741824); // Retorna: "1 GB"

// Convierte tamaños con formato legible a bytes
jtTransform.size.unformat('1KB'); // Retorna: 1024
jtTransform.size.unformat('1MB'); // Retorna: 1048576
jtTransform.size.unformat('1GB'); // Retorna: 1073741824

// Convierte texto a Alfabeto NATO
jtTransform.nato.format('Hola'); // Retorna: "Hotel Oscar Lima Alfa"
// Convierte Alfabeto NATO a texto
jtTransform.nato.unformat('Hotel Oscar Lima Alfa'); // Retorna: "hola"

// Convierte texto a Alfabeto Morse
jtTransform.morse.format('Hola'); // Retorna: ".... --- .-.. .-"
// Convierte Alfabeto Morse a texto
jtTransform.morse.unformat('.... --- .-.. .-'); // Retorna: "hola"

// Convierte texto a Alfabeto Braille
jtTransform.braille.format('Hola'); // Retorna: "⠓⠕⠇⠁"
// Convierte Alfabeto Braille a texto
jtTransform.braille.unformat('⠓⠕⠇⠁'); // Retorna: "hola"

// Convierte fechas a días de la semana
jtTransform.date.weekDay('2025-05-29'); // Retorna: "jueves"
jtTransform.date.weekDay('2025-05-29', 'en-US'); // Retorna: "thursday"

// Convierte fechas a meses del año
jtTransform.date.month('2025-05-29'); // Retorna: "mayo"
jtTransform.date.month('2025-05-29', 'en-US'); // Retorna: "may"

// Convierte colores a formato hexadecimal
jtTransform.color.toHex('#ff0000'); // Retorna: "#ff0000"
jtTransform.color.toHex('rgb(255, 0, 0)'); // Retorna: "#ff0000"
jtTransform.color.toHex('rgba(255, 0, 0, 1)'); // Retorna: "#ff0000"
jtTransform.color.toHex('cmyk(0, 100, 100, 0)'); // Retorna: "#ff0000"

// Convierte colores a formato RGB
jtTransform.color.toRGB('#ff0000'); // Retorna: "rgb(255, 0, 0)"
jtTransform.color.toRGB('rgba(255, 0, 0, 1)'); // Retorna: "rgb(255, 0, 0)"
jtTransform.color.toRGB('cmyk(0, 100, 100, 0)'); // Retorna: "rgb(255, 0, 0)"

// Convierte colores a formato RGBA
jtTransform.color.toRGBA('#ff0000'); // Retorna: "rgba(255, 0, 0, 1)"
jtTransform.color.toRGBA('rgb(255, 0, 0)'); // Retorna: "rgba(255, 0, 0, 1)"
jtTransform.color.toRGBA('cmyk(0, 100, 100, 0)'); // Retorna: "rgba(255, 0, 0, 1)"

// Convierte colores a formato CMYK/CMYB
jtTransform.color.toCMYK('#ff0000'); // Retorna: "cmyk(0, 100, 100, 0)"
jtTransform.color.toCMYK('rgb(255, 0, 0)'); // Retorna: "cmyk(0, 100, 100, 0)"
jtTransform.color.toCMYK('rgba(255, 0, 0, 1)'); // Retorna: "cmyk(0, 100, 100, 0)"

```

![Roadmap](https://javiertinc.github.io/media/jtTransform/gh-roadmap.png)

| Función | Estado | Nombre tentativo de la función |
| ------- | :------: | :----------------- |
| Convertir números a letras | ✅ | `numberToLetter` |
| Convertir letras a números | ✅ | `letterToNumber` |
| `Tamaños` |  |  |
| Convertir tamaños a un formato legible | ✅ | `size.format` |
| Convertir tamaños con formato legible a bytes | ✅ | `size.unformat` |
| `Alfabeto NATO` |  |  |
| Texto a Alfabeto NATO (incluyendo Ñ) | ✅ | `nato.format` |
| Alfabeto NATO a texto (incluyendo Ñ) | ✅ | `nato.unformat` |
| `Morse` |  |  |
| Texto a Alfabeto Morse | ✅ | `morse.format` |
| Alfabeto Morse a texto | ✅ | `morse.unformat` |
| `Braille` |  |  |
| Texto a Alfabeto Braille | ✅ | `braille.format` |
| Alfabeto Braille a texto | ✅ | `braille.unformat` |
| `Fechas` |  |  |
| Días de la semana | ✅ | `date.weekDay` |
| Meses del año | ✅ | `date.month` |
| `Colores` |  |  |
| Colores a formato hexadecimal | ✅ | `color.toHex` |
| Colores a formato RGB | ✅ | `color.toRGB` |
| Colores a formato RGBA | ✅ | `color.toRGBA` |
| Colores a formato CMYK | ✅ | `color.toCMYK` |
| Colores a formato HSL | ❌ | `color.toHSL` |
| Colores a formato HSLA | ❌ | `color.toHSLA` |
| Colores a nombre | ❌ | `color.toName` |
| Colores a todos los formatos soportados | ✅ | `color.toAll` |
