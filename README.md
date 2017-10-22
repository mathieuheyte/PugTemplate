# Using Pug template to display pages.

Lors de l'appel de la route /coucou-pug, le render() enverra au template une variable sayHello contenant Hello buddy. Une page (et seulement une) doit apparaître, elle sera composé : * d'une page coucou.pug affichant le contenu de la variable sayHello et étendant le fichier layout.pug * d'un layout (layout.pug) contenant les balises html, head et body * de l'inclusion d'une page header.pug affichant Ici c'est le header dans une balise <p>

## Critéres de validation

La page coucou.pug étend bien layout.pug
La page layout.pug contient un block permettant l'appel
La page header.pug est appelée via un include
