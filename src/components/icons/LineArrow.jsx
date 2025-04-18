export const LineArrow = ({
  left = false,
  hover = false,
  className = '',
  ...props
}) => {
  return (
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${left ? 'rotate-180' : ''} ${
        hover ? 'group-hover/button:translate-x-1 transition-all' : ''
      } ${className} w-full`}
      {...props}
    >
      <path
        d="M19.0202 10.7075C19.4107 10.317 19.4107 9.68381 19.0202 9.29328L12.6565 2.92911C12.266 2.53857 11.6328 2.53855 11.2423 2.92906C10.8517 3.31957 10.8517 3.95274 11.2422 4.34327L16.8989 10.0003L11.2419 15.657C10.8513 16.0475 10.8513 16.6807 11.2418 17.0712C11.6323 17.4617 12.2655 17.4618 12.656 17.0712L19.0202 10.7075ZM-3.3491e-05 10.9998L18.3131 11.0004L18.3131 9.00036L3.29324e-05 8.99976L-3.3491e-05 10.9998Z"
        fill="currentColor"
      />
    </svg>
  )
}
