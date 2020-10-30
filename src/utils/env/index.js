const env = process.env;

console.log(env);

/**
 * 环境变量
 */
export const ENV = env;
/**
 * 是否是开发环境
 */
export const isDev = () => env.NODE_ENV === "development";
