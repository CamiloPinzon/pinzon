export const JavascripPillsEn = [
	{
		id: "JS-1",
		title: "What is Javascript Engine?",
		preview_content:
			"What is Javascript engine? How is the JS code interpreted by the computer?",
		content: `
		<article><p>Imagine that you're in a country where the people don´t speak any known language. How do you ask someone for any task? Well, this problem exist when you pass any javascript code to the computer, they don't know how to read or interpret it and this is the reason for the Javascript engine, basically the javascript engine it's a translator that convert the javascript code to to machine language to be interpreted.</p>
		<p>Now days exist a lot of js engines some of the most popular are:
			<ul>
				<li><a href="https://spidermonkey.dev" rel="noopener" target="_blank">SpiderMonkey</a>: first js engine, developed by Brendan Eich in 1995 when he was working for Netscape, currently this engine is used by firefox</li>
				<li><a href="https://v8.dev/" rel="noopener" target="_blank" >V8</a>: Developed by google to achieve the high performance demands of google maps </li>
				<li><a href="https://developer.apple.com/documentation/javascriptcore" rel="noopener" target="_blank" >JavaScriptCore</a>:  A JavaScript interpreter, used in the WebKit project and applications such as Safari.
			</ul>
			<span>There is a list of some of the most popular engines. <a href="https://en.wikipedia.org/wiki/List_of_ECMAScript_engines" rel="noopener", target="_blank" >Link!</a></span>
		</p>
		</br>
		<h2>What happens inside the js engine?</h2>
		<picture style="display: flex; justify-content: center; align-items: center">
			<img src="${
				process.env.PUBLIC_URL + "/images/js-engine.webp"
			}" alt="Js Engine" width="500" height="auto" style="width: 100%; max-width: 500px" loading="lazy" />
		</picture>
		<p>
			All engines can change in the way their work, but those are minimal changes, the basic functioning it's the same
		</p>
		<p>
		Those are the steps that basically follow a js engine:
			<ul>
				<li>
					The first step it's a lexical analysis: in this step the code is splitted in blocks to identify what the code it's trying to do, it's parsed.
				</li>
				<li>
					The second step: AST (Abstract syntax tree), takes the parsed code and made a tree structure, there is a online tool called <a href="https://astexplorer.net" rel="noopener" target="blank" >astexplorer</a> that you can use to see how the code is spplited and organized in this tree structure.
				</li>
			</ul>
			Interpreters and compilers: In programming generally we have two ways of translate into machine language, interpreter and compiler.
Whit the interpreter we read and translate the file line by line, just take the code and put it in low level code, when it's compiled, the code first it's read and analized, the compiler try to understand ir before put it in low level code.
		</p>
		</article>`,
	},
];

export const JavascripPillsEs = [
	{
		id: "JS-1",
		title: "¿Qué es el motor Javascript?",
		preview_content:
			"¿Qué es el motor Javascript? Cómo es interpretado el JavaScript por la computadora?",
		content: `
		<article><p>Imagina que estás en un país donde la gente no habla ningún idioma conocido. ¿Cómo le pides a alguien una tarea? Bueno, este problema existe cuando pasas cualquier código javascript a la computadora, no sabe cómo leerlo o interpretarlo y esta es la razón del motor Javascript, básicamente el motor javascript es un traductor que convierte el código javascript a lenguaje de máquina para que sea interpretado</p>
		<p>Hoy en día existen muchos motores JavaScript algunos de los más populares son:
			<ul>
				<li><a href="https://spidermonkey.dev" rel="noopener" target="_blank">SpiderMonkey</a>: El primer motor JavaScript, desarrollado por Brendan Eich en 1995 trabajando para NetScape, actualmente es el motor utilizado por Firefox</li>
				<li><a href="https://v8.dev/" rel="noopener" target="_blank" >V8</a>: Desarrollado por Google para lograr cumplir con todas las tareas de alto desempeño requeridas por Google Maps</li>
				<li><a href="https://developer.apple.com/documentation/javascriptcore" rel="noopener" target="_blank" >JavaScriptCore</a>:  Un intérprete de JavaScript usado en WebKit project y aplicaciones como Safari.
			</ul>
			<span>Aquí hay una lista de los motores más populares. <a href="https://en.wikipedia.org/wiki/List_of_ECMAScript_engines" rel="noopener", target="_blank" >Link!</a></span>
		</p>
		</br>
		<h2>¿Qué sucede dentro del motor JavaScript?</h2>
		<picture style="display: flex; justify-content: center; align-items: center">
			<img src="${
				process.env.PUBLIC_URL + "/images/js-engine.webp"
			}" alt="Motor JavaScript" width="500" height="auto" style="width: 100%; max-width: 500px" loading="lazy" />
		</picture>
		<p>
			Todos los motores tienen cambios en su funcionar, pero estos son cambios minímos, el funcionamiento básico es el mismo
		</p>
		<p>
		Estos son los pasos básicos que sigue un motor JavaScript:
			<ul>
				<li>
					El primer paso es un análisis léxico: en este paso el código se divide en bloques para intentar identificar que está tratando de hacer, se "parsea".
				</li>
				<li>
					El segundo paso: AST (Abstract syntax tree), toma el código parseado y crea una estructura de árbol, hay una herramienta en líena llamada <a href="https://astexplorer.net" rel="noopener" target="blank" >astexplorer</a> con la que puedes ver como el código es dividido y como se crea la estructura de árbol.
				</li>
			</ul>
			Interpretes y compiladores: En programación por lo general hay dos formas de transformar el código a lenguaje de máquinas, interpretar y compilar.
Con el intérprete, leemos y traducimos el archivo línea por línea, solo se toma el código y se pone en codigo de bajo nivel. Cuando es compilado, el código primero es leído y analizado, el compilador trata de entenderlo antes de ponerlo en código de bajo nivel.
		</p>
		</article>`,
	},
];
