export const Techs = [
    {
        name: 'html',
        type: 'frontend',
        fullstack: false,
        title: 'HTML',
        description: 'Lenguaje de estructuración predilecto y esencial para la web.',
        logo: '/assets/techs-logos/html-logo.svg',
        age: '1995',
        resources: [
            {
                type: 'web',
                from: 'ManzDev',
                link: 'https://lenguajehtml.com/',
                title: 'Guía sobre el Lenguaje HTML',
                image: '/assets/resources-preview/html/lenguajehtml.png'
            },
            {
                type: 'web',
                from: 'ManzDev',
                link: 'https://manzdev.github.io/htmlreally/',
                title: 'Test de HTML',
                image: '/assets/resources-preview/html/htmlreally.png'
            },
            {
                type: 'web',
                from: 'Mozilla Developers Network',
                link: 'https://developer.mozilla.org/es/docs/Learn/HTML',
                title: 'Documentación y guía de HTML',
                image: '/assets/resources-preview/html/mdn-html.png'
            },
            {
                type: 'web',
                from: 'FaztWeb',
                link: 'https://www.faztweb.com/html',
                title: 'Introducción al lenguaje HTML',
                image: '/assets/resources-preview/html/fazt-html.png'
            },
            {
                type: 'web',
                from: 'Bluuweb',
                link: 'https://bluuweb.dev/01-html/',
                title: 'Tutorial de HTML',
                image: '/assets/resources-preview/html/bluuweb-html.png'
            },
            {
                type: 'web',
                from: 'JonMircha',
                link: 'https://jonmircha.com/html#%C2%BFqu%C3%A9-es-html%3F',
                title: 'Blog de HTML',
                image: '/assets/resources-preview/html/mircha-html.png'
            },
            {
                type: 'web',
                from: 'W3Schools',
                link: 'https://www.w3schools.com/html/',
                title: 'Introducción a HTML',
                image: '/assets/resources-preview/html/w3s-html.png'
            },
        ],
        tutorial: [
            {
                name: 'hello-world',
                title: '¡Hola Mundo!',
                text: `Añade esto a tu "index.html". Ubica el 'title' dentro del 'head' del documento y el 'h1' dentro del 'body'.`,
                image: '/assets/code-samples/html/hello-world.png',
                code: `<title>Hola Mundo con HTML5</title>
                <h1>¡Hola Mundo!</h1>`
            }
        ],
        extra: {
            tips: [
                'Usa las etiquetas semánticas y no caigas en la divitis', 
                'Poca especificación trae problemas, usa los "id" con cuidado', 
                'Las etiquetas de Metadatos son igual de importantes', 
                'Prueba usar los atajos Emmet para ser más productivo', 
                'El atributo "loading" es una joya para la optimiazación'],
            curius: [
                'HTML: Hypertext Markup Language o Lenguaje de Marcado de Hipertexto', 
                '¿Conoces HTMX? Estuvo de moda hace un tiempo', 
                'Todas las páginas y aplicaciones web utilizan HTML',
                '¿Conoces la etiqueta "blink"? ¿No? Es mejor así',
                'Te sorprendería lo dificil que era declarar un "!DOCTYPE" antes de HTML5'
                
            ],
            phrases: [
                'Lo perfecto es enemigo de lo bueno, si no ayuda, ignoralo por completo', 
                'Estructura y estilo no se deben mezclar si el entendimiento quieres preservar',
                'En la simplicidad está la claridad; complica y la confusión reinará',
                'Un código limpio es como un río claro, fácil de seguir y bello de contemplar',
                'El contenido es rey, pero la usabilidad es su reina'
            ]
        }
    },
    {
        name: 'css',
        type: 'frontend',
        fullstack: false,
        title: 'CSS',
        description: 'Usado para diseñar y estilizar páginas web.',
        logo: '/assets/techs-logos/css-logo.svg',
        age: '1996',
        resources: [
            {
                type: 'web',
                from: 'ManzDev',
                link: 'https://lenguajecss.com/',
                title: 'Guía sobre el Lenguaje CSS',
                image: '/assets/resources-preview/css/lenguajecss.png'
            },
            {
                type: 'web',
                from: 'Mozilla Developers Network',
                link: 'https://developer.mozilla.org/es/docs/Learn/CSS',
                title: 'Documentación de CSS',
                image: '/assets/resources-preview/css/mdncss.png'
            },
            {
                type: 'web',
                from: 'FaztWeb',
                link: 'https://www.faztweb.com/css',
                title: 'Blog sobre CSS',
                image: '/assets/resources-preview/css/faztcss.png'
            },
            {
                type: 'web',
                from: 'Bluuweb',
                link: 'https://bluuweb.dev/02-css/',
                title: 'Tutorial de CSS',
                image: '/assets/resources-preview/css/bluuwebcss.png'
            },
            {
                type: 'video',
                from: 'Midudev',
                link: 'https://www.youtube.com/watch?v=hrxjBqZWsb0',
                title: 'Curso de CSS',
                image: '/assets/resources-preview/css/midudevcss.png'
            },
            {
                type: 'video',
                from: 'Mouredev',
                link: 'https://www.youtube.com/watch?v=fxEBgbKSM98',
                title: 'Taller de CSS',
                image: '/assets/resources-preview/css/mouredevcss.png'
            },
            {
                type: 'web',
                from: 'JonMircha',
                link: 'https://jonmircha.com/html#%C2%BFqu%C3%A9-es-css%3F',
                title: 'Guía de CSS',
                image: '/assets/resources-preview/css/jonmirchacss.png'
            },
            {
                type: 'web',
                from: 'W3School',
                link: 'https://www.w3schools.com/css/',
                title: 'Curso de CSS',
                image: '/assets/resources-preview/css/w3scss.png'
            }
        ],
        tutorial: [
            {
                name: 'html-link',
                title: 'Enlazar HTML',
                text: 'Añade esto en tu "index.html" y abre el archivo en el navegador.',
                image: '/assets/code-samples/css/html-link.png',
                code: `<link rel='stylesheet' href='styles.css'>`
            },
            {
                name: 'hello-world',
                title: '¡Hola Mundo!',
                text: 'Crea un archivo "styles.css" y escribe esto',
                image: '/assets/code-samples/css/hello-world.png',
                code: `body::before {
                    content: '¡Hola Mundo!';
                    color: gold;
                    background: grey;
                    padding: 5px 10px;
                    font-family: cursive;
                }`
            }
        ],
        extra: {
            tips: [
                'No olvides siempre seguir un diseño responsivo',
                'Prueba las nuevas funciones del CSS moderno',
                'Empieza a diseñar de menor a mayor resolución',
                'Prueba "color-mix()", ya esta en CSS nativo',
                'Modular tus estilos te permite escalarlos'
            ],
            curius: [
                'Sin CSS, la web no hubiera podido vender',
                'No hay que ser un genio para entender la teoría del color',
                'CSS: Cascading Style Sheets o Hojas de Estilo en Cascada',
                'Adios a Flex y Grid CSS para lograr centrar',
                'Más del 70% de programadores usa un preprocesador'
            ],
            phrases: [
                'Portatibilidad antes que comodidad', 
                'Estilizar no es ajeno a la accesibilidad, lo mejor siempre es adaptar',
                'El color es la paleta del diseñador; con armonía, la página cobra vida',
                'La media query es la voz del diseño adaptable; sin ella, la web se siente sorda',
                'El CSS bien escrito es como un viento suave, guía sin ser notado'
            ]
        }
    },
    {
        name: 'js',
        type: 'frontend',
        fullstack: true,
        title: 'JavaScript',
        description: 'Base de la interactividad en los sitios web.',
        logo: '/assets/techs-logos/js-logo.svg',
        age: '1995',
        resources: [
            {
                type: 'web',
                from: 'Manzdev',
                link: 'https://lenguajejs.com/javascript/',
                title: 'Guía sobre Javascript',
                image: '/assets/resources-preview/js/lenguajejs.png'
            },
            {
                type: 'web',
                from: 'Mozilla Developers Network',
                link: 'https://developer.mozilla.org/es/docs/Learn/JavaScript',
                title: 'Documentación y guía sobre Javascript',
                image: '/assets/resources-preview/js/mdnjs.png'
            },
            {
                type: 'video',
                from: 'Faztweb',
                link: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
                title: 'Curso de Javascript',
                image: '/assets/resources-preview/js/faztjs.png'
            },
            {
                type: 'web',
                from: 'Bluuweb',
                link: 'https://bluuweb.dev/04-javascript/javascript.html',
                title: 'Tutorial de Javascript',
                image: '/assets/resources-preview/js/bluuwebjs.png'
            },
            {
                type: 'web',
                from: 'No Detectado',
                link: 'https://www.aprendejavascript.dev/',
                title: 'Curso de Javascript',
                image: '/assets/resources-preview/js/aprendejavascript.png'
            },
            {
                type: 'video',
                from: 'Mouredev',
                link: 'https://www.youtube.com/watch?v=6cnFl9aHD5Y',
                title: 'Javascript desde Cero',
                image: '/assets/resources-preview/js/mouredevjs.png'
            },
            {
                type: 'web',
                from: 'JonMircha',
                link: 'https://jonmircha.com/javascript',
                title: 'Blog sobre Javascript',
                image: '/assets/resources-preview/js/jonmirchajs.png'
            },
            {
                type: 'web',
                from: 'W3Schools',
                link: 'https://www.w3schools.com/js/js_intro.asp',
                title: 'Introducción a Javascript',
                image: '/assets/resources-preview/js/w3sjs.png'
            },
            {
                type: 'web',
                from: 'Ilya Kantor',
                link: 'https://es.javascript.info/',
                title: 'Tutorial Moderno de Javascript',
                image: '/assets/resources-preview/js/javascriptinfo.png'
            }
        ],
        tutorial: [
            {
                name: 'html-script',
                title: 'Enlazar HTML y Javascript',
                text: 'En tu "index.html", añade la siguiente linea dentro del "head"',
                image: '/assets/code-samples/js/html-script.png',
                code: `<script src='main.js'></script>`
            },
            {
                name: 'hello-world',
                title: '¡Hola Mundo!',
                text: 'Crea un archivo main.js y escribe esto',
                image: '/assets/code-samples/js/hello-world.png',
                code: `console.log('¡Hola Mundo!')`
            },
            {
                name: 'hello-world-dom',
                title: 'Hola Mundo usando el DOM',
                text: 'En tu archivo "main.js", añade esto',
                image: '/assets/code-samples/js/hello-world-dom.png',
                code: `const body = document.body;
                body.textContent = '¡Hola Mundo!';`
            }
        ],
        extra: {
            tips: [
                'Usa comentarios para añadir contexto a tu código',
                'Documenta solo cuando es necesario',
                'Las constantes se verían mejor con mayúsculas',
                'El asincronismo es una herramienta poderosa',
                'Desestructurar: La nueva forma de construir'
            ],
            curius: [
                'La palabra clave "this" no solo es para constructores',
                'Javascript no es nada de Java',
                'Creado en tan solo 10 días',
                'Javascript se puede usar tanto en el Frontend como en Backend',
                'El 67.9% de los programadores prefiere Javascript'
            ],
            phrases: [
                'Condicionales anidados, un laberinto del lector condenado',
                'Un const bien definido, evita errores en el camino',
                'Funciones anónimas sin razón, el depurador clama explicación',
                'Un try...catch a tiempo, evita el caos y el lamento',
                'Condiciones sin else, dejan decisiones sin contener'
            ]
        }
    },
    {
        name: 'ts',
        type: 'frontend',
        fullstack: true,
        title: 'TypeScript',
        description: 'Variante de JavaScript que fortalece el tipado.',
        logo: '/assets/techs-logos/ts-logo.svg',
        age: '2012',
        resources: [
            {
                type: 'web',
                from: 'W3Schools',
                link: 'https://www.w3schools.com/typescript/',
                title: 'Tutorial de Typescript',
                image: '/assets/resources-preview/ts/w3sts.png'
            },
            {
                type: 'web',
                from: 'Microsoft Team',
                link: 'https://learn.microsoft.com/es-es/training/modules/typescript-get-started/',
                title: 'Curso de Typescript',
                image: '/assets/resources-preview/ts/microsoftts.png'
            },
            {
                type: 'web',
                from: 'freeCodeCamp',
                link: 'https://www.freecodecamp.org/news/learn-typescript-beginners-guide/',
                title: 'Guía de Typescript',
                image: '/assets/resources-preview/ts/freecodecampts.png'
            },
            {
                type: 'video',
                from: 'Mouredev',
                link: 'https://www.youtube.com/watch?v=4W3UWjyyVkQ',
                title: 'Typescript desde Cero',
                image: '/assets/resources-preview/ts/mouredevts.png'
            },
            {
                type: 'video',
                from: 'Midudev',
                link: 'https://www.youtube.com/watch?v=YKclM8IxkfI',
                title: 'Aprene Typescript Ya',
                image: '/assets/resources-preview/ts/midudevts.png'
            }
        ],
        tutorial: [
            {
                name: 'install',
                title: 'Instala Typescript',
                text: 'En tu consola, ejecuta el siguiente comando',
                image: '/assets/code-samples/ts/install.png',
                code: `npm install -g typescript`
            },
            {
                name: 'html-script',
                title: 'Enlazar el HTML',
                text: 'En tu "index.html" añade esto dentro del ""body" y abre ese archivo en el navegador',
                image: '/assets/code-samples/ts/html-script.png',
                code: `<script src='main.js'></script>`
            },
            {
                name: 'hello-world',
                title: '¡Hola Mundo!',
                text: 'Crea un archivo main.ts y escribe esto',
                image: '/assets/code-samples/ts/hello-world.png',
                code: `let mensaje: string = '¡Hola Mundo!';
                console.log(mensaje);`
            },
            {
                name: 'compile',
                title: 'Compila tu código',
                text: 'En la consola, ejecuta esto',
                image: '/assets/code-samples/ts/compile.png',
                code: `tsc main.ts`
            }
        ],
        extra: {
            tips: [
                'Piensalo dos veces antes de declarar una constante',
                'Define siempre el tipo de tus variables',
                'La asincronía no fue incluida para ignorarse',
                'Habilitar el modo estricto es gratificante a futuro',
                'Las funciones flechas facilitan cualquier solución'
            ],
            curius: [
                'El 65% de errores resultan tras un fallo de tipeo',
                'Todo lo válido en Javascript, es bienvenido en Typescript',
                'Más del 60% de los programadores prefieren TypeScript',
                'Puede integrarse en bibliotecas y frameworks de Javascript',
                '¡Es de código abierto!'
            ],
            phrases: [
                'La perfección no es para desesperar, pero sí necesita funcionar',
                'En TypeScript, "interface" define el contrato, código claro y sin quebrantos.',
                "Any evitado, incertidumbre disipada, TypeScript empoderado",
                'En readonly y const, la inmutabilidad se celebra',
                'En TypeScript, la precisión no es capricho, es el camino claro'
            ]
        }
    },
    {
        name: 'react',
        type: 'frontend',
        fullstack: false,
        title: 'React',
        description: 'Biblioteca para la creación de interfaces de usuario.',
        logo: '/assets/techs-logos/react-logo.svg',
        age: '2013',
        resources: ['https://github.com/midudev/aprendiendo-react', 'https://www.youtube.com/watch?v=pFyAu4R684s', 'https://jonmircha.com/react', 'https://www.youtube.com/watch?v=rLoWMU4L_qE', 'https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started'],
        tutorial: {
            helloWorld: {
                text: '',
                image: ''
            }
        },
        extra: {
            tips: [
                'Nombra a tus componentes siempre con una inicial mayúscula',
                'Usa props claros y fáciles de ubicar',
                'Utiliza los hooks para manejar bien los estados',
                'Cuidado al importar con "default"'
            ],
            curius: [
                'Puedes usar React nativamente sin NodeJS',
                'Fue desarrollado por Facebook',
                'Crea una simulación virtual del DOM',
                'Tiene la comunidad más grande de programadores',
                'React Native es su versión para apps moviles'
            ],
            phrases: [
                "No hay que fragmentar todo para encontrar cómoda la individualidad",
                "Con React, tu código brillará, y en la web su magia se verá",
                "Componentes bien nombrados, en tu proyecto ordenados."
            ]
        }
    },
    {
        name: 'vue',
        type: 'frontend',
        fullstack: false,
        title: 'Vue',
        description: 'Framework de JavaScript para la creación de interfaces de usuario.',
        logo: '/assets/techs-logos/vue-logo.svg',
        age: '2014',
        resources: ['https://lenguajejs.com/vue/'],
        tutorial: {
            helloWorld: {
                text: '',
                image: ''
            }
        },
        extra: {
            tips: [
                'El CLI creara el proyecto mucho más rapido',
                'Prueba organizar tus componentes en carpetas por funcionalidad',
                'Las directivas personalizas facilitaran la reutilización',
                'Vue Devtools es mucho mejor en este caso'
            ],
            curius: [
                'El creador también trabajo en AngularJS',
                'Sintaxis similar a Angular, pero mucho más sencilla',
                'Agrega transiciones nativas para elementos del DOM'
            ],
            phrases: [
                'Con Vue y su transición, la web se llena de emoción',
                'Componentes escalados seran muy elogiados',
                'Flexibilidad y facilidad de la mano'
            ]
        }
    },
    {
        name: 'python',
        type: 'backend',
        fullstack: true,
        title: 'Python',
        description: 'Lenguaje de programación sencillo y poderoso a la vez.',
        logo: '/assets/techs-logos/python-logo.svg',
        age: '1989',
        resources: [''],
        tutorial: {
            helloWorld: {
                text: '',
                image: ''
            }
        },
        extra: {
            tips: ['Tip 1', 'Tip 2', 'Tip 3', 'Tip 4', 'Tip 5'],
            curius: ['Curius 1', 'Curius 2', 'Curius 3'],
            phrases: ['Phrase']
        }
    },
    {
        name: 'java',
        type: 'backend',
        fullstack: true,
        title: 'Java',
        description: 'Lenguaje de programación orientado a objetos y muy usado.',
        logo: '/assets/techs-logos/java-logo.svg',
        age: '1995',
        resources: [''],
        tutorial: {
            helloWorld: {
                text: '',
                image: ''
            }
        },
        extra: {
            tips: ['Tip 1', 'Tip 2', 'Tip 3', 'Tip 4', 'Tip 5'],
            curius: ['Curius 1', 'Curius 2', 'Curius 3'],
            phrases: ['Phrase']
        }
    },
    {
        name: 'cpp',
        type: 'backend',
        fullstack: false,
        title: 'C++',
        description: 'Usado para la creación de videojuegos y aplicaciones.',
        logo: '/assets/techs-logos/cpp-logo.svg',
        age: '1979',
        resources: [''],
        tutorial: {
            helloWorld: {
                text: '',
                image: ''
            }
        },
        extra: {
            tips: ['Tip 1', 'Tip 2', 'Tip 3', 'Tip 4', 'Tip 5'],
            curius: ['Curius 1', 'Curius 2', 'Curius 3'],
            phrases: ['Phrase']
        }
    }
]