
    export const rules = {
      req: v => !!v || 'Este campo es obligatorio',
      reqNum: v => !!v || v === 0 || 'Este campo es obligatorio',
      email: v => !v || (/.+@.+\..+/.test(v) && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v)) || 'Agregar un correo válido',
      cardLenght: v => /^[\d-]{13,16}$/.test(v) || 'La tarjeta debe tener mínimo 13 dígitos y máximo 16 dígitos',
      cvvLenght: v => /^[\d-]{3,4}$/.test(v) || 'El cvv debe tener 3 o 4 dígitos',
      expMonthLenght: v => /^[\d-]{1,2}$/.test(v) || 'El mes debe tener 1 o 2 dígitos',
      expYearLenght: v => /^[\d-]{4}$/.test(v) || 'El año debe tener 4 dígitos',
      justNumbers: v => !v || /^\d{1,8}$/.test(v) || 'Agregue sólo números',
      lessThan100: v => !v || parseInt(v) <= 100 || 'El campo no puede ser mas de 100',

    }

  