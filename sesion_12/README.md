# ¿Qué es el renderizado condicional en React?
##El renderizado condicional es la forma de mostrar un componente u otro dependiendo de una condición.

##Para hacer renderizado condicional en React usamos el operador ternario:
`function Button({ text }) {
  return text
    ? <button>{text}</button>
    : null
}
`
##En este caso, si la prop text existe, se renderiza el botón. Si no existe, no se renderiza nada.
##Es común encontrar implementaciones del renderizado condicional con el operador &&, del tipo:

`function List({ listArray }) {
  return listArray?.length && listArray.map(item=>item)
}
`
##Parece que tiene sentido... si el length es positivo (mayor a cero) pintamos el map. !Pues no! ❌ Cuidado, si tiene length de cero ya que se pintará en el navegador un 0.
##Es preferible utilizar el operador ternario. Kent C. Dodds tiene un artículo interesante hablando del tema. Use ternaries rather than && in JSX
