export const titleValidation = {
  required: {
    value: true,
    message: 'El campo título es requerido'
  },
  minLength: {
    value: 5,
    message: 'El campo título debe tener al menos 5 caracteres'
  },
  maxLength: {
    value: 100,
    message: 'El campo título debe tener máximo 100 caracteres'
  }
}

export const ingredientsValidation = {
  minLength: {
    value: 5,
    message: 'El campo ingredientes debe tener al menos 5 caracteres'
  },
  maxLength: {
    value: 255,
    message: 'El campo ingredientes debe tener máximo 255 caracteres'
  }
}

export const descValidation = {
  required: {
    value: true,
    message: 'El campo descripción es requerido'
  },
  minLength: {
    value: 10,
    message: 'El campo descripción debe tener al menos 10 caracteres'
  }
}

export const linkValidation = {
  minLength: {
    value: 5,
    message: 'El campo link debe tener al menos 5 caracteres'
  },
  maxLength: {
    value: 200,
    message: 'El campo link debe tener máximo 30 caracteres'
  }
}

export const imageValidation = {
  required: {
    value: true,
    message: 'El campo imagen es requerido'
  }
}
