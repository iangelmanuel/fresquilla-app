export function formatedDate (dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  const formattedDate = date.toLocaleDateString('es-ES', options)
  return formattedDate
}
