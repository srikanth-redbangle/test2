import { useController, useFormContext } from 'react-hook-form'
import { Label } from './Label'
import { ErrorLabel } from './ErrorLabel'
import { Caution } from '../icons'

function Input({
  label = null,
  name,
  labelClassName = '',
  inputClassname = '',
  hideLabel = false,
  required = false,
  borderedInput = false,
  placeholder,
  forcedError = false,
  ...props
}) {
  const { control } = useFormContext()
  const { fieldState, field } = useController({ name, control })

  return (
    <label
      htmlFor={name}
      className={`block w-full ${
        borderedInput ? 'relative' : ''
      } ${labelClassName}`}
    >
      {!borderedInput && !hideLabel && (
        <Label required={required}>{label ?? name}</Label>
      )}
      <input
        className={
          borderedInput
            ? `w-full pr-7 text-base text-rb-black placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none ${inputClassname}`
            : `w-full p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg ${inputClassname}`
        }
        placeholder={`${placeholder ?? ''}${
          borderedInput && required ? '*' : ''
        }`}
        {...props}
        {...field}
      />
      {fieldState?.error && (
        <>
          <ErrorLabel className={borderedInput ? 'text-xs' : ''}>
            {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
          </ErrorLabel>
          {borderedInput && <Caution className="absolute top-0 right-0" />}
        </>
      )}
      {forcedError && <ErrorLabel></ErrorLabel>}
    </label>
  )
}

export { Input }
