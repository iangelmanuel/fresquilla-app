export const problemValidation = {
  required: {
    value: true,
    message: 'El campo problema es requerido'
  }
}

export const nameValidation = {
  required: {
    value: true,
    message: 'El campo nombre es requerido'
  },
  minLength: {
    value: 3,
    message: 'El campo nombre debe tener al menos 3 caracteres'
  },
  maxLength: {
    value: 20,
    message: 'El campo nombre debe tener máximo 20 caracteres'
  }
}

export const emailValidation = {
  required: {
    value: true,
    message: 'El campo correo es requerido'
  },
  minLength: {
    value: 5,
    message: 'El campo correo debe tener al menos 5 caracteres'
  },
  maxLength: {
    value: 100,
    message: 'El campo correo debe tener máximo 100 caracteres'
  },
  pattern: {
    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    message: 'El campo correo no es válido'
  }
}

export const phoneValidation = {
  required: {
    value: true,
    message: 'El campo telefono es requerido'
  },
  minLength: {
    value: 10,
    message: 'El campo telefono debe tener al menos 10 caracteres'
  },
  maxLength: {
    value: 13,
    message: 'El campo telefono debe tener máximo 13 caracteres'
  }
}

export const messageValidation = {
  required: {
    value: true,
    message: 'El campo mensaje es requerido'
  },
  minLength: {
    value: 10,
    message: 'El campo mensaje debe tener al menos 10 caracteres'
  },
  maxLength: {
    value: 255,
    message: 'El campo mensaje debe tener máximo 255 caracteres'
  }
}
