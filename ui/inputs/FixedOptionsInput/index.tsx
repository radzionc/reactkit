import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { InputProps } from '../../props'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import { useKey } from 'react-use'
import { useBoolean } from '../../hooks/useBoolean'
import { getSuggestions } from './getSuggestions'
import { NoMatchesMessage } from './NoMatchesMessage'
import { FixedOptionsInputItem } from './OptionItem'
import { FixedOptionsInputOptionsContainer } from './OptionsContainer'
import { FixedOptionsInputIdentifierWrapper } from './IdentifierWrapper'
import { Text } from '../../text'
import { preventDefault } from '../../utils/preventDefault'
import { RelativeRow } from '../../layout/RelativeRow'
import { InputContainer } from '../InputContainer'
import { FixedOptionsInputTextInput } from './TextInput'
import { useFloatingOptions } from './useFloatingOptions'
import { FixedOptionsInputButtons } from './Buttons'
import { useHasFocusWithin } from '../../hooks/useHasFocusWithin'

interface FixedOptionsInputProps<T> extends InputProps<T | null> {
  placeholder?: string
  label?: ReactNode

  options: T[]
  getOptionKey: (option: T) => string
  renderOption: (option: T) => ReactNode
  getOptionSearchStrings: (option: T) => string[]
  getOptionName: (option: T) => string
  renderOptionIdentifier: (option: T) => ReactNode
  optionIdentifierPlaceholder: ReactNode
}

export function FixedOptionsInput<T>({
  value,
  label,
  onChange,
  placeholder,
  options,
  renderOption,
  getOptionSearchStrings,
  getOptionName,
  renderOptionIdentifier,
  optionIdentifierPlaceholder,
  getOptionKey,
}: FixedOptionsInputProps<T>) {
  const inputElement = useRef<HTMLInputElement>(null)

  const [
    areOptionsVisible,
    { set: showOptions, unset: hideOptions, toggle: toggleOptionsHiding },
  ] = useBoolean(false)

  const [textInputValue, setTextInputValue] = useState(() =>
    value ? getOptionName(value) : '',
  )

  const optionsToDisplay = useMemo(() => {
    if (value) {
      return options
    }

    return getSuggestions({
      inputValue: textInputValue,
      options,
      getOptionSearchStrings,
    })
  }, [getOptionSearchStrings, options, textInputValue, value])

  const {
    referenceRef,
    activeIndex,
    setActiveIndex,
    getReferenceProps,
    setReferenceRef,
    getFloatingProps,
    setFloatingRef,
    floatingStyles,
    getItemProps,
    optionsRef,
  } = useFloatingOptions()

  const labelHasFocusWithin = useHasFocusWithin(referenceRef)
  useEffectOnDependencyChange(() => {
    if (labelHasFocusWithin) {
      showOptions()
    } else {
      hideOptions()
    }
  }, [labelHasFocusWithin])

  useEffectOnDependencyChange(() => {
    if (!value) return

    const valueName = getOptionName(value)
    if (textInputValue === valueName) return

    setTextInputValue(valueName)
  }, [value])

  const onTextInputChange = useCallback(
    (newValue: string) => {
      showOptions()

      if (value && newValue !== getOptionName(value)) {
        onChange(null)
      }

      setTextInputValue(newValue)
    },
    [getOptionName, onChange, showOptions, value],
  )

  useEffectOnDependencyChange(() => {
    if (!areOptionsVisible || optionsToDisplay.length === 0) return

    setActiveIndex(0)
  }, [textInputValue])

  useKey('Escape', hideOptions)

  return (
    <InputContainer
      onKeyDown={(event) => {
        if (event.key === 'Enter' && activeIndex != null) {
          event.preventDefault()
          onChange(optionsToDisplay[activeIndex])
          setActiveIndex(null)
          hideOptions()
        }
      }}
    >
      {label && <Text as="div">{label}</Text>}
      <RelativeRow
        {...getReferenceProps({
          ref: setReferenceRef,
        })}
      >
        <FixedOptionsInputIdentifierWrapper>
          {value ? renderOptionIdentifier(value) : optionIdentifierPlaceholder}
        </FixedOptionsInputIdentifierWrapper>
        <FixedOptionsInputTextInput
          ref={inputElement}
          value={textInputValue}
          onChange={(event) => onTextInputChange(event.currentTarget.value)}
          placeholder={placeholder}
          aria-autocomplete="list"
        />
        {areOptionsVisible && (
          <FixedOptionsInputOptionsContainer
            {...getFloatingProps({
              ref: setFloatingRef,
              style: floatingStyles,
            })}
          >
            {optionsToDisplay.length > 0 ? (
              optionsToDisplay.map((option, index) => (
                <FixedOptionsInputItem
                  {...getItemProps({
                    ref: (element) => {
                      optionsRef.current[index] = element
                    },
                    key: getOptionKey(option),
                    onClick: preventDefault(() => {
                      onChange(option)
                      inputElement.current?.focus()
                      hideOptions()
                    }),
                  })}
                  active={index === activeIndex}
                >
                  {renderOption(option)}
                </FixedOptionsInputItem>
              ))
            ) : (
              <NoMatchesMessage />
            )}
          </FixedOptionsInputOptionsContainer>
        )}
        <FixedOptionsInputButtons
          onClear={
            textInputValue
              ? () => {
                  onTextInputChange('')
                  inputElement.current?.focus()
                }
              : undefined
          }
          areOptionsVisible={areOptionsVisible}
          toggleOptionsVisibility={() => {
            toggleOptionsHiding()
            inputElement.current?.focus()
          }}
        />
      </RelativeRow>
    </InputContainer>
  )
}
