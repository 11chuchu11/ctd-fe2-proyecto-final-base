const firstLetterToUpperCase = (word:string) => word.split(' ').map( str => str.charAt(0).toUpperCase() + str.slice(1) ).join(' ')

export default firstLetterToUpperCase

