import React, { useCallback, useMemo } from 'react'

import * as yup from 'yup'

const useYupValidationResolver = (validationSchema: yup.ObjectSchema) =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: yup.ValidationError[], currentError: yup.ValidationError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        }
      }
    },
    [validationSchema],
  )

export default useYupValidationResolver
