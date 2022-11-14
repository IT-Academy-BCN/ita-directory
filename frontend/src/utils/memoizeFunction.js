// import useUser from '../hooks/useUserHook'

// let cachedResult

// function user() {
//   if (cachedResult) {
//     return cachedResult
//   } // no cached result available. calculate it, and store it.
//   cachedResult = useUser()
// }

// export default function memoUser() {
//   const element = user()
//   console.log('element', element)

//   return element
// }

function memoizeUser(fn) {
  let user

  return function memoUser() {
    if (user) {
      return user
    }
    const result = fn()
    user = result

    return result
  }
}
export default memoizeUser
