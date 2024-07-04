# JavaScript-Concepts

[Get Computed Styles](https://stackblitz.com/edit/vitejs-vite-xjud7b)
# getComputedStyle(element, pseudoElt) : CSSStyleDeclaration 
- getComputedStyle – takes 2 arguments (1 - element , 2 – pseudo element) – return read only computed Styles 
-	Inside chrome under the computed tab what ever styling we see in actual pixels ( not the one we wrote) can get by using this window method.
-	getComputedStyle($0) – will return the entire styles which are applied on the selected dom node.
-	The object from getComputedStyle is read-only and should be used to inspect the element's style — including those set by a <style> element or an external stylesheet.
-	getComputedStyle can pull style info from pseudo-elements (such as ::after, ::before, ::marker, ::line-marker)

