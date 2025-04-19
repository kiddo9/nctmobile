export const handleError = (err: any) => {
  let errors: Record<string, string> = {};
  
  // jwt expired
  if (err.message === 'jwt expired') {
    errors.jwt = err.message;
    return errors;
  }
  
  // Unique errors
  if (err.code === 11000){
    errors.email = 'Email already exists!';
    return errors;
  }
  
  // incorrect password
  if (err.message === 'Incorrect password!'){
    errors.password = err.message;
    return errors;
  }
  
  // email doesn't exist
  if (err.message === "The email doesn't exist!"){
    errors.email = err.message;
    return errors;
  }
  
  if (err.errors){
    Object.values(err.errors).forEach((e: any) => {
      errors[e.properties.path] = e.properties.message;
    })
  }
  
  return errors;
}