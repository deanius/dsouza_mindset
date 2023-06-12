interface EnvironmentVariables {
    SPACE_ID: string;
    ACCESS_TOKEN: string;
  }
  
  const env: EnvironmentVariables = {
    SPACE_ID: process.env.SPACE_ID || '',
    ACCESS_TOKEN: process.env.ACCESS_TOKEN || '',
  };
  
  export default env;
  